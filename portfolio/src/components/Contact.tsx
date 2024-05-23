import React, { useState } from "react";
import axios from "axios";
import { message } from "antd";
const Contact: React.FC = () => {
  const [data, setData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const handleChange = async (e: any) => {
    const { name, value } = e.target;

    setData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    axios
      .post("https://formspree.io/f/xbjeojob", {
        name: data.nombre,
        email: data.email,
        message: data.mensaje,
      })
      .then(() => {
        message.success("THANK YOU! I WILL BE CONTACTING YOU SOON");
        setData({
          nombre: "",
          email: "",
          mensaje: "",
        });
      })
      .catch(() => {
        message.error("SOMETHING WENT WRONG. TRY AGAIN");
      });
  };

  return (
    <div className=" min-h-screen align-middle contact bg-white flex flex-col text-black text-xl font-medium ">
      <h2 className="text-lx2 font-bold pt-4">
        Contact me bellow, or you just can visit my LinkedIn and Github
        profiles.
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col mt-8">
        <label htmlFor="name">Name</label>
        <input
          name="nombre"
          type="name"
          // placeholder="Name"
          value={data.nombre}
          className="mt-4 mb-3 p-2 border border-slate-950 rounded"
          onChange={handleChange}
        />
        <label htmlFor="inputEmail">Email address</label>
        <input
          name="email"
          type="email"
          id="inputEmail"
          className="mt-4 mb-3 p-2 border w-18 border-slate-950 rounded"
          // placeholder="Email address"
          value={data.email}
          onChange={handleChange}
        />

        <label>Message</label>
        <textarea
          name="mensaje"
          // placeholder="Write your message here"

          value={data.mensaje}
          className="mt-4 mb-3 p-2 h-60 border-slate-950 border rounded"
          onChange={handleChange}
        />
        <button className="w-[70px] h-[50px] mt-4 mb-2 p-2 shadow-inner bg-[#ff0] rounded pl-50 flex items-center justify-center hover:bg-white hover:border">
          Send
        </button>
      </form>
      <footer className="flex flex-col justify-between mt-4 text-medium text-xl border-t-[1px] border-t-black">
        <ul className="flex flex-row justify-evenly mt-12  ">
          <li className="hover:underline">
            <a href="https://linkedin.com/in/hernán-duarte-b70a90291">
              LinkedIn
            </a>
          </li>
          <br />
          <li className="hover:underline">
            <a href="https://github.com/hernan789">GitHub</a>
          </li>
        </ul>
        <ul className="mt-10 text-base text-center b-l-[1px] border-l-black mb-8 ">
          <li>Copyright © 2024 Hernán Duarte. All Rights Reserved</li>
        </ul>

        <div></div>
      </footer>
    </div>
  );
};

export default Contact;
