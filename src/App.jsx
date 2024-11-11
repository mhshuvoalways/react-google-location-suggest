import ReactGooglePlaceSuggest from "./ReactGooglePlaceSuggest";

const App = () => {
  const apiKey = "AIzaSyDzaGX7PNgU8qxtlGt8788Vig8nQ9tMRkw";

  const onChange = () => {

  };

  return (
    <ReactGooglePlaceSuggest
      apiKey={apiKey}
      onChange={onChange}
      topGapofList="10px"
    />
  );
};

export default App;
