import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import ListPageHeader from '../components/ListPageHeader/ListPageHeader';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';
import Footer from '../components/Footer/Footer';
import {useLocation} from 'react-router-dom';

function DoctorListPage() { 
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
        filteredDoctors={filteredDoctors}
      />
      <DoctorList 
        input={input}
        distances={distances}
        filteredDoctors={filteredDoctors}
      />
      <Footer />
    </>
  )
}; 

export default DoctorListPage;