import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

import {
  icCloseW, icCloseWSet,
  icHamburger, icHamburgerSet,
} from '@utils/Icons';

import Home from '@screen/Home';
import Tab1 from '@screen/Tab1';
import Tab2 from '@screen/Tab2';
import Tab3 from '@screen/Tab3';
import Tab4 from '@screen/Tab4';
import NotFound from '@screen/NotFound';

const classes = require('./TabNavigator.css');

@inject('store')
@observer
class TabNavigator extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      isOpen: this.props.store.$isOpen,
    };
  }

  public componentWillUpdate(nextProps) {
    if (this.state.isOpen !== nextProps.store.$isOpen) {
      this.setState({
        isOpen: nextProps.store.$isOpen,
      });
    }
  }

  public render() {
    return (
      <div
        className={classes.wrapper}
        style={
          this.props.store.$isOpen && this.props.store.$isDesktop
            ? { gridTemplateColumns: '256px 1fr' }
            : { gridTemplateColumns: '1fr' }
        }
      >
        <div
          className={classes.sidenav}
          style={
            this.state.isOpen
              ? styles.sideNavVisible
              : styles.sideNavInvisible
          }
        >
          <img
            onClick={this.closeNavbar}
            className={classes.icClose}
            width='18px'
            height='18px'
            src={icCloseW}
            srcSet={icCloseWSet}
          />
          <div
            className={classes.navbar}
          >
            <NavLink
              exact={true}
              to='/tab/home'
              key={0}
              className={classes.link}
              activeClassName={classes.active}
            >Home</NavLink>
            <NavLink
              to='/tab/tab1'
              key={1}
              className={classes.link}
              activeClassName={classes.active}
            >Tab1</NavLink>
            <NavLink
              to='/tab/tab2'
              key={2}
              className={classes.link}
              activeClassName={classes.active}
            >Tab2</NavLink>
            <NavLink
              exact={true}
              to='/tab/tab3'
              key={3}
              className={classes.link}
              activeClassName={classes.active}
            >Tab3</NavLink>
            <NavLink
              exact={true}
              to='/tab/tab4'
              key={4}
              className={classes.link}
              activeClassName={classes.active}
            >Tab4</NavLink>
          </div>
        </div>
        <div
          className={classes.main}
          style={
            this.props.store.$isOpen && this.props.store.$isDesktop
              ? { gridColumnStart: 2 }
              : { gridColumnStart: 1 }
          }
        >
          <div className={classes.title}>
            <img
              onClick={this.toggleNavbar}
              width='24px'
              height='24px'
              src={icHamburger}
              srcSet={icHamburgerSet}
            />
            <h1>Title</h1>
          </div>
          <div className={classes.content}>
            <hr/>
            <div className={classes.tab}>
              <Switch>
                <Route path='/tab/home' component={Home} />
                <Route path='/tab/tab1' component={Tab1} />
                <Route path='/tab/tab2' component={Tab2} />
                <Route path='/tab/tab3' component={Tab3} />
                <Route path='/tab/tab4' component={Tab4} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }

  private closeNavbar = () => {
    this.setState({ isOpen: false });
  }

  private toggleNavbar = () => {
    console.log('toggleNavbar');
    const isOpen = !this.state.isOpen;
    this.props.store.$isOpen = isOpen;
    this.setState({ isOpen });
  }
}

const drawerWidth: number = 256;
const styles = {
  sideNavVisible: {
    opacity: 1,
    width: drawerWidth,
    visibility: 'visible',
  },
  sideNavInvisible: {
    opacity: 0,
    width: 0,
    visibility: 'hidden',
  },
};

export default TabNavigator;
