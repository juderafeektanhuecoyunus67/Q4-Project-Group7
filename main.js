/* =========================================
   AUTHENTICATION & NAVIGATION LOGIC
   ========================================= */

function handleLogout() {
    const confirmMsg = "Are you sure you want to logout?";
    if (confirm(confirmMsg)) {
        window.location.href = "index.html"; 
    }
}

/* =========================================
  2-3. TASK & NOTEBOOK FUNCTIONS
   ========================================= */

// If you try to click on a containers, then it shows "Unavailable"
function showUnavailable() {
    alert("Unavailable");
}

/* =========================================
  4. PROFILE PAGE FUNCTIONS
   ========================================= */

function resetPassword() {
    // Defined 'user' inside the function so it doesn't cause errors
    let user = "Student"; 
    let status = "Success";
    
    alert("Password reset request for " + user + ": " + status + "!\nPlease check your email for the link.");
    console.log("Password reset sequence executed for: " + user);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log("Student Portal System Active.");
});
