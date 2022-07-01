import '../styles/globals.scss';
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';
import 'react-notifications/lib/notifications.css';
import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
