import { IVideo } from "../types/interfaces";

export const SecondsToMinutes = (seconds: number): number => {
    return Math.floor(seconds / 60);
}

export const isNew = (video: IVideo): boolean => {
    const date = new Date(video.publishDate);
    const newVideoDate = new Date();
    newVideoDate.setDate(newVideoDate.getDate() - 1260); /* This date is just after the 2nd oldest video on March 19, 2025 */
    return date > newVideoDate; 
}