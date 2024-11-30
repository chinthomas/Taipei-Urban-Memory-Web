import { Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderBar from './HeaderBar.jsx'
import Page from './Page.jsx'
import PageJournal from './PageJournal.jsx'
import PageMap from './PageMap.jsx'

function App() {
  return (
    <>
      <HeaderBar/>
      <Routes>
        <Route path='/' element={ <Page />}/>
        <Route path='/journal' element={<PageJournal />}/>
        <Route path='/Map' element={<PageMap />}/>
      </Routes>

    </>
  )
}

export default App
