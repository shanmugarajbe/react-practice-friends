import React from 'react';
import ReactDOM from 'react-dom';

class Hellouser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Sunface'
    }
    this.handleChange = this.handleChange.bind(this);
  }
 handleChange(e) {
   this.setState({
     name: e.target.value
   });
 }
  render() {
    return (
      <div>
          Hello {this.state.name}! <br/>
          Change Name: <input type='text' value={this.state.name} onChange={this.handleChange} />

      </div>
    )
  }
}

ReactDOM.render(<Hellouser />, document.getElementById('root'));
