import Link from "next/link";
import React, { useContext } from "react";
import Search from "./Search";
import { FaSignOutAlt, FaSignInAlt } from "react-icons/fa";

export default function Header() {
  // const {user,logout} =useContext(AuthContext)
  const user = true;
  return (
    <header>
      <div>
        <Link href="/">
          <a>Hackthon Events</a>
        </Link>
      </div>
      <Search />
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <a>Events</a>
            </Link>
          </li>
          {user ? (
            // If logged in
            <>
              <li>
                <Link href="/events/add">
                  <a>Add Event</a>
                </Link>
              </li>
              <li>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
              </li>
              <li>
                <button onClick={() => logout()} className="">
                  <FaSignOutAlt />
                  Logout
                </button>
              </li>
            </>
          ) : (
            //if logged out
            <>
              <li>
                <Link href="/account/login">
                  <a className="">
                    <FaSignInAlt /> Login
                  </a>
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}
