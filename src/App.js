import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
//import DoctorList from './components/DoctorList';

function App() {
  const doctorList = [
    {
      doctorName : "Ashu",
      Degree : "MBBS",
      Speliazation : "Heart Surgen"
    },
    {
      doctorName : "Rabia",
      Degree : "BOMS",
      Speliazation : "gynocolist" 
    }
  ]
  return (
    <>
    <Navbar/>
    
    </>
  );
}

export default App;