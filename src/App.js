import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navx from './components/Nav';
function App() {
  return (
    <div className="App">
      <Navx />
    <p style={{"margin-top":'45px'}}></p>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
