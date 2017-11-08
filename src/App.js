import React, { Component } from 'react';
import firebase from 'firebase';

import AutoComplete from 'material-ui/AutoComplete';

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyAqj3ulJmKs2318t-5UkZzGw59NGzAMieM",
      authDomain: "fatherproject3.firebaseapp.com",
      databaseURL: "https://fatherproject3.firebaseio.com",
      projectId: "fatherproject3",
      storageBucket: "fatherproject3.appspot.com",
      messagingSenderId: "554574798495"
    };
    firebase.initializeApp(config);

    const user = {
      email: 'test@test.com',
      password: 'password',
    };

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then(() => console.log('auth successFUL!!!'))
      .catch((err) => {
        console.log('auto Error', err);
      });

    firebase.database().ref(`/test/test/article`)
      .push({ test: 'test' })
      .then(() => {
        console.log('pushed');
      })
      .catch((err) => {
        console.log('error!', err);
      });
  }

  handleUpdateInput = (value) => {

  }

  render() {
    return (
      <div>
          <h1>Welcome to React 3 33</h1>

          <AutoComplete
            hintText="Date"
            dataSource={['123','222', '4443']}
            onUpdateInput={this.handleUpdateInput}
          />
      </div>
    );
  }
}

export default App;
