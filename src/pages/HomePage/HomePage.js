import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import '../HomePage/HomePage.scss';
function HomePage( {doctors}) {
    return (
        <>
            <Header />
            <Search 
              doctors={doctors}
            />
        </>

    );
}
export default HomePage;