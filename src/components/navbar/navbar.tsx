import React from "react";
import "./navbar.css"; // Import the CSS file

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-section">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Toki_pona.svg"
          alt="Toki Pona"
        />
      </div>
      <div className="nav-section">More stuff</div>
    </nav>
  );
};

export default Navbar;

// return (
// <nav>
//   <ul>
//     <div>
//       <li>
//         <NavLink
//           to="/"
//           end
//           className={({ isActive }) => (isActive ? "active" : "")}
//         >
//           Home
//         </NavLink>
//       </li>
//     </div>
//     <div>
//       <li>
//         {isLoggedIn ? (
//           <div>
//             <span>{"userName"}</span>
//             <button onClick={handleLogoutClick}>Logout</button>
//             <NavLink
//               to="/account"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Account Management
//             </NavLink>
//           </div>
//         ) : (
//           <button onClick={handleLoginClick}>
//             <NavLink
//               to="/auth/login"
//               className={({ isActive }) => (isActive ? "active" : "")}
//             >
//               Login
//             </NavLink>
//           </button>
//         )}
//       </li>
//     </div>
//   </ul>
// </nav>
