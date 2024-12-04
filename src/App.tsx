import { HashRouter, Route, Routes } from 'react-router-dom'
import LangEn from './LangEn'
import LangPl from './LangPl'
import './App.css'

function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<LangEn />} />
        <Route path="/pl" element={<LangPl />} />
      </Routes>
    </HashRouter>
  ) 
}

export default App;