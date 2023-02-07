import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../Layout/Header";
import Nav from "../../Layout/Nav";

const AddAdmins = () => {
  let axiosConfig = {
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
    },
  };

  const [admin, setAdmin] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdmin((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = async () => {
    if (
      admin.name === "" ||
      admin.email === "" ||
      admin.password === "" ||
      admin.phone === ""
    ) {
      toast.error("Fill the whole Form", {
        id: "11",
      });
    } else {
      await axios
        .post(process.env.REACT_APP_API + "admin/add", admin, axiosConfig)
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            toast.success("Data Added Succuessfully");
            setTimeout(() => {
              window.location.href = "/Admins";
            }, 1200);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              {/* Content */}
              <div className="container-xxl flex-grow-1 container-p-y">
                <h4 className="fw-bold py-3 mb-4">
                  <span className="text-muted fw-light">APP_NAME /</span> Add
                  Admins
                </h4>
                {/* Basic Layout */}
                <div className="row">
                  <div className="col-xl">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="John Doe"
                            defaultValue={admin.name}
                            name="name"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="test@gmail.com"
                            defaultValue={admin.email}
                            name="email"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Phone Number
                          </label>
                          <input
                            type="number"
                            className="form-control"
                            defaultValue={admin.webemail}
                            placeholder="+1 1256456897"
                            name="phone"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="mb-3">
                          <label
                            className="form-label"
                            htmlFor="basic-default-fullname"
                          >
                            Password
                          </label>
                          <input
                            type="password"
                            className="form-control"
                            defaultValue={admin.password}
                            placeholder="Password....."
                            name="password"
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <button
                          type="submit"
                          className="btn btn-primary"
                          onClick={handleSubmit}
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddAdmins;
