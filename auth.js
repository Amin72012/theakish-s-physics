const supabaseUrl = 'https://htjgdziushnvtpyigqrg.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0amdkeml1c2hudnRweWlncXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4ODUxMzIsImV4cCI6MjA1NzQ2MTEzMn0.3CR3SFyprDOYGxEwAHV6XmYVbGY2oUq5rSC-XtlkV1g'; // Replace with your Supabase anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);
