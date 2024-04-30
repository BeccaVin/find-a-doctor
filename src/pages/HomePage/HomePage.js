import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import '../HomePage/HomePage.scss';
function HomePage( {isLoaded, setAddressInput } ) {
    return (
        <>
            <Header />
            <Search isLoaded={isLoaded} 
                setAddressInput={setAddressInput}
            />
        </>

    );
  }
  
  export default HomePage;