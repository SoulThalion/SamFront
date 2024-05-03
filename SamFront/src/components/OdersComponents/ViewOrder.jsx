import PropTypes from "prop-types";
import { getClientById } from "../../services/clients.service";
import { useEffect, useState } from "react";
import { getShipById } from "../../services/ship.service";

const ViewOrder = ({ view, setView, document }) => {
  const [client, setClient] = useState({});
  const [ship, setShip] = useState({});

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

    fetchClient();
    fetchShip();
  }, []);

  const handleClick = () => {
    setView(!view);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-screen ">
        <div className="w-full max-w-xl rounded-lg p-5 border border-[#58aaae] bg-[#242529]">
          <div className="grid grid-cols-2 rounded-lg grid-rows-[15px] gap-5 bg-[#21212d] border border-[#58aaae] p-5">
            <h1 className="col-start-1 row-start-1 text-white text-lg font-bold">
              Datos de Cliente
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
              <span className="font-bold">Matricula:</span> {ship.registration_number}
            </p>
          </div>
        </div>
      </div>
      <button onClick={handleClick}>botón</button>
    </>
  );
};

ViewOrder.propTypes = {
  view: PropTypes.bool,
  setView: PropTypes.func,
  document: PropTypes.object,
};

export default ViewOrder;
