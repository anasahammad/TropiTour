# TropiTour - Explore Southeast Asia

Welcome to TropiTour, your ultimate guide to exploring the beauty and diversity of Southeast Asia. Our platform offers a wide range of features to help tourists discover, contribute, and manage tourist spots across the region.

**Live Site URL:** [TropiTour](https://tropitour-b6096.web.app/)

**Server Side Repo:** [TropiTour Server Repository](https://github.com/anasahammad/TropiTour-server)

## Features

- **Comprehensive Southeast Asia Tourism Information**: TropiTour provides a curated list of tourist spots across Southeast Asia, allowing users to discover hidden gems and popular destinations in the region.
- **User-Generated Content**: Users can actively contribute to the platform by adding new tourist spots, ensuring that the platform remains dynamic and up-to-date.
- **Country-specific Tourism Exploration**: Visitors can explore tourist spots by selecting a specific country name, offering a tailored experience to discover the diverse attractions within each Southeast Asian nation.
- **Secure Authentication**: Firebase authentication ensures a safe and personalized experience for every user, allowing them to manage their contributions and preferences seamlessly.
- **Personalized Spot Management**: On the user's list page, they can view all the spots they have added and perform actions like updating or deleting any spot that they own, providing them with full control over their contributed content without affecting others' content.

## NPM Packages Used

- **lottie-react**: For animations using Lottie files.
- **react-icons**: To include popular icons in the project.
- **react-loader-spinner**: For displaying loaders and spinners.
- **react-tooltip**: To create tooltips for better user experience.
- **swiper-js**: To create interactive carousels and sliders.
- **sweetalert2**: For displaying beautiful and responsive alerts.
- **aos-animation**: For animating elements on scroll.

## Installation Instructions

To get TropiTour up and running on your local machine, follow these steps:

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)
- Firebase account

### Backend Setup

1. **Clone the backend repository:**
    ```sh
    git clone https://github.com/anasahammad/TropiTour-server
    cd TropiTour-server
    ```

2. **Install backend dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the `backend` directory and add your environment variables:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. **Run the backend server:**
    ```sh
    npm start
    ```

### Frontend Setup

1. **Clone the frontend repository:**
    ```sh
    git clone https://github.com/anasahammad/TropiTour
    cd TropiTour
    ```

2. **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

3. **Install frontend dependencies:**
    ```sh
    npm install
    ```

4. **Set up environment variables:**
    Create a `.env` file in the `frontend` directory and add your environment variables:
    ```env
    REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_firebase_app_id
    ```

5. **Run the frontend development server:**
    ```sh
    npm start
    ```

### Deployment

For deployment, follow the standard practices for deploying Node.js backend and React frontend applications. You can use services like Heroku, Vercel, Netlify, or Firebase Hosting.

---

Now, you should have TropiTour running locally on your machine. Enjoy discovering and contributing to the beauty of Southeast Asia!
