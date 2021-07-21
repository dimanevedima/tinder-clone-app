import React, {useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';

const ChatScreen = () => {
  const [input, setInput] = useState('');

  const handleSend = e => {
    e.preventDefault();

    setMessages([...messages, {message: input}]);
    setInput("");
  };

  
  const [messages, setMessages] = useState([
    {
      name: 'Ellen',
      image: 'https://sun9-13.userapi.com/impg/c858520/v858520238/1250a0/eZU8dAhv6sw.jpg?size=810x1080&quality=96&sign=00c9f12abed8b067ea9dcd4486241391&type=album',
      message: 'Привет!'
    },
    {
      name: 'Ellen',
      image: 'https://sun9-13.userapi.com/impg/c858520/v858520238/1250a0/eZU8dAhv6sw.jpg?size=810x1080&quality=96&sign=00c9f12abed8b067ea9dcd4486241391&type=album',
      message: 'Как дела?'
    },
    {
      message: 'Добрый день!❤️ Да хорошо. Слушаю музыку 🎧 '
    },
  ])

  return (
    <div className = "chatScreen">
        <p className = "chatScreen__title">
            You matched Олеся on 10/08/20
        </p>
        {messages.map(message => (
          message.name ? (
            <div className = "chatScreen__message">
              <Avatar
                className = "chatScreen__image"
                alt = {message.name}
                src = {message.image}
                />
              <p className = "chatScreen__text">
                {message.message}
              </p>
            </div>
          ) :
          (
            <div className = "chatScreen__message">
              <p className = "chatScreen__text_User">
                {message.message}
              </p>
            </div>
          )

        ) )}

        <div>
          <form  className = "chatScreen__input">
              <input
                value = {input}
                onChange = {e => setInput(e.target.value)}
                className = "chatScreen__input_Field"
                placeholder = "Введите сообщение"
                type = "text"></input>
              <button
                onClick = {handleSend}
                className = "chatScreen__input_button">SEND</button>
          </form>
        </div>
    </div>
  )
}

export default ChatScreen;
