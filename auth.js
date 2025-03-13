// Initialize Supabase (make sure this is correct)
const supabaseUrl = 'https://htjgdziushnvtpyigqrg.supabase.co';
const supabaseKey = 'your-supabase-key-here'; // Replace with actual key
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// SignUp function
async function signUp(event) {
    event.preventDefault(); // Prevent the form from reloading the page
    const email = document.getElementById("sign-up-email").value;
    const password = document.getElementById("sign-up-password").value;

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
        console.error("Signup Error:", error.message);
        alert("Signup failed: " + error.message);
    } else {
        console.log("Signup Success:", data);
        alert("Account created successfully! You can now log in.");
    }
}

// LogIn function
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

// Add event listeners to forms
document.getElementById("sign-up-form").addEventListener("submit", signUp);
document.getElementById("login-form").addEventListener("submit", logIn);

// File Upload function (to be implemented if you need it)
async function uploadFile(event) {
    event.preventDefault();
    const fileInput = document.getElementById("file-input");
    const file = fileInput.files[0];

    if (!file) {
        alert("No file selected");
        return;
    }

    const { data, error } = await supabase.storage
        .from("sandplot-files") // Replace with your bucket name
        .upload(file.name, file);

    if (error) {
        console.error("File Upload Error:", error.message);
        alert("Upload failed: " + error.message);
    } else {
        console.log("File Upload Success:", data);
        alert("File uploaded successfully!");
    }
}

document.getElementById("file-upload-form").addEventListener("submit", uploadFile);
