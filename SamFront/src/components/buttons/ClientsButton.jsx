import ClientsIcon from "../../icons/ClientsIcon";

const ClientsButton = () => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group"
      >
        <ClientsIcon />
        <span className="flex-1 ms-3 whitespace-nowrap">Clientes</span>
      </a>
    </li>
  );
};

export default ClientsButton;
