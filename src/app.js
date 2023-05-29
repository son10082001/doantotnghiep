import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SwiperCore, { Autoplay } from 'swiper';
import { Navigation, Thumbs } from 'swiper/swiper.esm';
import 'swiper/swiper.scss';
import HomePage from './page/home';
import LoginPage from './page/login';
import './style/index.scss';

SwiperCore.use([Navigation, Thumbs, Autoplay]);

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/login' component={LoginPage} />
      </Switch>
    </Router>
  );
};

export default App;
