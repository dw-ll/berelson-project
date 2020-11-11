import React from 'react';
import Gallery from "react-grid-gallery";
import axios from 'axios';




const captionStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    maxHeight: "240px",
    overflow: "hidden",
    position: "absolute",
    bottom: "0",
    width: "100%",
    color: "white",
    padding: "2px",
    fontSize: "90%",
};
const customTagStyle = {
    wordWrap: "break-word",
    display: "inline-block",
    backgroundColor: "lightgrey",
    height: "auto",
    fontSize: "75%",
    fontWeight: "600",
    lineHeight: "1",
    padding: ".2em .6em .3em",
    borderRadius: ".25em",
    color: "black",
    overflow: "auto",
    verticalAlign: "baseline",
    margin: "2px",
};
const handleTagClick = (e, props) => {
    console.log("Tag Clicked");
    props.history.push(`/results/{t.title}`);
};

const setCustomTags = (i) => {
    return i.tags.map((t) => {
        return (
            <a key={t.value} style={customTagStyle} onCLick={handleTagClick}>
                {t.title}
            </a>
        );
    });
};

const formatTags = tagList => {
    return tagList.map((tag) => {
        return { value: tag, title: tag }
    })
}

const search = {
    getQuery: function (props) {
        let query = props.match.params.search;
        return query;
    },
    getCloudinaryResults: async function (input) {
        try {
            const res = await axios.get(`https://vessel-archives-server.herokuapp.com/search/?query=${input}`)
            return res.data
        } catch (e) {
            console.log(e)
        }

    },
    renderCloudinaryResults: function (results) {
        return results.data.map((i) => {
            const rendered = {}
            rendered.src = i.url
            rendered.thumbnail = i.url
            rendered.caption = i.caption || ""
            rendered.description = i.description || ""
            rendered.tags = formatTags(i.tags)
            rendered.customOverlay = (
                <div class="shadow-sm" style={captionStyle}>
                    <div>{i.caption || ""}</div>
                    {i.hasOwnProperty("tags") && setCustomTags(rendered)}
                </div>
            );

            return rendered;
        });
    },
    renderResults: function (results) {
        return results.map((i) => {
            i.customOverlay = (
                <div class="shadow-sm" style={captionStyle}>
                    <div>{i.caption}</div>
                    {i.hasOwnProperty("tags") && setCustomTags(i)}
                </div>
            );
            return i;
        });
    },
    showResults: function (galleryImages) {
        console.log(galleryImages)
        return (
            <Gallery
                images={galleryImages}
                enableImageSelection={false}
                thumbnailWidth={500}
                thumbnailHeight={500}
                tagStyle={{
                    display: "none",
                }}
                showLightboxThumbnails={true}
                backdropClosesModal={true}
            />
        );
    }
}


export default search;