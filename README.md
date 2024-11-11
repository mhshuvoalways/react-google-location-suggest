# react-google-place-suggest

`react-google-place-suggest` is a React component providing Google Places Autocomplete functionality. This component allows users to search for places by name or address, select suggestions, and view detailed place information such as latitude and longitude.

<img src="https://res.cloudinary.com/mhshuvoalways/image/upload/v1731344830/portfolio/react-google-place-suggest.png"/>

## Features

- 🌐 **Google Places Autocomplete**: Fetches place suggestions based on user input.
- 🎯 **Keyboard Navigation**: Navigate through suggestions using arrow keys.
- 🖱️ **Clickable Suggestions**: Select suggestions with a mouse click.
- 🌍 **Place Details Fetching**: Retrieves detailed information, including latitude and longitude, for selected places.

## Installation

Install `react-google-place-suggest` via npm:

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

## Usage

Here's how to use the component in your React app:

### Basic Example

```javascript
import React from "react";
import ReactGooglePlaceSuggest from "react-google-place-suggest";

const App = () => {
  const apiKey = "YOUR_API_KEY";

  const handlePlaceSelect = (data) => {
    console.log(data); // Logs the place details including latitude and longitude
  };

  return (
    <ReactGooglePlaceSuggest
      apiKey={apiKey}
      handlePlaceSelect={handlePlaceSelect}
      inputClass={{
        border: "1px solid #efefef",
        padding: "8px",
      }}
      suggestionClass={{
        listStyleType: "none",
        padding: "8px",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    />
  );
};

export default App;
```

Replace `YOUR_API_KEY` with your actual Google Places API key.

### Component Props

| Prop                | Type     | Description                                                                                           |
| ------------------- | -------- | ----------------------------------------------------------------------------------------------------- |
| `apiKey`            | string   | **Required**. Your Google Places API key.                                                             |
| `handlePlaceSelect` | function | **Required**. Callback function triggered when a suggestion is selected. Receives full place details. |
| `inputClass`        | object   | **Optional**. Style object to customize the input field (e.g., border, padding).                      |
| `suggestionClass`   | object   | **Optional**. Style object to customize each suggestion item (e.g., padding, color, cursor).          |

## Component Behavior

- **Type to Search**: Type a place name or address in the input field to see suggestions.
- **Navigate with Keyboard**: Use arrow keys to navigate the list and press Enter to select.
- **Mouse Click Selection**: Click on any suggestion to select it and view details.

### Example Code with All Features

```javascript
import React from "react";
import ReactGooglePlaceSuggest from "react-google-place-suggest";

const App = () => {
  const apiKey = "YOUR_API_KEY";

  const handlePlaceSelect = (data) => {
    console.log(data);
  };

  return (
    <ReactGooglePlaceSuggest
      apiKey={apiKey}
      handlePlaceSelect={handlePlaceSelect}
      inputClass={{
        border: "1px solid #efefef",
        padding: "8px",
      }}
      suggestionClass={{
        listStyleType: "none",
        padding: "8px",
        backgroundColor: "#fff",
        cursor: "pointer",
      }}
    />
  );
};

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
