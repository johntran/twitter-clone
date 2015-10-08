import TweetBox from "./components/TweetBox"
import TweetList from "./components/TweetList"

let mockTweets = [
  { id: 1, name: 'John Tran', body: 'My #FirstTweet' },
  { id: 2, name: 'John Tran', body: 'My #SecondTweet' },
  { id: 3, name: 'John Tran', body: 'My #ThirdTweet' }

];

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {tweetsList: mockTweets};
  }


  addTweet(tweetToAdd){
    let newTweetsList = this.state.tweetsList;
    newTweetsList.unshift({id : Date.now(), name: 'Guest', body: tweetToAdd });
    this.setState({ tweetsList: newTweetsList });
  }
  render () {
    return (
    <div className="container">
      <TweetBox sendTweet={this.addTweet.bind(this)}/>
      <TweetList tweets={this.state.tweetsList}/>
    </div>
    );
  }
}

let documentReady = () => {
  let reactNode = document.getElementById('react');
  if (reactNode) {
    React.render(
      <Main />, reactNode
    );
  }
};

$(documentReady)
