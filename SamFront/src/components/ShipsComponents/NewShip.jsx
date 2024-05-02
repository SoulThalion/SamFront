import PropTypes from "prop-types";
import { createClient } from "../../services/clients.service";
import PlusIcon from "../../icons/PlusIcon";

const NewShip = ({ setNewButton, newButton }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const model = event.target.model.value;
    const brand = event.target.brand.value;
    const registration_number = event.target.registration_number.value;

    try {
      const newShip = await createClient(
        model,
        brand,
        registration_number,
      );
      console.log("Barco añadido:", newShip);
      window.alert("Barco añadido");
      setNewButton(!newButton);

      // Limpiar el formulario o realizar otras acciones después de crear el usuario
    } catch (error) {
      console.error("Error al crear el usuario:", error);
      // Manejar el error, por ejemplo, mostrar un mensaje de error al usuario
    }
  };

  return (
    <div className="relative pb-5">
      <h1>Añadir Barco</h1> 
      <form
        className="w-full rounded-lg p-5 border border-[#58aaae] bg-[#242529]"
        onSubmit={handleSubmit}
      ><div className="grid grid-cols-3 grid-rows-[5px] gap-0">
        <div className="col-start-3 row-start-1 col-span-1 justify-self-end">
          <PlusIcon/>
          </div>
        <div className="col-start-1 row-start-2 mr-5 col-span-1">
          <div className="mb-0">
            <label
              htmlFor="model"
              className="block mb-2 text-sm font-medium text-white"
            >
              Modelo
            </label>
            <input
              type="text"
              id="model"
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="modelo"
              required
            />
          </div>
          </div>

          <div className="col-start-2 row-start-2 mr-5">
          <div className="mb-0">
            <label
              htmlFor="brand"
              className="block mb-2 text-sm font-medium text-white"
            >
              Marca
            </label>
            <input
              type="text"
              id="brand"
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="marca"
              required
            />
          </div></div>
          <div className="col-start-3 row-start-2 mr-5">
          <div className="mb-0">
            <label
              htmlFor="registration_number"
              className="block mb-2 text-sm font-medium text-white"
            >
              Matrícula
            </label>
            <input
              type="text"
              id="registration_number"
              style={{ backgroundColor: "#21212d" }}
              className="border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="matrícula"
              required
            />
          </div></div>
        </div>
      </form>
    </div>
  );
};

NewShip.propTypes = {
  users: PropTypes.array,
  setNewButton: PropTypes.func,
  newButton: PropTypes.bool,
};

export default NewShip;
