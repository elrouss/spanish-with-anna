import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import '@/styles/globals.scss';

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default App;
