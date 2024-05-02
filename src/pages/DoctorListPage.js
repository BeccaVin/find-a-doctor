import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import {useState} from 'react';
import {useLocation} from 'react-router-dom';
function DoctorListPage({isLoaded}) { 
  const location = useLocation();
  const receivedState = location.state;
  const selected = receivedState ? receivedState.selected : null;

  console.log(receivedState);
  return (
    <>
      <Header />
      <ListPageHeader 
        selected={selected}
      />
      <GoogleMaps 
        isLoaded={isLoaded} 
        selected={selected}
          />
      <DoctorList 
        selected={selected}
          />
      {/* <Footer /> */}
    </>
  )
}; 

export default DoctorListPage;