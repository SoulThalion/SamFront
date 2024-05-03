import UserPlusIcon from "../../icons/UserPlusIcon";
import UsersTableList from "./UsersTableList";
import ViewOrder from "./ViewOrder";
import PropTypes from "prop-types";
import { useState } from "react";

const UsersTable = ({
  filteredUsers,
  setNewButton,
  newButton,
  setEditUserData,
  editButton,
  setEditButton,
  deleteButton,
  setDeleteButton,
  view,
  setView,
  document,
  setDocument
}) => {
  return (
    <div
      className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll lg:max-h-[360px] xl:max-h-[500px]"
      style={{
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "thin",
        scrollbarColor: "#4b5563 #718096",
      }}
    >
      <table className="w-full text-sm text-left rtl:text-right text-white border border-[#58aaae]">
        <thead className="text-xs text-white uppercase bg-[#242529]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Id Cliente
            </th>
            <th scope="col" className="px-6 py-3">
              Id Barco
            </th>
            <th scope="col" className="px-6 py-3">
              Cita
            </th>
            <th scope="col" className="px-6 py-3">
              Trabajo
            </th>
            <th scope="col" className="px-6 py-3">
              Horas
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Id Mecánico
            </th>
            <th scope="col" className="px-6 py-3">
              Observaciones
            </th>
            <td></td>
            <td></td>
            <td>
              <button
                scope="col"
                className="px-4 py-3 border-l border-[#58aaae]"
              >
                <UserPlusIcon />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <UsersTableList
            filteredUsers={filteredUsers}
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
        </tbody>
      </table>
    </div>
  );
};

UsersTable.propTypes = {
  filteredUsers: PropTypes.array,
  setNewButton: PropTypes.func,
  newButton: PropTypes.bool,
  setEditUserData: PropTypes.func,
  editUser: PropTypes.bool,
  setEditUser: PropTypes.func,
  editButton: PropTypes.bool,
  setEditButton: PropTypes.func,
  setDeleteButton: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default UsersTable;
