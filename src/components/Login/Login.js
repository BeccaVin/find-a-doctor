import '../Login/Login.scss';

function Login() {
    return (
      <section className="login"> 
        <h1 className="login__title">LOGIN</h1>    
        <form className="login__form">
            <label className="login__form-label">Email:</label> <br/>
            <input 
                className="login__form-input"
                placeholder="Email"
            /> <br/>
            <label className="login__form-label">Password:</label>
            <input type="password"
                className="login__form-input"
                placeholder="Password"
            />  <br/>
            <div className="login__button-div">
                <button className="login__form-button">LOGIN</button>  
            </div>
        </form>  
        
      </section>
    );
  }
  
  export default Login;