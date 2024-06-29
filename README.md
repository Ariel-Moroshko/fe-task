# Pokédex Application

## Overview

This Pokédex application is a single-page web app built with React and Vite, utilizing the Pokémon API. The app displays a list of Pokémon cards and a side panel for "caught" Pokémon. Users can view details of each Pokémon and attempt to catch them.

## Features

### Core Features

- Display a list of Pokémon cards
- View detailed information about each Pokémon
- "Catch" Pokémon with a random chance mechanism
- Store and display caught Pokémon in a side panel
- Real-time updates without page refreshes

### Advanced Features

- Limited catch attempts: Only 2 catch attempts per Pokémon
- Pagination: Implemented for the Pokémon List API
- Remove caught Pokémon: Ability to remove Pokémon from the caught list
- Loading and error states: Improved user experience with proper state handling
- Client-side filters: Filter caught Pokémon by name or type in the aside panel
- Animated Pokémon images: Custom AnimatedPokemonImage component that cycles through sprite images every second

## Setup Instructions

1. Clone the repository:

```
   git clone https://github.com/Ariel-Moroshko/fe-task.git
   cd pokemon-web-app
```

2. Install dependencies:

```
   npm install
```

3. Run the development server:

```
  npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

## Application Functionality

- **Main Area**: Displays a paginated list of Pokémon cards. Clicking a card shows detailed information about the Pokémon.
- **Pokémon Details**: Shows comprehensive information about a selected Pokémon, including an option to "catch" it (limited to 2 attempts).
- **Catch Functionality**: Allows users to attempt catching a Pokémon with a randomized success rate, limited to 2 attempts per Pokémon.
- **Aside Panel**: Displays a list of caught Pokémon, stored in local storage. Includes filters for searching by name or type.
- **AnimatedPokemonImage**: A custom component that cycles through different sprite images of a Pokémon every second, adding a dynamic visual element to the app.

## Technologies Used

- React.js
- Vite
- React Router
- React Query for data fetching and state management
- Tailwind CSS for styling
- Pokémon API (https://pokeapi.co/)
- Local Storage for data persistence
