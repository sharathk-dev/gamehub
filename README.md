# GameHub

A modern, responsive game discovery platform built with React and TypeScript. Browse, search, and filter games from the RAWG database with a clean, intuitive interface.

## Features

- **Game Discovery**: Browse thousands of games with detailed information
- **Advanced Filtering**: Filter games by genre, platform, and release date
- **Smart Search**: Real-time search functionality with instant results
- **Sorting Options**: Sort games by relevance, rating, release date, and more
- **Dark/Light Mode**: Toggle between dark and light themes with custom #121212 dark theme
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Skeleton loading states and smooth animations
- **Platform Icons**: Visual platform indicators for each game
- **Critic Scores**: Metacritic ratings display for games

## Tech Stack

- **Frontend**: React 19.1.1, TypeScript
- **UI Framework**: Chakra UI v3.27.0
- **Build Tool**: Vite 7.1.6
- **HTTP Client**: Axios
- **Icons**: React Icons
- **Theme Management**: next-themes
- **Code Quality**: ESLint, TypeScript ESLint

## Prerequisites

Before running this project, make sure you have:

- Node.js 22.x or higher
- npm or yarn package manager
- RAWG API key (get one at [RAWG.io](https://rawg.io/apidocs))

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd gamehub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # Create .env file in the root directory
   VITE_RAWG_KEY=your_rawg_api_key_here
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Chakra UI components
│   ├── hooks/           # Custom React hooks
│   ├── GameGrid.tsx     # Main game display grid
│   ├── GameCard.tsx     # Individual game cards
│   ├── NavBar.tsx       # Navigation header
│   ├── GenreList.tsx    # Genre filtering sidebar
│   ├── SearchInput.tsx  # Search functionality
│   └── ...
├── services/            # API and utility services
│   ├── apiClient.ts     # Axios configuration
│   └── imageClient.ts   # Image processing utilities
├── assets/              # Static assets
├── theme.ts            # Custom Chakra UI theme
└── App.tsx             # Main application component
```

## Key Components

### Game Discovery
- **GameGrid**: Responsive grid layout with skeleton loading
- **GameCard**: Individual game cards with platform icons and ratings
- **GameCardSkeleton**: Loading placeholder for better UX

### Filtering & Search
- **GenreList**: Interactive genre filtering with visual thumbnails
- **PlatformSelector**: Dropdown for platform filtering
- **SortSelector**: Multiple sorting options
- **SearchInput**: Real-time search with debouncing

### UI & Theme
- **ColorModeSwitch**: Dark/light theme toggle
- **Custom Theme**: Based on #121212 for dark mode
- **Responsive Design**: Mobile-first approach

## API Integration

The app integrates with the RAWG Video Games Database API:
- **Base URL**: `https://api.rawg.io/api`
- **Endpoints Used**:
  - `/games` - Game listings with filtering
  - `/genres` - Available game genres
  - `/platforms` - Gaming platforms
- **Image Optimization**: Automatic image cropping and resizing

## Theme Customization

The app features a custom dark theme based on `#121212`:
- **Background**: `#121212`
- **Surface**: `#1a1a1a` (cards, modals)
- **Darker**: `#0a0a0a` (deeper elements)

To modify the theme, edit `src/theme.ts`.

## Responsive Breakpoints

- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: > 1024px (4-5 columns)
- **Sidebar**: Hidden on mobile, visible on large screens

## Performance Features

- **Skeleton Loading**: Smooth loading experience
- **Image Optimization**: Cropped and resized images
- **Request Cancellation**: Axios request cancellation
- **Debounced Search**: Optimized search queries
- **Lazy Loading**: Efficient component rendering

## Custom Hooks

- `useGames()` - Fetch and filter games
- `useGenres()` - Load game genres
- `usePlatforms()` - Get platform data
- `useData()` - Generic data fetching hook

## Error Handling

- Network error notifications
- Image fallbacks with placeholder
- Graceful API failure handling
- User-friendly error messages

## Future Enhancements

- Game details modal
- User favorites/wishlist
- Advanced filters (price, ratings)
- Infinite scrolling
- Game trailers integration
- User reviews and ratings

## License

This project is for educational purposes. Game data provided by RAWG.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## Support

For support or questions, please open an issue in the repository.

---

**Built with React, TypeScript, and Chakra UI**