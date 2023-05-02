import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { searchByTitle } from "../redux/featuers/filter/filterSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");

  const debounceHandler = (fn, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };
  const doSearch = (value) => {
    setSearchTerm(value);
  };

  const handleSearch = debounceHandler(doSearch, 500);

  useEffect(() => {
    dispatch(searchByTitle(searchTerm));
  }, [searchTerm]);

  return (
    <nav className="container relative py-3">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={logo} />
        </Link>
        <div className="flex-1 max-w-xs search-field group">
          <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
          <input
            type="text"
            placeholder="Search Task"
            className="search-input"
            id="lws-searchTask"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
