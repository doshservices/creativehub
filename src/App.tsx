import './App.scss'
import HeaderNav from './components/navigation/headerNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chioce from './views/choice/choice';
import Footer from './components/navigation/footer';
import SignIn from './views/signin/signIn';

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path='/choice' element={<Chioce />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
