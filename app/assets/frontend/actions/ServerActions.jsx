import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";

export default {
  receivedTweets(rawTweets) {
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOneTweet(rawTweet){
    console.log('ServerAction', "received one tweet");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    });
  },
  receivedUsers(rawUsers){
    console.log('ServerAction', "received users");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    });
  },
  receivedOneFollower(rawFollower){
    console.log('ServerAction', "received follower");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower
    });
  }
};
