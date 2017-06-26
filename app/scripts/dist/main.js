(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wsClient = require('./ws-client');

var _wsClient2 = _interopRequireDefault(_wsClient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by Air on 2017/6/24.
                                                                                                                                                           */

var ChatApp = function ChatApp() {
  _classCallCheck(this, ChatApp);

  _wsClient2.default.init('ws://localhost:3001');
  _wsClient2.default.registerOpenHandler(function () {
    var message = new ChatMessage({ message: 'pow!' });
    _wsClient2.default.sendMessage(message);
    _wsClient2.default.registerMessageHandler(function (data) {
      console.log(data);
    });
  });
  _wsClient2.default.registerCloseHandler(function () {
    console.log('closed');
  });
};

var ChatMessage = function () {
  function ChatMessage(_ref) {
    var m = _ref.message,
        _ref$user = _ref.user,
        u = _ref$user === undefined ? 'natman' : _ref$user,
        _ref$timestamp = _ref.timestamp,
        t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

    _classCallCheck(this, ChatMessage);

    this.message = m;
    this.user = u;
    this.timestamp = t;
  }

  _createClass(ChatMessage, [{
    key: 'serialize',
    value: function serialize() {
      return {
        user: this.user,
        message: this.message,
        timestamp: this.t
      };
    }
  }]);

  return ChatMessage;
}();

exports.default = ChatApp;

},{"./ws-client":3}],2:[function(require,module,exports){
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _app2.default(); /**
                      * Created by Air on 2017/6/24.
                      */

},{"./app":1}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Created by Air on 2017/6/24.
 */

var socket = void 0;

function init(url) {
  socket = new WebSocket(url);
  console.log('connecting...');
}

function registerOpenHandler(handlerFunction) {
  socket.onopen = function () {
    console.log('open');
    handlerFunction();
  };
}

function registerMessageHandler(handlerFunction) {
  socket.onmessage = function (e) {
    console.log('message', e.data);
    var data = JSON.parse(e.data);
    handlerFunction(data);
  };
}

function registerCloseHandler(handlerFunction) {
  socket.onclose = function () {
    console.log('close');
    handlerFunction();
  };
}

function sendMessage(payload) {
  socket.send(JSON.stringify(payload));
}

exports.default = {
  init: init,
  registerOpenHandler: registerOpenHandler,
  registerMessageHandler: registerMessageHandler,
  registerCloseHandler: registerCloseHandler,
  sendMessage: sendMessage
};

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7QUNJQTs7Ozs7OzBKQUpBOzs7O0lBTU0sTyxHQUNKLG1CQUFjO0FBQUE7O0FBQ1oscUJBQU8sSUFBUCxDQUFZLHFCQUFaO0FBQ0EscUJBQU8sbUJBQVAsQ0FBMkIsWUFBTTtBQUMvQixRQUFJLFVBQVUsSUFBSSxXQUFKLENBQWdCLEVBQUUsU0FBUyxNQUFYLEVBQWhCLENBQWQ7QUFDQSx1QkFBTyxXQUFQLENBQW1CLE9BQW5CO0FBQ0EsdUJBQU8sc0JBQVAsQ0FBOEIsVUFBQyxJQUFELEVBQVU7QUFDdEMsY0FBUSxHQUFSLENBQVksSUFBWjtBQUNELEtBRkQ7QUFHRCxHQU5EO0FBT0EscUJBQU8sb0JBQVAsQ0FBNEIsWUFBTTtBQUNoQyxZQUFRLEdBQVIsQ0FBWSxRQUFaO0FBQ0QsR0FGRDtBQUlELEM7O0lBR0csVztBQUNKLDZCQUFpRjtBQUFBLFFBQTNELENBQTJELFFBQXBFLE9BQW9FO0FBQUEseUJBQXhELElBQXdEO0FBQUEsUUFBbEQsQ0FBa0QsNkJBQWhELFFBQWdEO0FBQUEsOEJBQXRDLFNBQXNDO0FBQUEsUUFBM0IsQ0FBMkIsa0NBQXhCLElBQUksSUFBSixFQUFELENBQWEsT0FBYixFQUF5Qjs7QUFBQTs7QUFDL0UsU0FBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFNBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxTQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDRDs7OztnQ0FDVztBQUNWLGFBQU87QUFDTCxjQUFNLEtBQUssSUFETjtBQUVMLGlCQUFTLEtBQUssT0FGVDtBQUdMLG1CQUFXLEtBQUs7QUFIWCxPQUFQO0FBS0Q7Ozs7OztrQkFHWSxPOzs7OztBQ2xDZjs7Ozs7O0FBQ0Esb0IsQ0FMQTs7Ozs7Ozs7OztBQ0FBOzs7O0FBSUEsSUFBSSxlQUFKOztBQUVBLFNBQVMsSUFBVCxDQUFjLEdBQWQsRUFBbUI7QUFDakIsV0FBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQVQ7QUFDQSxVQUFRLEdBQVIsQ0FBWSxlQUFaO0FBQ0Q7O0FBRUQsU0FBUyxtQkFBVCxDQUE2QixlQUE3QixFQUE4QztBQUM1QyxTQUFPLE1BQVAsR0FBZ0IsWUFBTTtBQUNwQixZQUFRLEdBQVIsQ0FBWSxNQUFaO0FBQ0E7QUFDRCxHQUhEO0FBSUQ7O0FBRUQsU0FBUyxzQkFBVCxDQUFnQyxlQUFoQyxFQUFpRDtBQUMvQyxTQUFPLFNBQVAsR0FBbUIsVUFBQyxDQUFELEVBQU87QUFDeEIsWUFBUSxHQUFSLENBQVksU0FBWixFQUF1QixFQUFFLElBQXpCO0FBQ0EsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLEVBQUUsSUFBYixDQUFYO0FBQ0Esb0JBQWdCLElBQWhCO0FBQ0QsR0FKRDtBQUtEOztBQUVELFNBQVMsb0JBQVQsQ0FBOEIsZUFBOUIsRUFBK0M7QUFDN0MsU0FBTyxPQUFQLEdBQWlCLFlBQU07QUFDckIsWUFBUSxHQUFSLENBQVksT0FBWjtBQUNBO0FBQ0QsR0FIRDtBQUlEOztBQUVELFNBQVMsV0FBVCxDQUFxQixPQUFyQixFQUE4QjtBQUM1QixTQUFPLElBQVAsQ0FBWSxLQUFLLFNBQUwsQ0FBZSxPQUFmLENBQVo7QUFDRDs7a0JBRWM7QUFDYixZQURhO0FBRWIsMENBRmE7QUFHYixnREFIYTtBQUliLDRDQUphO0FBS2I7QUFMYSxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBBaXIgb24gMjAxNy82LzI0LlxuICovXG5cbmltcG9ydCBzb2NrZXQgZnJvbSAnLi93cy1jbGllbnQnO1xuXG5jbGFzcyBDaGF0QXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc29ja2V0LmluaXQoJ3dzOi8vbG9jYWxob3N0OjMwMDEnKTtcbiAgICBzb2NrZXQucmVnaXN0ZXJPcGVuSGFuZGxlcigoKSA9PiB7XG4gICAgICBsZXQgbWVzc2FnZSA9IG5ldyBDaGF0TWVzc2FnZSh7IG1lc3NhZ2U6ICdwb3chJyB9KTtcbiAgICAgIHNvY2tldC5zZW5kTWVzc2FnZShtZXNzYWdlKTtcbiAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc29ja2V0LnJlZ2lzdGVyQ2xvc2VIYW5kbGVyKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdjbG9zZWQnKTtcbiAgICB9KVxuXG4gIH1cbn1cblxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICBjb25zdHJ1Y3Rvcih7bWVzc2FnZTogbSwgdXNlcjogdT0nbmF0bWFuJywgdGltZXN0YW1wOiB0PShuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9KSB7XG4gICAgdGhpcy5tZXNzYWdlID0gbTtcbiAgICB0aGlzLnVzZXIgPSB1O1xuICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgfVxuICBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgIHRpbWVzdGFtcDogdGhpcy50XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoYXRBcHA7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFpciBvbiAyMDE3LzYvMjQuXG4gKi9cblxuaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTsiLCIvKipcbiAqIENyZWF0ZWQgYnkgQWlyIG9uIDIwMTcvNi8yNC5cbiAqL1xuXG5sZXQgc29ja2V0O1xuXG5mdW5jdGlvbiBpbml0KHVybCkge1xuICBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG4gIGNvbnNvbGUubG9nKCdjb25uZWN0aW5nLi4uJyk7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29wZW4nKTtcbiAgICBoYW5kbGVyRnVuY3Rpb24oKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNZXNzYWdlSGFuZGxlcihoYW5kbGVyRnVuY3Rpb24pIHtcbiAgc29ja2V0Lm9ubWVzc2FnZSA9IChlKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xuICAgIGxldCBkYXRhID0gSlNPTi5wYXJzZShlLmRhdGEpO1xuICAgIGhhbmRsZXJGdW5jdGlvbihkYXRhKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDbG9zZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gIHNvY2tldC5vbmNsb3NlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKCdjbG9zZScpO1xuICAgIGhhbmRsZXJGdW5jdGlvbigpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQsXG4gIHJlZ2lzdGVyT3BlbkhhbmRsZXIsXG4gIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIsXG4gIHJlZ2lzdGVyQ2xvc2VIYW5kbGVyLFxuICBzZW5kTWVzc2FnZVxufSJdfQ==
