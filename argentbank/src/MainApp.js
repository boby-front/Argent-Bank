import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./designs/css/main.css";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Footer from "./containers/Footer";
import SignInContent from "./containers/SignInContent";
import User from "./pages/User";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sign-in" element={<SignInContent />} />
          <Route path="/User" element={<User />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
