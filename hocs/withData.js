import { Component, PropTypes } from 'react';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import 'isomorphic-fetch';
import getClientAndStore from '../data/clientAndStore';
import { IS_SERVER } from '../util/website';

export default ComposedComponent => (
  class WithData extends Component {
    static propTypes = {
      url: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
      }).isRequired,
      initialState: PropTypes.object.isRequired,
      headers: PropTypes.object,
    };

    static async getInitialProps(ctx) {
      const headers = ctx.req ? ctx.req.headers : {};
      const { apolloClient, reduxStore } = getClientAndStore({}, headers);

      if (IS_SERVER) {
        await getDataFromTree((
          <ApolloProvider client={apolloClient} store={reduxStore}>
            <ComposedComponent url={{ query: ctx.query, pathname: ctx.pathname }} />
          </ApolloProvider>
        ));
      }

      return {
        initialState: reduxStore.getState(),
        headers,
      };
    }

    constructor(props) {
      super(props);
      const clientAndStore = getClientAndStore(this.props.initialState, this.props.headers);
      this.apolloClient = clientAndStore.apolloClient;
      this.reduxStore = clientAndStore.reduxStore;
    }

    render() {
      return (
        <ApolloProvider client={this.apolloClient} store={this.reduxStore}>
          <ComposedComponent url={this.props.url} />
        </ApolloProvider>
      );
    }
  }
);