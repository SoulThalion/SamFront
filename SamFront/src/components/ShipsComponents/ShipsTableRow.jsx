import PropTypes from "prop-types";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import { deleteShip } from "../../services/ship.service";
import { updateShip } from "../../services/ship.service";
import { useState } from "react";
import toast from "react-hot-toast";
import SaveIcon from "../../icons/SaveIcon";
//import { useContext } from 'react';
//import {EditUserContext} from '../context/userContext'

const ShipsTableRow = ({
  id,
  brand,
  model,
  registration_number,
  setEditUserData,
  deleteButton,
  setDeleteButton,
}) => {
  const [newBrand, setBrand] = useState(brand);
  const [newModel, setModel] = useState(model);
  const [newRegistration_number, setRegistrationNumber] =
    useState(registration_number);
  //const { editUser, setEditUser } = useContext(EditUserContext);
  const handleEdit = async (event) => {
    event.preventDefault();

    // Mostrar cuadro de diálogo de confirmación
    const confirmation = window.confirm(
      "¿Seguro que quiere editar los datos del barco?"
    );

    // Si el usuario confirma la edición
    if (confirmation) {
      try {
        const update = await updateShip(
          id,
          newModel,
          newBrand,
          newRegistration_number
        );
        console.log("Barco editado:", update);
      } catch (error) {
        console.error("Error al editar el barco:", error);
        // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
      }
    } else {
      // Si el usuario cancela, no hacemos nada
      return;
    }
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    // Mostrar el cuadro de diálogo de confirmación
    const confirmation = window.confirm(
      "¿Estás seguro de que deseas eliminar este barco?"
    );

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
      <td className="px-1">
        <input
          className="w-full rounded-lg border border-[#58aaae] bg-[#21212d]"
          type="text"
          defaultValue={brand}
          onChange={(e) => setBrand(e.target.value)}
        />
      </td>
      <td className="px-1">
        <input
          type="text"
          className="w-full rounded-lg border border-[#58aaae] bg-[#21212d]"
          defaultValue={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </td>
      <td className="px-1">
        <input
          type="text"
          className="w-full rounded-lg border border-[#58aaae] bg-[#21212d]"
          defaultValue={registration_number}
          onChange={(e) => setRegistrationNumber(e.target.value)}
        />
      </td>
      <td>
        <button
          className="px-4 py-4 bg-[#242529] border-l border-[#58aaae]"
          onClick={handleEdit}
        >
          <SaveIcon />
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
