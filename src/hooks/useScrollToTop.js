import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';


const ScrollTop = ({ history, children }) => {
  useEffect(() => {
    const unListen = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unListen()
    }
  }, [history]);

  return <>{children}</>;
};

ScrollTop.propTypes = {
  history: PropTypes.objectOf(PropTypes.any),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

ScrollTop.defaultProps = {
  history: {},
  children: ''
};

export default withRouter(ScrollTop);