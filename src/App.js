import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/antique" element={<SignUp />}></Route>
          <Route path="/antique/SignIn" element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
