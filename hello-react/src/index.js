import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; // 만든 컴포넌트를 불러올 때 
import * as serviceWorker from './serviceWorker';

ReactDOM.render( //브라우저 상에 우리의 리액트 컴포넌트를 보여주기 위해 사용하는 함수
  <React.StrictMode>
    <App />
  </React.StrictMode>,// 렌더링 할 결과물
  document.getElementById('root') // 컴포넌트를 어떤 DOM에 그릴지 정해주는 파라미터 - <div id ="root"></div>를 찾아서 렌더링
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
