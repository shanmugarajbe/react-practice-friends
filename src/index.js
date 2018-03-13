import React from 'react';
import ReactDOM from 'react-dom';

class FriendsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sunface",
      friends: ['Jakir Hussain', 'Pradeep R', 'Dipak Chandran']
    }
    this.handleNewFriends = this.handleNewFriends.bind(this);
  }
  handleNewFriends (e) {
    this.setState((state) => ({
      friends: state.friends.concat([e])
    }))
  }

  render() {
    return (
      <div>
        <h2> Name: {this.state.name} </h2>
        <AddFriend addNew={this.handleNewFriends}/>
        <FriendsList friends={this.state.friends} />
      </div>
    )
  }
}

class FriendsList extends React.Component {
  render() {
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {this.props.friends.map((friend) => <li key={friend.toString()}>{friend}</li>)}
        </ul>
      </div>
    )
  }
}

class AddFriend extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newFriend: ''
    }
    this.updateNewFriend = this.updateNewFriend.bind(this)
    this.addNewFriend = this.addNewFriend.bind(this);
  }
  updateNewFriend(e) {
    this.setState({
      newFriend: e.target.value
    })
  }
  addNewFriend(e) {
    if(this.state.newFriend === '') return false;
    this.props.addNew(this.state.newFriend);
    this.setState({
      newFriend: ''
    })
  }
  render() {
    return(
      <div>
        <input type='text' value={this.state.newFriend} onChange={this.updateNewFriend} />
        <button onClick={this.addNewFriend} >Add New Friend </button>
      </div>
    )
  }
}

ReactDOM.render(<FriendsContainer />, document.getElementById('root'));
