import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  //READ Data
  useEffect(() => {
    const getAllUser = async () => {
      const responseData = await axios.get(
        "https://crud-app-server-eight.vercel.app/getAllUser"
      );
      console.log(responseData);
      console.log(responseData.data);
      setUsers(responseData.data);
    };
    getAllUser();
  }, []);

  console.log(users);

  //DELETE
  const handleDelete = (id) => {
    console.log("delete", id);
    // fetch(`https://crud-app-server-eight.vercel.app/deleteAUser/${id}`, {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.deletedCount) {
    //       alert("deleted successfully");
    //       const remainingUser = users.filter((u) => u._id != id);
    //       console.log(remainingUser);
    //       setUsers(remainingUser);
    //     }
    //   });
    axios
      .delete(`https://crud-app-server-eight.vercel.app/deleteAUser/${id}`)
      .then((data) => {
        console.log(data.data);
        if (data.data.deletedCount) {
          alert("deleted sucessfully");
          const remainingUser = users.filter((u) => u._id != id);
          console.log(remainingUser);
          setUsers(remainingUser);
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="text-center mx-auto my-10">
      <h2>Hello Users</h2>
      <Link to="/addUser" className="btn my-5 text-lg font-bold bg-amber-300">
        Add User ? Go add user Page
      </Link>
      <h2 className="p-10 text-2xl underline">All Users In Here-Home Page</h2>
      <div className="overflow-x-auto ">
        <table className="table border-2 border-orange-900 text-center text-lg">
          {/* head */}
          <thead className="border-2 border-orange-900">
            <tr className="text-xl font-bold bg-green-100 text-black border-2 border-orange-900">
              <th className="border-2 border-orange-900">S/N</th>
              <th className="border-2 border-orange-900">User Name</th>
              <th className="border-2 border-orange-900">Email</th>
              <th className="border-2 border-orange-900">Edit</th>
              <th className="border-2 border-orange-900">Delete</th>
              {/* <th className="text-center"> Actions</th> */}
            </tr>
          </thead>
          <tbody className="border-2 border-y-2">
            {users.map((user, index) => {
              return (
                <tr
                  className="bg-orange-50 text-center border-2 border-orange-900"
                  key={user._id}
                >
                  <th className="border-2 border-orange-900">{index + 1}</th>
                  <td className="border-2 border-orange-900">{user.uName}</td>
                  <td className="border-2 border-orange-900">{user.email}</td>
                  <td className="border-2 border-orange-900">
                    <Link
                      to={`/editOneUser/${user._id}`}
                      className="btn bg-info text-white text-2xl"
                    >
                      <FaRegEdit />
                    </Link>
                  </td>
                  <td className="border-2 border-orange-900">
                    <Link
                      className="btn bg-red-600 text-white text-2xl"
                      onClick={() => handleDelete(user._id)}
                    >
                      <MdDeleteOutline />
                    </Link>
                  </td>
                  {/* <td className="btn-warning btn">Edit</td>
            <td className="btn-error btn text-right">Delete</td> */}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
