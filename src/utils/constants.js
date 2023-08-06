
export const API_KEY = "AIzaSyBVPBgrH1cLsIpk-0Sph5ZiYNrAhEQNDis"
export const YOUTUBE_URL = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key="+API_KEY;

export const YOUTUBE_WATCH_URL="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id="
// "&key=[YOUR_API_KEY]" 


export const SUBSCRIPTION_URL="https://youtube.googleapis.com/youtube/v3/subscriptions"; 


export const SUBSCRIPTION_LIST_URL="https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&maxResults=15&mine=true&key="+API_KEY;  

export const SEARCH_SUGGESTION_URL = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const  COMMENTS_URL = "https://youtube.googleapis.com/youtube/v3/comments?part=snippet&parentId=UgzDE2tasfmrYLyNkGt4AaABAg&key="+API_KEY;
