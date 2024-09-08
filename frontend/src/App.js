import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/navbar'
import Footer from './components/layout/footer'
import Home from './components/commanPages/home'
import MainFrame from './components/layout/mainFrame'
import Login from './components/commanPages/login'
import Page404 from './components/SVG/404'
import Register from './components/commanPages/register'
import Donate from './components/user/donate'
import ContactUs from './components/commanPages/contactus'
import MyDonations from './components/user/myDonations'
import Layout from './components/layout/Layout'
import RequireAuth from './components/commanPages/RequireAuth'
import Admin from './components/commanPages/Admin'
import RegisterNGO from './components/commanPages/RegisterNGO'

export default function App() {
  return (
    <div>
    <Navbar/>
    <MainFrame>
      <Routes >  
        <Route path="/" element={<Layout/>}>
        <Route path="/Login" element={<MainFrame><Login/></MainFrame>}></Route>
        <Route path="/register" element={<MainFrame><Register/></MainFrame>}></Route>
        <Route path='/' element={<Home />} ></Route>
        <Route element={<RequireAuth allowedRoles={[18,7]} />}>
        <Route path='/donate' element={<Donate/>} ></Route>
        <Route path='/contact-us' element={<ContactUs/>}></Route>
        <Route path='/my-donations' element={<MyDonations/>}></Route>
        <Route path='*' element={<Page404/>}/>
        </Route>
        <Route element={<RequireAuth allowedRoles={[7]} />}>
        <Route path='/adminpage' element={<Admin/>}></Route>
        <Route path='/registerngo' element={<RegisterNGO/>}></Route>
        </Route>
        </Route>
      </Routes>
    </MainFrame>
    <Footer/>
    </div>
    
  )
}
