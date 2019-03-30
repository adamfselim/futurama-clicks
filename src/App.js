import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Image from "./components/Image";
import Img from "./components/Img.json"

import amy from "./images/amy.gif"
import bender from "./images/bender.gif"
import calculon from "./images/calculon.gif"
import farnsworth from "./images/farnsworth.gif"
import fry from "./images/fry.gif"
import hermes from "./images/hermes.gif"
import kif from "./images/kif.gif"
import leela from "./images/leela.gif"
import neutral from "./images/neutral.gif"
import slurms from "./images/slurms.gif"
import zapp from "./images/zapp.gif"
import zoidberg from "./images/zoidberg.gif"

import './App.css';

class App extends Component {
  state = {
    picked: [],
    correct: 0,
    topscore: 0,
    message: 'Click an image to begin'
  };

  shuffleArray = (array) => {
    let imgArray = Img;
    for (let i = imgArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imgArray[i], imgArray[j]] = [imgArray[j], imgArray[i]];
    }
    return imgArray
  }

  pickImg = (name) => {
    console.log("Clicked!!");
    let picked = this.state.picked;
    
    if (picked.indexOf(name) === -1) {
      this.setState({
        picked: picked.concat(name),
        correct: this.state.correct + 1,
        topscore: this.state.correct + 1 > this.state.topscore ? this.state.correct + 1 : this.state.topscore,
        message: "You're doin' it!!" 
      })
      this.shuffleArray();
    }
    else {
      this.setState({
        message: "Repeat! Game Over, Replay?",
        correct: 0,
        picked: []
      })
    }
  }

  imgSwitch = (name) => {
    switch (name) {
      case "amy":
      console.log(amy);
        return `${amy}`
        
      case "bender":
        return `${bender}`
      case "calculon":
        return `${calculon}`
      case "farnsworth":
        return `${farnsworth}`
      case "fry":
        return `${fry}`
      case "hermes":
        return `${hermes}`
      case "kif":
        return `${kif}`
      case "leela":
        return `${leela}`
      case "neutral":
        return `${neutral}`
      case "slurms":
        return `${slurms}`
      case "zapp":
        return `${zapp}`
      case "zoidberg":
        return `${zoidberg}`
      default:
        return `${zoidberg}`
    }
  }

  render() {
    return (
      <div>
        <Navbar correct={this.state.correct} topscore={this.state.topscore} message={this.state.message}/>
        <Header />
        <Main>
          {this.shuffleArray(Img).map(image => (
            <Image src={this.imgSwitch(image.name)} name={image.name} key={image.name} pickImg={this.pickImg}  />
          ))}
        </Main>
      </div>
    );
  }
}

export default App;
