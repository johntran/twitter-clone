import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  }
};
