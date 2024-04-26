import Card from "./Card";

 const Register = () => {

  return (
    <div className="container">
       <Card>
          <form>
            <h1>Register</h1>
              <label>
                <input type="text"
                    placeholder="Username"  />   
                         
              </label>
              <label>
                <input type="email"
                    placeholder="Email"  />
                         
                </label>
                <label>
                  <input type="password"
                   placeholder="Password"   />                  
                </label>
                
                <button className="btn" type="submit"  >
                    <p>Register</p>     
                </button>
              </form>
        </Card>
    </div>  
);
}

export default Register;
