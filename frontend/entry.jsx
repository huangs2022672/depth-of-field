import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from './components/root'


document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: {
        currentUserId: window.currentUser.id,
        currentFollows: {},
        currentLikes: {}
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // test
  window.store = store
  // end

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
