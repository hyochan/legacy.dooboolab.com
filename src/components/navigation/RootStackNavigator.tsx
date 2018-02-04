import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import Home from '@screen/Home';
import NotFound from '@screen/NotFound';

@inject('store')
class RootStackNavigator extends Component<any, any> {
  public componentDidMount() {
    console.log('location');
    console.log(this.props);
    console.log(`userLang: ${this.props.store.locale.$LANG}`);

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  public updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    if (newWidth <= 768) {
      this.props.store.$isDesktop = false;
    } else {
      this.props.store.$isDesktop = true;
    }

    if (!this.props.store.$isDesktop && this.props.store.$isOpen) {
      this.props.store.$isOpen = false;
    } else if (this.props.store.$isDesktop && !this.props.store.isOpen) {
      this.props.store.$isOpen = true;
    }
  }

  public render() {
    return (
      <BrowserRouter>
        <div style={{ textAlign: 'center' }}>
          <Switch>
            <Route path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default RootStackNavigator;
