import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Container from "./components/Container";

function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <div className="content flex-grow-1">
        <Header>
          <Navigation />
        </Header>
        <div className="project-container">
          <Container />
        </div>
        <Footer className="fixed-bottom" />
      </div>
    </div>
  );
}

export default App;
