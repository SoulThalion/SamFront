import PropTypes from 'prop-types'

const UsersTableRow = ({id, userName, name, surName, telephone, email, role}) => {
  return (
    <>
                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
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
                <td className="px-6 py-4 text-right bg-[#242529] border-l border-gray-20">
                    <a href="#" className="font-medium text-blue-600 hover:underline">Edit</a>
                </td>
            </>
  )
}

UsersTableRow.propTypes = {
    id: PropTypes.number,
    userName: PropTypes.string,
    name: PropTypes.string,
    surName: PropTypes.string,
    telephone: PropTypes.string,
    email: PropTypes.string,
    role: PropTypes.string,
  };

export default UsersTableRow