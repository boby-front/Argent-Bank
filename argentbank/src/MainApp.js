import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./designs/css/main.css";
import Nav from "./containers/Nav";
import Home from "./pages/Home";
import Footer from "./containers/Footer";
import SignInContent from "./containers/SignInContent";
import Error from "./components/Error";
import User from "./pages/User";
import { useSelector } from "react-redux";
import { fetchUserInfo } from "./store/actions/AddDataAction";
import store from "./store/Store";

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  store.dispatch(fetchUserInfo());
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Sign-in" element={<SignInContent />} />
          <Route
            path="/Profile"
            element={isLoggedIn ? <User /> : <SignInContent />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
