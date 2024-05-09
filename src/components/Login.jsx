import "../index.css"
import Card from "./Card";
import useLocalStorage from "use-local-storage";
import { Toggle } from "./Toggle";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const checkUser = (users) => {
    const user = users.find(
      (user) => user.email === email && user.password === password);
    if (user.email === email && user.password === password) {
      return user;
    } 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please fill in all fields");
      return;
    }

    const users = await axios.get("http://localhost:6001/users").then((res) => checkUser(res.data, email, password)).catch((err) => console.log(err));
    
    if (users) {
      alert(` Welcome ${users.username} to iMovie!`);
      navigate("/Imovie");
      //set user id in local storage if user is found in the database and navigate to Imovie. We will use this id when we use private routes.
      localStorage.setItem("user", JSON.stringify(users.id));
      // localStorage.removeItem("user");
      
    } else {
      alert("User not found. Please register");
      navigate("/Register");
    }  
    setEmail("");
    setPassword("");  
  }

  const preference = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className='App' data-theme={isDark ? "dark" : "light"} >
          <Toggle 
            isChecked={isDark}
            handleChange={() => setIsDark(!isDark)}
          />

      <div className="container">
        <Card>
              <form>
                <h1>Login</h1>
                                     
                      <input type="email"
                          placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  />
                          
                      <input type="password"
                          placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}  />   
                              
                  
                  <button className="btn" type="submit" onClick={handleSubmit} >
                    <p>Submit</p>     
                  </button>
                </form>
          </Card>
      </div>  
  </div>
  );
};

export default Login;

