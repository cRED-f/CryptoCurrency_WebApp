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

function NavbarHandler(): React.ReactNode {
  const location = useLocation();

  // Check if the current route is the homepage ("/")
  const isHomepage = location.pathname === "/";

  // Render the Header component only if it's not the homepage
  return !isHomepage ? <Header /> : null;
}

export default App;
