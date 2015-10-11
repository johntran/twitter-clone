import TweetBox from "./components/TweetBox";
import TweetList from "./components/TweetList";
import TweetStore from "./stores/TweetStore";

import TweetActions from "./actions/TweetActions";
TweetActions.getAllTweets();

let getAppState = () => {
  console.log('inAppState')
  return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = getAppState();
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount (){
    TweetStore.addChangeListener(this._onChange);
  }

  componentDidUnmount (){
    TweetStore.removeChangeListener(this._onChange);
  }

  _onChange() {
    console.log(5, 'Main._onChange()');
    this.setState(getAppState());
  }

  render () {
    return (
    <div className="container">
      <TweetBox />
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
