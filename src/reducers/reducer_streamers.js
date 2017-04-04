import { ADD_STREAMER, DELETE_STREAMER } from '../actions/index';

const INITIAL_STATE = {
  esl_csgo: {
    "mature": false,
    "status": "RERUN: NaVi vs. Immortals [Mirage] - Group A - IEM Oakland 2016",
    "broadcaster_language": "en",
    "display_name": "ESL_CSGO",
    "game": "Counter-Strike: Global Offensive",
    "language": "en",
    "_id": 31239503,
    "name": "esl_csgo",
    "created_at": "2012-06-11T13:36:21Z",
    "updated_at": "2017-04-04T03:03:59Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_csgo-profile_image-546a0c1883798a41-300x300.jpeg",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_csgo-channel_offline_image-c9f885982daa1c83-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/esl_csgo-profile_banner-0d10712c29995dc2-480.jpeg",
    "profile_banner_background_color": "#000000",
    "partner": true,
    "url": "https://www.twitch.tv/esl_csgo",
    "views": 229666541,
    "followers": 1903909,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/esl_csgo",
      "follows": "https://api.twitch.tv/kraken/channels/esl_csgo/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/esl_csgo/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/esl_csgo/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/esl_csgo",
      "subscriptions": "https://api.twitch.tv/kraken/channels/esl_csgo/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/esl_csgo/editors",
      "teams": "https://api.twitch.tv/kraken/channels/esl_csgo/teams",
      "videos": "https://api.twitch.tv/kraken/channels/esl_csgo/videos"
    }
  },
  trikslyr: {
    "mature": false,
    "status": "Monday - WE CAN ORD1 NOW! YESESSSSS",
    "broadcaster_language": "en",
    "display_name": "Trikslyr",
    "game": "Heroes of the Storm",
    "language": "en",
    "_id": 60900813,
    "name": "trikslyr",
    "created_at": "2014-04-15T02:21:31Z",
    "updated_at": "2017-04-04T03:01:41Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/trikslyr-profile_image-8aaf60b7dc9c026c-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/trikslyr-channel_offline_image-c9b438ec65a5958b-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/trikslyr-profile_banner-a4cc64cf477d5cbd-480.jpeg",
    "profile_banner_background_color": null,
    "partner": true,
    "url": "https://www.twitch.tv/trikslyr",
    "views": 1908617,
    "followers": 26304,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/trikslyr",
      "follows": "https://api.twitch.tv/kraken/channels/trikslyr/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/trikslyr/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/trikslyr/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/trikslyr",
      "subscriptions": "https://api.twitch.tv/kraken/channels/trikslyr/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/trikslyr/editors",
      "teams": "https://api.twitch.tv/kraken/channels/trikslyr/teams",
      "videos": "https://api.twitch.tv/kraken/channels/trikslyr/videos"
    }
  },
  hiko: {
    "mature": false,
    "status": "hello xD |  http://www.designbyhumans.com/shop/hiko Follow @Hiko",
    "broadcaster_language": "en",
    "display_name": "Hiko",
    "game": "Counter-Strike: Global Offensive",
    "language": "en",
    "_id": 26991127,
    "name": "hiko",
    "created_at": "2011-12-23T17:36:09Z",
    "updated_at": "2017-04-04T03:00:35Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/hiko-profile_image-fa9474314cb6cafa-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/hiko-channel_offline_image-269c30cc6d860b5c-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/hiko-profile_banner-5deef30f2102cc79-480.png",
    "profile_banner_background_color": null,
    "partner": true,
    "url": "https://www.twitch.tv/hiko",
    "views": 15035993,
    "followers": 468336,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/hiko",
      "follows": "https://api.twitch.tv/kraken/channels/hiko/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/hiko/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/hiko/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/hiko",
      "subscriptions": "https://api.twitch.tv/kraken/channels/hiko/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/hiko/editors",
      "teams": "https://api.twitch.tv/kraken/channels/hiko/teams",
      "videos": "https://api.twitch.tv/kraken/channels/hiko/videos"
    }
  },
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
  },
  followgrubby: {
    "mature": false,
    "status": "Grubby - WC3 - w/ commentary & Q&A",
    "broadcaster_language": "en",
    "display_name": "FollowGrubby",
    "game": "Warcraft III: The Frozen Throne",
    "language": "en",
    "_id": 20992865,
    "name": "followgrubby",
    "created_at": "2011-03-09T09:38:53Z",
    "updated_at": "2017-03-26T23:05:10Z",
    "delay": null,
    "logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/followgrubby-profile_image-23e63a06a5986c23-300x300.png",
    "banner": null,
    "video_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/followgrubby-channel_offline_image-0d860264903c22f0-1920x1080.png",
    "background": null,
    "profile_banner": "https://static-cdn.jtvnw.net/jtv_user_pictures/followgrubby-profile_banner-5843faeb870b471f-480.png",
    "profile_banner_background_color": "#2b2a2a",
    "partner": true,
    "url": "https://www.twitch.tv/followgrubby",
    "views": 25526179,
    "followers": 203028,
    "_links": {
      "self": "https://api.twitch.tv/kraken/channels/followgrubby",
      "follows": "https://api.twitch.tv/kraken/channels/followgrubby/follows",
      "commercial": "https://api.twitch.tv/kraken/channels/followgrubby/commercial",
      "stream_key": "https://api.twitch.tv/kraken/channels/followgrubby/stream_key",
      "chat": "https://api.twitch.tv/kraken/chat/followgrubby",
      "subscriptions": "https://api.twitch.tv/kraken/channels/followgrubby/subscriptions",
      "editors": "https://api.twitch.tv/kraken/channels/followgrubby/editors",
      "teams": "https://api.twitch.tv/kraken/channels/followgrubby/teams",
      "videos": "https://api.twitch.tv/kraken/channels/followgrubby/videos"
    }
  }
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_STREAMER:
      let { data } = action.payload;
      return {...state, [data.name]: data };
    case DELETE_STREAMER:
      let streamer = action.payload;
      let updatedState = {...state};
      delete updatedState[streamer];
      console.log(updatedState);
      return updatedState;
    default:
      return state;
  }
}
