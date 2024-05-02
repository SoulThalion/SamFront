import PropTypes from "prop-types";
import { updateClient } from "../../services/clients.service";
//import { getShipsByClientId } from "../../services/ship.service";
//import { useEffect, useState } from "react";
import ShipsTable from './ShipsTable'
//import { useContext } from "react";
//import {EditUserContext} from '../context/userContext'

const EditUser = ({ ships, editUserData, editButton, setEditButton }) => {
  //const { editUser, setEditUser } = useContext(EditUserContext);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = event.target.id.value;
    const address = event.target.address.value;
    const name = event.target.name.value;
    const surName = event.target.surName.value;
    const telephone = event.target.telephone.value;
    const email = event.target.email.value;
    const cif = event.target.cif.value;

    try {
      const update = await updateClient(
        id,
        address,
        name,
        surName,
        telephone,
        email,
        cif
      );

      window.alert("Usuario Editado");
      setEditButton(!editButton);
      console.log("Usuario editado:", update);

      // Limpiar el formulario o realizar otras acciones después de crear el usuario
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <form
        className="w-full max-w-xl rounded-lg p-5 border border-[#58aaae] bg-[#242529]"
        onSubmit={handleSubmit}
      >
        <div className="grid md:grid-cols-2 md:gap-6 pb-5">
          <div className="mb-0">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-white"
            >
              Dirección
            </label>
            <input
              type="text"
              id="address"
              defaultValue={editUserData.address}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="dirección"
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-white"
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              readOnly
              defaultValue={editUserData.id}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-white"
            >
              Nombre
            </label>
            <input
              type="text"
              id="name"
              defaultValue={editUserData.name}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="nombre"
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="surName"
              className="block mb-2 text-sm font-medium text-white"
            >
              Apellidos
            </label>
            <input
              type="text"
              id="surName"
              defaultValue={editUserData.surName}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="apellidos"
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              defaultValue={editUserData.email}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="email"
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="telephone"
              className="block mb-2 text-sm font-medium text-white"
            >
              Teléfono
            </label>
            <input
              type="text"
              id="telephone"
              defaultValue={editUserData.telephone}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="teléfono"
              required
            />
          </div>

          <div className="mb-0">
            <label
              htmlFor="cif"
              className="block mb-2 text-sm font-medium text-white"
            >
              Cif
            </label>
            <input
              type="text"
              id="cif"
              defaultValue={editUserData.cif}
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="cif"
              required
            />
          </div>
        </div>

        <ShipsTable ships={ships}/>

        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 md:gap-14 pt-5 mt-5  border-t border-[#58aaae]">
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
        </div>
      </form>
    </div>
  );
};

EditUser.propTypes = {
  users: PropTypes.array,
  editUserData: PropTypes.array,
  editButton: PropTypes.bool,
  setEditButton: PropTypes.func,
  ships: PropTypes.array
};

export default EditUser;
