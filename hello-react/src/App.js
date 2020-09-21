// 컴포넌트에 해당하는 코드

import React, { Component, Fragment } from 'react';

// class App extends Component {
//   render() {
//     const name ='react';
//     return (
//       <div>
//         hello {name}!
//       </div>
//     );
//   }
// }


/* 삼항연산자 
class App extends Component {
  render() {
    return (
      <div>
        {
          1 + 1 === 3
          ? (<div>맞아요</div>)
          : (<div>틀려요</div>)
        }
      </div>
    );
  }
}
*/

/* AND 연산자_결과가 참일 떄만 보여줌
class App extends Component {
  render() {
    return (
      <div>
        {
          1+ 1 === 2 && (<div>맞아요</div>)
        }
      </div>
    );
  }
}
*/

/* JSX 내부에서 복잡한 로직을 작성해양 할 경우 IIFE 사용
class App extends Component {
  render() {
    const value = 1;
    return (
      <div>
        {
          // (function () {
          //   if (value === 1) return (<div>하나</div>)
          //   if (value === 2) return (<div>둘</div>)
          //   if (value === 3) return (<div>셋</div>)
          // })()
          (()=>{ // 화살표 함수 
            if (value === 1) return (<div>하나</div>);
            if (value === 2) return (<div>둘</div>);
            if (value === 3) return (<div>셋</div>);
          })()
        }
      </div>
    );
  }
}
*/

/* style_객체 형태로 작성
class App extends Component{
  render(){
    const style ={
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px' 
    };

    return (
      <div style ={style}>
        <b>hi </b>hi there~
      </div>
    );
  }
}

className 이용
import './App.css'

class App extends Component{
  render(){
    return (
      <div className ="App">
        리액트 
      </div>
    );
  }
}
*/

import MyName from './MyName';
import Counter from './Counter'
class App extends Component {
  render(){
    return (
      <Fragment>
      <div><MyName name="리액트"/></div>
      <div><Counter /></div>
      </Fragment>
    );
  }
}

export default App;// 작성한 컴포넌트를 다른 곳에서 불러와서 사용할 수 있게 내보내기 해줌


//class 형태의 컴포넌트는 render()가 있어야 하고 내부에서는 JSX를 리턴해야 함.(html 같은 코드들)