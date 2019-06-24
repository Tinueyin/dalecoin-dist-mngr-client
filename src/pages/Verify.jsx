import React from 'react';
import { Loader, Dimmer, Card } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import {verifyToken} from '../utils/api'

export default class Verify extends React.Component {
  state = {
    loading: false,
    token: ''
  };
  componentDidMount() {
    const { token } = this.props.match.params;
    this.setState({ loading: true, token });
    verifyToken(token).then(res => {
      console.log(res)
      this.setState({ loading: false, token })
    })
    // timeout(2).then(() => this.setState({ loading: false }));
  }
  render() {
    const { loading, token } = this.state;
    if (loading) {
      return (
        <Dimmer inverted style={styles.dimmer} active>
          <Loader content="Verifying" size="massive" />
        </Dimmer>
      );
    }

    if(token){
      return(<Redirect to='/user' />)
    }

    return (
      <Card raised style={styles.card}>
        <div>
          Error: <span>Cannot verify User</span>
        </div>
        <Link to="/">
          <button style={styles.button}>Back to home</button>
        </Link>
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
    margin: '15% auto',
    minWidth: '310px',
    width: '30%',
    heigth: '5rem'
  },
  button: {
    color: '#ffffff',
    backgroundColor: '#A6A6A8'
  }
};

const timeout = seconds =>
  new Promise((res, rej) => {
    setTimeout(() => res(), 1000 * seconds);
  });
