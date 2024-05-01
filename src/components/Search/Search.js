import '../Search/Search.scss';
import {useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption } from '@reach/combobox';
import '@reach/combobox/styles.css';
import { googleApiKey } from '../../utils/Utils';

function Search() {
    const navigate = useNavigate();
    const [address, setAddress] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/DoctorsList/${encodeURIComponent(address)}`);
    }    
    const [value, setValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const googleMapsScript = document.createElement('script');
        googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${googleApiKey}&libraries=places`;
        googleMapsScript.async = true;
        googleMapsScript.defer = true;
        document.body.appendChild(googleMapsScript);

        googleMapsScript.onload = () => {
            const autocompleteService = new window.google.maps.places.AutocompleteService();

            const fetchSuggestions = (input) => {
                autocompleteService.getPlacePredictions(
                    {
                        input: input,
                        componentRestrictions: { country: 'CA' }, // Restrict results to Canada
                    },
                    (predictions, status) => {
                        if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                            setSuggestions(predictions);
                        } else {
                            setSuggestions([]);
                        }
                    }
                );
            };

            if (value) {
                fetchSuggestions(value);
            } else {
                setSuggestions([]);
            }
        };

        return () => {
            document.body.removeChild(googleMapsScript);
        };
    }, [value]);

    const handleInputChange = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = (address) => {
        setValue(address);
        setSuggestions([]);
    };

    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
        <form className="search__form">
            <h2 className="search__form-title">DOCTOR SEARCH</h2>
            <div className="search__form-container">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    className="search__form-input"
                    placeholder="Enter address here"
                    value={value}
                    onChange={handleInputChange}
                />
                <ComboboxPopover>
                    <ComboboxList>
                        {suggestions.map((prediction) => (
                            <ComboboxOption key={prediction.place_id} value={prediction.description} />
                        ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
                <div className="search__form-radio-div">
                    <input 
                        type="radio"
                        className="search__form-radio"
                    />
                    <label className="search__form-label">Accepting new patients</label>
                </div>
                <button type="submit" className="search__form-button" onClick={handleSubmit}>Search</button>  
            </div>
        </form>
        </section>
    );
}

export default Search;