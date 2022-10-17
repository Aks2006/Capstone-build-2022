import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";

import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";

import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";

const myCollection = [ 
  {
    label: "First Picture",
    imgPath:
      "https://randompicturegenerator.com/img/dog-generator/g0ae914387a19ba58fc07fffe7f6952176159f445a3cd128c43ad59ae8b9baed35d8784cb3cdf4f4c16897571568d60c5_640.jpg",
  },
  {
    label: "Second Picture",
    imgPath:
      "https://randompicturegenerator.com/img/dog-generator/g913a2b6f81253654df3b9e66abc189e6b966daf7a7a37b814b2336ab4459a832db90c8b923a5a8e28e63bb2fdd4496e1_640.jpg",
  },
  {
    label: "Third Picture",
    imgPath:
      "https://randompicturegenerator.com/img/dog-generator/g5d33df79829d9cfbba39903471d1cd1bc2d6cdd243e222607e337d5575cb76ed10582deda8ed10bb0d1c3c43a6494f5a_640.jpg",
  },
  {
    label: "Fourth Picture",
    imgPath:
      "https://randompicturegenerator.com/img/dog-generator/g446bd15f34f6fcb35272fa878493a90e9600b73e57f1f1dbca68ac22b9a1f780cb58c8a940d5727f930aa78d7b537b82_640.jpg",
  },
  {
    label: "Fifth Picture",
    imgPath:
      "https://randompicturegenerator.com/img/dog-generator/g2efe8ff4951d16cc2d042d3714796204a975eb2c32fc5ee60d08956a729b7d5114b32cb0db6a5ba2e6d2948b8a6a0320_640.jpg",
  },
];

const Slider = () => {
  const CollectionSize = myCollection.length;
  const theme = useTheme();
  const [index, setIndex] = useState(0);

  const goToNextPicture = () => {
    index<{myCollection}.length-1?
    setIndex((prevIndex) => prevIndex + 1):setIndex(0);
    };
 
   const goToPrevPicture = () => {
     index>0
     setIndex((prevIndex) => prevIndex - 1);setIndex(myCollection.length-1);
    };
 

  return (
    <>
      <div style={{ marginLeft: "40%" }}>
        <h2>Mans Best-Friend</h2>
        <div style={{ maxWidth: 400, flexGrow: 1 }}>
          <Paper
            square
            elevation={0}
            style={{
              height: 50,
              display: "flex",
              paddingLeft: theme.spacing(4),
              backgroundColor: theme.palette.background.default,
              alignItems: "center",
            }}
          >
            <Typography>{myCollection[index].label}</Typography>
          </Paper>
          <img
            src={myCollection[index].imgPath}
            style={{
              height: 255,
              width: "100%",
              maxWidth: 400,
              display: "block",
              overflow: "hidden",
            }}
            alt={myCollection[index].label}
          />
          <MobileStepper
            variant="text"
            position="static"
            index={index}
            steps={CollectionSize}
            nextButton={
              <Button
                size="small"
                onClick={goToNextPicture}
                disabled={index === CollectionSize - 1}
              >
                Next
                {theme.direction !== "rtl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
          <MobileStepper
            variant="text"
            position="static"
            index={index}
            steps={CollectionSize}
            backButton={
              <Button
                size="small"
                onClick={goToPrevPicture}
                disabled={index === CollectionSize + 1}
              >
                Back
                {theme.direction !== "ltl" ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
              </Button>
            }
          />
        </div>
      </div>
    </>
  );
};

export default Slider;