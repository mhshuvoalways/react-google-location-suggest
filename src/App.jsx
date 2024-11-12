import GoogleLocationSuggest from "./GoogleLocationSuggest";

const App = () => {
  const handleLocationSelect = (data) => {
    console.log(data);
  };

  return (
    <GoogleLocationSuggest
      apiKey={"AIzaSyDzaGX7PNgU8qxtlGt8788Vig8nQ9tMRkw"}
      defaultValue={"11735 meadow"}
      placeholder={"Enter your address"}
      handleLocationSelect={handleLocationSelect}
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
