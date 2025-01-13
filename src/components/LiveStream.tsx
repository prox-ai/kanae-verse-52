import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LiveStream = () => {
  const youtubeUrl = "https://www.youtube.com/live/zgXS0PeY_XA";

  return (
    <section id="livestream" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Live Stream</h2>
        <div className="max-w-4xl mx-auto text-center p-8 bg-gray-50 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            This livestream can only be watched directly on YouTube.
          </p>
          <Button
            variant="default"
            onClick={() => window.open(youtubeUrl, '_blank')}
            className="inline-flex items-center gap-2"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};