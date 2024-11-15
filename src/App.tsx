import { Route, Routes } from "react-router-dom";
import Signup from "@pages/auth/signup";
import Login from "@pages/auth/login";
import Home from "@pages/home";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
    </Routes>
  );
}

export default App;
