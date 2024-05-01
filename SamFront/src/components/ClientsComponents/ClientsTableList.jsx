import ClientsTableRow from "./ClientsTableRow";
import PropTypes from "prop-types";

const ClientsTableList = ({
  filteredUsers,
  setEditUserData,
  setEditButton,
  editButton,
  deleteButton,
  setDeleteButton,
}) => {
  const formattedUsers = filteredUsers.map((filteredUsers) => (
    <tr
      key={filteredUsers.id}
      className="bg-[#21212d] text-white hover:bg-[#323337] border-b border-t border-[#58aaae]"
    >
      <ClientsTableRow
        id={filteredUsers.id}
        address={filteredUsers.address}
        name={filteredUsers.name}
        surName={filteredUsers.surName}
        telephone={filteredUsers.telephone}
        email={filteredUsers.email}
        cif={filteredUsers.cif}
        setEditUserData={setEditUserData}
        setEditButton={setEditButton}
        editButton={editButton}
        deleteButton={deleteButton}
        setDeleteButton={setDeleteButton}
      />
    </tr>
  ));

  return <>{formattedUsers}</>;
};

ClientsTableList.propTypes = {
  filteredUsers: PropTypes.array,
  setEditUserData: PropTypes.func,
  editButton: PropTypes.bool,
  setEditButton: PropTypes.func,
  setDeleteButton: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default ClientsTableList;
