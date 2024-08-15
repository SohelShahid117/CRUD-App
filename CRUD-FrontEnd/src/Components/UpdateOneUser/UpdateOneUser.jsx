import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { js } from "@eslint/js";

const UpdateOneUser = () => {
  const { id } = useParams();
  console.log("update-->", id);

  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      // .get(`https://crud-app-server-eight.vercel.app/getAOneUser/${id}`)
      .get(`https://crud-app-server-24m9.vercel.app/getAOneUser/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setUser(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(user);

  const handleUpdateUser = (e) => {
    e.preventDefault();
    console.log("update user is working");
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const uName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(fName, lName, uName, email, password);
    const updateUser = { fName, lName, uName, email, password };
    console.log(updateUser);

    fetch(`https://crud-app-server-24m9.vercel.app/updateOneUser/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          alert("user updated successfully");
        }
      });

    form.reset("");
  };

  return (
    <div className="text-center mx-auto bg-orange-5 my-10 ">
      <Link to="/" className="btn my-5 text-lg font-bold bg-amber-300">
        Show All User?Go Home Page
      </Link>
      <h2 className="text-2xl mt-10 underline">Update User</h2>
      <form
        className="mx-auto w-1/2 justify-center items-center"
        onSubmit={handleUpdateUser}
      >
        <div className="label">
          <span className="label-text">Your First name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="firstName"
            defaultValue={user.fName}
            placeholder="Type first name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text">Your Last name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="lastName"
            defaultValue={user.lName}
            placeholder="Type last name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text">Your Username name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="userName"
            defaultValue={user.uName}
            placeholder="Type User name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text">Your Email?</span>
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            defaultValue={user.email}
            placeholder="Type email here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="label">
          <span className="label-text">Your Password?</span>
        </div>
        <div className="mb-5">
          <input
            type="password"
            name="password"
            defaultValue={user.password}
            placeholder="Type password here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Update User"
            className="input input-bordered w-full bg-amber-300 cursor-pointer text-lg font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateOneUser;
