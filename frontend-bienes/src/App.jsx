import './App.css';
import Header from "./components/header"
import Footer from "./components/footer"
import Home from "./pages/home"

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='App-content'>
      <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
