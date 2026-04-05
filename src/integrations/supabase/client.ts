import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

// These are the anon (public) key and URL — safe to be in client code.
// Prefer env vars when available (set VITE_SUPABASE_URL and
// VITE_SUPABASE_PUBLISHABLE_KEY in Netlify or .env for local dev).
const SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL ||
  "https://txuiccbuksmdcqsksefl.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR4dWljY2J1a3NtZGNxc2tzZWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2NjE5MjgsImV4cCI6MjA2MDIzNzkyOH0.S-Yf2gB8Zb3yKKuytQhKr3UXfkSWRys5UFmxHWqYYpY";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
