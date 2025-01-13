import React from "react";

export const LiveStream = () => {
  return (
    <section id="livestream" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Live Stream</h2>
        <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/zgXS0PeY_XA?si=Fy9DWi-xyQXNOaoa" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            className="w-full h-full rounded-lg shadow-lg"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};