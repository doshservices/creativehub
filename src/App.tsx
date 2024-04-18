import './App.scss';
import { useState, FC, useEffect } from 'react';
import Home from './views/home/homepage';
import Reset from './views/passreset/reset';
import Login from './views/login/login';
import Verify from './views/emailVerify/verify';
import Chioce from './views/choice/choice';
import Footer from './components/navigation/footer';
import SignIn from './views/signin/signIn';
import Contact from './views/contact/contact';
import Explore from './views/explore/explore';
import Listing from './views/talentListing/listing';
import HeaderNav from './components/navigation/headerNav';
import ErrorPage from './views/404';
import RecentJobs from './views/recentJobs/recentJobs';
import TalentInfo from './views/talentInfo/talentInfo';
import NewPassword from './views/newPassword/newPassword';
import SearchResult from './views/searchResult/searchResult';
import UserDashboard from './views/userDashboard/dashboard';
import { ScrollToTop } from './resets/ScrollToTop';
import SoundEngineerInfo from './views/soundEngineer/engineer';
import { CreativesNotification } from './views/notification/creatives';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthRoutes from './utils/authRoute';
import OpenRoutes from './utils/unAuthRoute';

const App: FC = () => {

  const [backToTopButton, setbackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 800) {
        setbackToTopButton(true);
      } else {
        setbackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      <BrowserRouter>
        <ScrollToTop />
        <HeaderNav />
        <main>
          <Routes>
            <Route path='/*' element={<ErrorPage />} />
            <Route element={<AuthRoutes />}>
              <Route path='/' element={<Home />} />
              <Route path='/explore' element={<Explore />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='/recentJobs' element={<RecentJobs />} />
              <Route path='/talentinfo' element={<TalentInfo />} />
              <Route path='/talentlisting' element={<Listing />} />
              <Route path='/soundengineer' element={<SoundEngineerInfo />} />
              <Route path='/notifications' element={<CreativesNotification />} />
              <Route path='/usersDashboard' element={<UserDashboard />} />
              <Route path='/search' element={<SearchResult />} />
            </Route>
            <Route element={<OpenRoutes />}>
              <Route path='/signin' element={<Login />} />
              <Route path='/choice' element={<Chioce />} />
              <Route path='/signup' element={<SignIn />} />
              {/* <Route path='/search' element={<SearchResult />} /> */}
              <Route path='/newpassword' element={<NewPassword />} />
              <Route path='/verifyemail' element={<Verify />} />
              <Route path='/passwordreset' element={<Reset />} />
            </Route>
          </Routes>
        </main>
        {backToTopButton && (
          <button style={{ display: 'none' }} onClick={scrollUp} className="top-scroll">
            &uarr;
          </button>
        )}
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;
