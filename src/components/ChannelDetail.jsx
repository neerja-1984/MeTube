import React, { useState, useEffect } from "react" 
import { useParams } from "react-router-dom" 

import { Box, Typography , Stack } from "@mui/material" 

import { Video, ChannelCard } from "." 
import { fetchFromAPI } from "./utilities/fetchFromAPI"



const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState(null);

  // in App.js we have set : path="/channel/:id" in ChannelDetail.jsx
  // here in ChannelDetail.jsx .. to use the  :id ...we use useParam
  // if path  == path="/channel/23749" , the id from below will return 23749
  const { id } = useParams();

  useEffect(() => {
    const fetchResults = async () => {
      const data = await fetchFromAPI(`channels?part=snippet&id=${id}`)

      // for channel case , the first item .. item.[0] == channel url
      // channel detail has all details of cahnnel such as [stats / id ..]
      setChannelDetail(data?.items[0])
    
      // get the channel id + snippet of channel 
      const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

      // videoData.items == the videos we are pulling from that channel url
      setVideos(videosData?.items);
    };

    fetchResults();
  }, [id]);


  return (
    <Box minHeight="95vh">

      {/* channel bg gradient + channel logo + description + subcribers */}
      <Box>
        <div style={{
          height:'300px',
          background: 'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
        }} />

        {/* <ChannelCard channelDetail={channelDetail} marginTop="-93px" /> */}
        <ChannelCard 
          channelDetail={channelDetail} 
          marginTop = {-10}/>      
      </Box>

        {/*description  */}
      <Typography >
          <Stack
            sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }} 
            ml={2} 
            align = "center"
            >
            {channelDetail?.snippet?.description}
          </Stack>
        </Typography>

        { /* all videos of channel*/}
      <Box 
        p={2} 
        display="flex">
        {/* <Box 
          sx={{ mr: { sm: '100px' } }}/> */}
          <Video video={videos} />
      </Box>

    </Box>
  );
};

export default ChannelDetail;