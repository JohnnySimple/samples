import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/newsletter-sub/Signup";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";
import { setCookie } from "./utils/CookieManager"

function App() {

  useEffect(() => {
    // check if we have cookies
    let userCookieConsent = Cookies.get("user-cookie-consent");
    
    if (!userCookieConsent) {
      setCookie()
    }

    // console.log(decodeURIComponent(userCookieConsent))

  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/newsletter" element={<Signup />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
