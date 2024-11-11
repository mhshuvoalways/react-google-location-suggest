import ReactGooglePlaceSuggest from "./ReactGooglePlaceSuggest";

const App = () => {
  const apiKey = "AIzaSyDzaGX7PNgU8qxtlGt8788Vig8nQ9tMRkw";

  const handlePlaceSelect = (data) => {
    console.log(data);
  };

  return (
    <ReactGooglePlaceSuggest
      apiKey={apiKey}
      handlePlaceSelect={handlePlaceSelect}
      inputClass={{
        border: "1px solid #efefef",
      }}
      suggestionClass={{
        listStyleType: "none",
      }}
    />
  );
};

export default App;
