var React = require('react');
var ChatStore = require('../../stores/chat_store.js');
var ClientActions = require('../../actions/client_actions.js');

var ChatIndexItem = require('./ChatIndexItem.jsx');
var ChatForm = require('./ChatForm.jsx');
var SearchBar = require('../SearchBar');
var TallAd = require('../tallAd');
var rotateImages = require('../rotateImages.js');


module.exports = React.createClass({
  getInitialState: function () {
    return { chats: [] };
  },

  componentDidMount: function () {
    this.chatListener = ChatStore.addListener(this.getChats);
    ClientActions.fetchChats();
  },

  componentWillUnmount: function () {
    this.chatListener.remove();
  },

  getChats: function () {
    this.setState({ chats: ChatStore.all() });
  },

  render: function () {
    return (

      <div className="chat-index">
        <table cellPadding="0" cellSpacing="0" border="0" width="100%">
        <tbody>
          <tr className="ChatIndex">
            <td>
              <ul className="chatList">
                {
                  this.state.chats.map(function (chat) {
                    return (<ChatIndexItem className="chatIndexItem" key={chat.id} chat={chat} />);
                  })
                }
              </ul>
            </td>
            <td>
            </td>
          </tr>
        </tbody>
        </table>

      </div>
    );
  }
});

window.ChatStore = ChatStore;
