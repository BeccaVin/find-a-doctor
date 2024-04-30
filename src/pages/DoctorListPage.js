import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}
function DoctorListPage( {isLoaded, addressInput }) { 
    const [doctors, setDoctors] = useState([]);
    const location = useLocation();
    const autocompletedAddress = location.state ? location.state.autocompletedAddress : '';

    const filteredDoctors = doctors.filter((doctor) => {
        const distance = calculateDistance(
          doctor.address.lat,
          doctor.address.lng,
          addressInput.lat,
          addressInput.lng
        );
        const proximityRadius = 50; 
        return distance <= proximityRadius;
      });
    
    return (
        <>
            <Header />
            <ListPageHeader inputData={autocompletedAddress}/>
            <GoogleMaps 
                isLoaded={isLoaded} 
                filteredDoctors={filteredDoctors}/>
            <DoctorList 
                
                setDoctors={setDoctors}
                filteredDoctors={filteredDoctors}/>
            {/* <Footer /> */}
        </>

    );
  }
  
  export default DoctorListPage;