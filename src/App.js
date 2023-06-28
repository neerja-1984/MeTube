import React from 'react'
import {BrowserRouter , Routes ,Route } from "react-router-dom"
import {Box} from "@mui/material"

import {NavBar , Feed , SearchFeed , VideoDetail , ChannelDetail } from "./components"

const App = () => (
    <BrowserRouter>
    {/* material ui wrapper class -- Box */}
        <Box
        // style == sx
            sx = {{ 
                backgroundColor : "#000"
            }}
        >
            <NavBar/>
            <Routes>
                {/* home page */}
                <Route exact path='/' element={<Feed />} />
                {/* plays video */}
                <Route path='/video/:id' element={<VideoDetail />} />
                {/* gets channel details [channel name / logo / its all videos ] */}
                <Route path='/channel/:id' element={<ChannelDetail />} />
            {/* how it works ? */}

                {/* 1) in <Navbar/> -- we go to <SeacrhBar/>
                2) in <SearchBar/> .. we take input of of form 
                3) after input .. we use onSubmit event Handler in which we have navigate('search/...)'
                4) becase of navigate('search/...') .. we come down to this <Route/> part which navigates to <SearchFeed/>
                5) in <SearchFeed/> .. we get fetchApi to get video */}

                <Route path='/search/:searchTermName' element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
)

export default App