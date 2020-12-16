import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="mt-4 text-3xl flex justify-center">
        <ul className="space-y-2">
          <li className="hover:bg-gray-600 rounded-lg p-2 cursor-pointer">
            the way of kings
          </li>
          <li className="hover:bg-gray-600 rounded-lg p-2 cursor-pointer">
            the name of the wind
          </li>
          <li className="hover:bg-gray-600 rounded-lg p-2">the final Empire</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
