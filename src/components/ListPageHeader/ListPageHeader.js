import '../ListPageHeader/ListPageHeader.scss';
import {NavLink} from 'react-router-dom';

function ListPageHeader({selected}) {

    return (
        <section className="listheader"> 
            <h2 className="listheader__title">DOCTOR SEARCH RESULTS</h2>
            <h3 className="listheader__input">{}</h3>
            <div className="listheader__top-container">
                <NavLink to="/" className="listheader__link">Back to Search</NavLink>
                <p className="listheader__hits">2 results</p>
            </div>
        </section>
    );
}
export default ListPageHeader;