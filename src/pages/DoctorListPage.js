import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import {useLocation} from 'react-router-dom';

function DoctorListPage({doctors}) { 
  const location = useLocation();
  const { input, distances, doctors: filteredDoctors } = location.state;
  
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
        distances={distances}
        filteredDoctors={filteredDoctors}
      />
      {/* <Footer /> */}
    </>
  )
}; 

export default DoctorListPage;