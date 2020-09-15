// 여러개의 PhoneInfo 컴포넌트를 보여줌

import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    }

    render() {
        const { data, onRemove, onUpdate} = this.props;
        const list = data.map(// 리스트의 요소를 지정된 함수로 처리하는 함수
            info => (
            <PhoneInfo 
                key={info.id} 
                info={info} 
                onRemove={onRemove}
                onUpdate={onUpdate}
            />)// data라는 배열을 가져와서 map을 통하여 JSX로 변환
            // key는 렌더링할 때 꼭 필요한 값 -> 효율
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;

/*
map의 예시
ex) a 배열의 내부 원소에 모두 2를 곱하는 방법

const a = [1,2,3,4,5];
const b = a.map(number => number *2);
*/


// 배열을 렌더링 할 때 꼭 고유값을 key로 사용해야한다 7편 

/*
const arr = [1,2,3,4,5];
3 제거
array.filter(num => num!== 3); // 3 이 아닌 것들만 필터링 해서 새 배열
*/

/* 
const array = [
  { id: 0, text: 'hello', tag: 'a' },
  { id: 1, text: 'world' , tag: 'b' },
  { id: 2, text: 'bye', tag: 'c' }
];

에서 기존의 값을 건드리지 말고 id = 1인 객체의 text 값을 'Korea'로 바꾸기

const modifiedArray = array.map(item => item.id === 1
    ? ({...item,. text:'Korea'}) // id 가 일치하면 새 객체를 만들어 기존의 내용을 집어넣고 원하는 값 덮어쓰기
    : item ) // 바꿀 필요 없는 것들은 기존의 값 사용 
*/