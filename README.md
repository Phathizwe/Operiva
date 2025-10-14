# Operiva

Operiva is a modern SaaS application built with React, TypeScript, and Firebase. It provides a comprehensive platform for project management, team collaboration, and analytics.

## Features

- **User Authentication**: Secure login and signup with email/password and Google authentication
- **Dashboard**: Interactive dashboard with analytics and quick actions
- **Project Management**: Create and manage projects, assign tasks, and track progress
- **Team Collaboration**: Work together with your team in real-time
- **Analytics**: Make data-driven decisions with powerful analytics tools
- **Responsive Design**: Fully responsive UI that works on all devices

## Tech Stack

- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **State Management**: React Context API and Zustand
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Routing**: React Router v6
- **UI Components**: HeadlessUI and Heroicons
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Phathizwe/Operiva.git
   cd Operiva
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-auth-domain
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-storage-bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   VITE_FIREBASE_MEASUREMENT_ID=your-measurement-id
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view the app in your browser.

## Project Structure

```
operiva/
├── public/             # Public assets
├── src/
│   ├── assets/         # Static assets (images, fonts)
│   ├── components/     # Reusable UI components
│   ├── config/         # Configuration files
│   ├── context/        # React Context providers
│   ├── hooks/          # Custom React hooks
│   ├── layouts/        # Layout components
│   ├── pages/          # Page components
│   ├── services/       # Service modules for API calls
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main App component
│   ├── index.css       # Global styles
│   └── main.tsx        # Entry point
├── .env                # Environment variables (not in repo)
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Firebase Setup

1. Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/)
2. Enable Authentication (Email/Password and Google providers)
3. Create a Firestore database
4. Set up Firebase Storage
5. Add your web app to the Firebase project and get the configuration
6. Update the `.env` file with your Firebase configuration

## Deployment

### Firebase Hosting

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login to Firebase:
   ```bash
   firebase login
   ```

3. Initialize Firebase:
   ```bash
   firebase init
   ```
   - Select Hosting
   - Select your Firebase project
   - Set the public directory to `dist`
   - Configure as a single-page app
   - Don't overwrite `index.html`

4. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

5. Deploy to Firebase:
   ```bash
   firebase deploy
   ```

### Vercel

1. Push your code to GitHub
2. Import the project in Vercel
3. Configure the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Add environment variables from your `.env` file
5. Deploy

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add my feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact [your-email@example.com](mailto:your-email@example.com).