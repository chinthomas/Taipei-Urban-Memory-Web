import { Routes, Route } from 'react-router-dom'
import './App.css'
import HeaderBar from './HeaderBar.jsx'
import Page from './Page.jsx'
import PageJournal from './PageJournal.jsx'
import PageMap from './PageMap.jsx'
import globalStyle from './globalStyle.module.css'

function App() {
  return (
    <div className={globalStyle.ContainerWrapper}>
      <HeaderBar/>
      <Routes>
        <Route path='/' element={ <Page />}/>
        <Route path='/journal' element={<PageJournal />}/>
        <Route path='/Map' element={<PageMap />}/>
      </Routes>

    </div>
  )
}

export default App
