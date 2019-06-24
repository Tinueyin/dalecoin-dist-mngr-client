import React from 'react';
import {Card, Form} from 'semantic-ui-react'

export default class UserDashboard extends React.Component {
    state = {
      loading: false,
      token: ''
    };
    // componentDidMount() {
    //   const { token } = this.props.match.params;
    //   this.setState({ loading: true, token });
    //   timeout(2).then(() => this.setState({ loading: false }));
    // }
    render() {
      return (
        <Card raised style={styles.card}> 
        <div>user@email.com</div>
        <div>user-id</div>
        <a href="/#">Google sheet</a>
        <button>Logout</button>
        <Card.Content>
        <Form>
              <Form.Group>
              <Form.Input placeholder="address"/>
              <Form.Input placeholder="Current balance" />
              <Form.Input placeholder="Expected balance" />
              </Form.Group>
              <Form.Button>Submit</Form.Button>
          </Form>
        </Card.Content>
          
        </Card>
      );
    }
  }
  
  const styles = {
    dimmer: {
      opacity: '1',
      backgroundColor: 'rgba(0,0,0,0)'
    },
    card: {
      padding: '2rem',
      margin: '5% auto',
      minWidth: '310px',
      width: '90%',
      height: '40rem'
    },
    button: {
      color: '#ffffff',
      backgroundColor: '#A6A6A8'
    }
  };
  