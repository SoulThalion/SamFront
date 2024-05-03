import PropTypes from "prop-types";
import { getClientById } from "../../services/clients.service";
import { useEffect, useState } from "react";
import { getShipById } from "../../services/ship.service";
import { getUserById } from "../../services/users.service";
import XIcon from '../../icons/XIcon'

const ViewOrder = ({ view, setView, document }) => {
  const [client, setClient] = useState({});
  const [ship, setShip] = useState({});
  const [mechanic, setMechanic] = useState({});
  const [formattedDate, setFormattedDate] = useState("");

  console.log(document);

  useEffect(() => {
    const fetchClient = async () => {
      const data = await getClientById(document.clientId);
      setClient(data);
    };

    const fetchShip = async () => {
      const data = await getShipById(document.shipId);
      setShip(data);
    };

    const fetchMechanic = async () => {
      const data = await getUserById(document.userId);
      setMechanic(data);
    };

    const fechaFormateada = formatDate(document.appointment);
    setFormattedDate(fechaFormateada);

    fetchMechanic();
    fetchClient();
    fetchShip();
  }, []);

  const handleClick = () => {
    setView(!view);
  };

  const formatDate = (dateString) => {
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

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <div className="w-full max-w-xl rounded-lg px-5 pb-5 border border-[#58aaae] bg-[#242529]">
          <div className="grid grid-cols-2 grid-rows-2">
            <p className="row-start-2 col-start-1">
              <span className="text-white text-lg font-bold">Estado: </span>{" "}
              {document.finish ? "Finalizado" : "Pendiente"}
            </p> 
        <button className="justify-self-end row-start-1 col-start-2 mt-2" onClick={handleClick}>
            <XIcon/>
          </button>
          </div>
         
          <div className="grid grid-cols-2 rounded-lg grid-rows-[15px] gap-5 bg-[#21212d] border border-[#58aaae] p-5">
            <h1 className="col-start-1 row-start-1 text-white text-lg font-bold">
              Datos de Cliente:
            </h1>
            <div className="col-start-2 row-start-1 text-white justify-self-end">
              {document.id}
            </div>
            <p className="col-start-1 row-start-2 text-white">
              <span className="font-bold">Nombre:</span> {client.name}{" "}
              {client.surName}
            </p>
            <p>
              <span className="font-bold">CIF:</span> {client.cif}
            </p>

            <p>
              <span className="font-bold">Teléfono:</span> {client.telephone}
            </p>
            <p className="col-start-2 row-start-2 text-white">
              <span className="font-bold">Dirección:</span> {client.address}
            </p>
            <p>
              <span className="font-bold">Email:</span> {client.email}
            </p>
          </div>

          <div className="grid grid-cols-3 rounded-lg grid-rows-[15px] gap-5 bg-[#21212d] border border-[#58aaae] mt-5 p-5">
            <h1 className="col-start-1 row-start-1 text-white text-lg font-bold">
              Barco:
            </h1>
            <div className="col-start-3 row-start-1 text-white justify-self-end">
              {document.shipId}
            </div>
            <p className="col-start-1 row-start-2 text-white">
              <span className="font-bold">Marca:</span> {ship.brand}{" "}
            </p>
            <p className="col-start-2 row-start-2 text-white">
              <span className="font-bold">Modelo:</span> {ship.model}
            </p>
            <p className="col-start-3 row-start-2 text-white">
              <span className="font-bold">Matricula:</span>{" "}
              {ship.registration_number}
            </p>
          </div>

          <div className="grid grid-cols-2 rounded-lg gap-5 bg-[#21212d] border border-[#58aaae] mt-5 p-5">
            <div className="rounded-lg bg-[#21212d] border border-[#58aaae] p-5">
              <h1 className=" text-white text-lg font-bold">
                Trabajo a realizar:
              </h1>
              <p className=" text-white">{document.work}</p>
            </div>

            <div className="rounded-lg bg-[#21212d] border border-[#58aaae] p-5">
              <h1 className=" text-white text-lg font-bold">Observaciones:</h1>
              <p className=" text-white">{document.observations}</p>
            </div>
            <p className="col-start-1 row-start-2 text-white">
              <p className="font-bold">Mecánico asignado:</p> {mechanic.name}{" "}
              {mechanic.surName}
            </p>
            <p className="col-start-2 row-start-2 text-white">
              <p className="font-bold">Cita:</p> {formattedDate}{" "}
              <p>
                <span className="font-bold">Horas: </span>
                {document.hours}
              </p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

ViewOrder.propTypes = {
  view: PropTypes.bool,
  setView: PropTypes.func,
  document: PropTypes.object,
};

export default ViewOrder;
