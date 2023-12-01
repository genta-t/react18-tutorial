import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const containerData = {
  name: "名前です。",
  age: 28,
  text: "React-Hooks勉強中"
};

//useContextはログイン情報を共有したい時にどのコンポーネントでも使えるようにするためにindex.tsxにcreateContext書く
export const ContainerDataContext = createContext(containerData);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // contextの書き方
  <ContainerDataContext.Provider value={containerData}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContainerDataContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
