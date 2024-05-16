import { Component } from "react";

export class Nabvar extends Component {
  render() {
    return (
      <div className="ml-2 mt-16 head ">
        <ul className="flex">
          <li className="mr-6 ">
            <a
              className="text-black font-medium hover:underline text-xl"
              href="#"
            >
              About Me
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-medium hover:underline text-xl"
              href="#"
            >
              Technologies
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-medium hover:underline text-xl"
              href="#"
            >
              Projects
            </a>
          </li>
          <li className="mr-6">
            <a
              className="text-black font-medium hover:underline  text-xl"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nabvar;
