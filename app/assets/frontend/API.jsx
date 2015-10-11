import ServerActions from "./actions/ServerActions"
export default {
  getAllTweets(){
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets),
    rawTweets=>console.log('rawTweets', rawTweets)
  )
    .error(error => console.log(error));
  },
  createTweet(body){
    console.log('createTweet');
    $.post("/tweets", { body })
    .success( rawTweet => ServerActions.receivedOneTweet(rawTweet))
    .error(error => console.log(error));
  },
  getAllUsers(){
    $.get("/followers/random")
    .success( rawUsers => ServerActions.receivedUsers(rawUsers),
    rawUsers=>console.log('rawUsers', rawUsers)
  )
    .error(error => console.log(error));
  },
  followUser(userId){
    $.post("/followers", {user_id:userId})
    .success( rawFollower => ServerActions.receivedOneFollower(rawFollower))
    .error(error => console.log(error));
  },
}
