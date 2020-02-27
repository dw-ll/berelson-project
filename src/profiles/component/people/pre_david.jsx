import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Switch } from "react-router";
import { Slide } from "react-slideshow-image";
import Pre from "../../../component/pre";

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
                <h5 className="profile_title_date">B. 1900 D. 1950</h5>
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
          </div>
        </div>
      </Switch>
    </Router>
  );
};
export default Slideshow;
