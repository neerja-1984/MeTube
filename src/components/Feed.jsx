import React, { useEffect, useState } from "react"
import { Box, Stack, Typography } from "@mui/material"

import { fetchFromAPI } from "./utilities/fetchFromAPI"
import { Video , SideBar } from "."


const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  // iitially video == null
  // set once selected one selectedCategory
  const [videos, setVideos] = useState(null);


  // everytime selectedCategory changed .. fetch url from that new api endpoint
  useEffect(() => {
    setVideos(null);

    // search?part=snippet&q=${selectedCategory} means :
    // 1) search -- > getting the endpoint form url
    // 2) part=snippet: API should return only the snippet part of the response[ includes basic information about the search results.]
    // 3) q=${selectedCategory} : query == selectedCategory , ie if selectedCategory == technology ; include only technology results

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (

    // on small devices -- collumn wise / on big -- row wise
    // stack == sidebar(button + copyrigth_text) + video .. 2 boxes
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>

      {/* child1 */}
      <Box 
        sx={{ 
          height: { sx: "auto", md: "92vh" }, 
          borderRight: "1px solid #3d3d3d", 
          px: { sx: 0, md: 2 } 
        }}>

        <SideBar 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        
          <Typography 
            className="copyright" 
            variant="body2" 
            sx={{ mt: 1.5, color: "#fff", }}>
            Copyright © 2022 JSM Media
          </Typography>
      </Box>

{/* child2 */}
      <Box 
        p={1} 
        m= {1}
        // mr = {0}
        sx={{ overflowY: "auto", height: "90vh", flex: 2 }}
      >

        <Typography 
          variant="h4" 
          fontWeight="bold" 
          mb={2} 
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Video video={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;