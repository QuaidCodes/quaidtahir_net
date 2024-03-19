
import "./Footer.css";

function Footer() {

    const currYear = new Date().getFullYear();
    
    return <>
        <footer>
            <div className="copyright">
                &copy; Quaid Tahir 2021 - {currYear}
            </div>

            <div className="footer-contact">
            </div>
        </footer>
    </>
}

export default Footer;