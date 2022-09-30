import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { AllRoutes } from './Routes/AllRoutes';
import { Stack } from '@chakra-ui/react';
import { Landing } from './Components/Landing';


function App() {
  return (
    <Stack>
      <Navbar/>
      <AllRoutes/>
      
    </Stack>
  );
}

export default App;

//npm install react-icons --save

