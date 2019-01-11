import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
//Components

import Banner from './components/Banner/Banner';
import Navbar from './components/Navbar/Navbar';


class App extends Component {

  state={
    images:[],
    error:false,
    notFound:false
  };
  
  componentDidMount(){
    axios.get('https://api.unsplash.com/photos/?page=1&per_page=50&client_id=132f7cd523bc1e299c059f34e60fcc7c5cf1f4e78ca30a1bc35c3e93228c7be9')
    .then(({data}) => this.setState({images:data}))
    .catch(err =>this.setState({error:true}));
    console.log("its running")
  }




  render() {
    return (
      <div className="App">
        <Navbar/>
        <Banner/>
       
      </div>
    );
  }
}

export default App;
