import OrderIcon from "../../icons/OrderIcon"


const OrdersButton = () => {
  return (
    <li>
          <a href="#" className="flex items-center p-2 text-white rounded-lg dark:text-white hover:bg-gray-800 dark:hover:bg-gray-700 group">
                <OrderIcon/>
                <span className="ms-3">Órdenes</span>
             </a>
          </li>
  )
}

export default OrdersButton