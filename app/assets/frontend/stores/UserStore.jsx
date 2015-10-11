import AppDispatcher from "../dispatcher";
import ActionTypes from "../constants";
import AppEventEmitter from "./AppEventEmitter";

let _users = [];
//{id: 1, name: 'DHH'}, {id: 2, name: 'JW'}
class UserEventEmitter extends AppEventEmitter {
  getAll() {
    return _users;
  }
}

let UserStore = new UserEventEmitter();

AppDispatcher.register(action => {
  switch(action.actionType) {
    case ActionTypes.RECEIVED_USERS:
      _users = action.rawUsers;
      UserStore.emitChange();
    default:
  }
});

export default UserStore;
