import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicPage from './components/BasicPage';
import ApplicationPage from './components/ApplicationPage';
import CustomHooksPage1 from './components/CustomHooks1';
import CustomHooksPage2 from './components/CustomHooks2';
import PageLinks from './components/items/PageLinks';
import ReactHookForm1Page from './components/ReactHookForm1';
import ReactHookForm2Page from './components/ReactHookForm2';
import ReactHookForm3Page from './components/ReactHookForm3';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {routes.map((r, i) => {
            return <Route key={i} path={r.path} element={r.element} />;
          })}
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

const routes = [
  {
    path: "/basic",
    element: <BasicPage />
  },
  {
    path: "/application", 
    element: <ApplicationPage />
  },
  {
    path: "/custom-hooks-1", 
    element: <CustomHooksPage1 />
  },
  {
    path: "/custom-hooks-2", 
    element: <CustomHooksPage2 />
  },
  {
    path: "/react-hook-form-1", 
    element: <ReactHookForm1Page />
  },
  {
    path: "/react-hook-form-2", 
    element: <ReactHookForm2Page />
  },
  {
    path: "/react-hook-form-3", 
    element: <ReactHookForm3Page />
  },
]
