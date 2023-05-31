import './App.scss'
import Login from './views/login/login';
import Chioce from './views/choice/choice';
import Footer from './components/navigation/footer';
import SignIn from './views/signin/signIn';
import HeaderNav from './components/navigation/headerNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Verify from './views/emailVerify/verify';
import Reset from './views/passreset/reset';

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path='/choice' element={<Chioce />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verifyemail' element={<Verify />} />
        <Route path='/passwordreset' element={<Reset />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
