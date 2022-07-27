import homeStyles from "../styles/Home.module.css";
import Carousel from "./Carousel";
import Image from "next/image";
import octoHeader from "../public/Octoheader.svg";

const home = () => {
  return (
    <div id={homeStyles.home}>
      <Carousel />
      <div className={homeStyles.whatWeDo}>
        <div className={homeStyles.title}>
          <span className={homeStyles.span}>What we do</span>
        </div>
        <ul className={homeStyles.list}>
          <li className={homeStyles.li}>Welding: Steel/Aluminum/Stainless Steel</li>
          <li className={homeStyles.li}>Automobile electrical</li>
          <li className={homeStyles.li}>Air ride/Hydraulics</li>
          <li className={homeStyles.li}>Custom chassis Fabrication</li>
          <li className={homeStyles.li}>Drivetrain</li>
          <li className={homeStyles.li}>Transmission swaps</li>
          <li className={homeStyles.li}>Brake upgrades</li>
          <li className={homeStyles.li}>Exhaust work</li>
        </ul>
        <div className={homeStyles.octoheader}>
          <Image src={octoHeader} />
        </div>
      </div>
    </div>
  );
};

export default home;
