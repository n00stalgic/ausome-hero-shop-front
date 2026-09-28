import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
import FadeIn from "@/components/motion/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

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
  externalLink?: string;
  endDate: string;
}

const events: Event[] = [
  {
    id: "ipad-workshop-jan-29",
    title: "iPad Exploration Club",
    venue: "Apple Store Del Amo",
    date: "Thursday, January 29, 2026",
    time: "5:00 PM",
    location: "Del Amo Fashion Center, Torrance, CA",
    image: "/lovable-uploads/apple-del-amo-cover.svg",
    endDate: "2026-01-29",
  },
  {
    id: "chuck-e-cheese-feb-27",
    title: "Play for a Purpose Fundraiser",
    venue: "Chuck E. Cheese",
    date: "Friday, February 27, 2026",
    time: "3:00 PM - 9:00 PM",
    location: "20700 Avalon Blvd, Carson, CA",
    image: "/lovable-uploads/chuck-e-cheese-fundraiser.webp",
    donationPercent: "20% of sales donated",
    endDate: "2026-02-27",
  },
  {
    id: "chipotle-mar-3",
    title: "Do Good with Chipotle",
    venue: "Chipotle",
    date: "Tuesday, March 3, 2026",
    time: "4:00 PM - 8:00 PM",
    location: "20420 Avalon Blvd Ste A, Carson, CA",
    image: "/lovable-uploads/chipotle-fundraiser.webp",
    donationPercent: "25% of sales donated",
    endDate: "2026-03-03",
  },
  {
    id: "urban-air-coming-soon",
    title: "Sky-High Fun Fundraiser",
    venue: "Urban Air",
    date: "Coming Soon",
    time: "TBA",
    location: "Los Angeles Area",
    comingSoon: true,
    endDate: "2099-12-31",
  },
  {
    id: "dave-busters-fundraiser",
    title: "Power Cards Fundraiser",
    venue: "Dave & Buster's",
    date: "January 19 - March 31, 2026",
    time: "Order Anytime",
    location: "Play at Any Dave & Buster's",
    image: "/lovable-uploads/dave-busters-fundraiser.webp",
    donationPercent: "50% donated back",
    externalLink:
      "https://www.groupraise.com/offer-campaigns/69997-ausome-heroes-dave-busters-fundraising-campaigns?utm_source=sendgrid&utm_medium=email&utm_campaign=o_offers_day_1",
    endDate: "2026-03-31",
  },
];

function isPast(endDate: string): boolean {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return new Date(endDate + "T23:59:59") < today;
}

interface RsvpFormData {
  full_name: string;
  email: string;
  phone: string;
  num_attendees: number;
  notes: string;
}

