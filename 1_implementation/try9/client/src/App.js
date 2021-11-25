import axios from 'axios';
import {saveAs} from 'file-saver';
import {useState} from 'react';


import Invoice from './cmps/Invoice/Invoice';
import './App.css'

function App() {

  return(
    <>
      <Invoice />
    </>
  )

}

export default App;