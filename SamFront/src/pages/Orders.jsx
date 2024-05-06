import { useEffect, useState } from "react";
import { getAllOrders } from "../services/orders.service";
import UsersTable from "../components/OdersComponents/UsersTable.jsx";
import NewUser from "../components/OdersComponents/NewUser.jsx";
import EditOrder from "../components/OdersComponents/EditOrder.jsx";
import SearchBar from "../components/OdersComponents/SearchBar.jsx";
import ViewOrder from "../components/OdersComponents/ViewOrder.jsx";
import { useContext } from "react";
import { UserContext } from "../context/userContext";

const Orders = () => {
  const [users, setUsers] = useState([]);
  const [newButton, setNewButton] = useState(false);
  const [editButton, setEditButton] = useState(false);
  const [deleteButton, setDeleteButton] = useState(false);
  const [editUserData, setEditUserData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [view, setView] = useState(false);
  const [document, setDocument] = useState({})
  const { user } = useContext(UserContext);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const data = await getAllOrders();
      setUsers(data);
    };

    fetchAllUsers();

    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Considerando una anchura de 768px para determinar vista de móvil
    };

    handleResize(); // Verificar tamaño inicial
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
    };
  }, [newButton, editButton, deleteButton]);

  const filteredUsers = users.filter((user) => {
    return Object.values(user).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value
          .toString()
          .toLowerCase()
          .includes(searchValue.toLowerCase());
      }
      return false;
    });
  });

  return (
    <div className="text-white bg-[#1c1d20] relative">
      <div className="flex justify-center lg:items-center lg:pt-0 h-screen text-white pt-40">
        {/* NewUser */}
        {newButton && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <NewUser setNewButton={setNewButton} newButton={newButton} />
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">
              Nueva Orden
            </h1>
          </div>
        )}

        {/* EditUser */}
        {editButton && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <EditOrder
              editUserData={editUserData}
              setEditUserData={setEditUserData}
              setEditButton={setEditButton}
              editButton={editButton}
            />
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">
              Editar Orden
            </h1>
          </div>
        )}

        {/* UsersTable */}
        <div
          className={`${
            newButton || editButton ? "opacity-50 pointer-events-none" : ""
          }`}
        >
          
          <div className="grid grid-cols-2 grid-rows-[50px 1fr] gap-4 mt-0 lg:mt-10">
            {user?.role === "admin" || user?.role === "manager" && 
            <div className="relative col-start-2 row-start-1">
              <SearchBar
                setSearchValue={setSearchValue}
                searchValue={searchValue}
              />
            </div>}
            <div className="col-span-2">
              <UsersTable
                filteredUsers={filteredUsers}
                setNewButton={setNewButton}
                newButton={newButton}
                setEditUserData={setEditUserData}
                setEditButton={setEditButton}
                editButton={editButton}
                deleteButton={deleteButton}
                setDeleteButton={setDeleteButton}
                view={view}
                setView={setView}
                document={document}
                setDocument={setDocument}
              />
            </div>
          </div>

          {!newButton && !editButton && (
            <h1 className="absolute top-20 right-5 text-4xl text-center mb-4 z-100">
              Ordenes
            </h1>
          )}
        </div>
      </div>
      {view && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <ViewOrder view={view} setView={setView} document={document}/>
        </div>
      )}
    </div>
  );
};

export default Orders;
