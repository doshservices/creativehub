import './App.scss'
import Home from './views/home/homepage';
import Reset from './views/passreset/reset';
import Login from './views/login/login';
import Verify from './views/emailVerify/verify';
import Chioce from './views/choice/choice';
import Footer from './components/navigation/footer';
import SignIn from './views/signin/signIn';
import Explore from './views/explore/explore';
import Listing from './views/talentListing/listing';
import HeaderNav from './components/navigation/headerNav';
import NewPassword from './views/newPassword/newPassword';
import SearchResult from './views/searchResult/searchResult';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/choice' element={<Chioce />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/login' element={<Login />} />
        <Route path='/verifyemail' element={<Verify />} />
        <Route path='/passwordreset' element={<Reset />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/talentlisting' element={<Listing />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
