import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Footer from '../../components/Footer/Footer';
import '../HomePage/HomePage.scss';
function HomePage( {doctors}) {
    return (
        <>
            <Header />
            <Search 
              doctors={doctors}
            />
            <Footer/>
        </>

    );
}
export default HomePage;