import React, {Component} from 'react';

class app extends Component {
    constructor(props) {
        super (props)

        this.state = {count:0, over : false}
    }
    
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }

    componentDidUpdate(props, state) {
        if(this.state.count > 10 && this.state.count != state.count && !this.state.over){
            this.state.over = true
        }
    }

    render() {
    let inst = 'VIT'
    let {count} = this.state;
    return (
        <div>
          <h1>It's been {count} days since I've been back to {inst}</h1>
            {this.state.over?
                <h3>Beat the high score here!</h3>
                :null
            }
            <span>
            <button onClick = {() => this.handleClick()}> Click here to increment count </button>
            </span>
        </div>
    )
  }
}

export default app;
