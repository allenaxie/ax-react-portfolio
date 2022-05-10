import React from 'react';
import 'antd/dist/antd.css';
import { About, Footer, Header, Skills, Testimonial, Work} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
    <div className="app">
      <Navbar/>
      <Header/>
      <About/>
      <Work/>
      <Skills/>
      {/* <Testimonial/> */}
      <Footer/>
    </div>
  )
}

export default App;