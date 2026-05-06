/* =========================================
    1.AUTHENTICATION & NAVIGATION LOGIC
   ========================================= */

// Requirement: Track login attempts (Start at 5)
let attempts = 5;

function handleLoginSubmit() {
    const userInput = document.getElementById('username').value;
    const passInput = document.getElementById('password').value;
    const errorMsg = document.getElementById('errorMessage');

    // Existing Account Credentials
    const validEmail = "zambales.md@obmontessori.edu.ph";
    const validPass = "ilikepotatochips20999107677";

    // When field is blank, it shows "Enter your user and password."
    if (userInput === "" || passInput === "") {
        errorMsg.innerText = "Enter your user and password.";
        return;
    }

    // If its not blank and correct, it shows 
    if (attempts > 0) {
        if (userInput === validEmail && passInput === validPass) {
            // WHEN EXIST ACCOUNT / CORRECT
            alert("Successfully Logged In!");
            window.location.href = "dashboard.html";
        } else {
            // WHEN INCORRECT ACCOUNT / NONEXISTENT
            attempts--; // Decrease attempt count
            
            if (attempts > 0) {
                errorMsg.innerText = "Incorrect user and password. Attempts left: " + attempts;
                console.log("Failed login attempt. Remaining: " + attempts);
            } else {
                errorMsg.innerText = "⚠️   Too many failed attempts. Please refresh the page and try again.";
                document.getElementById('loginBtn').disabled = true; // Disable the button
                alert("Access Locked 🔒");
            }
        }
    }
}

function handleLogout() {
    const confirmMsg = "Are you sure you want to logout?";
    if (confirm(confirmMsg)) {
        window.location.href = "index.html"; 
    }
}

/* =========================================
   2-3. TASK & NOTEBOOK FUNCTIONS
   ========================================= */

function showUnavailable() {
    alert("Unavailable");
}

/* =========================================
   4. PROFILE PAGE FUNCTIONS
   ========================================= */

function resetPassword() {
    let user = "Student"; 
    let status = "Success";
    
    alert("Password reset request for " + user + ": " + status + "!\nPlease check your email for the link.");
    console.log("Password reset sequence executed for: " + user);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Student Portal System Active.");
    
    const loginForm = document.getElementById('loginForm');
    if(loginForm) {
        loginForm.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                handleLoginSubmit();
            }
        });
    }
});

// Note: For existing user and password..
// Here you go...
// Email: zambales.md@obmontessori.edu.ph
// Password: ilikepotatochips20999107677