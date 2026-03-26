import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, LogOut, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase, type Profile } from '../lib/supabase';

export default function LmsDashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!user) return;
    let cancelled = false;
    supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .maybeSingle()
      .then(({ data, error }) => {
        if (!cancelled && !error) setProfile(data);
      });
    return () => {
      cancelled = true;
    };
  }, [user]);

  const displayName = profile?.full_name?.trim() || user?.email || 'Student';

  return (
    <div className="min-h-[60vh]">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Learning dashboard</h1>
            <p className="text-xl text-blue-100">
              Welcome back, {displayName}. Your courses and progress will appear here as your LMS is connected.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-md p-8 mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Signed in as</p>
                <p className="text-lg font-semibold text-gray-900">{user?.email}</p>
                {profile?.full_name ? (
                  <p className="text-sm text-gray-600">{profile.full_name}</p>
                ) : null}
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              You are logged in with Supabase Auth. Explore courses below or sign out when you are done.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                <BookOpen className="w-5 h-5" />
                Browse courses
              </Link>
              <button
                type="button"
                onClick={() => void handleSignOut()}
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
              >
                <LogOut className="w-5 h-5" />
                Sign out
              </button>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex gap-4">
            <GraduationCap className="w-10 h-10 text-blue-600 flex-shrink-0" />
            <div>
              <h2 className="font-semibold text-gray-900 mb-1">LMS access</h2>
              <p className="text-gray-600 text-sm">
                Full LMS integration can be added later to show enrolled courses and certificates from your database.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

