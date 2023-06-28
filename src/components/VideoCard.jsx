import React from 'react'
import { Link } from "react-router-dom"; 

import { styled } from "@mui/system";

import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// these are the by default that wil run .. alredy set them as constant in utilities
import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "./utilities/Constants"

// custom class 
const useStyles = styled(() => ({
  VideoCard_Hover: {
    // borderRadius: "0%" ,
    '&:hover': {
      borderRadius: "50%" // Updated border radius on hover
    },
  },
}));

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  // for class
  const classes = useStyles();

    // CARD [LINK [CARD_MEDIA] + CARD_CONTETNT[LINK  + LINK [ICON]] ]
    // CARD [LINK(to_video) [CARD_MEDIA] + CARD_CONTETNT[LINK(to_video)  + LINK(to_channel) [ICON]] ]

    return (
  <Card 
    sx={{ width: { xs: '80vw', sm: '358px', md: "280px", }, 
    boxShadow: "none", 
    }}
    className = {classes.VideoCard_Hover}>

    <Link 
        to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <CardMedia 
        //   what does ? means 
        // if any of snippet / thumbnails / high does not exixts .. .url on them will give an error 
        // by adding ? .. it returns undefined instead of error and therby runs "demoThumbnailUrl"
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl} 
            alt={snippet?.title} 
            sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} />
    </Link>

    <CardContent 
        sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link 
        to={videoId ? `/video/${videoId}` : demoVideoUrl } >
        <Typography 
            variant="subtitle1" 
            fontWeight="bold" 
            color="#FFF">
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>

      <Link 
        to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl} >

        <Typography 
            variant="subtitle2" 
            color="gray">
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>

    </CardContent>
  </Card>
)};

export default VideoCard