import React from 'react';
import Form from './Form';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      telephone: '',
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(key, value) {
    this.setState(() => ({
      [key]: value,
    }));
  }

  render() {
    console.log(this.props);
    return (
      <div className="tabContentDiv">
        <div className="content">
          <Form
            telephone={this.state.telephone}
            email={this.state.email}
            handleChange={this.handleChange}
          />
        </div>
      </div>
    );
  }
}

export default Contact;
