// Initialize Supabase client
const supabaseUrl = 'https://htjgdziushnvtpyigqrg.supabase.co'; // Replace with your Supabase URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0amdkeml1c2hudnRweWlncXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4ODUxMzIsImV4cCI6MjA1NzQ2MTEzMn0.3CR3SFyprDOYGxEwAHV6XmYVbGY2oUq5rSC-XtlkV1g'; // Replace with your Supabase anon key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Function to handle sign-up
async function signUp(email, password) {
    const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });

    if (error) {
        console.error('Error during sign-up:', error.message);
    } else {
        console.log('User created:', user);
    }
}

// Function to handle login
async function logIn(email, password) {
    const { user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        console.error('Error during login:', error.message);
    } else {
        console.log('User logged in:', user);
    }
}

// Function to handle file upload
async function uploadFile(file) {
    const { data, error } = await supabase.storage
        .from('sandplot-files') // The name of your storage bucket
        .upload('public/' + file.name, file);

    if (error) {
        console.error('Error during file upload:', error.message);
    } else {
        console.log('File uploaded:', data);
    }
}

// Event listener for sign-up form submission
document.getElementById('sign-up-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    await signUp(email, password);
});

// Event listener for login form submission
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    await logIn(email, password);
});

// Event listener for file upload form submission
document.getElementById('file-upload-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const file = document.getElementById('file-input').files[0];
    await uploadFile(file);
});
