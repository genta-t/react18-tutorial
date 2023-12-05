import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import BasicPage from './components/BasicPage';
import ApplicationPage from './components/ApplicationPage';
import CustomHooksPage1 from './components/CustomHooks1';
import CustomHooksPage2 from './components/CustomHooks2';
import PageLinks from './components/items/PageLinks';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/basic" element={<BasicPage />} />
          <Route path="/application" element={<ApplicationPage />} />
          <Route path="/custom-hooks-1" element={<CustomHooksPage1 />} />
          <Route path="/custom-hooks-2" element={<CustomHooksPage2 />} />
          <Route path="/" element={
            <>
              <PageLinks link={"/"}/>
              <h2>ホーム</h2>
            </>
          } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
