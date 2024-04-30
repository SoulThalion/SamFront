import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.service";
import UsersTable from "../components/UsersTable";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await getAllUsers();
      console.log(data);
      setUsers(data);
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="text-white" style={{ backgroundColor: "#1c1d20" }}>
      
      <div className="flex justify-center items-center h-screen text-white">
        <UsersTable users={users}/>
      </div><h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">Users</h1>
    </div>
  );
};

export default Users;
