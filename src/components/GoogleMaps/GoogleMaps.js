import '../GoogleMaps/GoogleMaps.scss';
import { GoogleMap } from '@react-google-maps/api';

function GoogleMaps ({ isLoaded, mapCenter}) {
    if (!isLoaded) {
        return <h2 className="maps__loading">Loading Maps</h2>
    }
    return (
        <section className="maps">
            <div className="maps__container">
                <GoogleMap 
                    mapId="map"
                    center= {mapCenter} 
                    zoom={13} 
                    mapContainerClassName="maps__google-container"
                    options={{
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                    
                </GoogleMap>
            </div>
        </section>
    );
}

export default GoogleMaps;