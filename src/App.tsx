import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Header from "./layouts/Header/Header";
import ErrorLink from "./layouts/Error/ErrorLink";
import Coin from "./components/Coin";
import Details from "./components/Details";
import Exchange from "./components/Exchange";

function App(): JSX.Element {
  return (
    <>
      <BrowserRouter>
        <NavbarHandler />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coins" element={<Coin />} />
          <Route path="/coin-details/:id" element={<Details />} />
          <Route path="/coins-exchange" element={<Exchange />} />
          <Route path="*" element={<ErrorLink message={"Page Not Found"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function NavbarHandler(): JSX.Element | null {
  const location = useLocation();

  const isHomepage = location.pathname === "/";

  return !isHomepage ? <Header /> : null;
}

export default App;
