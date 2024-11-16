import { Route, Routes } from "react-router-dom";
import Signup from "@pages/auth/signup";
import Login from "@pages/auth/login";
import Home from "@pages/home";
import Courses from "@pages/courses";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
