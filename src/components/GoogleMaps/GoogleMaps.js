import '../GoogleMaps/GoogleMaps.scss';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import icon from '../../assets/Logo/red-flat-marker.png';
function GoogleMaps ({ input, doctors }) {  

    return (
        <section className="maps">
            <div className="maps__container">
                <GoogleMap 
                    mapId="map"
                    center= {input} 
                    zoom={13} 
                    mapContainerClassName="maps__google-container"
                    options={{
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                >
                     {doctors.map((doctor) => (
                        <MarkerF key={doctor.id} position={{lat:doctor.latitude, lng: doctor.longitude}} icon={icon}/>
                     ))}   
                </GoogleMap>
                </div>           
        </section>
    );
}

export default GoogleMaps;