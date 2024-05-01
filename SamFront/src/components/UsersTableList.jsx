import UsersTableRow from "./UsersTableRow";
import PropTypes from 'prop-types'

const UsersTableList = ({ users, setEditUserData }) => {
    const formattedUsers = users.map((users) => (
        <tr key={users.id} className="bg-[#21212d] text-white hover:bg-[#323337] border-b border-t border-[#58aaae]">
          <UsersTableRow
            id={users.id}
            userName= {users.userName}
            name={users.name}
            surName={users.surName}
            telephone={users.telephone}
            email={users.email}
            role={users.role}
            setEditUserData={setEditUserData}
          />
        </tr>
      ));
    
      return (
        <>
          {formattedUsers}
        </>
      );
}

UsersTableList.propTypes = {
    users: PropTypes.array,
    setEditUserData: PropTypes.func
  };

export default UsersTableList