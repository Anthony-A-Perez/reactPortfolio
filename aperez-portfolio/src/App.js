
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
// import Project from "./components/Project";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Portfolio from "./components/Portfolio";






function App() {
  return (
    <div className="App">

      
      <Header>
        <Navigation />
      </Header>

      <Container />
      
      <Footer />
    </div>
  );
}


export default App;
