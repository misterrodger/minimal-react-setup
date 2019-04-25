import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class Form extends React.Component {
  state = { birthday: ""}

  handleSubmit = event => {
    event.preventDefault();
    const data = JSON.stringify(this.state);
    console.log("Submitting test");
    this.setState({birthday: ""});
  };

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
      <fieldset>
      <legend>Find your Birthday Twins</legend>Birthday:
      <input type="date" name="bday" value={this.state.birthday} />
      <input type="submit" name="submit" />
      </fieldset>
      </form>
    )
  }
}

export default Form;
// ReactDOM.render(<Form />, root);
