import React, { Component } from 'react';

class i_tag extends Component{
    render(){
        return(
            <i
                className={ this.props.class }
                style={ this.props.style }
            >    
            </i>
        );
    }
}

export default i_tag;