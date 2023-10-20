import { Link, NavLink } from "react-router-dom";
import userimg from "../../assets/Logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  // const user = "ss"
  const [click, setClick] = useState(false);
  const [clickb, setClickb] = useState(false);

  const hndleClick = () => {
    setClick(!click);
  };
  const handlelogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign-out successful");
        setUser(null);
        setClick(!click);
      })
      .catch((error) => {
        console.log(error.massage);
      });
  };

  const toggleNav = () => {
    setClickb(!clickb);
  };

  return (
    <nav className="bg-white border-gray-200 relative dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"} className="flex items-center">
          <img
            src="https://i.ibb.co/3MmnJW0/download.png"
            className="h-8 mr-3"
          />
          <span className="self-center text-blue-500 text-2xl font-extrabold whitespace-nowrap">
            Hunter IT
          </span>
        </Link>
        <div className="flex items-center md:order-2">
          {user ? (
            <button
              onClick={hndleClick}
              type="button"
              className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={user.photoURL ? user.photoURL : userimg}
                alt="user photo"
              />
            </button>
          ) : (
            <NavLink to={"login"}>
              <button className="py-2 px-4 rounded-lg text-white font-bold bg-blue-500">
                Login
              </button>
            </NavLink>
          )}

          {/* <!-- Dropdown menu --> */}
          <div
            className={`z-50 absolute ${
              click ? "top-12" : "-top-96"
            } duration-100 right-4 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
          >
            <div className="px-4 py-3">
              <span className="block text-sm text-gray-900 dark:text-white">
                {user?.displayName ? user?.displayName : "User Name"}
              </span>
              <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">
                {user?.email ? user?.email : "User E-mail"}
              </span>
            </div>
            <ul className="py-2" aria-labelledby="user-menu-button">
              <li>
                <Link
                  onClick={() => setClick(!click)}
                  to={"/cart"}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  My Cart
                </Link>
              </li>
              <li>
                <button
                  onClick={handlelogout}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path stroke="currentColor" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div
          className={`${clickb ? "" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-700 underline block py-2 pl-3 pr-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                }
              >
                Home
              </NavLink>
            </li>
            {user && (
              <>
                <li>
                  <NavLink
                    to={"/profile"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline block py-2 pl-3 pr-4"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                    }
                  >
                    Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/cart"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline block py-2 pl-3 pr-4"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                    }
                  >
                    My Cart
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/addproduct"}
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-blue-700 underline block py-2 pl-3 pr-4"
                        : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                    }
                  >
                    AddProduct
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <NavLink
                to={"/contact"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-700 underline block py-2 pl-3 pr-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/about"}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-blue-700 underline block py-2 pl-3 pr-4"
                    : "block py-2 pl-3 pr-4 text-gray-900 rounded"
                }
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
