// import { userState } from "react ";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import Card from "./Card";



const Login = () => {
  // const [email, setEmail] = userState("");
  // const [password, setPassword] = userState("");
  
  // const navigate = useNavigate();

  // const checkUser = (users) => {
  //   const user = users.find((user) => user.email === email && user.password === password);

  //   if (user.email === email && user.password === password) return user; 
  // };

  // const handleSubmit = async (e) => {
  //   e.proventDefault();

  //   if (email === "" || password === "") {
  //     alert("All fields are required");
  //   }
    
  //   const user = await axios.get("/users").then((res) => checkUser(res.data, email, password)).catch((err) => console.log(err));

  //   if (user.email === email && user.password === password) {
  //     navigate("/");

      // Save user in local storage to keep user logged in after refreshing the page 
      // localStorage.setItem("user", JSON.stringify(user.id));
      
      // localStorage.removeItem("user");
    // }
  //   setEmail("");
  //   setPassword("");
  // };

  return (
    <div className="container">
      <Card>
        <form>
          <h1>Log in</h1>
          <label>
            <input type="email" placeholder="Email"  />
            {/*value={email} onChange={(e) => setEmail(e.target.value)} */}
          </label>
          <label>
            <input type="password" placeholder="Password"  />  
            {/* value={password} onChange={(e) => setPassword(e.target.value)} */}        
          </label>
          <button className="btn" type="submit" >
          {/* onClick={handleSubmit} */}
            <p>Log in</p>     
          </button>
        </form>
      </Card>
    </div>  
  );
}

export default Login;
