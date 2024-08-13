import { useState } from 'react'
import './App.css'
import Header from "./components/header/Header"
import Home from './pages/home/Home'
import About from "./pages/about/About"
import Zen from "./pages/zen/Zen"
import Ceshbek from './pages/ceshbek/Ceshbek'
import Mastercard from './pages/mastercard/Mastercard'
import Shopping from './pages/shopping/Shopping'
import Account from './pages/account/Account'
import Ease from "./pages/ease/Ease"
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
     <Header />
     <Home />
     <About/>
     <Zen />
     <Ceshbek />
     <Mastercard />
     <Shopping/>
     <Account />
     <Ease />
     <Footer />
    </>
  )
}

export default App
