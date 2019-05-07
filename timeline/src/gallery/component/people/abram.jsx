import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import Abram26 from "../../../Media/Pre-WWII/Abram.Baigelman026.jpeg";
import Abram27 from "../../../Media/Pre-WWII/Abram.Baigelman027.jpeg";
import Abram29 from "../../../Media/Pre-WWII/Abram.Baigelman029.jpeg";
import Abram30 from "../../../Media/Pre-WWII/Abram.Baigelman030.jpeg";
import Abram31 from "../../../Media/Pre-WWII/Abram.Baigelman031.jpeg";
import Abram34 from "../../../Media/Pre-WWII/Abram.Baigelman034.jpeg";
import Abram35 from "../../../Media/Pre-WWII/Abram.Baigelman035.jpeg";
import Abram38 from "../../../Media/Pre-WWII/Abram.Baigelman038.jpeg";


class AbramWheel extends Component {
  render() {
    const images = [
      {
        original: { Abram26 },
        thumbnail: { Abram26 }
      },
      {
        original: { Abram27 },
        thumbnail: { Abram27 }
      }
       {
        original: { Abram29 },
        thumbnail: { Abram29 }
      },
       {
        original: { Abram30 },
        thumbnail: { Abram30 }
      },
       {
        original: { Abram31 },
        thumbnail: { Abram31}
      },
       {
        original: { Abram34 },
        thumbnail: { Abram34}
      },
       {
        original: { Abram35 },
        thumbnail: { Abram35 }
      },
       {
        original: { Abram38 },
        thumbnail: { Abram38 }
      }
    ];

    return <ImageGallery items={images} />;
  }
}
export default AbramWheel;
