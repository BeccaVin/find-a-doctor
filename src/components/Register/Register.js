import '../Register/Register.scss';

function Register() {
    return (
      <section className="register"> 
        <h1 className="register__title">REGISTER</h1>
        <form className="register__form">
            <div className="register__login-container">
                <h2 className="register__login-title">Login Information</h2>
                <div className="register__input-div">
                    <div className="register__div">
                    <label className="register__form-label">Email:</label> <br/>
                    <input 
                        className="register__form-input"
                        placeholder="Email"
                    /> <br/>
                    </div>
                    <div className="register__div">
                    <label className="register__form-label">Password:</label> <br/>
                    <input type="password"
                        className="register__form-input"
                        placeholder="Password"
                    /> 
                    </div>
                </div> 
            </div>
            <div className="register__profile-container">
                <h2 className="register__profile-title">Profile Information</h2>
                <div className="register__input-div">
                    <div className="register__div">
                        <label className="register__form-label">First Name:</label> <br/>
                        <input 
                            className="register__form-input"
                            placeholder="First Name"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Last Name:</label> <br/>
                        <input
                            className="register__form-input"
                            placeholder="Last Name"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">CPSO Number</label> <br/>
                        <input 
                            className="register__form-input"
                            placeholder="CPSO Number"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label htmlFor="specialty" className="register__form-label">Specialty</label> <br/>
                        <select
                            name="specialty" 
                            className="register__form-select"
                            placeholder="Specialty"
                            defaultValue="choose"
                        >  
                            <option value="choose" disabled>Choose a specialty:</option>
                            <option value="dermatology">Dermatology</option>
                            <option value="general and family practice">General and family practice</option>
                            <option value="pediatrics">Pediatrics</option>
                            <option value="psychiatry">Psychiatry</option>
                            <option value="surgery">Surgery</option>

                        </select> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Street Address:</label> <br/>
                        <input 
                            className="register__form-input"
                            placeholder="Street Address"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">City:</label> <br/>
                        <input
                            className="register__form-input"
                            placeholder="City"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Province:</label> <br/>
                        <input 
                            className="register__form-input"
                            placeholder="Province"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Postal Code:</label> <br/>
                        <input 
                            className="register__form-input"
                            placeholder="Postal Code"
                        />  <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Phone Number:</label> <br/>
                        <input 
                            pattern="111-111-1111"
                            className="register__form-input"
                            placeholder="Phone Number"
                        /> <br/>
                    </div>
                    <div className="register__div">
                        <label className="register__form-label">Hospital/Practice Name:</label> <br/>
                        <input
                            className="register__form-input"
                            placeholder="Hospital/Practice Name"
                        />  <br/>
                    </div>
                </div>
                <h3>Status</h3>
                <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        name="status"
                        value="accepting"
                        className="search__form-radio"
                    />
                    <label htmlFor="accepting" className="search__form-label">I am accepting new patients</label> <br/>
                    
                </div>
                <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        name="status"
                        value="not accepting"
                        className="search__form-radio"
                    />
                    <label htmlFor="not accepting" className="search__form-label">I am not accepting new patients</label> <br/>
                </div>
            </div>
            <div className="register__button-div">
                <button className="register__form-button">REGISTER</button>  
            </div>
        </form>
      </section>
    );
  }
  
  export default Register;