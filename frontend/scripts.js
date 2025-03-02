const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

function initializeImageSwitcher() {
    const MainImg = document.getElementById("MainImg");
    const smallImgs = document.querySelectorAll(".small-img");

    smallImgs.forEach((img) => {
        img.addEventListener("click", () => {
            MainImg.src = img.src;
        });
    });
}

document.addEventListener("DOMContentLoaded", initializeImageSwitcher);

const AuthModule = (() => {
    // DOM Elements
    const elements = {
        signupForm: document.querySelector('.signup-form'),
        loginForm: document.querySelector('.login-form'),
        alertBox: document.querySelector('.alert-box')
    };

    // API Endpoints
    const endpoints = {
        signup: 'http://localhost:5000/api/auth/signup',
        login: 'http://localhost:5000/api/auth/login'
    };

    // Initialize auth module
    const init = () => {
        setupEventListeners();
    };

    // Event Listeners
    const setupEventListeners = () => {
        if (elements.signupForm) {
            elements.signupForm.addEventListener('submit', handleSignup);
        }

        if (elements.loginForm) {
            elements.loginForm.addEventListener('submit', handleLogin);
        }
    };

    // Form Handlers
    const handleSignup = async (e) => {
        e.preventDefault();
        const { email, password, 'confirm-password': confirmPassword } = e.target.elements;

        clearAlert();

        // Client-side validation
        const validation = validateSignup(
            email.value,
            password.value,
            confirmPassword.value
        );

        if (!validation.isValid) {
            showAlert(validation.message, 'error');
            return;
        }

        try {
            const response = await fetch(endpoints.signup, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                    confirmPassword: confirmPassword.value
                })
            });

            await handleAuthResponse(response, 'login.html');

        } catch (error) {
            handleAuthError(error);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        clearAlert();

        try {
            const response = await fetch(endpoints.login, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.value,
                    password: password.value
                })
            });

            await handleAuthResponse(response, 'index.html');

        } catch (error) {
            handleAuthError(error);
        }
    };

    // Validation Logic
    const validateSignup = (email, password, confirmPassword) => {
        if (!email || !password || !confirmPassword) {
            return { isValid: false, message: 'All fields are required' };
        }

        if (password.length < 6) {
            return { isValid: false, message: 'Password must be at least 6 characters' };
        }

        if (password !== confirmPassword) {
            return { isValid: false, message: 'Passwords do not match' };
        }

        return { isValid: true };
    };

    // Response Handler
    const handleAuthResponse = async (response, redirectPath) => {
        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Authentication failed');
        }

        showAlert(data.message || 'Success! Redirecting...', 'success');
        setTimeout(() => window.location.href = redirectPath, 2000);
    };

    // Error Handler
    const handleAuthError = (error) => {
        console.error('Auth Error:', error);
        showAlert(
            error.message || 'An error occurred. Please try again.',
            'error'
        );
    };

    // UI Functions
    const showAlert = (message, type) => {
        elements.alertBox.textContent = message;
        elements.alertBox.className = `alert-box ${type}`;
        elements.alertBox.style.display = 'block';
        setTimeout(clearAlert, 3000);
    };

    const clearAlert = () => {
        elements.alertBox.style.display = 'none';
        elements.alertBox.textContent = '';
    };

    return { init };
})();

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
    // Existing initialization
    initializeImageSwitcher();

    // Initialize auth module
    AuthModule.init();
});