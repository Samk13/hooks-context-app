import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1 className="text-4xl text-center font-black p-5">Context App</h1>
        <ul className="bg-gray-800 text-white flex p-2 space-x-4 text-2xl  border rounded-xl justify-around">
          <li className="">home</li>
          <li>about</li>
          <li>contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
