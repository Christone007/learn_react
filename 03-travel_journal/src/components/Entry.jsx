export default function Entry() {
  return (
    <div className="entry-card">
      <img
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        className="entry-img"
        alt="Japan"
      />
      <div className="entry-content">
        <div className="entry-location">
          <img
            src="/public/marker.png"
            className="entry-location-icon"
            alt="location icon"
          />
          <span className="entry-location-name">japan</span>
          <a
            href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
            className="entry-location-link"
          >
            View on Google Maps
          </a>
        </div>
        <h1 className="entry-title">Mount Fuji</h1>
        <span className="entry-date">12 Jan, 2021 - 24 Jan, 2021</span>
        <p className="entry-description">
          Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
          (12,380 feet). Mount Fuji is the single most popular tourist site in
          Japan, for both Japanese and foreign tourists.
        </p>
      </div>
    </div>
  );
}
