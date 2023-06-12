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
import RecentJobs from './views/recentJobs/recentJobs';
import TalentInfo from './views/talentInfo/talentInfo';
import NewPassword from './views/newPassword/newPassword';
import SearchResult from './views/searchResult/searchResult';
import SoundEngineerInfo from './views/soundEngineer/engineer';
import { CreativesNotification } from './views/notification/creatives';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route path='/choice' element={<Chioce />} />
        <Route path='/signup' element={<SignIn />} />
        <Route path='/search' element={<SearchResult />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/recentJobs' element={<RecentJobs />} />
        <Route path='/talentinfo' element={<TalentInfo />} />
        <Route path='/newpassword' element={<NewPassword />} />
        <Route path='/verifyemail' element={<Verify />} />
        <Route path='/passwordreset' element={<Reset />} />
        <Route path='/talentlisting' element={<Listing />} />
        <Route path='/soundengineer' element={<SoundEngineerInfo />} />
        <Route path='/notifications' element={<CreativesNotification />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
