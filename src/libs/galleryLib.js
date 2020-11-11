import React from 'react'
const GalleryLib = {

    captionStyle: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        maxHeight: "240px",
        overflow: "hidden",
        position: "absolute",
        bottom: "0",
        width: "100%",
        color: "white",
        padding: "2px",
        fontSize: "90%",
    },

    customTagStyle: {
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
    },

    setCustomTags: (i) => {
        return i.tags.map((t) => {
            return (
                <a key={t.value} style={GalleryLib.customTagStyle} >
                    {t.title}
                </a>
            );
        });
    },

    formatTags: tagList => {
        return tagList.map((tag) => {
            return { value: tag, title: tag }
        })
    },

    renderResults: function (results) {
        return results.map((i) => {
            i.customOverlay = (
                <div class="shadow-sm" style={GalleryLib.captionStyle}>
                    <div>{i.caption}</div>
                    {i.hasOwnProperty("tags") && GalleryLib.setCustomTags(i)}
                </div>
            );
            return i;
        });
    },
}

export default GalleryLib;