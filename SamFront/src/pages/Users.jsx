import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.service";

const Users = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await getAllUsers()
      console.log(data)
      setUsers(data)
    }

    fetchAllUsers()

  }, [])

  return (
    <>
      <div className="flex justify-center items-center h-screen text-white" style={{ backgroundColor: "#1c1d20" }}>
        <h1 className="text-4xl text-center mb-4">Users</h1>
        <div>{users}</div>
      </div>
    </>
  );
};

export default Users;
