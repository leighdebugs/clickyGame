import React, { Component } from "react";
import FriendCard from "./components/Cards";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./cards.json";
import "./App.css";

class App extends Component {
  // set this.state.cards to json array
  state = {
    cards,
    score : 0,
    highScore : 0,
    clicked: [],
    msg : "Click on an image to begin!",
    color: "#ffffff"
  };

  click = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.setState({ msg: "Correct!", color: "#ffffff" });
      const newScore = this.state.score + 1;
      this.setState({ score: newScore, clicked: this.state.clicked.concat(id) });
      if (newScore >= this.state.highScore) {
        this.setState({topScore: newScore});
      };
    }else{
      this.setState({ score: 0, clicked: [], msg: "Sorry, that is incorrect!", color: "#ffffff" });
    };

    const newCards = this.state.cards
    for (var i in newCards) {
      newCards[i].random = Math.random()
    };

    newCards.sort(function(a, b) {
      return a.random - b.random;
    });
    this.setState({cards : newCards})
  };

  render() {
    return (
      <Wrapper>
      <Title msg = {this.state.msg} color = {this.state.color} score = {this.state.score} highScore = {this.state.highScore}/>
      <Title>Click here!</Title>
      {this.state.cards.map(cards => (
        <Cards
          clicked = {this.clicked}
          id = {cards.id}
          key = {cards.id}
          image = {cards.image}
          />

          ))};
      </Wrapper>
      );
  }

}



export default App;
