import React, { useState} from "react";
import MusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
const options = {
  //audio lists model
  audioLists: [
    {
      name: "Makh Tsu Di Eygelekh",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490210/Makh_Tsu_Di_Eygelekh_slzclb.mp3"
    },
    {
      name: "Makh Tsu Di Eygelekh 2",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490518/Makh_tsu_di_eygelekh_Close_your_little_eyes_qo5fd3.wav"
    },
    {
      name: "Tsigaynerlid",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490511/03_Tsigaynerlid_fqfelx.wav"
    },
    {
      name: "Der Yungiker Shnayderl",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490550/Der_yungiker_shnayderl_The_Young_Taylor_itmlrj.wav"
    },
    {
      name: "Es Benkt Zikh Nokh a Heym",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490560/Es_benkt_zikh_nokh_a_heym_We_long_for_a_home_rst1da.wav"
    },
    {
      name: "Feldafing",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490443/Feldafing_oeywyb.wav"
    },
    {
      name: "Grzech A Sin",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490521/Grzech_A_Sin_yvnbgy.wav"
    },
    {
      name: "Ikh Vil Fargesn",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490509/Ikh_vil_fargesn_I_Will_Forget_ldur41.wav"
    },
    {
      name: "Nie Gniewaj Sie",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490667/Nie_gniewaj_sie_Don_t_Sulk_My_Dear_bjqbgz.wav"
    },
    {
      name: "Untitled",
      singer: "David Baigelman",
      cover: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
      musicSrc:
        "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490640/Unknown_Instrumental_Fragment_2_fmi7kc.wav"
    }
  ],

  //default play index of the audio player  [type `number` default `0`]
  defaultPlayIndex: 0,

  //if you want dynamic change current play audio you can change it [type `number` default `0`]
  // playIndex: 0,

  //color of the music player theme    [ type `string: 'light' or 'dark'  ` default 'dark' ]
  theme: "light",

  // Specifies movement boundaries. Accepted values:
  // - `parent` restricts movement within the node's offsetParent
  //    (nearest node with position relative or absolute), or
  // - a selector, restricts movement within the targeted node
  // - An object with `left, top, right, and bottom` properties.
  //   These indicate how far in each direction the draggable
  //   can be moved.
  bounds: "body",

  //Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
  //"auto|metadata|none" "true| false"
  preload: false,

  //Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
  glassBg: true,

  //The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
  remember: false,

  //The Audio Can be deleted  [type `Boolean`, default `true`]
  remove: true,

  //audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
  defaultPosition: {
    top: 575,
    left: 55
  },

  // play mode text config of the audio player
  playModeText: {
    order: "In Order",
    orderLoop: "Loop",
    singleLoop: "Loop Once",
    shufflePlay: "Shuffle"
  },

  //audio controller open text  [ type `String | ReactNode` default 'open']
  openText: "Open",

  //audio controller close text  [ type `String | ReactNode` default 'close']
  closeText: "Close",

  // audio list panel show text of the playlist has no songs [ type `String` | ReactNode  default 'no music']
  notContentText: "List Empty",

  panelTitle: "Music",

  defaultPlayMode: "order",

  //audio mode        mini | full          [type `String`  default `mini`]
  mode: "full",

  /**
   * [ type `Boolean` default 'false' ]
   * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
   */
  once: true,

  //Whether the audio is played after loading is completed. [type `Boolean` default 'true']
  autoPlay: true,

  //Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
  toggleMode: false,

  //audio cover is show of the "mini" mode [type `Boolean` default 'true']
  showMiniModeCover: false,

  //audio playing progress is show of the "mini"  mode
  showMiniProcessBar: false,

  //audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
  drag: true,

  //drag the audio progress bar [type `Boolean` default `true`]
  seeked: true,

  //Displays the audio load progress bar.  [type `Boolean` default `true`]
  showProgressLoadBar: true,

  //play button display of the audio player panel   [type `Boolean` default `true`]
  showPlay: true,

  //reload button display of the audio player panel   [type `Boolean` default `true`]
  showReload: true,

  //download button display of the audio player panel   [type `Boolean` default `true`]
  showDownload: false,

  //loop button display of the audio player panel   [type `Boolean` default `true`]
  showPlayMode: true,

  //theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
  showThemeSwitch: false,

  //lyric display of the audio player panel   [type `Boolean` default `false`]
  showLyric: false,

  //Extensible custom content       [type 'Array' default '[]' ]
  extendsContent: [],

  //default volume of the audio player [type `Number` default `100` range `0-100`]
  defaultVolume: 100,

  //playModeText show time [type `Number(ms)` default `700`]
  playModeShowTime: 600,

  //Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
  loadAudioErrorPlayNext: true,

  onAudioListsChange(currentPlayId, audioLists, audioInfo) {
    console.log("[currentPlayId] audio lists change:", currentPlayId);
    console.log("[audioLists] audio lists change:", audioLists);
    console.log("[audioInfo] audio lists change:", audioInfo);
  },

  onAudioPlayTrackChange(currentPlayId, audioLists, audioInfo) {
    console.log(
      "audio play track change:",
      currentPlayId,
      audioLists,
      audioInfo
    );
  },
  // custom music player root node
  getContainer() {
    return document.body;
  }
};

const Music = () => {
  const [params] = useState(options);
  return <MusicPlayer className="music-player" {...params} />;
};
export default Music;
