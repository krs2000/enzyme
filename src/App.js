import React from "react";
import Header from "./components/header";
import HeadLine from "./components/headLine";
import "./App.scss";
const tempArr = [
  {
    fName: "Joe",
    lName: "Ricks",
    email: "jorick@gmail.com",
    age: 33,
    onlineStatus: true
  }
];
function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <HeadLine
          tempArr={tempArr}
          header="Posts"
          desc="Click the button to render posts"
        />
      </section>
    </div>
  );
}

export default App;
