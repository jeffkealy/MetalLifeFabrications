import Image from "next/image";
import engine from "../public/engine_DFM3-01.svg";
import appointmentStyles from "../styles/Appointments.module.css";

const appointments = () => {
  return (
    <div id={appointmentStyles.galleryPage}>
      <h1 className={`${appointmentStyles.header} header`}>
        <span>Appointments</span>
      </h1>
      <div className={appointmentStyles.img}>
        <Image src={engine} alt="engine"></Image>
      </div>
      <div className={`${appointmentStyles.appointments} ${appointmentStyles.section}`}>
        <div>Fridays, 2pm-5pm</div>
      </div>
    </div>
  );
};

export default appointments;
