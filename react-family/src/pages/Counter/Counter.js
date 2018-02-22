import React, {Component} from 'react';
import {increment, decrement, reset} from 'actions/counter';

import {connect} from 'react-redux';

class Counter extends Component {
    render() {
        return (
            <div>
                <div>Now Counting is {this.props.counter.count}</div>
                <button
                    onClick={() => {
                    this
                        .props
                        .increment()
                }}>Inc</button>
                <button
                    onClick={() => {
                    this
                        .props
                        .decrement()
                        .log('using dec fun');
                }}>dec</button>
                <button
                    onClick={() => {
                    this
                        .props
                        .reset()
                }}>reset</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {counter: state.counter}
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        },
        reset: () => {
            dispatch(reset())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);