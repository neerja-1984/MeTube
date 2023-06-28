import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

// for playing videos / audios
import ReactPlayer from "react-player";


import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import { Video, Loader } from ".";
import { fetchFromAPI } from "./utilities/fetchFromAPI"

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`) 
      .then((data) => setVideos(data.items))
  }, [id]);

  if(!videoDetail?.snippet) return <Loader />;

  // destructuring  required compomest
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  // console.log(videoDetail)

  return (
    <Box 
      minHeight="95vh">
      < Stack 
      // main video playing + side videos 
        direction={{ xs: "column", md: "row" }}>
        {/* justifyContent = "center" > */}
        <Box 
        // parent box for main video playing
          flex={1}
          >
          <Box 

            sx ={{ width: {xs : "95%" , sm : "97%", md : "99%" }, 
            overflow : {xs : "auto"} ,
            position: "sticky", top: "86px" ,
            m : {xs :"10px", md : "10px"}}}
            >
            

            <ReactPlayer 
              url={`https://www.youtube.com/watch?v=${id}`}  
              className="react-player" 
              // controls helps in navigating in video ie .. play /pause
              controls />
              
            <Typography 
              color="#fff" 
              variant="h5" 
              fontWeight="bold" 
              p={2}>
              {title}
            </Typography>

            <Stack 
              direction="row" 
              justifyContent="space-between" 
              sx={{ color: "#fff" }} 
              py={1} 
              px={2} >

              <Link 
                to={`/channel/${channelId}`}>

                <Typography 
                  // variant={{ sm: "subtitle1", md: 'h6' }}  
                  color="#fff" 
                  alignItems="center">
                  {channelTitle}
                  <CheckCircleIcon 
                    sx={{ fontSize: "20px", color: "gray" , pl : "10px"}} 
                     />
                </Typography>

              </Link>

              <Stack 
                direction="row" 
                gap="10px"
                alignItems="center">
                {/* justifyContent= "flex-end" > */}

                <ThumbUpIcon 
                    sx={{ fontSize: "20px", color: "gray" , pr : "20px"}} />

                <Typography 
                  variant="body1" 
                  sx={{ opacity: 0.7 ,  pr : "20px" }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ opacity: 0.7 ,  pr : "20px"}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>

              </Stack>
            </Stack>
          </Box>
        </Box>

        <Stack 
          px={2} 
          py={{ md: 1, xs: 5 }} 
          // justifyContent= "center"
          alignItems="center" >

          <Video video={videos} direction="column" />
          {/* <Video video={videos}/> */}
        </Stack>
      </Stack>

    </Box>
  );
};

export default VideoDetail;
