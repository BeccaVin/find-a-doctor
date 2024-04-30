import '../ListPageHeader/ListPageHeader.scss';
import {NavLink} from 'react-router-dom';

function ListPageHeader({inputData}) {

    return (
        <section className="listheader"> 
            <h2 className="listheader__title">DOCTOR SEARCH RESULTS</h2>
            <p>{inputData}</p>
            <div className="listheader__top-container">
                <NavLink to="/" className="listheader__link">Back to Search</NavLink>
                <p className="listheader__hits">2 results</p>
            </div>
        </section>
    );
}
export default ListPageHeader;