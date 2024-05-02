import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import {useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom';

function DoctorListPage({isLoaded}) { 
  const location = useLocation();
  const receivedState = location.state;
  const input = receivedState ? receivedState.input : null;


  const [distance, setDistance] = useState('');

  return (
    <>
      <Header />
      <ListPageHeader 
        input={input}
      />
      <GoogleMaps 
        input={input}
          />
      <DoctorList 
        input={input}


          />
      {/* <Footer /> */}
    </>
  )
}; 

export default DoctorListPage;