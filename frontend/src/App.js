import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './components/commanPages/home'
import MainFrame from './components/commanPages/mainFrame'
import Login from './components/commanPages/login'
import Page404 from './components/SVG/404'
import Register from './components/commanPages/register'
import Donate from './components/commanPages/donate'
import ContactUs from './components/commanPages/contactus'
import MyDonations from './components/commanPages/myDonations'

export default function App() {
  return (
    <div>
    <Navbar/>
    <MainFrame>
      <Routes >  
        <Route path='/' element={<Home />} ></Route>
        <Route path='/donate' element={<Donate/>} ></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/my-donations' element={<MyDonations/>}></Route>
        <Route path='*' element={<Page404/>}/>
      </Routes>
    </MainFrame>
    <Footer/>
    </div>
    
  )
}
