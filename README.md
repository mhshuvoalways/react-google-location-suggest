# react-google-location-suggest

`react-google-location-suggest` is a React component providing Google locations Autocomplete functionality. This component allows users to search for locations by name or address, select suggestions, and view detailed location information such as latitude and longitude.

<img src="https://res.cloudinary.com/mhshuvoalways/image/upload/v1731344830/portfolio/react-google-location-suggest.png"/>

## Features

- 🌐 **Google locations Autocomplete**: Fetches location suggestions based on user input.
- 🎯 **Keyboard Navigation**: Navigate through suggestions using arrow keys.
- 🖱️ **Clickable Suggestions**: Select suggestions with a mouse click.
- 🌍 **location Details Fetching**: Retrieves detailed information, including latitude and longitude, for selected locations.

## Installation

Install `react-google-location-suggest` via npm:

```bash
npm install react-google-location-suggest
```

## Setup

### Get a Google locations API Key

To use this component, you'll need a [Google locations API key](https://developers.google.com/maps/gmp-get-started). Follow these steps:

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Create or select a project.
3. Enable the "locations API" for your project.
4. Generate an API key under "Credentials."

## Usage

Here's how to use the component in your React app:

### Basic Example

```javascript
import React from "react";
import GoogleLocationSuggest from "react-google-location-suggest";

const App = () => {
  const handleLocationSelect = (data) => {
    console.log(data);
  };

  return (
    <GoogleLocationSuggest
      apiKey={"YOUR_API_KEY"}
      handleLocationSelect={handleLocationSelect}
      defaultValue={"11735 meadow"}
      placeholder={"Enter your address"}
      inputClass={{
        border: "1px solid #efefef",
      }}
      suggestionClass={{
        top: "10px",
      }}
    />
  );
};

export default App;
```

Relocation `YOUR_API_KEY` with your actual Google locations API key.

Here's the updated props table including `defaultValue` and `placeholder`:

---

### Component Props

| Prop                   | Type     | Description                                                                                              |
| ---------------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| `apiKey`               | string   | **Required**. Your Google locations API key.                                                             |
| `handleLocationSelect` | function | **Required**. Callback function triggered when a suggestion is selected. Receives full location details. |
| `defaultValue`         | string   | **Optional**. Initial value for the input field.                                                         |
| `placeholder`          | string   | **Optional**. placeholder text displayed in the input field when empty.                                  |
| `inputClass`           | object   | **Optional**. Style object to customize the input field (e.g., border).                                  |
| `suggestionClass`      | object   | **Optional**. Style object to customize each suggestion item (e.g., top).                                |

## Development

To modify or improve this component:

1. Clone the repo: `git clone https://github.com/mhshuvoalways/react-google-location-suggest.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! If you'd like to help improve this component, please fork the repository and submit a pull request.

## Issues

If you encounter any issues, please open an issue on GitHub. We welcome bug reports and feature requests.
