import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import Header from "../../Layout/Header";
import Nav from "../../Layout/Nav";

const VerifySingleAgent = () => {
  const [agent, setAgent] = useState();

  const [loading, setLoading] = useState(true);

  const params = useParams();

  const handleApprove = () => {
    axios
      .post(
        "http://localhost:5000/agent/update_agent/" + params.id + "/approve"
      )
      .then((res) => {
        toast.success("Id Updated Successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDecline = () => {
    axios
      .post(
        "http://localhost:5000/agent/update_agent/" + params.id + "/decline"
      )
      .then((res) => {
        toast.success("Id Updated Successfully");
        setTimeout(() => {
          window.location.href = "/";
        }, 500);
      });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/agent/get_single_agent/" + params.id)
      .then((res) => {
        if (res.data === null) {
          window.location.href = "/danger";
        } else {
          setAgent(res.data);
          setLoading(false);
        }
      });
  }, [params.id]);

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="card mb-4">
                  <h5 className="card-header">Profile Details</h5>
                  {/* Account */}
                  {loading === true ? (
                    <>
                      <div className="card-body">
                        <h5>Loading Profile Data....</h5>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="card-body">
                        <div className="d-flex align-items-start align-items-sm-center gap-4">
                          <img
                            src="https://i.ibb.co/LhVypFg/image-removebg-preview.png"
                            alt="user-avatar"
                            className="d-block rounded"
                            height={100}
                            width={100}
                            id="uploadedAvatar"
                          />
                          <div className="button-wrapper">
                            <label
                              htmlFor="upload"
                              className=" me-2 mb-4"
                              tabIndex={0}
                            >
                              <h3>{agent.name}</h3>
                            </label>
                          </div>
                        </div>
                      </div>
                      <hr className="my-0" />
                      <div className="card-body">
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label htmlFor="firstName" className="form-label">
                              Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="firstName"
                              name="firstName"
                              Value={agent.name}
                              autofocus
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="lastName" className="form-label">
                              Email
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              name="lastName"
                              id="lastName"
                              value={agent.email}
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="email" className="form-label">
                              Phone Number
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={agent.phone}
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label
                              htmlFor="organization"
                              className="form-label"
                            >
                              CITY
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="organization"
                              name="organization"
                              value={agent.city}
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="phoneNumber">
                              Insurance Brand
                            </label>
                            <div className="input-group input-group-merge">
                              <input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                className="form-control"
                                placeholder="202 555 0111"
                                value={agent.brand}
                                disabled
                              />
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="address" className="form-label">
                              Insurance Type
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="address"
                              name="address"
                              placeholder="Address"
                              value={agent.type}
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="state" className="form-label">
                              Insurance Category
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="state"
                              name="state"
                              placeholder="California"
                              value={agent.category}
                              disabled
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="timeZones" className="form-label">
                              View Document
                            </label>
                            <a
                              href={agent.document}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <butto className="btn btn-primary form-control">
                                View Uploaded Document
                              </butto>
                            </a>
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                            onClick={handleApprove}
                          >
                            Approve
                          </button>
                          <button
                            type="reset"
                            className="btn btn-outline-secondary"
                            onClick={handleDecline}
                          >
                            Decline
                          </button>
                        </div>
                      </div>
                    </>
                  )}

                  {/* /Account */}
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

export default VerifySingleAgent;
