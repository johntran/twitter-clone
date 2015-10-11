import API from "../API"

export default {
  getAllTweets(){
    API.getAllTweets();
  },
  sendTweet(body){
    console.log('sendingTweet from TweetActions');
    API.createTweet(body);
  }
}