const EventsSection = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [showRsvpForm, setShowRsvpForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<RsvpFormData>({
    full_name: "",
    email: "",
    phone: "",
    num_attendees: 1,
    notes: "",
  });

  const sortedEvents = useMemo(() => {
    const upcoming = events.filter((e) => !isPast(e.endDate));
    const past = events.filter((e) => isPast(e.endDate));
    upcoming.sort((a, b) => a.endDate.localeCompare(b.endDate));
    past.sort((a, b) => b.endDate.localeCompare(a.endDate));
    return [...upcoming, ...past];
  }, []);

  const handleRsvpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedEvent) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase.from("event_rsvps").insert({
        event_id: selectedEvent.id,
        event_title: selectedEvent.title,
        full_name: formData.full_name,
        email: formData.email,
        phone: formData.phone || null,
        num_attendees: formData.num_attendees,
        notes: formData.notes || null,
      });

      if (error) throw error;

      toast.success("RSVP Confirmed!", {
        description: `We'll see you at ${selectedEvent.venue}! Check your email for details.`,
        duration: 5000,
      });

      setFormData({ full_name: "", email: "", phone: "", num_attendees: 1, notes: "" });
      setShowRsvpForm(false);
    } catch (error) {
      console.error("RSVP error:", error);
      toast.error("Oops! Something went wrong", {
        description: "Please try submitting your RSVP again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-cosmic-navy/5 to-white">
      <div className="container mx-auto">
        <FadeIn className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-cosmic-navy mb-4">
            Community Events & Fundraisers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your participation helps support neurodivergent kids and families in our community.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedEvents.map((event, i) => {
            const past = isPast(event.endDate);
            return (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={!event.comingSoon && !past ? { y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" } : {}}
                onClick={() => !event.comingSoon && !past && setSelectedEvent(event)}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 ${
                  event.comingSoon || past ? "opacity-75" : "cursor-pointer"
                }`}
              >
                {event.image ? (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-full object-cover object-top ${past ? "grayscale" : ""}`}
                    />
                    {event.donationPercent && !past && (
                      <Badge className="absolute top-3 right-3 bg-cosmic-coral text-white">
                        {event.donationPercent}
                      </Badge>
                    )}
                    {past && (
                      <Badge className="absolute top-3 right-3 bg-gray-500 text-white">Past Event</Badge>
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

                  {!event.comingSoon &&
                    !past &&
                    (event.externalLink ? (
                      <a
                        href={event.externalLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button className="w-full mt-4 bg-cosmic-navy hover:bg-cosmic-navy/90">
                          Get Your Code & Support Us
                        </Button>
                      </a>
                    ) : (
                      <Button
                        className="w-full mt-4 bg-cosmic-navy hover:bg-cosmic-navy/90"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                      >
                        View Details & RSVP
                      </Button>
                    ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Event Detail Modal */}
      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => {
          setSelectedEvent(null);
          setShowRsvpForm(false);
        }}
      >
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedEvent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-cosmic-navy">{selectedEvent.title}</DialogTitle>
              </DialogHeader>

              {selectedEvent.image && (
                <div className="relative w-full rounded-lg overflow-hidden">
                  <img
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}

              <div className="space-y-4">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="h-5 w-5 text-cosmic-gold" />
                    <span className="font-medium">{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="h-5 w-5 text-cosmic-gold" />
                    <span className="font-medium">{selectedEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin className="h-5 w-5 text-cosmic-gold" />
                    <span className="font-medium">{selectedEvent.location}</span>
                  </div>
                </div>

                {selectedEvent.donationPercent && (
                  <Badge className="bg-cosmic-coral text-white text-base px-4 py-2">
                    {selectedEvent.donationPercent}
                  </Badge>
                )}

                {!showRsvpForm ? (
                  <Button
                    className="w-full bg-cosmic-gold hover:bg-cosmic-gold/90 text-cosmic-navy font-semibold text-lg py-6"
                    onClick={() => setShowRsvpForm(true)}
                  >
                    <Users className="mr-2 h-5 w-5" />
                    RSVP to This Event
                  </Button>
                ) : (
                  <form onSubmit={handleRsvpSubmit} className="space-y-4 bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-cosmic-navy flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      RSVP Form
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          required
                          value={formData.full_name}
                          onChange={(e) => setFormData({ ...formData, full_name: e.target.value })}
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="your@email.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone (Optional)</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(555) 123-4567"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="num_attendees">Number of Attendees *</Label>
                        <Input
                          id="num_attendees"
                          type="number"
                          min="1"
                          max="20"
                          required
                          value={formData.num_attendees}
                          onChange={(e) =>
                            setFormData({ ...formData, num_attendees: parseInt(e.target.value) || 1 })
                          }
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="notes">Additional Notes (Optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        placeholder="Any special accommodations or questions?"
                        rows={3}
                      />
                    </div>

                    <div className="flex gap-3">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => setShowRsvpForm(false)}
                        className="flex-1"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-cosmic-gold hover:bg-cosmic-gold/90 text-cosmic-navy font-semibold"
                      >
                        {isSubmitting ? "Submitting..." : "Confirm RSVP"}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default EventsSection;
