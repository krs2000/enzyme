import React from "react";
import Header from "./components/header";
import HeadLine from "./components/headLine";
import "./App.scss";
import SharedButton from "./components/button";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/";
import ListItem from "./components/listItem";
import HookButton from "./components/hookButton";

const tempArr = [
  {
    fName: "Joe",
    lName: "Ricks",
    email: "jorick@gmail.com",
    age: 33,
    onlineStatus: true
  }
];

const initialState = {
  hideBtn: false
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };
    this.fetch = this.fetch.bind(this);
    this.exampleMethod_updateState = this.exampleMethod_updateState.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updateState();
  }

  exampleMethod_updateState() {
    const { hideBtn } = this.state;
    this.setState({
      hideBtn: !hideBtn
    });
  }

  exampleMethod_returnsAValue(number) {
    return number++;
  }

  render() {
    const { posts } = this.props;
    const { hideBtn } = this.state;
    const configureButton = {
      buttonText: "Get posts",
      emitEvent: this.fetch
    };
    return (
      <div className="App" data-test="appComponent">
        <Header />
        <section className="main">
          <HeadLine
            tempArr={tempArr}
            header="Posts"
            desc="Click the button to render posts"
          />
          <HookButton />
          {!hideBtn && <SharedButton {...configureButton} />}
          {posts.length > 0 &&
            posts.map((post, index) => {
              const { title, body } = post;
              const configureListItem = {
                title,
                desc: body
              };
              return <ListItem key={index} {...configureListItem} />;
            })}
        </section>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapStateToProps,
  { fetchPosts }
)(App);
