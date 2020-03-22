import React, { Component } from "react";
import AudioPlayer from "react-responsive-audio-player";
import { MediaPlayer } from "@cassette/player";


const list2 = [
  {
    title: "Makh Tsu Di Eygelekh",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490210/Makh_Tsu_Di_Eygelekh_slzclb.mp3"
  },
  {
    title: "Makh Tsu Di Eygelekh 2",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490518/Makh_tsu_di_eygelekh_Close_your_little_eyes_qo5fd3.wav"
  },
  {
    title: "Tsigaynerlid",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490511/03_Tsigaynerlid_fqfelx.wav"
  },
  {
    title: "Der Yungiker Shnayderl",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490550/Der_yungiker_shnayderl_The_Young_Taylor_itmlrj.wav"
  },
  {
    title: "Es Benkt Zikh Nokh a Heym",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490560/Es_benkt_zikh_nokh_a_heym_We_long_for_a_home_rst1da.wav"
  },
  {
    title: "Feldafing",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490443/Feldafing_oeywyb.wav"
  },
  {
    title: "Grzech A Sin",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490521/Grzech_A_Sin_yvnbgy.wav"
  },
  {
    title: "Ikh Vil Fargesn",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490509/Ikh_vil_fargesn_I_Will_Forget_ldur41.wav"
  },
  {
    title: "Nie Gniewaj Sie",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490667/Nie_gniewaj_sie_Don_t_Sulk_My_Dear_bjqbgz.wav"
  },
  {
    title: "Untitled",
    artist: "David Baigelman",
    artwork: require("../Media/Pre-WWII/David.Baigelman016.jpeg"),
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490640/Unknown_Instrumental_Fragment_2_fmi7kc.wav"
  }
];

class PlayList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: list2
    };
  }

  render() {
    return (
      <div>
        <MediaPlayer
          className="media-player"
          style={{ marginBottom: "-20px" }}
          playlist={this.state.url}
          autoplay={true}
          controls={[
            "spacer",
            "playpause",
            "backskip",
            "forwardskip",
            "mute",
            "spacer",
            "progress"
          ]}
        />
      </div>
    );
  }
}

export default PlayList;
