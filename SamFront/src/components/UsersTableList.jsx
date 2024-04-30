import UsersTableRow from "./UsersTableRow";
import PropTypes from 'prop-types'

const UsersTableList = ({ users }) => {
    const formattedusers = users.map((users) => (
        <div key={users.id}>
          <UsersTableRow
            id={users.id}
            userName= {users.userName}
            name={users.name}
            surName={users.surName}
            telephone={users.telephone}
            email={users.email}
            role={users.role}
          />
        </div>
      ));
    
      return (
        <div className="usersList">
          {formattedusers}
        </div>
      );
}

UsersTableList.propTypes = {
    users: PropTypes.array,
  };

export default UsersTableList