// == Import
import './styles.scss';

import Map from '../Map';
import Header from '../Header';
import Main from '../Main';

// == Composant
function App() {
  return (
    <div className="app">
      <Header />
      <div>
        <div className="z-index2">
          <Main />
        </div>
        <div className="z-index1">
          <Map />
        </div>
      </div>
    </div>
  );
}

// == Export
export default App;
