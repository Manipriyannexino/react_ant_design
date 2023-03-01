import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Content />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
