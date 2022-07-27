import Link from "next/link";
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <div id={navStyles.nav}>
      <Link href="/">
        <a className={navStyles.mobileLogo}>
          <div className={navStyles.title}>Metal Life Fabrications</div>
        </a>
      </Link>
      <div className={navStyles.sideNav}>
        <Link href="/" className={navStyles.home}>
          Home
        </Link>{" "}
        <Link href="/gallery" className={navStyles.gallery}>
          Gallery
        </Link>
      </div>

      <Link href="/">
        <a className={navStyles.logo}>
          <div className={navStyles.title}>Metal Life Fabrications</div>
        </a>
      </Link>
      <div className={navStyles.sideNav}>
        <Link href="/info" className={navStyles.info}>
          Info
        </Link>
        <Link href="/appointments" className={navStyles.appointments}>
          Appointments
        </Link>
      </div>
    </div>
  );
};

export default Nav;
