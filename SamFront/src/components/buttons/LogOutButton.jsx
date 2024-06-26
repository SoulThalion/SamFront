import LogOutIcon from "../../icons/LogOutIcon";

const LogOutButton = () => {

  const handleLogout = () => {
    localStorage.removeItem('token')
  }

  return (
    <li>
      <a href="#"
        onClick={handleLogout}
        className="flex items-center p-1 text-white rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group"
      >
        <LogOutIcon />
        <span className="flex-1 ms-3 whitespace-nowrap">Cerrar Sesión</span>
      </a>
    </li>
  );
};

export default LogOutButton;
