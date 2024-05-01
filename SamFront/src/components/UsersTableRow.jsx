import PropTypes from "prop-types";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import { deleteUser } from "../services/users.service";
//import { useContext } from 'react';
//import {EditUserContext} from '../context/userContext'

const UsersTableRow = ({
  id,
  userName,
  name,
  surName,
  telephone,
  email,
  role,
  setEditUserData,
  setEditButton,
  editButton,
  deleteButton,
  setDeleteButton,
}) => {
  //const { editUser, setEditUser } = useContext(EditUserContext);

  const handleDelete = async (event) => {
    event.preventDefault();

    console.log(id);
    try {
      const update = await deleteUser(id);

      setDeleteButton(!deleteButton);
      console.log("Usuario editado:", update);

      // Limpiar el formulario o realizar otras acciones después de crear el usuario
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id}
      </th>
      <td className="px-6 py-4">{userName}</td>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">{surName}</td>
      <td className="px-6 py-4">{telephone}</td>
      <td className="px-6 py-4">{email}</td>
      <td className="px-6 py-4">{role}</td>
      <td>
        <button
          className="px-4 py-4 bg-[#242529] border-l border-[#58aaae]"
          onClick={() => {
            setEditUserData({
              id: id,
              userName: userName,
              name: name,
              surName: surName,
              telephone: telephone,
              email: email,
              role: role,
            });

            setEditButton(!editButton);
          }}
        >
          <EditIcon />
        </button>
      </td>
      <td>
        <button
          className="px-4 py-4 bg-[#242529] border-l border-[#58aaae]"
          onClick={handleDelete}
        >
          <DeleteIcon />
        </button>
      </td>
    </>
  );
};

UsersTableRow.propTypes = {
  id: PropTypes.number,
  userName: PropTypes.string,
  name: PropTypes.string,
  surName: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  setEditUserData: PropTypes.func,
  setEditButton: PropTypes.func,
  editButton: PropTypes.bool,
};

export default UsersTableRow;
