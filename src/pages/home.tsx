import React from "react";
import "./home.css";
import Navbar from "@components/navbar";
import Blurb from "@components/home-blurb";

// suggestion: comment out instead of deleting, maybe we'll make use of some'

const Home: React.FC = () => {
  return (
    <div className="HomeScreen">
      <Navbar />
      <div className="widthLimitWrapper">
        <Blurb />
      </div>
      <p>
        This site is free and open source (AGPL). The course is Creative Commons
        (CC-BY-SA). Help us by contributing on Github!
      </p>
      <div></div>
    </div>
  );
};

export default Home;

// const Home: React.FC = () => {
//   return (
//     <div>
//       <header>
//         <h1>Wasona</h1>
//         <p>A modern website for learning Toki Pona.</p>
//       </header>
//       <section>
//         <h2>About Toki Pona</h2>
//         <p>it's a cool little conlang</p>
//       </section>
//       <section>
//         <h2>Getting Started</h2>
//         <ul>
//           <li>
//             <a href="/vocabulary">Practice vocabulary</a>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// };
