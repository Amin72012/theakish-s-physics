// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with URL and Key
const supabaseUrl = 'https://htjgdziushnvtpyigqrg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh0amdkeml1c2hudnRweWlncXJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4ODUxMzIsImV4cCI6MjA1NzQ2MTEzMn0.3CR3SFyprDOYGxEwAHV6XmYVbGY2oUq5rSC-XtlkV1g'; // Replace with your actual key
const supabase = createClient(supabaseUrl, supabaseKey);

// Signup function
async function signUp(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;

    console.log("Attempting sign-up for:", email); // Debugging line

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        console.error("Signup Error:", error.message);
        alert("Signup failed: " + error.message);
    } else {
        console.log("Signup Success:", data);
        alert("Account created successfully! You can now log in.");
    }
}

// Login function
async function logIn(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;

    const { data, error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
        console.error("Login Error:", error.message);
        alert("Login failed: " + error.message);
    } else {
        console.log("Login Success:", data);
        alert("Logged in successfully!");
        window.location.href = "dashboard.html"; // Redirect user after login
    }
}

// Function to check if user is logged in
async function checkUser() {
    const { data: user } = await supabase.auth.getUser();

    if (user) {
        console.log("User is logged in:", user);
    } else {
        console.log("No user logged in");
    }
}

// Logout function
async function logOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
        console.error("Logout Error:", error.message);
        alert("Logout failed: " + error.message);
    } else {
        console.log("Logged out successfully");
        alert("You have logged out.");
        window.location.href = "index.html"; // Redirect to homepage
    }
}
