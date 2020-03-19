import React, { Component, createRef } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import TextLoop from "react-text-loop";
import DavidProfile from "../Media/Pre-WWII/DavidProfile.jpeg";
import HenryProfile from "../Media/Post-WWII 2/Henry.Baigelman119 2.jpeg";
import $ from 'jquery';

$(function () {
    $("#david-profile").hover(
        function () {
            console.log("Hovering.");
            $(".family-hover-text-container").append(
                "<h4 class='hover-text'>David was part of the last group of Lodz Jews to be deported to Auschwitz. He brought his violin and all his scores with him Even in the camp, he tried to provide entertainment for his fellow Jews.</h4>"
            );
            $(".hover-text").fadeIn(10000);
            $(".hover-prompt").hide();
        },
        function () {
            $(".family-hover-text-container").html("");
            $(".family-hover-text-container").html("");
            $(".hover-prompt").show();
        }
    );

    $("#henry-profile").hover(
        function () {
            $(".family-hover-text-container").html(
                "<h4 class='hover-text'> Chaim (later: Henry) Baigelman was a violinist, saxophonist and composer and the only one out of nine musical siblings to survive the war. He was a member of a family band, The Jolly Boys, which he revived in post-war Germany under the name The Happy Boys, playing jazz concerts for American soldiers and Jewish survivors. </h4>"
            );
            $(".hover-text").fadeIn(10000);
            $(".hover-prompt").hide();
        },
        function () {
            $(".family-hover-text-container").html("");
            $(".family-hover-text-container").html("");
            $(".hover-prompt").show();
        }
    );
});

class Glazer extends Component {
    render() {
        return (

            <div class="container" style={{ marginTop: "35px" }}>
                <h1 className='intro-text'>the glazer family</h1>
                <div className="intro-text-paragraph-container">
                    <h2 className="intro-text-loop">
                        The Glazer family of Łódź were &nbsp;
                    <TextLoop>
                            <span className="intro-text-loop">
                                prominent musicians
                      </span>
                            <span className="intro-text-loop"> composers</span>
                            <span className="intro-text-loop"> conductors</span>
                            <span className="intro-text-loop">
                                {" "}
                        theater performers
                      </span>
                        </TextLoop>{" "}
                    </h2>
                    <h4
                        style={{ textAlign: "left" }}
                        className="intro-text-paragraph"
                    >
                        The patriarch, Simon (Szymon) Baigelman was first oboe for
                        the Łódź Symphony Orchestra, which was populated mostly by
                        musicians related to the family including the last names of
                        Spielman, Mutzman, Ostrowiec, and Spaismacher. Perhaps the
                        most famous was prodigy David (Dawid) Beigelman (1887-1945),
                        a violinist, orchestra leader, and composer of Yiddish
                        theater music and songs. He became director of the Łódź
                        Yiddish Theater in 1912. Among other major accomplishments,
                        he arranged the music for the hugely popular S. Ansky play,
                        The Dybbuk. In 1929 he became composer and music director of
                        the Łódź Ararat Theater.
                  </h4>
                </div>
                <div className='row profile-intro'>
                    <div class='col-12'>
                        <h4
                            id="toggle-text"
                            style={{ textAlign: "center" }}
                            className="intro-text"
                        >
                            meet the family
                    </h4>
                    </div>
                </div>
                <div class="family-hover-text-container"></div>
                <div class="row profiles">


                    <div class="col-6">
                        <Card id="david-profile" className="landing-card">
                            <Link to="/pre/david/">
                                <Card.Img src={DavidProfile}></Card.Img>
                            </Link>
                            <Card.Body>
                                <Card.Title>David Baigelman</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div class="col-6">
                        <Card id="henry-profile" className="landing-card">
                            <Link to="/pre/henry/">
                                <Card.Img src={HenryProfile}></Card.Img>
                            </Link>
                            <Card.Body>
                                <Card.Title>Henry Baigelman</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        );
    }
}
export default Glazer;