import React from 'react';
import {Card, Button, Table} from 'semantic-ui-react'

export default class UserDashboard extends React.Component {
    state = {
      loading: false,
      token: ''
    };

    render() {
      return (
        <Card raised style={styles.card}> 
        <div>user@email.com</div>
        <div>user-id</div>
        <a href="/#">Google sheet</a>
        <button>Logout</button>
        <Card.Content>
            
              <Button>Fetch</Button>
              <Table celled>
                  <Table.Header>
                      <Table.Row>
                          <Table.HeaderCell>Header</Table.HeaderCell>
                      </Table.Row>
                  </Table.Header>
                  <Table.Body>
                      <Table.Row>
                          <Table.Cell>Cell</Table.Cell>
                      </Table.Row>
                  </Table.Body>
              </Table>
              <Button>Distribute</Button>
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
  