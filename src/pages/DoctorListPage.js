import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from 'react';
import {baseUrl, googleApiKey} from '../utils/Utils';
import axios from 'axios';

function DoctorListPage() { 
  const location = useLocation();
  const address = decodeURIComponent(location.pathname.split('/').pop());

  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
      const fetchDoctorData = async () => {
          try {
            if (!address) {
              throw new Error('Address is empty');
            }
            const inputCoordinates = await getCoordinates(address);

            const res = await axios.get(`${baseUrl}`);
            const doctors = res.data;

        
              const nearbyDoctors = doctors.filter(doctor => {
                const doctorCoordinates = { lat: doctor.latitude, lng: doctor.longitude };
                const distance = calculateDistance(inputCoordinates, doctorCoordinates);
                return distance <= 50;
            });
            setDoctors(nearbyDoctors);
            } catch (err) {
              console.error('Could not fetch doctor data:' + err);
            }
      };
      const getCoordinates = async (address) => {
        console.log(address);
        try {
          if (!address) {
            throw new Error('Address is Empty');
          }
            const res = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json`, {
                params: {
                    address: address,
                    key: googleApiKey
                }
            });
            if (res.data && res.data.results && res.data.results.length > 0) {
              const { lat, lng } = res.data.results[0].geometry.location;
              return { lat, lng };
            } else {
              throw new Error('Invalid response from Geocoding API');
            }
          } catch (err) {
            console.error('Could not fetch coordinates:', err);
            // Handle error gracefully
            return null;
          }
    };
    const calculateDistance = (coord1, coord2) => {
      // Haversine formula to calculate distance between two coordinates
      const R = 6371; // Earth's radius in km
      const dLat = toRadians(coord2.lat - coord1.lat);
      const dLng = toRadians(coord2.lng - coord1.lng);
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
              Math.cos(toRadians(coord1.lat)) * Math.cos(toRadians(coord2.lat)) *
              Math.sin(dLng / 2) * Math.sin(dLng / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const distance = R * c; // Distance in km
      return distance;
    };
    const toRadians = (degrees) => {
      return degrees * Math.PI / 180;
    };
    fetchDoctorData();
  }, [address]);
    return (
        <>
            <Header />
            <ListPageHeader/>
            <GoogleMaps 
              address={address} 
              doctors={doctors}
            />
            <DoctorList 
              doctors={doctors}
            />
            {/* <Footer /> */}
        </>
    );
  }
  
  export default DoctorListPage;