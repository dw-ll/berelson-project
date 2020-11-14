import React from "react";
import ReactPlayer from "react-player";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";

import "./index.css";
import "../index.css";

const Henry = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Henry Baigelman - Vessel Archives</title>
      </Helmet>
      <div className="container">
        <div class="profile-container">
          <div class="row d-flex flex-column align-items-center">
            <div class="">
              <h3 className="profile_title">Henry Baigelman</h3>
              <img
                className="single_photo_profile"
                src="https://res.cloudinary.com/vessel-archives/image/upload/c_scale,w_250/v1593142056/Baigelman%20Family%20(Current)/Henry.Baigelman119_rsbbve.jpg"
                style={{}}
                alt=""
              />

              <h5 className="profile_title_date mt-3 ">B. 1911 D. 2002</h5>
            </div>
          </div>
          <h6 className="profile_bio_row mb-2">
            Chaim (later: Henry) Baigelman was a violinist, saxophonist and
            composer and the only one out of nine musical siblings to survive
            the war. He played professionally since the age of fifteen. He was a
            member of a family band, The Jolly Boys, which he revived in
            post-war Germany under the name The Happy Boys, playing jazz
            concerts for American soldiers and Jewish survivors. After the war,
            he emigrated to New York, where he continued his musical activities
            with The Happy Boys. Henry (Chaim) Baigelman (1911-2002), one of
            David’s younger brothers, was also an extremely talented musician.
            When Henry was 6, his brother-in-law, Samuel, taught him to play the
            violin. He joined a conservatory and at 15 began playing both the
            violin and the saxophone professionally. He played with the family
            band, named The Jolly Boys, at the Łódź Ararat Theater. After his
            family was confined to the ghetto, he played the violin in the
            ghetto orchestra, conducted by his brother David. On June 10, 1944,
            when the Nazis ordered the destruction of the ghetto, David hid the
            family instruments, including Henry’s violin, in the attic of a hat
            factory where Henry had been working. After horrendous stints at
            Nazi work camps, Henry became part of a 12,000-person forced march.
            Starving and freezing, and barely able to walk, he was liberated
            April 23, 1945 by U.S. Army troops. Only 3,000 prisoners survived.
            to his earlier band name and also to emphasize that they were happy
            to have survived. The band toured displaced persons camps, bringing
            the joy of American jazz and swing to refugees and U.S. troops.
            During this time, Henry wrote the lyrics to the popular Yiddish song
            “Es Bengt Zich Nuch a Hajm” (“One Longs for Home”). The words, in
            part, convey the dark past combined with a fierce optimism: . . .
            <h6 className="profile_bio_subrow profile-text-quote">
              One longs for home Our mourners must have retribution. It was once
              terrible,But it has changed for the better. Now one must live.
              Because the time has come!
            </h6>
            Henry’s brother-in-law had retrieved the hidden family instruments
            from the Łódź ghetto following its liberation by the Soviet Army.
            After migrating to New York City with his new wife, Gita (who
            survived the Łódź ghetto and Ravesnbruck), Henry continued
            performing with his band until 1959 and later became successful in
            real estate. In 2010, Henry’s children, Riva Berelson and Simon
            Baigelman, donated their father’s rescued instruments, two violins
            and a saxophone, to the United States Holocaust Memorial Museum.
          </h6>
          <div className="profile_content_row d-flex flex-column">
            <h1>We Long For A Home</h1>
            <p>
              In this episode of Curators Corner, Bret Werb shares photographs
              and music from the Henry Baigelman collection. Baigelman came from
              a family of professional musicians in Lodz. After World War II, he
              wrote and performed songs in displaced persons camps.
            </p>
            <ReactPlayer
              controls={true}
              width="100%"
              url="https://www.youtube.com/watch?time_continue=37&v=3JF8EdNWgDM&feature=emb_logo"
            />
          </div>
        </div>
        <div class="henry_story_title d-flex justify-content-center">
          His Journey
        </div>
        <div class="row henry_story ">
          <div class="col-md-6">
            <Timeline lineColor={"goldenrod"} style={{}}>
              <TimelineItem
                key="001"
                dateText="1945"
                dateInnerStyle={{ backgroundColor: "goldenrod" }}
              >
                <h3>Title, Company</h3>
                <h4>Subtitle</h4>

                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
              <TimelineItem
                key="002"
                dateText="1945"
                dateInnerStyle={{ backgroundColor: "goldenrod" }}
              >
                <h3 style={{ color: "black" }}>Title</h3>
                <h4 style={{ color: "black" }}>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
              <TimelineItem
                key="003"
                dateText="1945"
                dateInnerStyle={{ background: "goldenrod" }}
              >
                <h3>Title, Company</h3>
                <h4>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
              <TimelineItem
                key="004"
                dateText="1945"
                dateInnerStyle={{ background: "goldenrod" }}
              >
                <h3>Title, Company</h3>
                <h4>Subtitle</h4>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
                <p>
                  Est incididunt sint eu minim dolore mollit velit velit commodo
                  ex nulla exercitation. Veniam velit adipisicing anim excepteur
                  nostrud magna nostrud aliqua dolor. Sunt aute est duis ut
                  nulla officia irure reprehenderit laborum fugiat dolore in
                  elit. Adipisicing do qui duis Lorem est.
                </p>
              </TimelineItem>
            </Timeline>
          </div>
          <div class="col-md-6 ">
            <h6 className="henry_story_text mt-5 pt-5 p-4">
              The music of resistance took other forms. David’s younger brother
              Henry (Chaim) Baigelman, one of eight siblings, was a talented
              violinist, saxophonist and composer in his own right. After the
              liberation, Henry carried on the family legacy by bringing music
              into displaced persons camps, performing for survivors who had
              lost everything.
              <sub>
                <a
                  class="ref-link"
                  href="https://www.jweekly.com/2017/07/29/lodz-familys-musical-legacy-becomes-story-resistance/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  [1]
                </a>
              </sub>
            </h6>

            <img
              className="henry_story_photos mt-2 ml-4"
              src="https://res.cloudinary.com/vessel-archives/image/upload/v1590269284/Baigelman%20Family%20Photos/Henry253_ntwa9h.jpg"
              alt=""
            />

            <img
              className="henry_story_photos mt-2 ml-4"
              src="https://res.cloudinary.com/vessel-archives/image/upload/v1590269284/Baigelman%20Family%20Photos/Henry257_fessoc.jpg"
              alt=""
            />

            <img
              className="henry_story_photos mt-2 ml-4"
              src="https://res.cloudinary.com/vessel-archives/image/upload/v1590269284/Baigelman%20Family%20Photos/Henry251_qkb4sa.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Henry;
