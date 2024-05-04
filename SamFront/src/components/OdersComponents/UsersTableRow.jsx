import PropTypes from "prop-types";
import EditIcon from "../../icons/EditIcon";
import DeleteIcon from "../../icons/DeleteIcon";
import DocumentIcon from "../../icons/DocumentIcon";
import { deleteOrder } from "../../services/orders.service";

import { useEffect, useState } from "react";
//import { useContext } from 'react';
//import {EditUserContext} from '../context/userContext'

const UsersTableRow = ({
  id,
  appointment,
  work,
  hours,
  finish,
  userId,
  shipId,
  observations,
  clientId,
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
  //const { editUser, setEditUser } = useContext(EditUserContext);

  const [state, setState] = useState("");
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    finish ? setState("Finalizado") : setState("Pendiente");
    const fechaFormateada = formatDate(appointment);
    setFormattedDate(fechaFormateada);

  }, []);

  const handleClick = () => {
    setView(!view);
      setDocument({
        id: id,
        appointment: appointment,
        work: work,
        hours: hours,
        finish: finish,
        userId: userId,
        shipId: shipId,
        observations: observations,
        clientId: clientId
      });
}

  // Función para formatear la fecha y hora en UTC
  const formatDate = (dateString) => {
    // Verificar si la cadena de fecha está vacía
    if (!dateString) {
      return null; // o puedes devolver una cadena vacía: return "";
    }
  
    // Continuar formateando la fecha si la cadena no está vacía
    const date = new Date(dateString);
    const day = String(date.getUTCDate()).padStart(2, "0");
    const month = String(date.getUTCMonth() + 1).padStart(2, "0");
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, "0");
    const minutes = String(date.getUTCMinutes()).padStart(2, "0");
    const seconds = String(date.getUTCSeconds()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
  };
  

  const handleDelete = async (event) => {
    event.preventDefault();

    // Mostrar el cuadro de diálogo de confirmación
    const confirmation = window.confirm(
      "¿Estás seguro de que deseas eliminar esta orden?"
    );

    // Si el usuario confirma la eliminación
    if (confirmation) {
      try {
        const update = await deleteOrder(id);

        setDeleteButton(!deleteButton);

        // Realizar cualquier otra acción necesaria después de eliminar el usuario
        console.log("Orden eliminada:", update);

        // Limpiar el formulario u otras acciones después de eliminar el usuario
      } catch (error) {
        console.error("Error al eliminar la orden:", error);
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
      <td className="px-6 py-4">{clientId}</td>
      <td className="px-6 py-4">{shipId}</td>
      <td className="px-6 py-4">{formattedDate}</td>
      <td className="px-6 py-4 max-w-xs">
        <div className="max-h-5 overflow-y-auto">{work}</div>
      </td>
      <td className="px-6 py-4">{hours}</td>
      <td className="px-6 py-4">{state}</td>
      <td className="px-6 py-4">{userId}</td>
      <td className="px-6 py-4 max-w-[250px]">
        <div className="max-h-5 overflow-y-auto">{observations}</div>
      </td>
      <td>
        <button
          className="px-4 py-4 bg-[#242529] border-l border-[#58aaae]"
          onClick={handleClick}
        >
          <DocumentIcon />
        </button>
      </td>
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
  finish: PropTypes.bool,
  name: PropTypes.string,
  surName: PropTypes.string,
  telephone: PropTypes.string,
  email: PropTypes.string,
  role: PropTypes.string,
  setEditUserData: PropTypes.func,
  setEditButton: PropTypes.func,
  editButton: PropTypes.bool,
  setDeleteButton: PropTypes.func,
  deleteButton: PropTypes.bool,
};

export default UsersTableRow;
