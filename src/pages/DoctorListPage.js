import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import { baseUrl } from '../utils/Utils';
import axios from 'axios';


function DoctorListPage() { 
  const location = useLocation();
  const receivedState = location.state;
  const input = receivedState ? receivedState.input : null;

  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
      const doctorData = async () => {
          try {
              const res = await axios.get(`${baseUrl}`);
              setDoctors(res.data);
          } catch (err) {
              console.error('Could not fetch doctor data:' + err);
          }
      };
      doctorData();

  }, [])

  return (
    <>
      <Header />
      <ListPageHeader 
        input={input}
      />
      <GoogleMaps 
        input={input}
        doctors={doctors}
      />
      <DoctorList 
        input={input}
        doctors={doctors}
      />
      {/* <Footer /> */}
    </>
  )
}; 

export default DoctorListPage;