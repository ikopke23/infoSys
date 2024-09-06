import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'
import Home from './pages/Home'
import PageContainer from './containers/PageContainer'
import 'csh-material-bootstrap/dist/csh-material-bootstrap.css'
import NotFound from './pages/NotFound'
import Admin from './pages/Admin'
import Submission from './pages/Submission'
import Queued from './pages/Queued'
import Testing from './pages/Testing'
//import mysql from 'mysql';




type Props = {
  rerouteHomeOn404?: boolean
}



//const con = mysql.createConnection({
//  host: 'mysql.csh.rit.edu',
//  user: 'InfoSys',
//  password: '6kLq*6iJQPzqAHJ8f5',
//});


const App: React.FC<Props> = ({ rerouteHomeOn404 = null }) => {
  return (
    
    <Router>
      <PageContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='*' element={rerouteHomeOn404 ?? true ? <Home /> : <NotFound />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/queued-messages' element={<Queued />} />
          <Route path='/submission' element={<Submission />} />
          <Route path='/testing' element={<Testing/>}></Route>
        </Routes>
      </PageContainer>
    </Router>
  )
}


export default App