import { useEffect, useState } from "react";
import { getAllUsers } from "../services/users.service";
import UsersTable from "../components/UsersTable";
import NewUser from "../components/NewUser";
import EditUser from "../components/EditUser";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [newButton, setNewButton] = useState(false)
  const [editButton, setEditButton] = useState(false)
  const [editUserData, setEditUserData] = useState([])
  console.log(editButton)

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await getAllUsers();
      setUsers(data);
    };

    fetchAllUsers();
  }, []);

  return (
    <div className="text-white" style={{ backgroundColor: "#1c1d20" }}>
      <div className="flex justify-center items-center h-screen text-white">
        {newButton ? (
          <>
            <NewUser setNewButton={setNewButton} newButton={newButton}/>
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">Nuevo Usuario</h1>
          </>
        ) : editButton ? (
          <>
            <EditUser editUserData={editUserData} setEditButton={setEditButton} editButton={editButton}/>
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">Editar Usuario</h1>
          </>
        ) : (
          <>
            <UsersTable users={users} setNewButton={setNewButton} newButton={newButton} setEditUserData={setEditUserData} setEditButton={setEditButton} editButton={editButton}/>
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">Usuarios</h1>
          </>
        )}

        
      </div>
    </div>
  );
  
  
};

export default Users;
