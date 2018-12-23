import React, { Component } from 'react';
import Jumbotron from '../Components/Jumbotron';
import FirstRow from '../Components/FirstRow';
import SecondRow from '../Components/SecondRow';
import ThirdRow from '../Components/ThirdRow';
import TopBlank from '../Components/TopBlank';
class Home extends Component {
  render() {
    return (
      <div >
        <TopBlank/>
        <Jumbotron 
          src = ""
          title = "Santren Koding"
          subTitle = "Intensive Coding Bootcamp for Yatim & Dhuafa"
          buttonText = "Mulai Belajar"/>
        <FirstRow />
        <SecondRow />
        <ThirdRow />
      </div>
    );
  }
}

export default Home;
