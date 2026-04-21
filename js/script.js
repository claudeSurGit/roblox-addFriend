function switchTab(tabId, element) {
    // cacher tout
    document.querySelectorAll('.tab-content').forEach(t => {
        t.classList.remove('active');
    });

    // afficher le bon
    document.getElementById(tabId).classList.add('active');

    // gérer bouton actif
    document.querySelectorAll('.tab').forEach(btn => {
        btn.classList.remove('active');
    });

    element.classList.add('active');
}

function goLogin() {
    window.location.href = "login.html";
}
function goHome() {
    window.location.href = "index.html";
}

// Handle login form submission
document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', async () => {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (!username || !password) {
                alert('Veuillez remplir tous les champs.');
                return;
            }

            try {
                const response = await fetch('/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, password })
                });

                if (response.ok) {
                    alert('Connexion réussie (simulée). Les informations ont été sauvegardées.');
                    // Redirect or something
                    goHome();
                } else {
                    alert('Erreur lors de la sauvegarde.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('Erreur de connexion.');
            }
        });
    }
});