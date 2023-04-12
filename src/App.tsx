import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="navbar">
          <div className="hamburger-icon" />

          <div className="user-profile-container">
            <span className="separator"></span>

            <div className="user-profile">
              <div className="icon"></div>
              <span className="name">James Smith</span>
            </div>
          </div>
        </div>
      </header>

      <main className="App-main">
        <div className="input-placeholder">
          <div className="input-placeholder-content">
            <span>
              <img src="../images/Vector-search.png" alt="Img 1" />
            </span>

            <input
              className="form-control"
              type="text"
              name="searchName"
              id="searchName"
              placeholder="Search By RoleName"
            />
          </div>

          <span>
            <img src="../images/Vector-search.png" alt="Img 2" />
          </span>
        </div>
      </main>
    </div>
  );
}

export default App;
