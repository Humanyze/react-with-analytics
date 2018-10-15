import React from 'react';

import PropTypes from 'prop-types';

import { trackPage } from './utils';

const withAnalyticsCreator = (options = {})  => Component =>
  class WithAnalytics extends React.PureComponent {
    static propTypes = {
      location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
      }).isRequired
    };
    
    baseRoute = options.basename || '';
    
    componentDidMount() {
      const page = this.props.location.pathname;
      trackPage(`${this.baseRoute}${page}`);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.pathname;
      const nextPage = nextProps.location.pathname;
      if (currentPage !== nextPage) { 
        trackPage(`${this.baseRoute}${nextPage}`);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

  export default withAnalyticsCreator;
