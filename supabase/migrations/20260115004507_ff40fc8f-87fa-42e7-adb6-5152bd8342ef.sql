-- Create table for event RSVPs
CREATE TABLE public.event_rsvps (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  event_id TEXT NOT NULL,
  event_title TEXT NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  num_attendees INTEGER NOT NULL DEFAULT 1,
  notes TEXT
);

-- Enable Row Level Security
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit RSVPs
CREATE POLICY "Anyone can submit RSVPs"
ON public.event_rsvps
FOR INSERT
WITH CHECK (true);

-- Only service role can read RSVPs
CREATE POLICY "Only service role can read RSVPs"
ON public.event_rsvps
FOR SELECT
USING (auth.role() = 'service_role');