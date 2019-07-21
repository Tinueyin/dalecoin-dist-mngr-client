import React from 'react';
import { Loader, Dimmer, Card } from 'semantic-ui-react';
import { Link, Redirect } from 'react-router-dom';
import {verifyToken} from '../utils/api'

export default class Verify extends React.Component {
  state = {
    loading: false,
    token: '',
    errorMessage: ''
  };
  componentDidMount() {
    const { token } = this.props.match.params;
    this.setState({ loading: true, token });
    verifyToken(token).then(res => {
      console.log(res)
      if(res.success){
        const {token} = res.data
        localStorage.setItem("token", token)
        this.setState({ loading: false, token })
      }else{
        this.setState({loading: false, token: '', errorMessage: res.message})
      }
    }).catch(err => console.log(err))
  }
  render() {
    const { loading, token, errorMessage } = this.state;
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
          Error: <span>{errorMessage}</span>
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
