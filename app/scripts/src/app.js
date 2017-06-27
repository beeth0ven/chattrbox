/**
 * Created by Air on 2017/6/24.
 */

import socket from './ws-client';
import {UserStore} from './storage';
import {ChatForm, ChatList, promptForUsername} from './dom';

const formSelector = '[data-chat="chat-form"]';
const inputSelector = '[data-chat="message-input"]';
const listSelector = '[data-chat="message-list"]';

let userStore = new UserStore('x-chattrbox/u');
let username = userStore.get();
if (!username) {
  username = promptForUsername();
  userStore.set(username);
}

class ChatApp {
  constructor() {
    this.chatForm = new ChatForm(formSelector, inputSelector);
    this.chatList = new ChatList(listSelector, username);

    socket.init('ws://localhost:3001');
    socket.registerOpenHandler(() => {

      this.chatForm.init((data) => {
        let message = new ChatMessage({message: data});
        socket.sendMessage(message.serialize());
      });
      this.chatList.init();

      socket.registerMessageHandler((data) => {
        let message = new ChatMessage(data);
        this.chatList.drawMessage(message.serialize());
        console.log(data);
      });
    });

  }
}

class ChatMessage {
  constructor({message: m, user: u=username, timestamp: t=(new Date()).getTime()}) {
    this.message = m;
    this.user = u;
    this.timestamp = t;
  }
  serialize() {
    return {
      user: this.user,
      message: this.message,
      timestamp: this.timestamp
    }
  }
}

export default ChatApp;