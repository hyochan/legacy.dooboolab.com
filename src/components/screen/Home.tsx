import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Route, Link, Redirect } from 'react-router-dom';
import CooniBtn from '@shared/CooniBtn';

const styles = require('./Home.css');

export class Home extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: true,
    };
  }

  public render() {
    const { getString } = this.props.store.locale;
    if (!this.state.loggedIn) {
      return (<Redirect to='/login'/>);
    }
    return (
      <div className={styles.container}>
        <CooniBtn
          onClick={() => this.props.history.push('/none_tab')}
          btnTxt={getString('GOTO_NOTFOUND')}
        />
        <CooniBtn
          onClick={this.goToLogin}
          btnTxt={getString('LOGOUT')}
        />
      </div>
    );
  }

  private goToLogin = () => {
    const location: object = {
      pathname: '/login',
      state: {},
    };
    console.log(this.props);
    this.props.history.replace(location);
  }
}

const defaultHome = inject('store')(observer(Home));
export default defaultHome;
