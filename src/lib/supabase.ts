import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce',
  },
});

export interface Inquiry {
  name: string;
  email: string;
  mobile: string;
  message?: string;
  course_name?: string;
}

export interface PartnerApplication {
  partner_type: 'counsellor' | 'franchisee' | 'affiliate';
  name: string;
  email: string;
  mobile: string;
  message?: string;
}

export interface InternshipInquiry {
  institution_name: string;
  contact_person: string;
  email: string;
  mobile: string;
  number_of_students: number;
  preferred_stage: 'stage1' | 'stage2' | 'stage3';
  message?: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  created_at: string;
  updated_at: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  category: string;
  image_url: string | null;
  published: boolean;
  published_at: string;
  created_at: string;
  updated_at: string;
}
