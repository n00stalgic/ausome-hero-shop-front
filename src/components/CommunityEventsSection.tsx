import { Calendar, MapPin, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: string;
  title: string;
  venue: string;
  date: string;
  time: string;
  location: string;
  image?: string;
  donationPercent?: string;
  comingSoon?: boolean;
}

const events: Event[] = [
  {
    id: "1",
    title: "iPad Exploration Club",
    venue: "Apple Store Del Amo",
    date: "Thursday, January 29, 2026",
    time: "5:00 PM",
    location: "Del Amo Fashion Center, Torrance, CA",
    image: "/lovable-uploads/apple-ipad-workshop.png",
  },
  {
    id: "2",
    title: "Play for a Purpose Fundraiser",
    venue: "Chuck E. Cheese",
    date: "Friday, February 27, 2026",
    time: "3:00 PM - 9:00 PM",
    location: "20700 Avalon Blvd, Carson, CA",
    image: "/lovable-uploads/chuck-e-cheese-fundraiser.png",
    donationPercent: "20% of sales donated",
  },
  {
    id: "3",
    title: "Do Good with Chipotle",
    venue: "Chipotle",
    date: "Tuesday, March 3, 2026",
    time: "4:00 PM - 8:00 PM",
    location: "20420 Avalon Blvd Ste A, Carson, CA",
    image: "/lovable-uploads/chipotle-fundraiser.jpeg",
    donationPercent: "25% of sales donated",
  },
  {
    id: "4",
    title: "Sky-High Fun Fundraiser",
    venue: "Urban Air",
    date: "Coming Soon",
    time: "TBA",
    location: "Los Angeles Area",
    comingSoon: true,
  },
  {
    id: "5",
    title: "Play & Support Fundraiser",
    venue: "Dave & Buster's",
    date: "Coming Soon",
    time: "TBA",
    location: "Los Angeles Area",
    comingSoon: true,
  },
];

const CommunityEventsSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-cosmic-navy/5 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic-navy mb-4">
            Community Events & Fundraisers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join us at these upcoming events! Your participation helps support neurodivergent kids and families in our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 transition-transform hover:scale-[1.02] ${
                event.comingSoon ? "opacity-90" : ""
              }`}
            >
              {event.image ? (
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover object-top"
                  />
                  {event.donationPercent && (
                    <Badge className="absolute top-3 right-3 bg-cosmic-coral text-white">
                      {event.donationPercent}
                    </Badge>
                  )}
                </div>
              ) : (
                <div className="relative h-64 bg-gradient-to-br from-cosmic-navy/20 to-cosmic-gold/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-5xl mb-2 block">🎉</span>
                    <span className="text-2xl font-bold text-cosmic-navy">{event.venue}</span>
                  </div>
                  <Badge className="absolute top-3 right-3 bg-cosmic-gold text-cosmic-navy font-semibold">
                    Coming Soon
                  </Badge>
                </div>
              )}

              <div className="p-5">
                <h3 className="text-lg font-bold text-cosmic-navy mb-1">{event.title}</h3>
                <p className="text-cosmic-coral font-semibold mb-3">{event.venue}</p>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-cosmic-gold" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cosmic-gold" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-cosmic-gold" />
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityEventsSection;
