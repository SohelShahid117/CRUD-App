import { Link } from "react-router-dom";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    console.log("add user is working");
    const form = e.target;
    const fName = form.firstName.value;
    const lName = form.lastName.value;
    const uName = form.userName.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(fName, lName, uName, email, password);
    const newUser = { fName, lName, uName, email, password };
    console.log(newUser);

    //send data to server
    //CREATE
    fetch("https://crud-app-server-eight.vercel.app/addUser", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("user created successfully");
        }
      });
    form.reset("");
  };

  return (
    <div className="text-center mx-auto bg-orange-5 my-10 ">
      <Link to="/" className="btn my-5 text-lg font-bold bg-amber-300">
        Show All User?Go Home Page
      </Link>
      <h2 className="text-2xl mt-10 underline">Add New User</h2>
      <form
        className="mx-auto w-1/2 justify-center items-center"
        onSubmit={handleAddUser}
      >
        <div className="label">
          <span className="label-text text-lg">Your First name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="firstName"
            placeholder="Type first name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text text-lg">Your Last name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="lastName"
            placeholder="Type last name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text text-lg">Your Username name?</span>
        </div>
        <div className="mb-5">
          <input
            type="text"
            name="userName"
            placeholder="Type User name here"
            className="input input-bordered w-full"
          />
        </div>
        <div className="label">
          <span className="label-text text-lg">Your Email?</span>
        </div>
        <div className="mb-5">
          <input
            type="email"
            name="email"
            placeholder="Type email here"
            className="input input-bordered w-full"
          />
        </div>

        <div className="label">
          <span className="label-text text-lg">Your Password?</span>
        </div>
        <div className="mb-5">
          <input
            type="password"
            name="password"
            placeholder="Type password here"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <input
            type="submit"
            value="Add User"
            className="input input-bordered w-full bg-amber-300 cursor-pointer text-xl font-bold"
          />
        </div>
      </form>
    </div>
  );
};

export default AddUser;
