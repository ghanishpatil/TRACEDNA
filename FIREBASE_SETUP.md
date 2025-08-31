# 🔥 Firebase Setup Guide for Hoax Bomb Threat Tracing System

## 📋 Prerequisites
- Google account
- Node.js installed (optional, for local development)

## 🚀 Step 1: Create Firebase Project

1. **Go to Firebase Console**
   - Visit [https://console.firebase.google.com/](https://console.firebase.google.com/)
   - Click "Create a project" or "Add project"

2. **Project Configuration**
   - **Project name**: `hoax-bomb-threat-system` (or your preferred name)
   - **Google Analytics**: Enable (recommended for monitoring)
   - Click "Create project"

3. **Wait for project creation** (usually takes 1-2 minutes)

## 🔐 Step 2: Enable Authentication

1. **Navigate to Authentication**
   - In Firebase Console, click "Authentication" in the left sidebar
   - Click "Get started"

2. **Configure Sign-in Methods**
   - Go to "Sign-in method" tab
   - **Enable Email/Password**:
     - Click "Email/Password"
     - Toggle "Enable" to ON
     - Click "Save"

3. **Optional: Enable Google Sign-in**
   - Click "Google"
   - Toggle "Enable" to ON
   - Select your project support email
   - Click "Save"

## 🗄️ Step 3: Set up Firestore Database

1. **Create Firestore Database**
   - Click "Firestore Database" in the left sidebar
   - Click "Create database"

2. **Security Rules**
   - Choose "Start in test mode" (we'll secure it later)
   - Select a location (choose closest to your users)
   - Click "Done"

3. **Database Structure**
   The system will use these collections:
   ```
   /threats/{threatId}
   /cases/{caseId}
   /tsdna/{tsdnaId}
   /analysts/{analystId}
   /audit_logs/{logId}
   ```

## 📁 Step 4: Set up Cloud Storage

1. **Create Storage Bucket**
   - Click "Storage" in the left sidebar
   - Click "Get started"

2. **Security Rules**
   - Choose "Start in test mode"
   - Select same location as Firestore
   - Click "Done"

3. **Storage Structure**
   ```
   /threats/{threatId}/attachments/
   /cases/{caseId}/evidence/
   /exports/{exportId}/
   ```

## ⚙️ Step 5: Get Configuration

1. **Project Settings**
   - Click the gear icon ⚙️ next to "Project Overview"
   - Select "Project settings"

2. **Web App Configuration**
   - Scroll down to "Your apps" section
   - Click the web icon `</>`
   - **App nickname**: `Hoax Threat System Web`
   - **Firebase Hosting**: Check if you want to use it
   - Click "Register app"

3. **Copy Configuration**
   - Copy the `firebaseConfig` object
   - It will look like this:
   ```javascript
   const firebaseConfig = {
     apiKey: "AIzaSyC...",
     authDomain: "your-project.firebaseapp.com",
     projectId: "your-project-id",
     storageBucket: "your-project.appspot.com",
     messagingSenderId: "123456789",
     appId: "1:123456789:web:abcdef..."
   };
   ```

## 🔧 Step 6: Update Your Code

1. **Update firebase-config.js**
   - Replace the placeholder values in `firebase-config.js` with your actual config
   - Save the file

2. **Update login.html**
   - Replace the `firebaseConfig` object in the script section
   - Or include the external config file:
   ```html
   <script src="firebase-config.js"></script>
   ```

## 👥 Step 7: Create User Accounts

### Method 1: Firebase Console
1. Go to Authentication → Users
2. Click "Add user"
3. Enter email and password
4. Click "Add user"

### Method 2: Programmatically (for testing)
```javascript
// Create user account
auth.createUserWithEmailAndPassword('analyst@example.com', 'securePassword123')
  .then((userCredential) => {
    console.log('User created:', userCredential.user);
  })
  .catch((error) => {
    console.error('Error creating user:', error);
  });
```

## 🔒 Step 8: Security Rules

### Firestore Rules
Update your Firestore rules in the Firebase Console:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Only authenticated users can read/write
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
    
    // Specific rules for threats collection
    match /threats/{threatId} {
      allow read, write: if request.auth != null;
    }
    
    // Cases can only be modified by authenticated users
    match /cases/{caseId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### Storage Rules
Update your Storage rules:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

## 🧪 Step 9: Test Your Setup

1. **Open login.html** in your browser
2. **Try logging in** with a test account
3. **Check Firebase Console**:
   - Authentication → Users (should show logged-in user)
   - Firestore → Data (should be empty initially)

## 🚨 Troubleshooting

### Common Issues:

1. **"Firebase: Error (auth/invalid-api-key)"**
   - Check your API key in the configuration
   - Ensure it matches your Firebase project

2. **"Firebase: Error (auth/domain-not-authorized)"**
   - Add your domain to authorized domains in Firebase Console
   - Go to Authentication → Settings → Authorized domains

3. **"Firebase: Error (auth/user-not-found)"**
   - Create a user account first
   - Use the Firebase Console or programmatic creation

4. **CORS Issues**
   - Ensure you're serving files from a web server
   - Use `python -m http.server` or similar

### Development Server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have it)
npx serve .
```

## 📱 Next Steps

1. **Create the dashboard** (dashboard.html)
2. **Implement threat data structure**
3. **Add real-time updates**
4. **Set up proper user roles and permissions**
5. **Configure email notifications**

## 🔐 Security Best Practices

1. **Never commit** your Firebase config to public repositories
2. **Use environment variables** for production
3. **Implement proper user roles** and permissions
4. **Regularly review** Firestore and Storage rules
5. **Enable Firebase App Check** for additional security
6. **Monitor usage** in Firebase Console

## 📞 Support

- [Firebase Documentation](https://firebase.google.com/docs)
- [Firebase Support](https://firebase.google.com/support)
- [Stack Overflow - Firebase](https://stackoverflow.com/questions/tagged/firebase)
