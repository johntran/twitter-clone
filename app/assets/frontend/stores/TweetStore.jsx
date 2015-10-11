import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import {EventEmitter} from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter {
  getAll() {
    return _tweets;
  }
  emitChange() {
    this.emit(CHANGE_EVENT);

  }
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }
  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  }
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType){
    case ActionTypes.RECEIVED_TWEETS:
      console.log(4, 'tweetstore');
      // acknowledge tweets
      _tweets = action.rawTweets;
      // emit a change event
      TweetStore.emitChange();
      break;
    default:

  }
});

export default TweetStore;
