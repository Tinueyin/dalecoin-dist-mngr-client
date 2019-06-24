import React from 'react';
import { Card, Form } from 'semantic-ui-react';
import { submitEmail } from '../utils/api';
import { toast } from 'react-toastify';

export default class LandingPage extends React.Component {
  state = {
    error: '',
    email: ''
  };
  handleSubmit = async event => {
    event.preventDefault();
    console.log("jjjjjj")
    try {
      const {email} = this.state
      const response = await submitEmail(email);
      console.log(response);
    } catch (error) {
      toast('An error occurred');
    }
  };
  handleChange = async event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { email, error } = this.state;
    return (
      <Card raised style={styles.card}>
        <div style={styles.error}>{error}</div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label style={styles.label} htmlFor="email">Email</label>
            <input
              value={email}
              name="email"
              onChange={this.handleChange}
              placeholder="Enter your email"
            />
          </Form.Field>
          <Form.Button style={styles.button} type="submit">Submit</Form.Button>
        </Form>
      </Card>
    );
  }
}

const styles = {
  card: {
    padding: '2rem',
  margin: '15% auto',
  minWidth: '310px',
  width: '30%',
  heigth: "5rem"
  },
  error: {
    color: '#947667'
  },
  label: {
    color: '#272635'
  },
  button: {
    color: '#ffffff',
    backgroundColor: '#21D19F'
  }
};
