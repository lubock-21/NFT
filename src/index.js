import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar/Navbar';
import PartOne from './components/part_one/PartOne';
import PartThree from './components/part_three/PartThree';
import PartFive from './components/part_five/PartFive';
import PartSix from './components/part_six/PartSix';
import Footer from './components/footer/Footer';
import PartTwo from './components/part_two/PartTwo';
import PartFour from './components/part_four/PartFour';
import PartSeven from './components/part_seven/PartSeven';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Navbar/>
    <PartOne/>
    <PartTwo/>
    <PartThree/>
    <PartFour/>
    <PartFive/>
    <PartSix/>
    <PartSeven/>
    <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
