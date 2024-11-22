import { Route, Routes } from "react-router-dom";
import Signup from "@pages/auth/signup";
import Login from "@pages/auth/login";
import Home from "@pages/home";
import Courses from "@pages/courses";
import Lessons from "@pages/lessons";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/lessons/:courseId" element={<Lessons />} />
    </Routes>
  );
}

export default App;
