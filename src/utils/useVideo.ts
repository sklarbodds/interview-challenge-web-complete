import { useContext } from "react"
import { VideoContext } from "../components/VideoProvider"

export const useVideo = () => {
    const { currentVideo, videoCategory, loadVideoCategory, displayErrorVideo, displayVideo, resetVideo } = useContext(VideoContext);
    return { currentVideo, videoCategory, loadVideoCategory, displayErrorVideo, displayVideo, resetVideo };
}
