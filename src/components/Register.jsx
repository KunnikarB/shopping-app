import "../index.css"
import Card from "./Card";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle";
import axios from "axios";
import { useState } from "react";

  // set username, email and password to empty strings using useState hook.
  const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  // check if the email already exists in the database.
  const checkEmail = (users) => {
    const user = users.find((user) => user.email === email);
    if (user) {
      console.log("Email already exists");
      return user;
    }
  };

  // handle the submit event when the user clicks the submit button. 
  const handleSubmit = async (e) => {
    e.preventDefault();
    const users = await axios.get("http://localhost:6001/users").then((res) => checkEmail(res.data, email ));

    
    if (users) {
      alert("Email already exists!");
    } else {
      const user = { username, email, password };
      await axios.post("http://localhost:6001/users", user).then(alert("User registered"));
    }  
    setUsername("");
    setEmail("");
    setPassword("");  
  };
    // set the preference to dark mode if the user's system is set to dark mode. 
    const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    // toggle button to switch between dark and light mode.
    <div className='App' data-theme={isDark ? "dark" : "light"} >
          <Toggle 
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />

      <div className="container">
        <Card>
              <form>
                <h1>Register</h1>
                
                    <input type="text"
                      placeholder="Username" required value={username} onChange={(e) => setUsername(e.target.value)}  />   
                      
                      <input type="email"
                          placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}  />
                          
                      <input type="password"
                          placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)}  />   
                              
                  
                  <button className="btn" type="submit" onClick={handleSubmit}>
                    <p>Submit</p>   
                  </button>
                </form>
          </Card>
      </div>  
  </div>
);
};

export default Register;
