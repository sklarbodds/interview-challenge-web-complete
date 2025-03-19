import React from "react";
import { Header } from "./Header";
import { VideoList } from "./VideoList";
import { VideoProvider } from "./VideoProvider";

export const App = () => {
  return (
    <VideoProvider>
      <React.Fragment>
        <Header />
        <VideoList />
      </React.Fragment>
    </VideoProvider>
  );
};
