import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/admin/home").then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="container-xxl flex-grow-1 container-p-y">
        <div className="row">
          <div className="col-lg-12 col-md-4 order-1">
            <div className="row">
              {loading === true ? (
                <>
                  <h1>Loading Dashboard.....</h1>
                </>
              ) : (
                <>
                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Admins</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.admins}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Unverified Agents</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.unverified_agents}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Verified Agents</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.verified_agents}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Users</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.users}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Number Of Payments</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.nop}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Contacts Requested</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.tca}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-12 col-6 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <div className="card-title d-flex align-items-start justify-content-between">
                          <div className="avatar flex-shrink-0">
                            <img
                              src="../assets/img/icons/unicons/wallet-info.png"
                              alt="Credit Card"
                              className="rounded"
                            />
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn p-0"
                              type="button"
                              id="cardOpt6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <i className="bx bx-dots-vertical-rounded" />
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-end"
                              aria-labelledby="cardOpt6"
                            >
                              <a className="dropdown-item" href="#/">
                                View More
                              </a>
                            </div>
                          </div>
                        </div>
                        <span>Total Contacts Requests Completed</span>
                        <h3 className="card-title text-nowrap mb-1">
                          {data.tcd}
                        </h3>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
