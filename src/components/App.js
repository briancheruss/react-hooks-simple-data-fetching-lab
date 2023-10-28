// create your App component here
import React, { useEffect, useState } from "react";

function App() {
  // State to store the dog image URL and loading state
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch dog image using useEffect
  useEffect(() => {
    // Your fetch request to the dog API
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        // Update the state with the dog image URL
        setDogImageUrl(data.message);
        // Set loading to false
        setIsLoading(false);
      })
      .catch((error) => console.error("Error fetching dog image:", error));
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImageUrl} alt="A Random Dog" />
      )}
    </div>
  );
}

export default App;
