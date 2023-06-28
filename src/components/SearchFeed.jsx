import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Typography, Box } from "@mui/material";

import { fetchFromAPI } from "./utilities/fetchFromAPI"
import { Video } from ".";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const { searchTermName } = useParams();

  useEffect(() => {
    const fetchVideos = async () => {
      const data = await fetchFromAPI(`search?part=snippet&q=${searchTermName}`)
      
      // videos now have all video of the required serachTerm
      setVideos(data?.items)
    }

    fetchVideos()
  }, [searchTermName])


  return (
    <Box 
      p={2} 
      minHeight="95vh">

        <Typography 
          variant="h4" 
          fontWeight={900}  
          color="white" 
          mb={3} 
          ml={{ sm: "100px"}}>
          Search Results for <span style={{ color: "#FC1503" }}>{searchTermName}</span> videos
        </Typography>

      <Box 
          display="flex">
          {/* <Box sx={{ mr: { sm: '100px' } }}/> */}
            {<Video video={videos} />}
      </Box>
    </Box>
  );
};

export default SearchFeed;