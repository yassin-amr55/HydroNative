# HydroNative E-commerce Website

A modern e-commerce platform for natural loofah products and eco-friendly home goods.

## Features

- Product catalog with categories (Bath, Kitchen, Pets)
- Shopping cart functionality
- User authentication (Firebase)
- Order management
- Responsive design
- Search functionality
- Bundle deals

## Tech Stack

- React 18
- Vite
- Firebase (Authentication & Firestore)
- React Router
- CSS3

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd <project-folder>
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables

Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```

Then edit `.env` and add your Firebase credentials:
```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain_here
VITE_FIREBASE_PROJECT_ID=your_project_id_here
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
VITE_FIREBASE_APP_ID=your_app_id_here
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id_here
```

**Note:** Never commit your `.env` file to version control. It's already included in `.gitignore`.

### Running the Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/      # React components
├── context/         # React context providers
├── data/           # Product and bundle data
├── App.jsx         # Main app component
├── firebase.js     # Firebase configuration
└── main.jsx        # Entry point
```

## Environment Variables

All environment variables must be prefixed with `VITE_` to be accessible in the application.

| Variable | Description |
|----------|-------------|
| `VITE_FIREBASE_API_KEY` | Firebase API key |
| `VITE_FIREBASE_AUTH_DOMAIN` | Firebase auth domain |
| `VITE_FIREBASE_PROJECT_ID` | Firebase project ID |
| `VITE_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Firebase messaging sender ID |
| `VITE_FIREBASE_APP_ID` | Firebase app ID |
| `VITE_FIREBASE_MEASUREMENT_ID` | Firebase measurement ID |

## Contributing

See [TODO.md](TODO.md) for a list of planned improvements and features.

## License

All rights reserved © 2025 HydroNative
