import { MdAccountCircle } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
//adding style
const Footer = () => {
    return (
        <footer>
          <p><MdCopyright />Project by : <MdAccountCircle style={{ color: "orange"}} />Amirhossein <MdAccountCircle style={{ color: "orange"}} />Rafia <MdAccountCircle style={{ color: "orange"}} />Kunnikar</p>
            
        </footer>
    );
}
//export Footer
export default Footer;