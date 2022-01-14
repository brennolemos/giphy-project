import { useState } from "react";
import Loading from "./components/Loading/";
import Search from "./components/Search";
import Modal from "./components/Modal";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gifUrl, setGifUrl] = useState("");

  const [gifs, setGifs] = useState([]);

  const fetchData = async (query) => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT_APP_GIPHY_KEY}&q=${query}`
    );
    const data = await response.json();
    console.log(data.data);
    setGifs(data.data);
    setIsLoading(false);
  };

  const closeModal = (event) => {
    if (event.target === event.currentTarget) setIsModalOpen(false);
  };

  const renderGifs = () => {
    return gifs.map((gif) => {
      return (
        <img
          style={{ display: "block", maxWidth: "100%", cursor: "pointer" }}
          key={gif.id}
          src={gif.images.downsized_large.url}
          alt={gif.title}
          onClick={() => {
            setGifUrl(gif.images.downsized_large.url);
            setIsModalOpen(true);
          }}
        />
      );
    });
  };

  return (
    <div className="App">
      <Search handleSubmit={fetchData} />

      {isLoading && <Loading />}
      {isModalOpen && <Modal url={gifUrl} closeModal={closeModal} />}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "masonry",
          gap: "1rem",
          maxWidth: "100%",
        }}
      >
        {renderGifs()}
      </div>
    </div>
  );
};

export default App;
