import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';

function App() {
  let users = [
  {id: 1, name:"John ",lastName:'Smith', age: 20},
  {id: 2, name:"Ann",lastName:'Smith', age:24},
  {id: 3, name:"Pete",lastName:'Show', age: 31},
];

  return (
    <div className="App">
      
  <Header/> 
  <Section users={users}/>
  <Footer/>
    </div>
  );
}

export default App;
