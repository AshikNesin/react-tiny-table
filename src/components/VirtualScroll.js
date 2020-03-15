/* eslint-disable */
import React from 'react';
const THRESHOLD = 50;
class VirtualScroll extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
            end: THRESHOLD
        };
        this.$topElement = React.createRef();
        this.$bottomElement = React.createRef();
        this.$virtualScrollRef = React.createRef();
    }
    componentDidMount() {
        this.intiateScrollObserver();
    }
    componentDidUpdate(prevProps, prevState) {
        if (
            prevState.end !== this.state.end ||
            prevState.start !== this.state.start
        ) {
            this.intiateScrollObserver();
        }
    }

    intiateScrollObserver = () => {
        console.group(`intiateScrollObserver`);
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // if 1% of the element is in view
        };
        this.observer = new IntersectionObserver(
            this.interSectionCallback,
            options
        );
        if (this.$topElement.current) {
            console.log(`this.$topElement.current`);
            this.observer.observe(this.$topElement.current);
        }
        if (this.$bottomElement.current) {
            console.log(`this.$bottomElement.current`);
            this.observer.observe(this.$bottomElement.current);
        }

        console.groupEnd(`intiateScrollObserver End`);
    };

    componentDidCatch(err) {
        console.error('unhandled error happend in VirtualScroll', err);
    }

    interSectionCallback = (entries, observer) => {};

    updateState = (newStart, newEnd) => {
        const { start, end } = this.state;
        if (start !== newStart || end !== newEnd) {
            this.resetObservation();
            this.setState({
                start: newStart,
                end: newEnd
            });
        }
    };

    resetObservation = () => {
        this.observer.unobserve(this.$bottomElement.current);
        this.observer.unobserve(this.$topElement.current);
        this.$bottomElement = React.createRef();
        this.$topElement = React.createRef();
    };

    getReference = (index, isLastIndex) => {
        if (index === 0) return this.$topElement;
        if (isLastIndex) return this.$bottomElement;
        return null;
    };
    render() {
        const { list, height, renderItem } = this.props;
        const { start, end } = this.state;
        const updatedList = list.slice(start, end);
        const lastIndex = updatedList.length - 1;

        return (
            <tbody style={{ position: 'relative' }}>
                {updatedList.map((item, index) => {
                    const refVal = this.getReference(
                        index,
                        index === lastIndex
                    );

                    const top = height * (index + start) + 'px';
                    const id =
                        index === 0
                            ? 'top'
                            : index === lastIndex
                            ? 'bottom'
                            : '';
                    return renderItem({
                        _row: item,
                        rowIndex: index,
                        id,
                        style: { top },
                        ref: refVal
                    });
                })}
            </tbody>
        );
    }
}

export default VirtualScroll;
