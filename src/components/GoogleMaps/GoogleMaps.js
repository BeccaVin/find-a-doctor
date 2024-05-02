import '../GoogleMaps/GoogleMaps.scss';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import icon from '../../assets/Logo/red-flat-marker.png';

function GoogleMaps ({ isLoaded, selected }) {
    
    // const center = {lat:43.559060, lng:-79.705620}
    
    if (!isLoaded) {
        return <h2 className="maps__loading">Loading Maps</h2>
    }
    return (
        <section className="maps">
            <div className="maps__container">
                <GoogleMap 
                    mapId="map"
                    center= {selected} 
                    zoom={13} 
                    mapContainerClassName="maps__google-container"
                    options={{
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                    {selected &&  <MarkerF position={selected} icon={icon}/>}       
                </GoogleMap>
                </div>           
        </section>
    );
}

export default GoogleMaps;