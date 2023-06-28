import React from 'react'
import {Box , Stack} from "@mui/material"

import {ChannelCard , VideoCard , Loader} from "."

const Video = ({ video, direction }) => {
// const Video = ({ video }) => {
  // if videos == null ... videos.length == give error as null has no length property
  // but on adding !videos?.length .. returns undefined ..taht is ets you acess without throwing error
  if(!video?.length) return  <Loader />;
  console.log(video)
  
  return (
    <Stack 
      direction={direction || "row"}
      flexWrap="wrap" 
      justifyContent={{xs : "center" , sm : "start"  , lg : "start"}}
      alignItems="start" 
      gap={2}
    >

      {video.map((item, idx) => (
        <Box 
          key={idx}>
            {/* if videoId present .. render <VIDEOCARD/> */}
            {/* if channelId present .. render <CHANNELCARD/> */}
          {item.id.channelId && <ChannelCard channelDetail={item} />}
          {item.id.videoId && <VideoCard video={item}/>}
        </Box>
      ))}
    </Stack>
  );
}
export default Video