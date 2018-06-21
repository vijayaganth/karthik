import React, { Component } from 'react';

class Success extends Component {
    render() {
        const arrayCheck = localStorage.getItem('arrayCheck').split(',');
    	const successList = arrayCheck.map((el, i) => (
                    <div key={i}>
                        <div>{el}</div>
                    </div>
                ))
        return (
            <div>
            	<h1>Success</h1>
            	{successList}
                <button onClick={()=> this.props.history.push('/') }>first page</button>
            </div>
        );
    }
}

export default Success;
