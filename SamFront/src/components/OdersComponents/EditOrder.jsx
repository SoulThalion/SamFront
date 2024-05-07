import PropTypes from "prop-types";
import { updateOrder } from "../../services/orders.service";
import { useState, useEffect } from "react";
import { getShipsByClientId, getShipById } from "../../services/ship.service";
import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import toast from "react-hot-toast";
import Datepicker from "flowbite-datepicker/Datepicker";
import DatePicker from "react-multi-date-picker";
import TimePicker from "react-multi-date-picker/plugins/time_picker";

const EditOrder = ({
  editUserData,
  setEditUserData,
  editButton,
  setEditButton,
}) => {
  //const { editUser, setEditUser } = useContext(EditUserContext);
  const [formattedDate, setFormattedDate] = useState("");
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState({});
  const { user } = useContext(UserContext);
 const [date, setDate] = useState()
  console.log(date)

  useEffect(() => {
    const fetchAllShips = async () => {
      const data = await getShipsByClientId(editUserData.clientId);
      setShips(data);
    };

    const fetchShip = async () => {
      const data = await getShipById(editUserData.shipId);
      setShip(data);
    };

    const fechaFormateada = formatDate(editUserData.appointment);
    setFormattedDate(fechaFormateada);

    const datepickerEl = document?.getElementById("datepickerId");
    // console.log(datepickerEl);
    new Datepicker(datepickerEl, {});

    fetchAllShips();
    fetchShip();

     // Función para manejar el cambio de fecha seleccionada
     const handleDateChange = (event) => {
      // Actualizar el estado con la nueva fecha seleccionada
      setDate(event.target.value);
    };

    // Obtener el input del datepicker por su id
    const datepickerInput = document.getElementById('datepickerId');

    // Agregar un event listener para el evento de cambio de input
    datepickerInput.addEventListener('input', handleDateChange);

    // Limpiar el event listener cuando se desmonta el componente
    return () => {
      datepickerInput.removeEventListener('input', handleDateChange);
    };
  }, []);

  const formatDate = (dateString) => {
    // Verificar si la cadena de fecha está vacía
    if (!dateString) {
      return null; // o puedes devolver una cadena vacía: return "";
    }

    // Continuar formateando la fecha si la cadena no está vacía
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    // Omitir los segundos
    const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}`;
    return formattedDate;
  };

  const toISO8601 = (dateString) => {
    // Verificar si la cadena de fecha está vacía
    if (!dateString) {
      return ""; // Devolver una cadena vacía
    }

    // Dividir la cadena en partes (día, mes, año, hora, minutos, segundos)
    const parts = dateString.split(/[\s/:\-]/);

    // Crear un nuevo objeto Date con el formato adecuado (mes - 1 porque los meses van de 0 a 11 en JavaScript)
    const date = new Date(
      parts[2],
      parts[1] - 1,
      parts[0],
      parts[3],
      parts[4],
      parts[5] ? parts[5] : "00"
    );

    // Verificar si la fecha es válida
    if (isNaN(date.getTime())) {
      return null; // La fecha es inválida, devuelve null
    }

    // Continuar formateando la fecha si es válida
    const isoString = date.toISOString();
    return isoString;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = editUserData.id;
    const date = event.target.appointment.value;
    const work = event.target.work.value;
    const hours = event.target.hours.value;
    const finish = event.target.finish.value;
    const shipId = event.target.shipId.value;
    const userId = event.target.userId.value;
    const observations = event.target.observations.value;

    const appointment = toISO8601(date);
    console.log(appointment);
    setEditUserData({
      id,
      appointment,
      work,
      hours,
      finish,
      shipId,
      userId,
      observations,
    });

    try {
      const update = await updateOrder(
        id,
        appointment,
        work,
        hours,
        finish,
        shipId,
        userId,
        observations
      );

      toast.success("Orden editada");
      setEditButton(!editButton);
      console.log("Orden editada:", update);

      // Limpiar el formulario o realizar otras acciones después de crear el usuario
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  const formattedShips = ships.map((ship) => (
    <option key={ship.id} value={ship.id}>
      {ship.id} {ship.brand} {ship.model} {ship.registration_number}
    </option>
  ));

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <form
        className="w-full max-w-md rounded-lg p-5 border border-[#58aaae] bg-[#242529]"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 md:gap-6">
          <p className="col-start-2 row-start-1 text-white justify-self-end">
            {editUserData.id}
          </p>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="mb-0 col-start-1 row-start-1">
            <label
              htmlFor="userId"
              className={`block mb-2 text-sm font-medium text-white ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
            >
              Mecánico
            </label>
            <input
              type="text"
              id="userId"
              defaultValue={editUserData.userId}
              style={{ backgroundColor: "#21212d" }}
              className={`border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-10 p-2.5 ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
              readOnly={user.role === "mechanic"}
            />
          </div>

          <div
            className={`${
              user.role === "mechanic"
                ? "col-start-1 row-start-4 col-span-2 mb-5"
                : "col-start-1 row-start-4"
            }`}
          >
            <label
              htmlFor="appointment"
              className="block mb-2 text-sm font-medium text-white"
            >
              Fecha
            </label>
            <input
              type="text"
              datepicker
              id="datepickerId"
              value={date}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[94px] p-2.5 "
              defaultValue={formattedDate}

            />
          </div>
          <div className="col-start-1 row-start-4 justify-self-end">
            <label
              htmlFor="time"
              className="block mb-2 text-sm font-medium text-white"
            >
              Hora:
            </label>

            <input
              type="time"
              id="time"
              className="bg-[#21212d] border leading-none border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[90px] p-2.5"
              min="09:00"
              max="18:00"
              defaultValue="00:00"
              required
            />
          </div>

          <div className="mb-0 col-start-1 row-start-2 col-span-2">
            <label
              htmlFor="work"
              className={`block mb-2 text-sm font-medium text-white ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
            >
              Trabajo a realizar
            </label>
            <textarea
              id="work"
              style={{
                backgroundColor: "#21212d",
                height: "100px",
                resize: "none",
                textAlign: "left",
              }}
              defaultValue={editUserData.work}
              className={`border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
              required
              readOnly={user.role === "mechanic"}
            />
          </div>

          <div
            className={`col-start-1 row-start-3 col-span-2 ${
              user.role === "mechanic" ? "mb-5" : "mb-0"
            }`}
          >
            <label
              htmlFor="observations"
              className="block mb-2 text-sm font-medium text-white"
            >
              Observaciones
            </label>
            <textarea
              id="observations"
              style={{
                backgroundColor: "#21212d",
                height: "100px",
                resize: "none",
                textAlign: "left",
              }}
              defaultValue={editUserData.observations}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Observaciones"
            />
          </div>

          <div
            className={`${
              user.role === "mechanic"
                ? "col-start-1 row-start-4 col-span-2"
                : "col-start-1 row-start-1 w-10 justify-self-center"
            }`}
          >
            <label
              htmlFor="hours"
              className="block mb-2 text-sm font-medium text-white"
            >
              Horas
            </label>
            <input
              type="text"
              id="hours"
              defaultValue={editUserData.hours}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="hours"
              required
            />
          </div>

          <div className="mb-0 col-start-2 row-start-1">
            <label
              htmlFor="finish"
              className={`block mb-2 text-sm font-medium text-white ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
            >
              Estado
            </label>
            <select
              id="finish"
              className={`bg-[#21212d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
              readOnly={user.role === "mechanic"}
            >
              <option value={editUserData.finish ? "true" : "false"} selected>
                {editUserData.finish ? "Finalizado" : "Pendiente"}
              </option>
              <option value={editUserData.finish ? "false" : "true"}>
                {editUserData.finish ? "Pendiente" : "Finalizado"}
              </option>
            </select>
          </div>

          <div className="mb-0 col-start-1 row-start-5 col-span-2">
            <label
              htmlFor="shipId"
              className={`block mb-2 text-sm font-medium text-white ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
            >
              Barco
            </label>
            <select
              id="shipId"
              defaultValue={editUserData.shipId}
              className={`bg-[#21212d] border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                user.role === "mechanic" ? "hidden" : ""
              }`}
              required
              readOnly={user.role === "mechanic"}
            >
              <option value={editUserData.shipId} selected>
                {ship.id} {ship.brand} {ship.model} {ship.registration_number}
              </option>
              {formattedShips}
            </select>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center"
          >
            Guardar
          </button>

          <button
            type="button"
            onClick={() => setEditButton(!editButton)}
            className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-12 py-2.5 text-center"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

EditOrder.propTypes = {
  users: PropTypes.array,
  editUserData: PropTypes.array,
  editButton: PropTypes.bool,
  setEditButton: PropTypes.func,
};

export default EditOrder;
