import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideos";

const App = () => {

  const [videos, search] = useVideos("movies");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos])

  const [selectedVideo, setSelectedVideo] = useState(null);


  return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            {selectedVideo && <VideoDetail video={selectedVideo} />}
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
