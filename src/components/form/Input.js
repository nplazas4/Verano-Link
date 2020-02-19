import React, { Component } from 'react';

class Input extends Component{
    render() {
        return(
            <input 
                id={ this.props.id }
                type={ this.props.type } 
                className={ this.props.class }
                placeholder={ this.props.placeholder }
            >
            </input>
        );
    }
}

export default Input;