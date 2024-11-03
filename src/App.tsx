import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Wallets from './pages/Wallet';

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wallets />} />
          {/* <Route index element={<Wallets />} /> */}
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
