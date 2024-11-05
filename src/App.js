import React from 'react'
import Home from './content/Home';
import { Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
      <div>
        <nav>
          <ul style={{"display":"flex"}}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        <div className="content">


      <Routes>
        <Route path='/' element={
          <Home bgcolor="lavender" textcolor="#888" vh="100vh">
            <h1>오늘의 저ㅁ심 덕복이</h1>
          </Home>
          }></Route>

        <Route path='/About' element={
                    <Home bgcolor="lavender" textcolor="#888" vh="100vh">
                    <h1>내일의 저ㅁ심 푸어런치</h1>
                  </Home>
        }></Route>

        <Route path='/Contact' element={
                    <Home bgcolor="lavender" textcolor="#888" vh="100vh">
                    <h1>jott that down~</h1>
                  </Home>
        }></Route>
      </Routes>

      </div>

        <Home bgcolor="cornflowerblue" textcolor="#888" vh="100vh">
        <h1>메인똥입니다.</h1>
        </Home>
    </div>

  )
}
