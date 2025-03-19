import { IVideo, IVideoProps } from "../types/interfaces";
import { isNew, SecondsToMinutes } from "../utils/time";
import { useVideo } from "../utils/useVideo";


export const VideoCard = ({ ...props }: IVideoProps): JSX.Element => {
    const queryParams = new URLSearchParams(window.location.search);
    const debug = queryParams.get("debug");
    const { displayVideo } = useVideo();
    const showNewVideoTag = isNew(props.video);
    return (
        <div className="video-card" onClick={() => {
            displayVideo(debug && randomError() ? {} as IVideo : props.video);
        }}>
            {showNewVideoTag && <div className="new-video-tag">New</div>}
            <div className="image-box">
                <img src={props.video.images.large} />
            </div>
            <h4>{props.video.title}</h4>
            <p className="video-description" title={props.video.description}>{props.video.description}</p>
            <div className="video-time">{SecondsToMinutes(props.video.durationSeconds)} minutes<img className="video-icon" src="/images/rightarrow.png" /></div>
        </div>
    );
}

function randomError(): boolean {
    return Math.random() < .25; /* Change this number to .5 for 50/50 or higher for more errors */
}