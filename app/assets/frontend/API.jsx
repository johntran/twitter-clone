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
  }
}
