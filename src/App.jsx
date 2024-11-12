import ReactGooglePlaceSuggest from "./ReactGooglePlaceSuggest";

const App = () => {
  const handlePlaceSelect = (data) => {
    console.log(data);
  };

  return (
    <ReactGooglePlaceSuggest
      apiKey={"YOUR_API_KEY"}
      defaultValue={"11735 meadow"}
      placeholder={"Enter your address"}
      handlePlaceSelect={handlePlaceSelect}
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
