import React, { Component } from 'react';
import { Link } from "react-router-dom";


class App extends Component {
  render() {
    
    return (
      <div className="App">
        <h1>Integration Toolkit</h1>
        <Link to="/omnia">Next page</Link>
        <br /><br />
        <button onClick={()=> this.props.history.push('/omnia') }>Next page</button>
      </div>
    );
  }
}

export default App;
