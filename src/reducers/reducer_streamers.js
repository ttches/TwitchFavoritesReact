import { ADD_STREAMER } from '../actions/index';

const INITIAL_STATE = { streamers: {
  chu8: {
    "mature": false,
    "status": "chu8 :  I have absolutely 0 self-control when it comes to games",
    "broadcaster_language": "en",
    "display_name": "chu8",
    "game": "Heroes of the Storm",
    "language": "en",
    "_id": 30080810,
    "name": "chu8",
    "created_at": "2012-04-27T01:41:07Z",
    "updated_at": "2017-03-26T22:05:13Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/chu8-profile_image-49483ecd69c10041-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/chu8-channel_offline_image-b3d11e506846f40e-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/chu8-profile_banner-638199cf7bc41b3c-480.png",
    "profile_banner_background_color": null,
    "partner": true,
    "url": "https://www.twitch.tv/chu8",
    "views": 12683929,
    "followers": 111047,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/chu8",
      "follows": "https://api.twitch.tv/kraken/channels/chu8/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/chu8/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/chu8/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/chu8",
      "subscriptions": "https://api.twitch.tv/kraken/channels/chu8/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/chu8/editors",
      "teams": "https://api.twitch.tv/kraken/channels/chu8/teams",
      "videos": "https://api.twitch.tv/kraken/channels/chu8/videos"
    }
  },
  ttches: {
    "mature": null,
    "status": null,
    "broadcaster_language": null,
    "display_name": "ttches",
    "game": null,
    "language": "en",
    "_id": 61404382,
    "name": "ttches",
    "created_at": "2014-04-22T15:23:56Z",
    "updated_at": "2017-03-24T22:40:08Z",
    "delay": null,
    "logo": null,
    "banner": null,
    "video_banner": null,
    "background": null,
    "profile_banner": null,
    "profile_banner_background_color": null,
    "partner": false,
    "url": "https://www.twitch.tv/ttches",
    "views": 1,
    "followers": 0,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/ttches",
      "follows": "https://api.twitch.tv/kraken/channels/ttches/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/ttches/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/ttches/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/ttches",
      "subscriptions": "https://api.twitch.tv/kraken/channels/ttches/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/ttches/editors",
      "teams": "https://api.twitch.tv/kraken/channels/ttches/teams",
      "videos": "https://api.twitch.tv/kraken/channels/ttches/videos"
    }
  }
}};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_STREAMER:
    let { data } = action.payload;
      return {...state, streamers:{
        [data.name]: data, ...state.streamers} };
    default:
      return state;
  }
}
