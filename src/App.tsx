import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BasicPage from './components/BasicPage';
import ApplicationPage from './components/ApplicationPage';
import CustomHooksPage1 from './components/CustomHooks1';
import CustomHooksPage2 from './components/CustomHooks2';
import PageLinks from './components/items/PageLinks';
import ReactHookForm1Page from './components/ReactHookForm1';
import ReactHookForm2Page from './components/ReactHookForm2';
import ReactHookForm3Page, { FormDataProvider } from './components/ReactHookForm3';
import ReactHookForm4Page from './components/ReactHookForm4';
import ReactHookForm5Page from './components/ReactHookForm5';
import Part1Page from './components/spanningPages/Part1Page';
import Part2Page from './components/spanningPages/Part2Page';
import { useState } from 'react';
import Part3Page from './components/spanningPages/Part3Page';
import ConfirmPage from './components/spanningPages/ConfirmPage';
import { TypeReactHookForm3 } from './components/types';
import TestHooksPage from './components/TestHooksPage';
import UseQueryPage from './components/UseQueryPage';
import JotaiAppPage from './components/JotaiAppPage';

const App = () => {
  const [ formData, setFormData ] = useState<TypeReactHookForm3>({
    name: '',
    email: '',
    prefectures: '',
    attachment: '',
    age: null
  });

  const updateData = (newData: TypeReactHookForm3) => {
    setFormData({ ...formData, ...newData});
  }

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
          {spanningPages.map((r, i) => {
            return (
              <Route key={i} path={r.path} element={
                <>
                  <ReactHookForm3Page />
                  <FormDataProvider value={{ formData, updateData }}>
                    {r.element}
                  </FormDataProvider>
                </>
              } />
              );
            })}
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
    path: "/test-hooks", 
    element: <TestHooksPage />
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
    element: <ReactHookForm3Page defaultLink="/react-hook-form-3/1"/>
  },
  {
    path: "/react-hook-form-4", 
    element: <ReactHookForm4Page />
  },
  {
    path: "/react-hook-form-5", 
    element: <ReactHookForm5Page />
  },
  {
    path: "/use-query", 
    element: <UseQueryPage />
  },
  {
    path: "/jotai-app", 
    element: <JotaiAppPage />
  },
]

const spanningPages = [
  {
    path: "/react-hook-form-3/1", 
    element: <Part1Page />
  },
  {
    path: "/react-hook-form-3/2", 
    element: <Part2Page />
  },
  {
    path: "/react-hook-form-3/3", 
    element: <Part3Page />
  },
  {
    path: "/react-hook-form-3/confirm", 
    element: <ConfirmPage />
  },
]
