import React from 'react';

import PropTypes from 'prop-types';

import { trackPage } from './utils';

const withAnalyticsCreator = (options = {})  => Component =>
  class WithAnalytics extends React.PureComponent {
    static propTypes = {
      location: PropTypes.shape({
        url: PropTypes.string.isRequired
      }).isRequired
    };
    
    baseRoute = options.basename || '';
    
    componentDidMount() {
      const page = this.props.location.url;
      trackPage(`${this.baseRoute}${page}`);
    }

    componentWillReceiveProps(nextProps) {
      const currentPage = this.props.location.url;
      const nextPage = nextProps.location.url;
      if (currentPage !== nextPage) { 
        trackPage(`${this.baseRoute}${nextPage}`);
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  };

  export default withAnalyticsCreator;
