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
  setDocument
}) => {
  const formattedUsers = filteredUsers.map((filteredUsers) => (
    <tr
      key={filteredUsers.id}
      className="bg-[#21212d] text-white hover:bg-[#323337] border-b border-t border-[#58aaae]"
    >
      <UsersTableRow
        id={filteredUsers.id}
        appointment={filteredUsers.appointment}
        work={filteredUsers.work}
        hours={filteredUsers.hours}
        finish={filteredUsers.finish}
        userId={filteredUsers.userId}
        shipId={filteredUsers.shipId}
        clientId={filteredUsers.clientId}
        observations={filteredUsers.observations}
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
