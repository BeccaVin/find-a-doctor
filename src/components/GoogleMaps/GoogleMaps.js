import '../GoogleMaps/GoogleMaps.scss';
import { GoogleMap, MarkerF } from '@react-google-maps/api';
import icon from '../../assets/Logo/red-flat-marker.png';
import {googleApiKey} from '../../utils/Utils';
import { useJsApiLoader } from '@react-google-maps/api';

const libraries = ['places'];
function GoogleMaps ({ input }) {  
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: googleApiKey,
        libraries: libraries
      })  
      if (!isLoaded) {
        return <h2 className="maps__loading">Loading Maps</h2>
      }
      
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
                    {input &&  <MarkerF position={input} icon={icon}/>}       
                </GoogleMap>
                </div>           
        </section>
    );
}

export default GoogleMaps;