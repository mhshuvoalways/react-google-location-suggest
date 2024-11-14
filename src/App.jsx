import GoogleLocationSuggest from "./GoogleLocationSuggest";

const App = () => {
  const handleLocationSelect = (data) => {
    console.log(data);
  };

  const onChangeHandler = (value) => {
    console.log(value);
  };

  return (
    <GoogleLocationSuggest
      apiKey={"AIzaSyDzaGX7PNgU8qxtlGt8788Vig8nQ9tMRkw"}
      handleLocationSelect={handleLocationSelect}
      onChangeHandler={onChangeHandler}
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
