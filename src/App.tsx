import "./App.css";
import { Route, Routes } from "react-router-dom";
// import Layout from "@components/navbar/layout";
import Signup from "@pages/signup/signup";
import Login from "@pages/login/login";
import Home from "@pages/home/home";

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<Layout />}> */}

      <Route index element={<Home />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/auth/login" element={<Login />} />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
