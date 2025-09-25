import markerIcon from "/src/assets/marker.png";

export default function Entry(props) {
  return (
    <div className="entry-card">
      <img src={props.img.src} className="entry-img" alt={props.img.alt} />
      <div className="entry-content">
        <div className="entry-location">
          <img
            src={markerIcon}
            className="entry-location-icon"
            alt="location icon"
          />
          <span className="entry-location-name">{props.country}</span>
          <a href={props.googleMapsLink} className="entry-location-link">
            View on Google Maps
          </a>
        </div>
        <h1 className="entry-title">{props.title}</h1>
        <span className="entry-date">{props.dates}</span>
        <p className="entry-description">{props.text}</p>
      </div>
    </div>
  );
}
