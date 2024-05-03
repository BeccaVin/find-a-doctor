import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption} from '@reach/combobox';
import '@reach/combobox/styles.css';

function PlacesAutocomplete({setInput}) {
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
        setInput({lat, lng }); 
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

export default PlacesAutocomplete;
