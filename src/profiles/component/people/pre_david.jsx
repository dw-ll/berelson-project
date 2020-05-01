import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Pre from "../../../component/pre";
import Playlist from "../../../component/Playlist";
import { MediaPlayer } from "@cassette/player";

const IMGURL =
  "https://raw.githubusercontent.com/dw-ll/Berelson-Project/master/src/Media/Pre-WWII/";
const slideImages = [`${IMGURL}David.Baigelman016.jpeg`];
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
};

const makh = [
  {
    title: "Makh Tsu Di Eygelekh",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490210/Makh_Tsu_Di_Eygelekh_slzclb.mp3"
  },
  {
    title: "Makh Tsu Di Eygelekh 2",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490518/Makh_tsu_di_eygelekh_Close_your_little_eyes_qo5fd3.wav"
  }
];

const felda = [
  {
    title: "Feldafing",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490443/Feldafing_oeywyb.wav"
  }
];

const ikhVil = [
  {
    title: "Ikh Vil Fargesn",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490509/Ikh_vil_fargesn_I_Will_Forget_ldur41.wav"
  }
];
const list2 = [
  {
    title: "Makh Tsu Di Eygelekh",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490210/Makh_Tsu_Di_Eygelekh_slzclb.mp3"
  },
  {
    title: "Makh Tsu Di Eygelekh 2",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490518/Makh_tsu_di_eygelekh_Close_your_little_eyes_qo5fd3.wav"
  },
  {
    title: "Tsigaynerlid",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490511/03_Tsigaynerlid_fqfelx.wav"
  },
  {
    title: "Der Yungiker Shnayderl",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490550/Der_yungiker_shnayderl_The_Young_Taylor_itmlrj.wav"
  },
  {
    title: "Es Benkt Zikh Nokh a Heym",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490560/Es_benkt_zikh_nokh_a_heym_We_long_for_a_home_rst1da.wav"
  },
  {
    title: "Feldafing",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490443/Feldafing_oeywyb.wav"
  },
  {
    title: "Grzech A Sin",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490521/Grzech_A_Sin_yvnbgy.wav"
  },
  {
    title: "Ikh Vil Fargesn",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490509/Ikh_vil_fargesn_I_Will_Forget_ldur41.wav"
  },
  {
    title: "Nie Gniewaj Sie",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490667/Nie_gniewaj_sie_Don_t_Sulk_My_Dear_bjqbgz.wav"
  },
  {
    title: "Untitled",
    artist: "David Baigelman",
    url:
      "https://res.cloudinary.com/dtu8zsq1c/video/upload/v1575490640/Unknown_Instrumental_Fragment_2_fmi7kc.wav"
  }
];
const Slideshow = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/pre"
          exact
          render={() => {
            return <Pre />;
          }}
        />
        <div className="container-wrapper">
          <div class="container profile-container">
            <div class="row">
              <div class="col-6 col-md-4"></div>
              <div class="col-6 col-md-4">
                <h3 className="profile_title">David Baigelman</h3>
                <img
                  className="single_photo_profile"
                  src={slideImages}
                  alt=""
                />
                <h5 className="profile_title_date">B. 1887 D. 1945</h5>
              </div>
              <div class="col-6 col-md-4"></div>
            </div>
            <div class="row">
              <h6 className="profile_bio_row">
                Born in March 1887 in Ostrowce, Radom Gubernia (in Russian
                Poland), into a musical family. His musical education began when
                he was very young. He joined a theatre orchestra at the age of
                eight. Later he began directing and conducting. In 1912 he
                became conductor of the orchestra at Zandberg's Yiddish theatre
                in Lodz, in which his father acted. Despite more lucrative
                opportunities to work for Polish orchestras, he remained with
                the Yiddish theatre. [According to his declaration of intention
                to join the Professional Actors Union in Poland (dated 6 January
                1923), he had previously worked in the following
                theatres/cities: Epelbergen's (Warsaw), Adler's (Lodz),
                Kompanayetz's (Lodz), L. Kahan's (Lodz) -- ed.] From 1928, B.
                was the composer for the Yiddish theatre in Lwow, and during
                this period, he wrote scores for Dr. Tsipor's "Revolt" and
                Levitas' "The Sentence". On the eve of World War II, he wrote
                the score for Turkow's musical comedy "The African Son." From
                the 1920s on, David tried to immigrate to America without
                success. In the late 1930s, he composed a score for a large
                potpourri of the work of A. Goldfaden. This, along with the vast
                majority of David’s work, was lost during the Holocaust. At the
                outbreak of World War II, B. returned to Lodz. While in the
                ghetto, he and Moshe Pulaver (formerly an actor with the Ararat
                Theatre) organized a theatre. David not only wrote new scores
                for their productions, he even wrote plays and librettos. David
                was part of the last group of Lodz Jews to be deported to
                Auschwitz. He brought his violin and all his scores with him.
                Even in the camp, he tried to provide entertainment for his
                fellow Jews. He lived until Liberation, but died immediately
                thereafter. Sh. Kaczerginski published some of David’s songs in
                his "Lider fun di getos un lagern". These included “Tsigayner
                lid” (The Gypsy Song) and “A yidish lidl” (A Little Jewish
                Song)—to which David wrote both the lyrics and music. David also
                wrote the music for the following, which are published in the
                same collection: “Zamdn gliyen af der zun” (Sand Shines in the
                Sun), “Kleyner volkn” (Small Clouds), “Kinder yorn” (Childhood),
                “Shpiglt zikh af shoyb di zun” (The Sun Reflecting on the Window
                Pane), “Makh tsu di eygelekh” (Close Your Eyes), “Nit keyn
                rozinkes, nit keyn mandlen” (No Almonds, No Raisins), “Ikh leb
                in geto, in kavkaz” (I Live in the Ghetto, in the Caucasus), and
                “Dos shnayderl” (The Little Tailor). Kaczerginski was able to
                publish some of these with their melodies. David was married to
                the well-known actress Andzhe Foderman. She was killed earlier
                on. Their only son, Pinyek (also a musician), survived the war
                in Russia, and thereafter came to America.
              </h6>
            </div>
            <div class=" david_work">
              <div class="col-lg-12 ">
                <h1 class="david_work_title_main">David's Work</h1>
                <h6 className="david_work_story">
                  Here is more info about David's work, including samples of his
                  music, and accomplishments.Veniam velit adipisicing anim
                  excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                  duis ut nulla officia irure reprehenderit laborum fugiat
                  dolore in elit. Adipisicing do qui duis Lorem est. Est
                  incididunt sint eu minim dolore mollit velit velit commodo ex
                  nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.Veniam velit
                  adipisicing anim excepteur nostrud magna nostrud aliqua dolor.
                  Sunt aute est duis ut nulla officia irure reprehenderit
                  laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                  est. Est incididunt sint eu minim dolore mollit velit velit
                  commodo ex nulla exercitation. Veniam velit adipisicing anim
                  excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                  duis ut nulla officia irure reprehenderit laborum fugiat
                  dolore in elit. Adipisicing do qui duis Lorem est.
                </h6>
              </div>
            </div>
            <div class="david_work">
              <div class="col-lg-12 ">
                <div class="sample_wrapper">
                  <h1 class="david_work_title">Makh Tsu Di Eygelekh</h1>
                  <h6 className="david_work_story">
                    Here is more info about David's work, including samples of
                    his music, and accomplishments.Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est. Est
                    incididunt sint eu minim dolore mollit velit velit commodo
                    ex nulla exercitation. Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est.Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est. Est incididunt sint eu minim dolore
                    mollit velit velit commodo ex nulla exercitation. Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est.
                  </h6>
                  <MediaPlayer
                    className="media-player"
                    style={{ marginBottom: "-20px" }}
                    playlist={makh}
                    autoplay={false}
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
                <div class="sample_wrapper">
                  <h1 class="david_work_title">Feldafing</h1>
                  <h6 className="david_work_story">
                    Here is more info about David's work, including samples of
                    his music, and accomplishments.Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est. Est
                    incididunt sint eu minim dolore mollit velit velit commodo
                    ex nulla exercitation. Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est.Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est. Est incididunt sint eu minim dolore
                    mollit velit velit commodo ex nulla exercitation. Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est.
                  </h6>
                  <MediaPlayer
                    className="media-player"
                    style={{ marginBottom: "-20px" }}
                    playlist={felda}
                    autoplay={false}
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
                <div class="sample_wrapper">
                  <h1 class="david_work_title">Makh Tsu Di Eygelekh</h1>
                  <h6 className="david_work_story">
                    Here is more info about David's work, including samples of
                    his music, and accomplishments.Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est. Est
                    incididunt sint eu minim dolore mollit velit velit commodo
                    ex nulla exercitation. Veniam velit adipisicing anim
                    excepteur nostrud magna nostrud aliqua dolor. Sunt aute est
                    duis ut nulla officia irure reprehenderit laborum fugiat
                    dolore in elit. Adipisicing do qui duis Lorem est.Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est. Est incididunt sint eu minim dolore
                    mollit velit velit commodo ex nulla exercitation. Veniam
                    velit adipisicing anim excepteur nostrud magna nostrud
                    aliqua dolor. Sunt aute est duis ut nulla officia irure
                    reprehenderit laborum fugiat dolore in elit. Adipisicing do
                    qui duis Lorem est.
                  </h6>
                  <MediaPlayer
                    className="media-player"
                    style={{ marginBottom: "-20px" }}
                    playlist={makh}
                    autoplay={false}
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
              </div>
            </div>
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
