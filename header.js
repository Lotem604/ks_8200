document.addEventListener("DOMContentLoaded", function () {
  // Create header element
  const header = document.createElement("header");
  header.innerHTML = `
        <div class="header-container">
            <div class="logo-section">
                <a href="main.html" class="logo-link">
                    <img src="3b54b96e-6732-4ce6-893f-cdcd8effafda-removebg-preview.png" alt="התקווה 8" class="logo-image">
                </a>
            </div>
            <nav class="nav-links">
                <a href="main.html">דף הבית</a>
                <a href="initiatives.html">יוזמות</a>
                <a href="search.html">חיפוש</a>
            </nav>
            <div class="auth-buttons">
                <a href="register.html" class="register-btn">הרשמה</a>
                <a href="login.html" class="login-btn">התחברות</a>
            </div>
        </div>
    `;

  // Insert header at the beginning of the body
  document.body.insertBefore(header, document.body.firstChild);

  // Add header styles
  const style = document.createElement("style");
  style.textContent = `
        header {
            background: linear-gradient(135deg, #2e7d32, #4caf50);
            color: white;
            height: 75px;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            align-items: center;
        }

        body {
            padding-top: 60px;
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
        }

        .logo-section {
            display: flex;
            align-items: center;
        }

        .logo-link {
            text-decoration: none;
            display: flex;
            align-items: center;
        }

        .logo-image {
            height: 125px;
            width: auto;
            margin: 0;
        }

        .tagline {
            font-size: 0.8rem;
            color: white;
        }

        .nav-links {
            display: flex;
            gap: 20px;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            font-size: 0.9rem;
            padding: 3px 0;
            position: relative;
            transition: color 0.3s ease;
        }

        .nav-links a:hover {
            color: #e8f5e9;
        }

        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            background-color: #e8f5e9;
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .nav-links a:hover::after {
            transform: scaleX(1);
        }

        .auth-buttons {
            display: flex;
            gap: 10px;
        }
            
        .login-btn {
         background-color: white;
            color: #4caf50;
            padding: 5px 15px;
            border: 2px solid white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .login-btn:hover {
            background-color: #4caf50;
            color: white;
        }

        .register-btn {
            background-color: white;
            color: #4caf50;
            padding: 5px 15px;
            border: 2px solid white;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .register-btn:hover {
            background-color: #4caf50;
            color: white;
        }

        @media (max-width: 768px) {
            header {
                height: 50px;
            }

            body {
                padding-top: 50px;
            }

            .logo-image {
                height: 40px;
                width: auto;
            }

            .tagline {
                display: none;
            }

            .nav-links {
                gap: 15px;
            }

            .nav-links a {
                font-size: 0.8rem;
            }

            .register-btn {
                padding: 4px 12px;
                font-size: 0.8rem;
            }
        }
    `;
  document.head.appendChild(style);
});
