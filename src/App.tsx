import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasicPage from './components/BasicPage';
import ApplicationPage from './components/ApplicationPage';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/basic" element={<BasicPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/" element={
            <>
              <Link to="/basic">基本ページへ</Link>
              <Link to="/application">応用ページへ</Link>
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
