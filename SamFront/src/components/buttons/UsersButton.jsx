import UsersIcon from "../../icons/UsersIcon";

const UsersButton = () => {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group"
      >
        <UsersIcon/>
        <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
      </a>
    </li>
  );
};

export default UsersButton;
