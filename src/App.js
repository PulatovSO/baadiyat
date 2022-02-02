import SignUp from './components/Sign/SignUp/SignUp';
import SignIn from './components/Sign/SignIn/SignIn';
import Hero from './components/Hero/Hero';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
