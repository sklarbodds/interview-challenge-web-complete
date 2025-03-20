import { useEffect, useState } from "react";
import { useVideo } from "../utils/useVideo"
import { IVideoCategory } from "../types/interfaces";
import { LogoFontType } from "../types/enums";

export const Header = (): JSX.Element => {
    const { currentVideo, videoCategory, loadVideoCategory } = useVideo();
    const [ fontStyle, setFontStyle ] = useState<LogoFontType>(LogoFontType.serif);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch('/api/data.json');
                if (!response.ok) throw new Error('ERROR');

                const json = await response.json();
                const vc = json.data.videoCategory as IVideoCategory
                loadVideoCategory(vc);
            } catch (e) {
                console.log(e);
            }
        }

        fetchVideos();
    }, []);

    const onSwitchLogoStyle = () => {
        setFontStyle((prev: LogoFontType) => {
            return prev === LogoFontType.serif ? LogoFontType.times : LogoFontType.serif;
        });
    }
    return (
        <div className="header content-container" style={{ backgroundImage: `url(${videoCategory && videoCategory.images.large})` }}>
            <h1 data-font-style={fontStyle} onClick={onSwitchLogoStyle}>BibleProject</h1>
            <div className="video-series">
                <div>
                    <h2>{videoCategory && videoCategory.title}</h2>
                    <hr />
                    <div className="video-series-description">
                        {videoCategory && videoCategory.description}
                    </div>
                </div>
            </div>
            {currentVideo && currentVideo !== undefined &&
                <div className="youtube-container">
                    {currentVideo.youtubeId
                        ? < div className="youtube-iframe-container">
                            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?&autoplay=1&mute=1`} frameBorder="0" allowFullScreen></iframe>
                        </div>
                        : <div className="video-error">We're sorry, something went wrong when loading this video</div>

                    }
                </div>
            }
        </div >
    )
}