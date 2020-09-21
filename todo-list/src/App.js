import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from "./components/Form";
import TodoItemList from './components/TodoItemList';
import Palette from './components/Palette';
const colors = ['#343a40', '#f03e3e', '#12b886', '#228ae6']
class App extends Component {

  id = 3  //이미 0,1,2가 존재하므로 3으로 설정 

  

  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 소개', checked: false },
      { id: 1, text: '리액트 소개', checked: true },
      { id: 2, text: '리액트 소개', checked: false },
    ], 
    color : '#343a40'
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const { input, todos } = this.state;
    this.setState({
      input: '', //인풋 비우고ㅗ 
      //concat을 이용하여 배열에 추가
      todos: todos.concat({
        id: this.id++,
        text: input,
        checked: false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 endter이면 handleCreate 호출
    if (e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const { todos } = this.state;

    //파라미터로 받은 id 를 가지고 몇 번째 아이템인지 찾습니다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체 
    const nextTodos = [...todos]; // 배열을 복사 

    //기존의 값들을 복사하고, checked의 값을 덮어쓰기 
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove =(id )=> {
    const {todos}=this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !=id)
    });
  }

  // handleColor=()=>{

  // }


  render() {
    const { input, todos, color} = this.state;
    const {
      handleChange, handleCreate, handleKeyPress, handleToggle, handleRemove
    } = this;

    return (
      <TodoListTemplate color={(
        <Palette
          colors={colors}
          
          //onColor={handleColor}

        />
      )} 
      form={(
        <Form
          value={input}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
          onCreate={handleCreate}
        />
      )}>
        <TodoItemList todos={todos} onToggle={handleToggle} onRemove = {handleRemove}/>
      </TodoListTemplate>
    );
  }
}

export default App;
