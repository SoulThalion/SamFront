import UserPlusIcon from "../../icons/UserPlusIcon";
import ShipsTableList from "./ShipsTableList";
import PropTypes from "prop-types";

const ShipsTable = ({
  ships,
  setNewButton,
  newButton,
  setEditUserData,
  editButton,
  setEditButton,
  deleteButton,
  setDeleteButton,
}) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg overflow-y-scroll lg:max-h-[100px] xl:max-h-[200px]" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'thin', scrollbarColor: '#4b5563 #718096' }}>
      <table className="w-full text-sm text-left rtl:text-right text-white border border-[#58aaae]">
        <thead className="text-xs text-white uppercase bg-[#242529]">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Modelo
            </th>
            <th scope="col" className="px-6 py-3">
              Marca
            </th>
            <th scope="col" className="px-6 py-3">
              Matricula
            </th>
            <td></td>
            <td>
              <button
                scope="col"
                className="px-4 py-3 border-l border-[#58aaae]"
                onClick={() => setNewButton(!newButton)}
              >
                <UserPlusIcon />
              </button>
            </td>
          </tr>
        </thead>
        <tbody>
          <ShipsTableList
            ships={ships}
            setEditUserData={setEditUserData}
            setEditButton={setEditButton}
            editButton={editButton}
            deleteButton={deleteButton}
            setDeleteButton={setDeleteButton}
          />
        </tbody>
      </table>
    </div>
  );
};

ShipsTable.propTypes = {
  ships: PropTypes.array,
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

export default ShipsTable;
