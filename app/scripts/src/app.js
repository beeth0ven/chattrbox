/**
 * Created by Air on 2017/6/24.
 */

import socket from './ws-client';

class ChatApp {
  constructor() {
    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {
      let message = new ChatMessage({ message: 'pow!' });
      socket.sendMessage(message);
      socket.registerMessageHandler((data) => {
        console.log(data);
      });
    });

  }
}

class ChatMessage {
  constructor({message: m, user: u='natman', timestamp: t=(new Date()).getTime()}) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.t
    }
  }
}

export default ChatApp;