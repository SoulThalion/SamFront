import UserPlusIcon from "../icons/UserPlusIcon";
import UsersTableList from "./UsersTableList";
import PropTypes from 'prop-types'

const UsersTable = ({users}) => {
  return (
    

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-white border border-[#58aaae]">
        <thead className="text-xs text-white uppercase bg-[#242529]">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Id
                </th>
                <th scope="col" className="px-6 py-3">
                    UserName
                </th>
                <th scope="col" className="px-6 py-3">
                    Nombre
                </th>
                <th scope="col" className="px-6 py-3">
                    Apellidos
                </th>
                <th scope="col" className="px-6 py-3">
                    Teléfono
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                    Role
                </th>
                <button scope="col" className="px-4 py-3 border-l border-[#58aaae]">
                    <UserPlusIcon/>
                </button>
            </tr>
        </thead>
        <tbody>
            
            <UsersTableList users={users}/>
            
        </tbody>
    </table>
</div>

  )
}

UsersTable.propTypes = {
    users: PropTypes.array,
  };

export default UsersTable