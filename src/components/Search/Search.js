import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
import '../Search/Search.scss';
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox';
import '@reach/combobox/styles.css';
export default function Search({ isLoaded, setAddressInput }) {

    const navigate = useNavigate();
    const [selected, setSelected] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/DoctorsList", { state: { selected } });
    }
    return (
        <section className="search">
            <h2 className="search__text">Every Ontarian should have access to a family doctor. We're here to make the search a little easier.</h2>
        <form className="search__form">
            <h2 className="search__form-title">DOCTOR SEARCH</h2>
            <div className="search__form-container">
                <PlacesAutocomplete setSelected={setSelected} />
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

const PlacesAutocomplete = ({setSelected}) => {
    const {
        ready, 
        value,
        setValue,
        suggestions: {status, data},
        clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const {lat, lng} = await getLatLng(results[0]);
        setSelected({lat, lng }); 
    }
    return(      
        <Combobox onSelect={handleSelect}>
            <ComboboxInput 
                className="search__form-input"  
                placeholder="Enter address here"
                value={value}
                onChange={e => setValue(e.target.value)}
                disabled={!ready}
            />
            <ComboboxPopover>
                <ComboboxList>    
                    {status === "OK" && data.map(({place_id, description}) => 
                        <ComboboxOption key={place_id} value={description}/>
                    )}
                    </ComboboxList>
            </ComboboxPopover>   
        </Combobox>
    )
}
