import React from 'react';

import Chat from './Chat';

const Chats = () => {
  return (
    <div className = "chats">
        <Chat
            key = "0"
            id = "0"
            name = "Aнджелина"
            message = "Привет! Познакомимся?"
            timestamp = "40 seconds ago"
            profilePic = "https://api.interior.ru/images/erno/jolie.jpg.webp"
            />
        <Chat
            key = "1"
            id = "1"
            name = "Cкарлетт"
            message = "😍😍😍😍❤️❤️❤️"
            timestamp = "1 week ago"
            profilePic = "https://fs.kinomania.ru/file/person/1/95/195688ae35f80d6aca00e2fb5cd80b90.jpeg"
            />
        <Chat
            key = "2"
            id = "2"
            name = "Евгений"
            message = "Уважаемый, на вашем компе пиратский антивир"
            timestamp = "12 minutes ago"
            profilePic = "https://www.tadviser.ru/images/thumb/f/f3/Eugene-k%D0%B8%D1%80%D0%B8%D1%80aspersky.jpg/840px-Eugene-k%D0%B8%D1%80%D0%B8%D1%80aspersky.jpg"
            />
        <Chat
            key = "3"
            id = "3"
            name = "Дима"
            message = "Придумал соло для твоей песни🔥🔥🔥🔥🔥🔥🔥🔥"
            timestamp = "4 second ago"
            profilePic = "https://www.rockfm.ru/uploads/photos/1/%D0%BC%D0%B0%D1%81%D1%82%D0%B5%D0%B9%D0%BD.png"
            />
    </div>
  )
}

export default Chats;
