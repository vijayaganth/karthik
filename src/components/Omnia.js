import React, { Component } from 'react';
import { fetchPost } from './../actions/fetch_posts';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Omnia extends Component {
   
    render() {
        const id = 111;
        const name = 'name';
        return (
            <div>
                <div>Omnia</div>
                <button onClick={()=> this.props.history.push(`/sample?id=${id},name=${name}`) }>Next page</button>
            </div>
        )
    }
}


export default Omnia;
