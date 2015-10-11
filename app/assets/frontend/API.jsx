import ServerActions from "./actions/ServerActions"
export default {
  getAllTweets(){
    console.log(2, "API jsx");
    $.get("/tweets")
    .success( rawTweets => ServerActions.receivedTweets(rawTweets))
    .error(error => console.log(error));
  }
}
