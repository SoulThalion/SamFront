import PropTypes from 'prop-types'

const UsersTableRow = ({id, userName, name, surName, telephone, email, role}) => {


    
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {id}
                </th>
                <td className="px-6 py-4">
                    {userName}
                </td>
                <td className="px-6 py-4">
                    {name}
                </td>
                <td className="px-6 py-4">
                    {surName}
                </td>
                <td className="px-6 py-4">
                    {telephone}
                </td>
                <td className="px-6 py-4">
                    {email}
                </td>
                <td className="px-6 py-4">
                    {role}
                </td>
                <td className="px-6 py-4 text-right">
                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr>
  )
}

UsersTableRow.propTypes = {
    id: PropTypes.number,
    userName: PropTypes.string,
    name: PropTypes.string,
    surName: PropTypes.string,
    telephone: PropTypes.number,
    email: PropTypes.string,
    role: PropTypes.string,
  };

export default UsersTableRow