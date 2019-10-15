import React from "react";
import Header from "./components/header";
import HeadLine from "./components/headLine";
import "./App.scss";
import SharedButton from "./components/button";
import { connect } from "react-redux";
import { fetchPosts } from "./actions/";
import ListItem from "./components/listItem";
const tempArr = [
  {
    fName: "Joe",
    lName: "Ricks",
    email: "jorick@gmail.com",
    age: 33,
    onlineStatus: true
  }
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    console.log(this.props);
  }

  render() {
    const { posts } = this.props;
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
          <SharedButton {...configureButton} />
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
