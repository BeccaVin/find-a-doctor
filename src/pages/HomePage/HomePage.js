import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import '../HomePage/HomePage.scss';
function HomePage( {isLoaded} ) {
    return (
        <>
            <Header />
            <Search isLoaded={isLoaded}/>
        </>

    );
  }
  
  export default HomePage;