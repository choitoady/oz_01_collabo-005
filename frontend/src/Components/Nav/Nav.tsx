import React, { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import "./Nav.css";

function Nav(): JSX.Element {
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const toggleSearch = (): void => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="Nav-container">
      <div className="header-box">
        <div className="Logo">LANDING</div>
        <div className="navbar-button-box">
          {showSearch && (
            <form className="search-screen">
              <label>
                <input
                  className="searchInput"
                  type="text"
                  placeholder="어떤 모임을 찾으시나요?"
                />
                <button type="submit" className="inScreen-search">
                  <FiSearch />
                </button>
              </label>
            </form>
          )}
          <div className="icon-container">
            <button className="search-button" onClick={toggleSearch}>
              {showSearch ? <RxCross1 size={27} /> : <FiSearch size={27} />}
            </button>
            <button className="user-button">
              <BsPersonCircle size={27} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
