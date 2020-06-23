import React, { createRef, useState } from 'react';
import DavidProfilePhoto from '../Media/Pre-WWII/David.Baigelman016.jpeg';
import { Helmet } from "react-helmet";
import classNames from 'classnames';
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import { ScrollTo } from 'react-scroll-to';


import './profile.css';

const DavidProfile = (props) => {
    const [storyOption, setStoryOption] = useState(false);
    const [galleryOption, setGalleryOption] = useState(false);
    const journeyClass = classNames({ 'btn btn-outline-secondary': true, 'active': storyOption === false });
    const galleryClass = classNames({ 'btn btn-outline-secondary ml-5': true, 'active': storyOption === true });
    const journeyRef = createRef();

    const handleStoryClick = () => {
        setStoryOption(!storyOption);
    }

    return (
        <div className='container pt-2'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>David Baigelman - Vessel Archives</title>
            </Helmet>
            <article className='profile-container d-flex mt-4'>
                <img className='profile-photo' src={DavidProfilePhoto} alt="david-profile" />
                <section className='d-flex flex-column profile-info pl-5 ml-5'>
                    <span className='profile-header justify-content-start '>
                        <h2>David Baigelman</h2>
                        <section className='d-inline-flex profile-subheader'>
                            <h6 className='mr-auto text-secondary'>1887-1946</h6>
                            <h6 className='ml-4 pl-4 text-secondary'>Łódź, Poland</h6>
                        </section>
                    </span>
                    <p className='pt-3 text-justify'>Born in March 1887 in Ostrowce, Radom Gubernia (in Russian Poland), into a musical family. His musical education began when he was very young. He joined a theatre orchestra at the age of eight. Later he began directing and conducting. In 1912 he became conductor of the orchestra at Zandberg's Yiddish theatre in Lodz, in which his father acted. Despite more lucrative opportunities to work for Polish orchestras, he remained with the Yiddish theatre.
                    </p>
                    <ScrollTo>
                        {({ scroll }) => (

                            <button type='button' className='mt-5 btn btn-outline-secondary btn-large bio-button' onClick={() => scroll({ ref: journeyRef, x: 20, y: 500 })}>Full Bio</button>
                        )}
                    </ScrollTo>
                </section>
            </article>
            <article ref={journeyRef} className='journey-container mt-5 pt-2 border-secondary rounded-top mx-auto'>
                <span className='journey-options d-flex text-justify justify-content-center'>
                    <a className={journeyClass} onClick={handleStoryClick}>Their Journey</a>
                    <a className={galleryClass} onClick={handleStoryClick}>Gallery</a>
                </span>
                <section className={!storyOption ? 'journey-content' : 'd-none'}>
                    <Timeline lineColor={"goldenrod"} style={{ padding: "20px" }}>
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
                </section>
                <section className={storyOption ? 'story-content' : 'd-none'}>
                    Here goes some photos of David
                </section>

            </article>
        </div >

    )

}
export default DavidProfile;