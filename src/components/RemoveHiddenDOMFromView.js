import React from 'react'
import PropTypes from 'prop-types'

export class FreeUpDOMWhenHidden extends React.Component {
    static propTypes = {
      className: PropTypes.string, // aditionaly className that will used to style
      wrapper: PropTypes.node // React children
    };

    static defaultProps = {
      className: '',
      wrapper: 'div',
      options: {}
    };

    constructor(prop) {
      super(prop)
        this.freeupRef = React.createRef()

        this.state = {
        isVisible: true,
        style: {}
      }
    }

    componentDidMount() {
      console.log('FreeUpDOMWhenHidden')
        if (!this.freeupRef.current) return
        let options = Object.assign({}, this.props.options)
        this.observer = new IntersectionObserver(
        this.interSectionCallback,
        options
      )
        this.observer.observe(this.freeupRef.current)

        this.setState({
        style: {
          minHeight: `${this.freeupRef.current.offsetHeight}px`
        }
      })
    }

    componentDidCatch(err) {
      console.error('unhandled error happend in FreeUP', err)
    }

    interSectionCallback = (entries, observer) => {
      entries.forEach(entry => {
        console.group('interSectionCallback')
            console.log('Intersection ratio', entry.intersectionRatio * 100)
            console.log('Target Element', entry.target)
            if (entry.target.children && entry.target.children[1]) {
          console.log(
            'Target Element Child',
            entry.target.children[1].innerHTML
          )
            }

        console.groupEnd('interSectionCallback')

            console.log(
          `entry.intersectionRatio → ${entry.intersectionRatio * 100}`
        )
            if (entry.intersectionRatio * 100 > 0) {
          this.mountChildren()
            } else {
          this.unMountChildren()
            }
      })
    };

    // Add the DOM when it is about to get visible to user
    mountChildren() {
      if (this.state.isVisible) return
        this.setState({
        isVisible: true
      })
    }

    // Remove the DOM when it is not visible to user
    unMountChildren() {
      if (!this.state.isVisible) return
        this.setState({
        isVisible: false
      })
    }

    render() {
      const style = {
        ...this.state.style
      }

        const { wrapper: Component, className, children } = this.props
        return (
        <Component style={style} ref={this.freeupRef} className={className}>
          {this.state.isVisible && children}
        </Component>
      )
    }
}

export default FreeUpDOMWhenHidden
