# react-google-place-suggest

`react-google-place-suggest` is a React component that provides Google Places Autocomplete functionality. This component allows users to search for places by name or address and select suggestions to view detailed place information, including latitude and longitude.

![Demo Screenshot](path/to/your/demo-screenshot.png) <!-- Add an actual screenshot here for better visual guidance -->

## Features

- 🌐 **Google Places Autocomplete**: Fetches place suggestions based on user input.
- 🎯 **Keyboard Navigation**: Allows users to navigate suggestions using arrow keys.
- 🖱️ **Clickable Suggestions**: Users can select suggestions with a mouse click.
- 🌍 **Place Details Fetching**: Retrieves detailed information (like latitude and longitude) for selected places.

## Installation

You can install `react-google-place-suggest` via npm:

```bash
npm install react-google-place-suggest
```

## Setup

### Get a Google Places API Key

To use this component, you'll need a [Google Places API key](https://developers.google.com/maps/gmp-get-started). Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Enable the "Places API" for your project.
4. Generate an API key under "Credentials."

### Set Up CORS (Client-Side Only)

If you're using this component on the client side, Google Places API may block requests due to CORS restrictions. It's recommended to use a proxy server to handle the requests if you're running into CORS issues. Alternatively, if you're able to, use the component server-side to bypass CORS restrictions.

## Usage

Here's how to use the component in your React app:

### Basic Example

```javascript
import React from 'react';
import GoogleAutocomplete from 'react-google-place-suggest';

function App() {
  return (
    <div>
      <h1>Google Places Autocomplete</h1>
      <GoogleAutocomplete apiKey="YOUR_API_KEY" />
    </div>
  );
}

export default App;
```

Replace `YOUR_API_KEY` with your actual Google Places API key.

### Component Props

| Prop      | Type     | Description                                           |
|-----------|----------|-------------------------------------------------------|
| apiKey    | string   | **Required**. Your Google Places API key.             |

## Component Behavior

- **Type to Search**: Type a place name or address in the input field to see suggestions.
- **Navigate with Keyboard**: Use arrow keys to navigate the list and press Enter to select.
- **Mouse Click Selection**: Click on any suggestion to select it and view details.

### Example Code with All Features

```javascript
import React from "react";
import GoogleAutocomplete from "react-google-place-suggest";

function App() {
  return (
    <div>
      <h1>Google Place Suggest</h1>
      <GoogleAutocomplete apiKey="YOUR_API_KEY" />
    </div>
  );
}

export default App;
```

## Development

To modify or improve this component:

1. Clone the repo: `git clone https://github.com/your-username/react-google-place-suggest.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to help improve this component, please fork the repository and submit a pull request.

## Issues

If you encounter any issues, please open an issue on GitHub. We welcome bug reports and feature requests.