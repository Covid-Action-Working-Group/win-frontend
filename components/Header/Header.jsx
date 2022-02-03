import styles from "./Header.module.scss";
import HeroLogo from "../../public/icons/hero_logo.svg";

function Header() {
    return (
        <header className={styles.header}>
            <HeroLogo className={styles.logo}/>
            
            <div className={styles.menu}>
                <ul>
                    <a href='/'><li>Home</li></a>
                    <a href='/challenge'><li>Challenge</li></a>
                </ul>
            </div>
            

            {/* <div className="flex-none col-start-3 ..."><a href='#2'>Impact</a></div>
            <div className="flex-none col-start-3 ..."><a href='#3'>Knowledge</a></div> */}
      </header>
    )
}

export default Header;
