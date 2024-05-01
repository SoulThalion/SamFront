import PropTypes from "prop-types";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { deleteShip } from "../../services/ship.service";
//import { useContext } from 'react';
//import {EditUserContext} from '../context/userContext'

const ShipsTableRow = ({
  id,
  brand,
  model,
  registration_number,
  setEditUserData,
  setEditButton,
  editButton,
  deleteButton,
  setDeleteButton,
}) => {
  //const { editUser, setEditUser } = useContext(EditUserContext);

  const handleDelete = async (event) => {
    event.preventDefault();

    // Mostrar el cuadro de diálogo de confirmación
    const confirmation = window.confirm("¿Estás seguro de que deseas eliminar este cliente?");

    // Si el usuario confirma la eliminación
    if (confirmation) {
        try {
            const update = await deleteShip(id);

            setDeleteButton(!deleteButton);
            
            // Realizar cualquier otra acción necesaria después de eliminar el usuario
            console.log("Usuario eliminado:", update);
            
            // Limpiar el formulario u otras acciones después de eliminar el usuario
        } catch (error) {
            console.error("Error al eliminar el usuario:", error);
            // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
        }
    } else {
        // Si el usuario cancela, no hacemos nada
        return;
    }
};


  return (
    <>
      <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
        {id}
      </th>
      <td className="px-6 py-4">{brand}</td>
      <td className="px-6 py-4">{model}</td>
      <td className="px-6 py-4">{registration_number}</td>
      <td>
        <button
          className="px-4 py-4 bg-[#242529] border-l border-[#58aaae]"
          onClick={() => {
            setEditUserData({
              id: id,
              registration_number: registration_number,
              brand: brand,
              model: model,
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

ShipsTableRow.propTypes = {
  id: PropTypes.number,
  registration_number: PropTypes.string,
  brand: PropTypes.string,
  model: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string,
  cif: PropTypes.string,
  setEditUserData: PropTypes.func,
  setEditButton: PropTypes.func,
  editButton: PropTypes.bool,
  setDeleteButton: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default ShipsTableRow;
