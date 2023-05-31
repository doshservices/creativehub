import './App.scss'
import HeaderNav from './components/navigation/headerNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Chioce from './views/choice/choice';

const App = () => {

  return (
    <BrowserRouter>
      <HeaderNav />
      <Routes>
        <Route path='/choice' element={<Chioce />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
