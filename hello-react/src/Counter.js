// 동적인 데이터를 다룰 경우 state 사용

import React, { Component } from "react";

const Problomatic = () => {
    throw(new Error('버그가 나타났다!'));
    return (
        <div>

        </div>
    );
};

class Counter extends Component {
    state = {// state를 정의할 때는 class fields 문법을 사용하여 정의
        number: 0,
        error:false
    }
    // // class fields를 사용하지 않을 경우
    // constructor(props){
    //     super(props);
    //     this.state={
    //         number:0
    //     }
    // }

    constructor(props){// 생성자 함수. 컴포넌트가 새로 만들어질 때 호출
        super(props);
        console.log('constructor');
    }
    
    componentWillMount(){// 화면에 나가기 직전에 호출되는 api
        console.log('componentWillMount (deprecated)');
    }
    
    componentDidMount(){ // 컴포넌트가 화면에 나타나게 되었을 때 호출.
        // 외부 라이브러리 연동 : D3, masonry,..
        // 컴포넌트에서 필요한 데이터 요청 : Ajax, GrapQL,..
        // DOM에 관련된 작업 : 스크롤 설정, 크기 읽어오기 등
        console.log('componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState){ // 컴포넌트 최적화 작업
        // return false 하면 업데이트를 안함
    
        console.log('shouldComponentUpdate');
        if(nextState.number%5===0)return false;
        return true;
    }

    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdaate');
    }

    componentDidUpdate(preProps,preState){
        console.log('componentDidUpdate');
    }

    componentDidCatch(error, info){
        this.setState({
            error: true
        });
    }

    handleIncrease = () => {
        // this.setState({
        //     // state에 있는 값을 바꾸기 위한 함수 함수가 호출되면 컴포넌트가 리렌더링됨
        //     // 객체로 전달되는 값만을 업데이트 
        //     number: this.state.number + 1
        // });
        this.setState(
            (state)=>({
                number: state.number + 1
            })
        ); // 더 멋진 문법!
    }
    handleDecrease = () => {
        // this.setState({
        //     number: this.state.number - 1
        // });
        this.setState(
            ({number})=>({ // 비구조화 할당
                number:number-1
            })
        )

    
    }

    render(){
        if (this.state.error) return (<h1>에러 발생!</h1>);
        return (
            <div>
                <h1>카운터</h1>
                <div>값 : {this.state.number}</div>
                {this.state.number === 4 &&<Problomatic/>}
                <button onClick={this.handleIncrease}>+</button>
                <button onClick={this.handleDecrease}>-</button>
            </div>
        );
    }
}


export default Counter;