import React, {useState} from 'react';
import './App.css';
import {Input} from "./Components/Input";
import {Button} from "./Components/Button";

function App() {
  const [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
        {message: 'message4'},
        {message: 'message5'}
      ])

    let [title, setTitle] = useState('')

    const addMessage = (title:string) => {
        setMessage([{message:title}, ...message])
    }

    const callBackButtonHandler = ()=> {
        addMessage(title)
        setTitle('')
    }

  return (
      <div className="App">
          <Input title={title} setTitle={setTitle}/>
          <Button  name='+' callBack={callBackButtonHandler}/>
        {message.map((el, index) => {
          return (
              <div key={index}>{el.message}</div>
          )
        })}
      </div>
  );
}

export default App;
