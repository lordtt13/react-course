import React, {Component} from 'react';

class app extends Component {
    constructor(props) {
        super (props)

        this.state = {count:0}
    }
    
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
    
  render() {
    let inst = 'VIT'
    let {count} = this.state;
    return (
        <div>
          <h1>It's been {count} days since I've been back to {inst}</h1>
            <span>
            <button onClick = {() => this.handleClick()}> Click here to increment count </button>
            </span>
        </div>
    )
  }
}

export default app;
