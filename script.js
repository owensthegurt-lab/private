/* style.css */
:root {
    --google-blue: #1a73e8;
    --google-red: #ea4335;
    --text-dark: #202124;
    --border-gray: #dadce0;
}

body {
    font-family: 'Roboto', arial, sans-serif;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin: 0;
}

.auth-card {
    width: 448px;
    min-height: 500px;
    padding: 48px 40px 36px;
    border: 1px solid var(--border-gray);
    border-radius: 8px;
    text-align: center;
    box-sizing: border-box;
}

.logo { width: 75px; margin-bottom: 8px; }

h1 {
    font-size: 24px;
    font-weight: 400;
    color: var(--text-dark);
    margin: 0 0 10px;
}

.sub-text {
    font-size: 16px;
    color: var(--text-dark);
    margin-bottom: 40px;
}

.input-container {
    margin-bottom: 24px;
    text-align: left;
}

input {
    width: 100%;
    padding: 13px 15px;
    font-size: 16px;
    border: 1px solid var(--border-gray);
    border-radius: 4px;
    box-sizing: border-box;
    transition: border 0.2s;
}

input:focus {
    outline: none;
    border: 2px solid var(--google-blue);
    padding: 12px 14px;
}

.footer-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 48px;
}

.link {
    color: var(--google-blue);
    font-weight: 500;
    font-size: 14px;
    text-decoration: none;
    cursor: pointer;
}

button {
    background-color: var(--google-blue);
    color: #fff;
    padding: 10px 24px;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    cursor: pointer;
    font-size: 14px;
}

button:hover {
    background-color: #185abc;
    box-shadow: 0 1px 2px 0 rgba(60,64,67,0.3);
}

.hidden { display: none; }

#user-pill {
    display: inline-flex;
    align-items: center;
    padding: 5px 12px;
    border: 1px solid var(--border-gray);
    border-radius: 16px;
    font-size: 14px;
    margin-bottom: 24px;
}
