import React, { Component } from 'react';

var arrayCheck = [];
class FormSubmit extends Component {

    constructor(props) {
        super(props);
        this.state = {
        	value1:"value1",
        	value2:"value2",
            arrayCheck:[]
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        if(e.target.checked) {
            arrayCheck.push(e.target.value)
        } else {
            arrayCheck.splice(arrayCheck.indexOf(e.target.value), 1);
        }
    }

    handleSubmit(e) {
        localStorage.setItem('arrayCheck', arrayCheck);
        this.props.history.push(`/success`)
    }

    render() {
        return (
			<div>
				<div>
					<label>value1: </label>
					<input type="checkbox" name="value1" value={this.state.value1} onChange={this.handleChange} />
				</div><br />
				<div>
					<label>value2: </label>
					<input type="checkbox" name="value2" value={this.state.value2} onChange={this.handleChange} />
				</div><br />
				<button onClick={this.handleSubmit} >Submit</button>
			</div> 
        );
    }
}

export default FormSubmit;
