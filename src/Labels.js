import React from 'react';
import './Places.css';

export default class Label extends React.Component {
    render() {
        return (
            <h6>{this.props.text}</h6>
        )
    }
}