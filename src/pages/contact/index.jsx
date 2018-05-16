import React from "react";
import ContactForm from "../../components/Form";
import "./styles.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="ui inverted vertical segment">
        <ContactForm />
      </div>
    );
  }
}

export default Contact;