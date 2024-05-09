import "../index.css";
import { Toggle }  from "./Toggle";
import useLocalStorage from "use-local-storage";
import { MdShoppingCart } from "react-icons/md";  
import { RiLoginCircleFill } from "react-icons/ri";
import { FaRegistered } from "react-icons/fa";

export default function Navbar() {
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    
   <div className='nav' data-theme={isDark ? "dark" : "light"} >
        <Toggle 
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)}
        />
  <nav className="nav">
      <a href="/" className="site-title">iShopping <MdShoppingCart style={{ color: "magenta", marginLeft: ".5rem"}} /> </a>
     
        <a href="/Register" className="site-title" >Register <FaRegistered style={{ color: "magenta", marginLeft: ".5rem" }} /></a>

        <a href="/Login" className="site-title" >Login <RiLoginCircleFill style={{ color: "magenta", marginLeft: ".5rem" }} /></a>
         
    </nav>
    </div>

  ); 
}