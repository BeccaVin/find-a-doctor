import '../Footer/Footer.scss';

function Footer() {
    return (
        <footer className="bottom">
            <p>&copy; {new Date().getFullYear()} Find A Doctor</p>
        </footer>
    )
}

export default Footer;