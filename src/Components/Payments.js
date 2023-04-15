import axios from "axios";
import moment from "moment/moment";
import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Nav from "../Layout/Nav";

const Payments = () => {
  const [payment, setPayments] = useState([]);

  const [loading, setLoading] = useState(true);

  const [currentPage, setCuurentPage] = useState(1);
  const recordsperPage = 13;
  const lastIndex = currentPage * recordsperPage;
  const firstIndex = lastIndex - recordsperPage;

  const records = payment.slice(firstIndex, lastIndex);

  const pages = Math.ceil(payment.length / recordsperPage);

  const numbers = [...Array(pages + 1).keys()].slice(1);

  useEffect(() => {
    axios
      .get("https://insurance-api-five.vercel.app/admins/payments/get")
      .then((res) => {
        setPayments(res.data);
        setLoading(false);
      });
  }, []);

  const nextPage = () => {
    if (currentPage !== pages) {
      setCuurentPage(currentPage + 1);
    }
  };

  const prePage = () => {
    if (currentPage !== 1) {
      setCuurentPage(currentPage - 1);
    }
  };

  const changePage = (n) => {
    setCuurentPage(n);
  };

  return (
    <>
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Header />
          <div className="layout-page">
            <Nav />
            <div className="content-wrapper">
              <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                  {loading === true ? (
                    <>
                      <h2>Loading Payments.....</h2>
                    </>
                  ) : (
                    <>
                      {payment === null ? (
                        <>
                          <h2>No Agents have Purchased Any Credits</h2>
                        </>
                      ) : (
                        <>
                          <div className="pagination">
                            <ul
                              style={{
                                display: "flex",
                                listStyle: "none",
                                gap: "15px",
                              }}
                            >
                              <li>
                                <a
                                  href="#/"
                                  className="btn btn-primary"
                                  onClick={prePage}
                                >
                                  Prev
                                </a>
                              </li>
                              {numbers.map((n, i) => (
                                <>
                                  <li key={i}>
                                    <a
                                      href="#/"
                                      className="btn btn-secondary"
                                      onClick={() => {
                                        changePage(n);
                                      }}
                                    >
                                      {n}
                                    </a>
                                  </li>
                                </>
                              ))}
                              <li>
                                <a
                                  href="#/"
                                  className="btn btn-primary"
                                  onClick={nextPage}
                                >
                                  Next
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="card">
                            <h5 className="card-header">Table Basic</h5>
                            <div className="table-responsive text-nowrap">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Agent name</th>
                                    <th>Agent Email</th>
                                    <th>Plan Purchased</th>
                                    <th>Agent Phone number</th>
                                    <th>Purchased On</th>
                                  </tr>
                                </thead>
                                <>
                                  {records.map((u, i) => (
                                    <>
                                      {u.agent_details.map((a, i) => (
                                        <>
                                          {console.log(records)}{" "}
                                          <tbody className="table-border-bottom-0">
                                            <tr>
                                              <td>
                                                <i className="fab fa-angular fa-lg text-danger me-3" />{" "}
                                                <strong>{a.name}</strong>
                                              </td>
                                              <td>{a.email}</td>

                                              <td>
                                                <span className="badge bg-label-primary me-1">
                                                  {u.plan}
                                                </span>
                                              </td>
                                              <td>{a.phone}</td>
                                              <td>
                                                {moment(u.createdAt).fromNow()}
                                              </td>
                                            </tr>
                                          </tbody>
                                        </>
                                      ))}
                                    </>
                                  ))}
                                </>
                              </table>
                            </div>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payments;
