"user client";
import '../GoogleMaps/GoogleMaps.scss';
import {
    APIProvider, 
    Map,
    AdvancedMarker,
    InfoWindow
} from '@vis.gl/react-google-maps'; 
import {googleApiKey} from '../../utils/Utils';
import {useState} from 'react';

function GoogleMaps ({address, doctors}) {

    const center = {lat:43.559060, lng:-79.705620}
    const [openDoctor, setOpenDoctor] = useState(false);

    return (
        <APIProvider apiKey={googleApiKey}>
            <div className="maps">
                <div className="maps__container">
                    <Map 
                    mapId="map"
                    center= {address ? { address} : center}
                    zoom={12} 
                    mapContainerClassName="maps__google-container"
                    options={{
                        zoomControl: true,
                        streetViewControl: true,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                    >
                        {doctors.map(doctor => (
                            <AdvancedMarker 
                                position={{ lat: doctor.latitude, lng: doctor.longitude }} 
                                onClick ={() => setOpenDoctor(true)}
                                key={doctor.id}>
                            </AdvancedMarker>
                        ))}
                        {openDoctor && (
                            <InfoWindow 
                                position={{ lat: openDoctor.latitude, lng: openDoctor.longitude }} 
                                onCloseClick= {() => setOpenDoctor(false)}>
                                <h3>{openDoctor.name}</h3>
                                <p>{openDoctor.specialty}</p>
                                <p>{openDoctor.address}</p>
                            </InfoWindow>
                        )}
                    </Map>
                </div>
            </div>
        </APIProvider>
    );
}

export default GoogleMaps;