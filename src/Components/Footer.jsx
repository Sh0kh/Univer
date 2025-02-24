import FooterBot from "./others/FooterBot";
import FooterMain from "./others/FooterMain";
import FooterTop from "./others/FooterTop";

export default function Footer() {
    return (
        <footer className="footer w-full">
            <div className="Container">
                <FooterTop />
                <FooterMain />
                <FooterBot />
            </div>
        </footer>
    )
}