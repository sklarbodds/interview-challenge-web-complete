import { VideoCard } from "./VideoCard";
import { useVideo } from "../utils/useVideo";

export const VideoList = (): JSX.Element => {
    const { videoCategory } = useVideo();

    return (
        <div className="content-container">
            <div className="video-list">
                {videoCategory && videoCategory.numVideos > 0 && videoCategory.videos.map((v, i) => (
                    <VideoCard video={v} key={i}/>
                ))}
            </div>
        </div>
    );
}