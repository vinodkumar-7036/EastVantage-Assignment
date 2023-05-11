import React, { useEffect, useState } from "react";
import "./UserDetails.css";
import { getUserDetails } from "./userDetails.api";
function UserDetailsTable() {
  const [userData, setUserData] = useState<any>({});
  const [isRefresh, setIsRefresh] = useState<boolean>(true);

  useEffect(() => {
    if (isRefresh) {
      getUserDetails(setIsRefresh);
    } else {
      const userDetails =
        localStorage.getItem("UserDetails") !== null &&
        typeof localStorage.getItem("UserDetails")
          ? JSON.parse(localStorage.getItem("UserDetails") || "")
          : {};
      setUserData(userDetails);
    }
  }, [isRefresh]);
  return (
    <div className="table-container">
      <div className="table-top">
        <h2>User Details </h2>
        <button
          className="button-content"
          onClick={() => {
            setIsRefresh(true);
          }}
        >
          Refresh
        </button>
      </div>
      <table className="content-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {userData?.results?.map((val: any, ind: number) => (
            <tr key={ind}>
              <td>{`${val?.name?.title}. ${val?.name?.first} ${val?.name?.last}`}</td>
              <td>{val?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserDetailsTable;
