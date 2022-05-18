import React from "react";
export const Mapbox = () => {
  return (
    <div className="gmap_canvas">
      <iframe
        className="gmap_iframe"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=9 le binh&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
      <p>9 Lê Bình, Phường 4, Tân Bình, Thành phố Hồ Chí Minh, Việt Nam</p>
    </div>
  );
};
