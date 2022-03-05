import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Nav from './components/Nav';
function App() {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
