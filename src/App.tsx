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
              placeholder="Search"
            />
          </div>

          <span>
            <img src="../images/Vector-search.png" alt="Img 2" />
          </span>
        </div>

        <div className="action-items">
          <div className="action-buttons">
            <button>
              <span className="button-icon">+</span>
              <span>Create Template</span>
            </button>

            <button>
              <span className="button-icon">?</span>
              <span>Search Discovery</span>
            </button>
          </div>

          <select className="select-input" name="items" id="items">
            <option value="Alphabetically">Alphabetically</option>
          </select>
        </div>

        <div className="table-content">
          <table style={{ width: "100%" }}>
            <thead>
              <th style={{ width: "15%" }}>Assessment Type</th>
              <th style={{ width: "12%" }}>Subject</th>
              <th style={{ width: "10%" }}>Year</th>
              <th style={{ width: "15%" }}>Shared with</th>
              <th style={{ width: "15%" }}>Assessment Admin</th>
              <th style={{ width: "30%" }}>Skill Groups</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td style={{ width: "15%" }} className="assessment-type">
                  <span>
                    <img src="../images/Vector.png" alt="Img 1" />
                  </span>
                  <span>Critical Analysis</span>
                </td>
                <td style={{ width: "12%" }}>Literature</td>
                <td style={{ width: "10%" }}>7</td>
                <td style={{ width: "15%" }}>Alphington Grammar</td>
                <td style={{ width: "15%" }}>James Smith</td>
                <td style={{ width: "30%" }} className="pill-container">
                  <span className="pill pill-1">INTRO</span>
                  <span className="pill pill-2">WHAT</span>
                  <span className="pill pill-3">HOW</span>
                  <span className="pill pill-4">WHY</span>
                  <span className="pill pill-5">IMAGE</span>
                  <span className="pill pill-6">EXPRESSION</span>
                </td>
                <td>
                  <div className="dropdown">
                    <div className="dots-icon"></div>
                    <div className="dropdown-content">
                      <a href="#">Edit</a>
                      <a href="#">Duplicate</a>
                      <a href="#">Delete</a>
                      <a href="#">View template history</a>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td style={{ width: "15%" }} className="assessment-type">
                  Creative Writing
                </td>
                <td style={{ width: "12%" }}>Literature</td>
                <td style={{ width: "10%" }}>7</td>
                <td style={{ width: "15%" }}>Alphington Grammar</td>
                <td style={{ width: "15%" }}>Grace Elliott</td>
                <td style={{ width: "30%" }}></td>
                <td>
                  <div className="dropdown">
                    <div className="dots-icon"></div>
                    <div className="dropdown-content">
                      <a href="#">Edit</a>
                      <a href="#">Duplicate</a>
                      <a href="#">Delete</a>
                      <a href="#">View template history</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: "15%" }} className="assessment-type">
                  Descriptive Essay
                </td>
                <td style={{ width: "12%" }}>Literature</td>
                <td style={{ width: "10%" }}>8</td>
                <td style={{ width: "15%" }}>Public</td>
                <td style={{ width: "15%" }}></td>
                <td style={{ width: "30%" }}></td>
                <td>
                  <div className="dropdown">
                    <div className="dots-icon"></div>
                    <div className="dropdown-content">
                      <a href="#">Edit</a>
                      <a href="#">Duplicate</a>
                      <a href="#">Delete</a>
                      <a href="#">View template history</a>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td style={{ width: "15%" }} className="assessment-type">
                  <span>
                    <img src="../images/Vector.png" alt="Img 1" />
                  </span>
                  <span>Critical Analysis</span>
                </td>
                <td style={{ width: "12%" }}>Literature</td>
                <td style={{ width: "10%" }}>7</td>
                <td style={{ width: "15%" }}>Alphington Grammar</td>
                <td style={{ width: "15%" }}></td>
                <td style={{ width: "30%" }}></td>
                <td>
                  <div className="dropdown">
                    <div className="dots-icon"></div>
                    <div className="dropdown-content">
                      <a href="#">Edit</a>
                      <a href="#">Duplicate</a>
                      <a href="#">Delete</a>
                      <a href="#">View template history</a>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
