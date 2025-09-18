import './App.css'
import Daily from './components/Daily/Daily'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Hourly from './components/Hourly/Hourly'
import Overview from './components/Overview/Overview'

function App() {

  return (
  <>
    <Header/>
    <Hero/>
    <div id='desktoping'>
      <div id='desktoping-left'>
        <Overview/>
        <Daily/>
      </div>
      <Hourly/>
    </div>
    <h1 id='signature'>by <a target='_blank' href="https://pratov.uz">PRATOV.UZ</a></h1>
  </>
  )
}

export default App
