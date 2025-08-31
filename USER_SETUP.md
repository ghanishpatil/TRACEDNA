# 👥 User Account Setup for Hoax Bomb Threat Tracing System

## 🚨 **Quick Fix: Create Your First User Account**

Since your Firebase Authentication is empty, you need to create user accounts first. Here are **3 easy methods**:

---

## 🔥 **Method 1: Firebase Console (Easiest)**

1. **Go to Firebase Console**
   - Visit: [https://console.firebase.google.com/project/tracedna-6b504](https://console.firebase.google.com/project/tracedna-6b504)

2. **Navigate to Authentication**
   - Click **"Authentication"** in the left sidebar
   - Click **"Get started"** if you haven't set it up yet

3. **Enable Email/Password Authentication**
   - Go to **"Sign-in method"** tab
   - Click **"Email/Password"**
   - Toggle **"Enable"** to ON
   - Click **"Save"**

4. **Create Your First User**
   - Go to **"Users"** tab
   - Click **"Add user"**
   - Enter email: `admin@tracedna.com`
   - Enter password: `admin123` (or your preferred password)
   - Click **"Add user"**

5. **Test Login**
   - Go back to your `login.html` page
   - Use the credentials you just created

---

## 💻 **Method 2: Programmatic User Creation (For Developers)**

Create a simple HTML file to add users programmatically:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Create Test Users</title>
</head>
<body>
    <h1>Create Test Users</h1>
    <button onclick="createUsers()">Create Test Users</button>
    <div id="output"></div>

    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.1/firebase-auth-compat.js"></script>
    <script>
        const firebaseConfig = {
            apiKey: "AIzaSyC8_wj_TBlxDGzYljg5P5yARc8YI_eVfjU",
            authDomain: "tracedna-6b504.firebaseapp.com",
            projectId: "tracedna-6b504",
            storageBucket: "tracedna-6b504.firebasestorage.app",
            messagingSenderId: "80227253487",
            appId: "1:80227253487:web:895355b662a8915b092f1a",
            measurementId: "G-W211WK6WBE"
        };

        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();

        async function createUsers() {
            const users = [
                { email: 'admin@tracedna.com', password: 'admin123' },
                { email: 'analyst@tracedna.com', password: 'analyst123' },
                { email: 'investigator@tracedna.com', password: 'investigator123' }
            ];

            const output = document.getElementById('output');
            output.innerHTML = '<p>Creating users...</p>';

            for (const user of users) {
                try {
                    const userCredential = await auth.createUserWithEmailAndPassword(user.email, user.password);
                    output.innerHTML += `<p>✅ Created user: ${user.email}</p>`;
                    console.log('User created:', userCredential.user);
                } catch (error) {
                    if (error.code === 'auth/email-already-in-use') {
                        output.innerHTML += `<p>⚠️ User already exists: ${user.email}</p>`;
                    } else {
                        output.innerHTML += `<p>❌ Error creating ${user.email}: ${error.message}</p>`;
                    }
                }
            }
            
            output.innerHTML += '<p><strong>Done! You can now login with any of these accounts.</strong></p>';
        }
    </script>
</body>
</html>
```

**Steps:**
1. Save this as `create-users.html`
2. Open it in your browser
3. Click "Create Test Users"
4. Use any of the created accounts to login

---

## 🛠️ **Method 3: Browser Console (Quick Test)**

1. **Open your login page** (`login.html`) in browser
2. **Open Developer Tools** (F12)
3. **Go to Console tab**
4. **Paste this code** and press Enter:

```javascript
// Create a test user
firebase.auth().createUserWithEmailAndPassword('test@tracedna.com', 'test123')
  .then((userCredential) => {
    console.log('✅ User created:', userCredential.user.email);
    alert('User created! You can now login with test@tracedna.com / test123');
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      alert('User already exists! Try logging in with test@tracedna.com / test123');
    } else {
      console.error('Error:', error);
      alert('Error: ' + error.message);
    }
  });
```

---

## 🔐 **Test Login Credentials**

After creating users, you can login with:

| Email | Password | Role |
|-------|----------|------|
| `admin@tracedna.com` | `admin123` | Admin |
| `analyst@tracedna.com` | `analyst123` | Analyst |
| `investigator@tracedna.com` | `investigator123` | Investigator |
| `test@tracedna.com` | `test123` | Test User |

---

## 🚨 **Troubleshooting**

### **"Firebase: Error (auth/user-not-found)"**
- **Solution**: Create a user account first using one of the methods above

### **"Firebase: Error (auth/invalid-email)"**
- **Solution**: Make sure you're using a valid email format (e.g., `user@domain.com`)

### **"Firebase: Error (auth/weak-password)"**
- **Solution**: Use a password with at least 6 characters

### **"Firebase: Error (auth/email-already-in-use)"**
- **Solution**: The email is already registered, try logging in instead

### **"Firebase: Error (auth/too-many-requests)"**
- **Solution**: Wait a few minutes before trying again

---

## 🔧 **Enable Authentication in Firebase Console**

If you haven't set up Authentication yet:

1. **Go to Firebase Console**: [https://console.firebase.google.com/project/tracedna-6b504](https://console.firebase.google.com/project/tracedna-6b504)

2. **Click "Authentication"** in the left sidebar

3. **Click "Get started"**

4. **Go to "Sign-in method" tab**

5. **Enable Email/Password**:
   - Click "Email/Password"
   - Toggle "Enable" to ON
   - Click "Save"

6. **Create your first user** (Method 1 above)

---

## ✅ **Quick Test**

1. **Create a user** using any method above
2. **Open `login.html`** in your browser
3. **Enter the credentials** you created
4. **Click "Sign In"**
5. **You should be redirected** to the dashboard

---

## 🎯 **Next Steps**

Once you can login:

1. **Test the dashboard** functionality
2. **Create more users** as needed
3. **Set up user roles** in Firestore
4. **Configure security rules** for your data

---

## 📞 **Need Help?**

- **Firebase Console**: [https://console.firebase.google.com/project/tracedna-6b504](https://console.firebase.google.com/project/tracedna-6b504)
- **Firebase Auth Docs**: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)
- **Check browser console** for detailed error messages
