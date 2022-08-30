import { AiOutlineInfoCircle } from "react-icons/ai";
import { FaImage, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

export default [
  { name: "Home", path: "/", icon: FiHome },
  { name: "Fee", path: "/fee", icon: FaRegMoneyBillAlt },
  { name: "NFT", path: "/nft", icon: FaImage },
  { name: "About", path: "/about", icon: AiOutlineInfoCircle },

  // { name: "TX History", path: "/transactions", icon: AiOutlineInfoCircle },
];
