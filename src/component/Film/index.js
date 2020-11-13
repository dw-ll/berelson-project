import React from 'react';
import ReactPlayer from 'react-player'
import { Helmet } from "react-helmet";

import './index.css';

const Film = (props) => {
    const renderVideoThumbs = (videos) => {
        return (
            <>
                <section className='row'>
                    <div className='col-12 col-md-6'>
                        <div className="d-flex flex-column align-middle film-container">
                            <h1>Lodz Documentary Part 1</h1>
                            <h6>More information about the Lodz documentary</h6>

                            <ReactPlayer controls={true} url='https://vimeo.com/432325070' />


                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="d-flex flex-column film-container">
                            <h1>Lodz Documentary Part 2</h1>
                            <h6>More information about the Lodz documentary</h6>

                            <ReactPlayer controls={true} url='https://vimeo.com/432327260' />


                        </div>
                    </div>
                    <div className='col-12 col-md-6' >
                        <div className="d-flex flex-column mt-2 film-container">
                            <h1>Lodz Documentary Part 3</h1>
                            <h6>More information about the Lodz documentary</h6>

                            <ReactPlayer controls={true} url='https://vimeo.com/432328942' />


                        </div>
                    </div>
                    <div className='col-12 col-md-6'>
                        <div className="d-flex flex-column mt-2 film-container">
                            <h1>Lodz Documentary Part 4</h1>
                            <h6>More information about the Lodz documentary</h6>

                            <ReactPlayer controls={true} url='https://vimeo.com/432330500' />


                        </div>
                    </div>



                </section>
            </>


        )

    }
    return (
        <div class='mx-auto'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Film - Vessel Archives</title>
            </Helmet>
            <div class="jumbotron jumbotron-fluid archive-jumbo">
                <div class="container">
                    <h1 class="display-4">Film</h1>
                    <p class="lead">
                        View archived documentaries, interviews and more surrounding the Baigelman lineage.
                    </p>
                </div>
            </div>
            <article className='d-flex mt-2 text-center justify-content-center' style={{ boxShadow: "box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                {renderVideoThumbs()}
            </article>
        </div>

    )

}
export default Film;