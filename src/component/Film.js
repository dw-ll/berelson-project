import React from 'react';
import ReactPlayer from 'react-player'
import { Helmet } from "react-helmet";


const Film = (props) => {

    const renderVideoThumbs = (videos) => {
        return (

            <div className="video-el text-left" style={{ boxShadow: "box-shadow: 1px 4px 4px rgba(0, 0, 0, 0.25)" }}>
                <h1>Lodz Documentary</h1>
                <h6>More information about the Lodz documentary</h6>

                <ReactPlayer controls={true} url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />

            </div >

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