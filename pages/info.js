import infoStyles from "../styles/Info.module.css";

const Info = () => {
  return (
    <div id={infoStyles.infoPage}>
      <h1 className="header">
        <span>Info</span>
      </h1>
      <div className={infoStyles.body}>
        <div className={`${infoStyles.location} ${infoStyles.section}`}>
          <span className={infoStyles.title}>Location:</span>
          <div className={infoStyles.address}>
            721 Industrial Blvd.
            <br />
            Unit A10
            <br />
            Watertown, MN 55388
          </div>
          <div className={`${infoStyles.hours} ${infoStyles.section}`}>
            <span className={infoStyles.title}>Hours:</span>
            <div>Monday - Friday</div>
            <div>9am - 5pm</div>
          </div>
          <div className={`${infoStyles.appointments} ${infoStyles.section}`}>
            <span className={infoStyles.title}>Appointments: </span>
            <div>Fridays, 2pm-5pm</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
