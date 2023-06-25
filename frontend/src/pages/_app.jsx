import PropTypes from 'prop-types';

// eslint-disable-next-line import/extensions
import '@/styles/globals.scss';

import { manrope, raleway } from '@/assets/fonts/fonts';

function App({ Component, pageProps }) {
  return (
    <div className={`${manrope.variable} ${raleway.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  pageProps: PropTypes.object.isRequired,
};

export default App;
