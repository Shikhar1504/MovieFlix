# MovieFlix

This is a web application that allows users to explore movies and TV shows using The Movie Database (TMDb) API. Users can view popular and trending content, search for specific titles, and see detailed information about each movie or TV show.

## Features

*   **Homepage:** Displays top-rated, popular, and trending movies and TV shows.
*   **Search Functionality:** Allows users to search for movies and TV shows by name.
*   **Detail View:** Provides detailed information for individual movies and TV shows, including release date, tagline, and overview.

## Technologies Used

*   **Node.js:** JavaScript runtime environment.
*   **Express.js:** Web application framework for Node.js.
*   **EJS (Embedded JavaScript):** Templating engine for generating HTML with JavaScript.
*   **Axios:** Promise-based HTTP client for making API requests to TMDb.
*   **Body-parser:** Node.js middleware for parsing incoming request bodies.

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/Shikhar1504/MovieFlix.git
    cd MovieFlix
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Get a TMDb API Key:**
    *   Go to [The Movie Database (TMDb) website](https://www.themoviedb.org/)
    *   Sign up for an account.
    *   Navigate to your account settings and generate an API key (v3).

4.  **Configure API Key:**
    *   Create a `.env` file in the root directory of the project.
    *   Add your TMDb API key to the `.env` file in the following format:

    ```
    TMDB_API_KEY=YOUR_TMDB_API_KEY
    ```

    Replace `YOUR_TMDB_API_KEY` with your actual TMDb API key.

5.  **Run the application:**

    ```bash
    node index.js
    ```

    The application will be running on `http://localhost:3000`.

## Project Structure

*   `index.js`: Main application file containing Express routes and API calls.
*   `public/`: Contains static assets like CSS files.
*   `views/`: Contains EJS template files (`.ejs`) for rendering dynamic content.
    *   `views/partials/`: Contains reusable EJS partials.

## Author

*   **Shikhar Sinha** - *Initial work* - [Shikhar1504](https://github.com/Shikhar1504)
