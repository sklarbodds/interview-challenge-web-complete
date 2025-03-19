import React, { useCallback, useState } from "react";
import { IVideo, IVideoCategory, IVideoContext } from "../types/interfaces";
import { GenericProps } from "../utils/GenericProps";

export const VideoContext = React.createContext<IVideoContext>({
    videoCategory: {} as IVideoCategory,
    displayVideo: (video: IVideo) => {},
    resetVideo: () => {},
    displayErrorVideo: () => {},
 } as IVideoContext);

 export const VideoProvider = ({...props}: GenericProps): JSX.Element => {
    const [currentVideo, setCurrentVideo] = useState<IVideo>();
    const [videoCategory, setVideoCategory] = useState<IVideoCategory>();

    const loadVideoCategory = (category: IVideoCategory): void => {
        if (!category) return;
        setVideoCategory(category);
    }

    const resetVideo = (): void => {
        setCurrentVideo(undefined);
    }

    const displayVideo = (video: IVideo): void => {
        if (!video) return;
        setCurrentVideo(video);
    }

    const displayErrorVideo = (): void => {
        setCurrentVideo({} as IVideo); /* Video missing properites, so error shows */
    }

    const contextValue = {
        currentVideo,
        videoCategory,
        loadVideoCategory: useCallback((category: IVideoCategory) => loadVideoCategory(category), []),
        resetVideo: useCallback(() => resetVideo(), []),
        displayVideo: useCallback((video: IVideo) => displayVideo(video), []),
        displayErrorVideo: useCallback(() => displayErrorVideo(), []),
    } as IVideoContext;
    return (<VideoContext.Provider value={contextValue}>{props.children}</VideoContext.Provider>);
 }