import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Signup from "./views/newsletter-sub/Signup";

function App() {
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
