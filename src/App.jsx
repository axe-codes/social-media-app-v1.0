import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainFooter from "./componants/MainFooter";
import MainHeader from "./componants/MainHeader";
import MainSideBar from "./componants/MainSideBar";
import CreatePost from "./componants/CreatePost";

import PostList from "./componants/PostList";
import { useState } from "react";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <div className="app-container">
      <MainSideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <div className="main-container">
        <MainHeader />
        {selectedTab == "Home" ? <PostList /> : <CreatePost />}

        <MainFooter />
      </div>
    </div>
  );
}

export default App;
