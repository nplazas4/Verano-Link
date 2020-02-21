import React, { Component } from "react";

class Pagination extends Component {
  render() {
    return (
      <div className="col l8 m8 s12">
        <ul className="pagination tc">
          <li className="disabled">
            <a href="#!">
              <i className="fas fa-chevron-left p9"></i>
            </a>
          </li>
          <li className="active">
            <a href="#!">1</a>
          </li>
          <li className="waves-effect">
            <a href="#!">2</a>
          </li>
          <li className="waves-effect">
            <a href="#!">3</a>
          </li>
          <li className="waves-effect">
            <a href="#!">4</a>
          </li>
          <li className="waves-effect">
            <a href="#!">5</a>
          </li>
          <li className="waves-effect">
            <a href="#!">
              <i className="fas fa-chevron-right p9"></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
