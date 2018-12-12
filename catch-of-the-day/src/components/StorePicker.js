import React from "react";
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  
  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    console.log("going to store");

    this.props.history.push(`/store/${this.myInput.value.value}`)
  }

  render() {
    return (
        <form className="store-selector" onSubmit={this.goToStore}>
            <h2>Please enter a store</h2>
            <input type="text" ref={this.myInput} required placeholder="store name" defaultValue={getFunName()} />
            <button type="submit">Visit</button>
        </form>
    )
  }
}


export default StorePicker;
