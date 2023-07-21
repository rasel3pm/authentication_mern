import axios from "axios";
import { useState, useEffect } from "react";
const UserTable = () => {
  const [user, setUser] = useState([]);
  const dataFetch = () => {
    axios
      .get("https://authentication-mern-beta.vercel.app/api/v1/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => console.log("not found", err));
  };
  useEffect(() => dataFetch(), [user]);
  return (
    <div>
      <table class="table table-striped table-hover table-sm table-responsive shadow-sm">
        <thead className="table-success">
          <tr className="">
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Contact</th>
            <th scope="col">Designation</th>
            <th scope="col">Salary</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.fName}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
