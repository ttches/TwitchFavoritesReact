import axios from 'axios'

export const ROOT_URL = `https://api.twitch.tv/kraken/`;
export const API_KEY = `?client_id=i30wq60kvle7tjxaye4s84w760olue`;

export const ADD_STREAMER = 'ADD_STREAMER';
export const DELETE_STREAMER = 'DELETE_STREAMER';
export const SORT_STREAMERS_STATUS = 'SORT_STREAMERS_STATUS';
export const UPDATE_INPUT = 'UPDATE_INPUT';
export const INPUT_MATCHES_STREAMER = 'INPUT_MATCHES_STREAMER';

export function addStreamer(streamer) {
  const request = axios.get(`${ROOT_URL}channels/${streamer}${API_KEY}`);
  return {
    type: ADD_STREAMER,
    payload: request
  };
}

export function deleteStreamer(streamer) {
  return {
    type: DELETE_STREAMER,
    payload: streamer
  };
}

export function sortStreamersStatus(streamers) {
  return {
    type: SORT_STREAMERS_STATUS,
    payload: streamers
  };
}

export function updateInput(input) {
  console.log(input);
  return {
    type: UPDATE_INPUT,
    payload: input
  };
}

export function inputMatchesStreamer(bool) {
  console.log(bool);
  return {
    type: INPUT_MATCHES_STREAMER,
    payload: bool
  }
}
