import { MdAccountCircle } from "react-icons/md";
import { MdCopyright } from "react-icons/md";

const Footer = () => {
    return (
        <footer>
          <p><MdCopyright />Project by : <MdAccountCircle style={{ color: "orange"}} />Amirhossein <MdAccountCircle style={{ color: "orange"}} />Rafia <MdAccountCircle style={{ color: "orange"}} />Kunnikar</p>
            
        </footer>
    );
}
//export
export default Footer;