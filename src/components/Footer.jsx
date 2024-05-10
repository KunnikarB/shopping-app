import { MdAccountCircle } from "react-icons/md";
import { MdCopyright } from "react-icons/md";
import { Toggle }  from "./Toggle";
import useLocalStorage from "use-local-storage";  

const Footer = () => {
  //set the theme to dark mode if the user prefers dark mode then save the user's preference in local storage.
  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [isDark, setIsDark] = useLocalStorage("isDark", preference);

    return (
      //use the Toggle component to switch between dark and light mode
      <div className='App' data-theme={isDark ? "dark" : "light"} >
    <Toggle 
      isChecked={isDark}
      handleChange={() => setIsDark(!isDark)}
    />
        <footer >
          <p><MdCopyright />Project by : <MdAccountCircle style={{ color: "magenta", marginLeft: "1em"}} />Amirhossein <MdAccountCircle style={{ color: "magenta", marginLeft: "1em"}} />Rafia <MdAccountCircle style={{ color: "magenta", marginLeft: "1em"}} />Kunnikar</p>
            
        </footer>
    </div>
    );
}

export default Footer;