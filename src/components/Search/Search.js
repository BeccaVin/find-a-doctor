import '../Search/Search.scss';
import {NavLink} from 'react-router-dom';

function Search() {
    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
        <form className="search__form">
            <h2 className="search__form-title">DOCTOR SEARCH</h2>
            <div className="search__form-container">
                <input 
                    className="search__form-input" 
                    placeholder="Enter address here"
                />
            <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        className="search__form-radio"
                    />
                    <label className="search__form-label">Accepting new patients</label>
            </div>
                <NavLink to="/DoctorsList">
                    <button className="search__form-button">Search</button>
                </NavLink>
            </div>
        </form>
        </section>
    );
  }
  
  export default Search;