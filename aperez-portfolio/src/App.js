

import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Container from "./components/Container";


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
