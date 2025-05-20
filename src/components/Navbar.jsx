
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { 
  Menu, 
  X, 
  User, 
  LogOut, 
  ChevronDown 
} from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import useAuth from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useAuth();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Gardeners", path: "/explore-gardeners" },
    { name: "Browse Tips", path: "/browse-tips" },
    { name: "Share a Garden Tip", path: "/share-tip", private: true },
    { name: "My Tips", path: "/my-tips", private: true },
  ];

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center gap-2 font-bold text-xl text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6"
              >
                <path d="M12 2a9 9 0 0 0-9 9c0 4.17 2.84 7.67 6.69 8.69a2 2 0 0 1-.16.66c-.05.23-.15.46-.3.66-.15.2-.33.39-.54.54-.21.15-.44.25-.66.3-.23.05-.46.05-.69.05-.5 0-.99-.11-1.44-.32M21.92 16.92c-.7.55-1.56.98-2.48 1.21-.92.23-1.88.27-2.82.13-.95-.14-1.85-.47-2.67-.97a8.18 8.18 0 0 1-2-1.79c-.54-.65-.96-1.39-1.25-2.19a7.88 7.88 0 0 1-.42-2.47V9.62c0-.86.14-1.7.4-2.5.26-.81.65-1.55 1.15-2.21C12.33 4.25 13 3.68 13.76 3.26c.76-.42 1.58-.69 2.43-.84.85-.15 1.71-.15 2.56 0 .85.14 1.67.42 2.43.84.76.42 1.43.99 1.99 1.65.56.66.99 1.41 1.3 2.21.3.8.49 1.64.53 2.5"/>
              </svg>
              GreenGarden
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => {
                if (link.private && !user) return null;
                return (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-accent hover:text-accent-foreground"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative rounded-full p-0 h-10 w-10">
                    {user.photoURL ? (
                      <img
                        src={user.photoURL}
                        alt={user.displayName || "User"}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                        <User size={18} />
                      </span>
                    )}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    {user.displayName || "User"}
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logOut}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login">
                <Button variant="default">Login / Sign Up</Button>
              </Link>
            )}
          </div>
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.private && !user) return null;
              return (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent hover:text-accent-foreground"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              );
            })}
            {user ? (
              <div className="border-t border-border pt-2 mt-2">
                <div className="flex items-center px-3 py-2">
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt={user.displayName || "User"}
                      className="h-9 w-9 rounded-full object-cover"
                    />
                  ) : (
                    <span className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      <User size={18} />
                    </span>
                  )}
                  <span className="ml-3 text-foreground font-medium">
                    {user.displayName || user.email}
                  </span>
                </div>
                <button
                  onClick={() => {
                    logOut();
                    toggleMenu();
                  }}
                  className="w-full flex items-center px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                >
                  <LogOut size={18} className="mr-2" />
                  Log out
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block px-3 py-2 text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
              >
                Login / Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
