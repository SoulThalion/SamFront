import UsersTableRow from "./UsersTableRow";
import PropTypes from 'prop-types'

const UsersTableList = ({ users }) => {
    const formattedusers = users.map((users) => (
        <tr key={users.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <UsersTableRow
            id={users.id}
            userName= {users.userName}
            name={users.name}
            surName={users.surName}
            telephone={users.telephone}
            email={users.email}
            role={users.role}
          />
        </tr>
      ));
    
      return (
        <>
          {formattedusers}
        </>
      );
}

UsersTableList.propTypes = {
    users: PropTypes.array,
  };

export default UsersTableList