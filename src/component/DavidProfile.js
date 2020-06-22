import React from 'react';
import DavidProfilePhoto from '../Media/Pre-WWII/David.Baigelman016.jpeg';
import { Helmet } from "react-helmet";
import './profile.css';

const DavidProfile = (props) => {
    return (
        <div className='container pt-2'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>David Baigelman - Vessel Archives</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <article className='profile-container d-flex'>
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
                    <button type='button' className='mt-5 btn btn-outline-secondary bio-button'>Full Bio</button>
                </section>

            </article>
        </div>
    )

}
export default DavidProfile;