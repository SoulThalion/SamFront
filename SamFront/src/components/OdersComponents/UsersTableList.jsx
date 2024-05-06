import { useEffect, useState } from "react";
import UsersTableRow from "./UsersTableRow";
import PropTypes from "prop-types";

const UsersTableList = ({
  filteredUsers,
  setEditUserData,
  setEditButton,
  editButton,
  deleteButton,
  setDeleteButton,
  view,
  setView,
  document,
  setDocument,
}) => {
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768); // Considerando una anchura de 768px para determinar vista de móvil
    };

    handleResize(); // Verificar tamaño inicial
    window.addEventListener("resize", handleResize); // Escuchar cambios de tamaño
    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el listener al desmontar el componente
    };
  }, []);

  const formattedUsers = filteredUsers.map((filteredUser) => (
    <>
      {isMobileView ? (
        <table className="text-sm text-left rtl:text-right text-white w-screen">
          <tbody>
            <tr
              key={filteredUser.id}
              className="bg-[#21212d] text-white hover:bg-[#323337]"
            >
              <UsersTableRow
                id={filteredUser.id}
                appointment={filteredUser.appointment}
                work={filteredUser.work}
                hours={filteredUser.hours}
                finish={filteredUser.finish}
                userId={filteredUser.userId}
                shipId={filteredUser.shipId}
                clientId={filteredUser.clientId}
                observations={filteredUser.observations}
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
            </tr>
          </tbody>
        </table>
      ) : (
        <tr
          key={filteredUser.id}
          className="bg-[#21212d] text-white hover:bg-[#323337] border-b border-t border-[#58aaae]"
        >
          <UsersTableRow
            id={filteredUser.id}
            appointment={filteredUser.appointment}
            work={filteredUser.work}
            hours={filteredUser.hours}
            finish={filteredUser.finish}
            userId={filteredUser.userId}
            shipId={filteredUser.shipId}
            clientId={filteredUser.clientId}
            observations={filteredUser.observations}
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
        </tr>
      )}
    </>
  ));

  return <>{formattedUsers}</>;
};

UsersTableList.propTypes = {
  filteredUsers: PropTypes.array,
  setEditUserData: PropTypes.func,
  editButton: PropTypes.bool,
  setEditButton: PropTypes.func,
  setDeleteButton: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default UsersTableList;
