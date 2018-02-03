import React, { Component } from 'react';
import CooniBtn from '@shared/CooniBtn';

class NotFound extends Component<any> {
  public componentDidMount() {
    if (this.props.match.path === '/') {
      const location: object = {
        pathname: '/tab/home',
        state: {},
      };
      this.props.history.replace(location);
    }
  }

  public render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.title}>NotFound</div>
        <CooniBtn
          onClick={() => this.props.history.goBack()}
          btnTxt='back to tab page'
        />
      </div>
    );
  }
}

const styles: any = {
  wrapper: {
    display: 'grid',
    width: '100%',
    gridTemplateColumn: '1fr',
    justifyItems: 'center',
  },
  title: {
    fontSize: '18px',
    margin: '20px 0',
  },
};

export default NotFound;
