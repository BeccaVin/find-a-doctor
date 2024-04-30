import '../GoogleMaps/GoogleMaps.scss';
import { GoogleMap, Marker } from '@react-google-maps/api';

function GoogleMaps ({ isLoaded, filteredDoctors }) {
    const center={lat:43.559060, lng:-79.705620}

    if (!isLoaded) {
        return <h2 className="maps__loading">Loading Maps</h2>
    }
    return (
        <section className="maps">
            <div className="maps__container">
                <GoogleMap 
                    mapId="map"
                    center= {center} 
                    zoom={13} 
                    mapContainerClassName="maps__google-container"
                    options={{
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                    {filteredDoctors.map((doctor) => 
                        <Marker 
                            key={doctor.id}
                            position={{lat: doctor.address.lat, lng: doctor.address.lng}}/>
                    )}
                    </GoogleMap>
            </div>
        </section>
    );
}

export default GoogleMaps;