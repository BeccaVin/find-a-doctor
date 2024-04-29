import Header from '../components/Header/Header';
import DoctorList from '../components/DoctorList/DoctorList';
import Search from '../components/Search/Search';
import GoogleMaps from '../components/GoogleMaps/GoogleMaps';

function DoctorListPage( {isLoaded, mapCenter}) {
     return (
        <>
            <Header />
            <Search isLoaded={isLoaded}/>
            <GoogleMaps isLoaded={isLoaded} mapCenter={mapCenter}/>
            <DoctorList />
            {/* <Footer /> */}
        </>

    );
  }
  
  export default DoctorListPage;