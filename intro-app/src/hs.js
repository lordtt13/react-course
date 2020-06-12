import React, {Component} from 'react'

class HighScore extends Component {

    render(){
        if (this.props.over){
            return(
                <div>
                    <h3>Overflow</h3>
                    <br/>
                    <button onClick = {this.props.onReset}>Click here to reset state!</button>
                </div>
            )
        }else { return null }
    }
}

export default HighScore;
