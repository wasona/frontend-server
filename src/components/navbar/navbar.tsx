import React from "react";
import "./navbar.css"; // Import the CSS file
import FormButton from "../formbutton/formbutton";

const Navbar: React.FC = () => {
  return (
    <nav>
      <div className="nav-section">
        <span className="logo">Wasona</span>
      </div>
      <div className="nav-section">
        {
          <FormButton
            className="dark-mode-toggle"
            children={
              <>
                <img src="/src/assets/dark_mode.svg" alt="Dark Mode Toggle" />
              </>
            }
          ></FormButton>
        }
        <FormButton className="sign-in">
          <span className="sign-in-text">sign in</span>
        </FormButton>
      </div>
    </nav>
  );
};
// Ill wait for you to get it working and show what that looks like
// but in general, keep in mind that the className, children etc etc will likely be
// empty in most circumstances, for a clean entry point ykno?
//
// i suspect the final product would look something like
// <FormButton href="/auth/signin">
//   Sign in
// </FormButton>
// and all the style, etc will happen inside the component
// but for now, just get it running and see what we need to adjust
//

// hmm yeah i can kind of see what you mean; sign-in would need to dynamically be populated with, say, 'account'

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
