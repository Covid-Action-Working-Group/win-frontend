import styles from "./Footer.module.scss";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="bg-red py-1 w-full text-center align-bottom text-white">
                <p className="text-xs lg:text-xs font-serif py-0.5">Made in India by Government of India. Reach out to us at <a href="mailto:name@email.com">win@niua.org</a></p>
                <p className="text-xs lg:text-xs font-serif py-0.5">&#169; Ministry of Housing and Urban Affairs</p>
            </div>
        </footer>
    )
}

export default Footer;
