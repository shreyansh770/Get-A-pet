import React, { Component } from "react";

class Navbar extends Component {
  state = {
    animalTypes: [
      {
        kind: "dog",
        breed: "Havanese",
      },
      {
        kind: "bird",
        breed: "Havanese",
      },
    ],
  };

  componentDidMount() {
    fetch("/animals")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.setState({ animalTypes: json });
      });
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Get-A-Pet
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Animal-Type
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    {this.state.animalTypes.map((type) => {
                      return (
                        <a class="dropdown-item" href="#" onClick={(e) => {
                          console.log(e)
                        }}>
                          {type.kind}
                        </a>
                      );
                    })}
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Breed
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#"></a>
                  </li>
                  <li>
                    {this.state.animalTypes.map((type) => {
                      return (
                        <a class="dropdown-item" href="#">
                          {type.breed}
                        </a>
                      );
                    })}
                  </li>
                </ul>
              </li>
            </ul>

            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="City Name"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
