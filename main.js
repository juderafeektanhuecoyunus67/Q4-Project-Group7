/* =========================================
   AUTHENTICATION & NAVIGATION LOGIC
   ========================================= */

// Requirement 3.h & 3.i: Handle Logout with confirmation
function handleLogout() {
    // Variable assignment (Requirement 3.f)
    const confirmMsg = "Are you sure you want to logout?";

    // Conditional statement (Requirement 3.i)
    if (confirm(confirmMsg)) {
        // Requirement 3.j: Automatic redirect to login page
        window.location.href = "index.html"; 
    }
}

/* =========================================
   PROFILE PAGE FUNCTIONS
   ========================================= */

// Requirement 3.h: Display information when triggered
function resetPassword() {
    // Variables and Operators (Requirement 3.f)
    let user = "Marco";
    let status = "Success";
    
    // Output via window.alert (Requirement 3.j)
    alert("Password reset request for " + user + ": " + status + "!\nPlease check your email for the link.");
    
    // Console log for iteration/debugging (Requirement 3.g)
    console.log("Password reset sequence executed for: " + user);
}

// Logic to check if page is loaded properly
document.addEventListener('DOMContentLoaded', () => {
    console.log("Student Portal System Active.");
});