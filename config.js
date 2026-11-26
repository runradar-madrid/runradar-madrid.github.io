// Configuración de la versión online (Supabase).
// Estos dos valores son PÚBLICOS por diseño (la seguridad la ponen las reglas RLS de supabase/esquema.sql).
// Se sacan de Supabase → Project Settings → API Keys (Legacy) → "anon public".
// ¡Nunca pongas aquí la clave "service_role"!
// ("self" es la ventana en la web y también existe en el service worker, que lo usa para los avisos)
self.RR_CONFIG = {
  supabaseUrl: "https://wejdswvnatmjghiujgew.supabase.co",
  supabaseAnonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndlamRzd3ZuYXRtamdoaXVqZ2V3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTQ3NzAyNTcsImV4cCI6MjExMDM0NjI1N30.iPD8V63YSZp9B-PSnEVHRI0b5H2xBYabo-hT6r0Rvfs",
  // Strava → Ajustes → Mi aplicación de API → "ID de cliente" (es público). El "Secreto de cliente"
  // NO va aquí: se guarda en Supabase → Edge Functions → Secrets (STRAVA_CLIENT_SECRET).
  stravaClientId: "",
};
