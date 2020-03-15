/* eslint-disable */
// Based on https://alexkondov.com/react-and-the-intersection-observer/
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class RenderIfVisible extends React.Component {
    static propTypes = {
        wrapper: PropTypes.node // React children
    };

    static defaultProps = {
        className: '',
        wrapper: 'div',
        options: {}
    };

    ref = React.createRef();
    state = { isVisible: false };

    componentDidMount() {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    this.setState({ isVisible: true });
                } else {
                    this.setState({ isVisible: false });
                }
            },
            {
                ...this.props.options
            }
        );

        if (this.ref.current) {
            observer.observe(this.ref.current);
        }
    }

    render() {
        const { wrapper: Component, children } = this.props;
        // TODO: Calculate row height dynamically
        // TODO: Remove non visible item from dom
        return (
            <Component ref={this.ref}>
                {this.state.isVisible ? (
                    children
                ) : (
                    <Component
                        style={{ visibility: 'hidden', height: '29px' }}
                    ></Component>
                )}
            </Component>
        );
    }
}
export default RenderIfVisible;
