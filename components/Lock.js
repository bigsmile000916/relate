import { Component, PropTypes } from 'react';
import uuid from 'uuid';
import Auth0Lock from 'auth0-lock';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../config';
import BASE_URL from '../util/baseUrl';
import { storeSecret, removeSecret } from '../util/authSecret';

const LOCK_CONTAINER_ID = 'lock-container';

export default class Lock extends Component {
  static propTypes = {
    url: PropTypes.object.isRequired,
    auth: PropTypes.shape({
      loggedIn: PropTypes.bool.isRequired,
    }).isRequired,
    locale: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const nextPathname = '/';
    if (this.props.auth.loggedIn) {
      this.props.url.replace(nextPathname);
    } else {
      this.lockState.locale = this.props.locale;
      this.showLock();
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.locale !== this.props.locale) {
      this.lockState.locale = nextProps.locale;
      this.showLock();
    }
  }

  componentWillUnmount() {
    removeSecret();
  }

  lockState = { nextPathname: '/' };

  showLock() {
    const secret = uuid.v4();
    storeSecret(secret);
    const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
      auth: {
        redirectUrl: `${BASE_URL}/auth/callback`,
        responseType: 'token',
        params: {
          state: JSON.stringify({
            secret,
            ...this.lockState,
          }),
        },
      },
      container: LOCK_CONTAINER_ID,
      // other options see https://auth0.com/docs/libraries/lock/v10/customization
    });
    lock.show();
  }

  render() {
    return (
      <span>
        <div id={LOCK_CONTAINER_ID} />
        <style jsx>{`
          #lock-container {
            margin: 2em 0 0;
          }
        `}</style>
        <style jsx global>{`
          .auth0-lock-header {
            display: none;
          }
        `}</style>
      </span>
    );
  }
}
