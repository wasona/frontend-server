import { Login } from "@pages/auth/login";
import { Signup } from "@pages/auth/signup";
import { Courses } from "@pages/courses";
import { Home } from "@pages/home";
import { Lessons } from "@pages/lessons";
import { Route, Routes } from "react-router-dom";

export const App = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/auth/signup" element={<Signup />} />
    <Route path="/auth/login" element={<Login />} />
    <Route path="/courses" element={<Courses />} />
    <Route path="/lessons/:courseId" element={<Lessons />} />
  </Routes>
);
