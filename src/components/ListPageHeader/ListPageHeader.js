import '../ListPageHeader/ListPageHeader.scss';
import {NavLink} from 'react-router-dom';
import { fromLatLng, setDefaults } from 'react-geocode';
import {useState, useEffect} from 'react';
import {googleApiKey} from '../../utils/Utils';
function ListPageHeader({input}) {
    const [formattedAddress, setFormattedAddress] = useState('');

    useEffect(() => {
        setDefaults({
            key: googleApiKey, 
            language: "en", 
            region: "CA", 
          });
        
        fromLatLng(input.lat, input.lng)
            .then(({ results }) => {
                const address = results[0].formatted_address;
                setFormattedAddress(address);
            })
            .catch(error => {
                console.error('Error reverse geocoding:', error);
            });
    }, [input]);
    
    return (
        <section className="listheader"> 
            <h2 className="listheader__title">DOCTOR SEARCH RESULTS</h2>
            <h3 className="listheader__input">{formattedAddress}</h3>
            <div className="listheader__top-container">
                <NavLink to="/" className="listheader__link">Back to Search</NavLink>
                <p className="listheader__hits">2 results</p>
            </div>
        </section>
    );
}
export default ListPageHeader;