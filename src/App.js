import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProfilePage  from './components/ProfilePage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/profilepage" element ={<ProfilePage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
