import axios from 'axios'

export const ROOT_URL = `https://api.twitch.tv/kraken/`;
export const API_KEY = `?client_id=i30wq60kvle7tjxaye4s84w760olue`;

export const ADD_STREAMER = 'ADD_STREAMER';

export function addStreamer(streamer) {
  const request = axios.get(`${ROOT_URL}channels/${streamer}${API_KEY}`);
  return {
    type: ADD_STREAMER,
    payload: request
  };
}
