export interface IVideoCategory extends IVideoBase {
    title: string;
    numVideos: number;
    videos: IVideo[];
}

interface IVideoImages {
    large: string;
    medium: string;
    mini: string;
    small: string;
}

export interface IVideo extends IVideoBase {
    shareUrl: string;
    subtitle: string;
    title: string;
    publishDate: Date;
    youtubeId: string;
    durationSeconds: number;
}

interface IVideoBase {
    color: string;
    description: string;
    id: number;
    images: IVideoImages;
}
export interface IVideoProps {
    video: IVideo;
}

export interface IVideoContext {
    currentVideo?: IVideo;
    videoCategory: IVideoCategory;
    loadVideoCategory: (category: IVideoCategory) => {};
    displayVideo: (video: IVideo) => {};
    resetVideo: () => {};
    displayErrorVideo: () => {};
}