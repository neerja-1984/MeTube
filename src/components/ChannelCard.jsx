import React from 'react';
import { Link } from 'react-router-dom';

import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoProfilePicture  , demoChannelTitle} from "./utilities/Constants"

// const ChannelCard = ({ channelDetail , marginTop}) => (
const ChannelCard = ({ channelDetail , marginTop  }) => (
  <Box
    sx={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: { xs: '356px', md: '280px' },
      height: '326px',
      margin: 'auto',
      marginTop,
    }}
  >
    <Link 
        to={`/channel/${channelDetail?.id?.channelId}`}>

      <CardContent 
        sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff' , alignItems: "center" }}>

        <CardMedia
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3' }}
        />

        <Typography 
            variant="h6">
            {channelDetail?.snippet?.title || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
        </Typography>

        {/* if stats present render the next <TypoGraphy/> */}
        {channelDetail?.statistics?.subscriberCount && (
          <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
            {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
          </Typography>
        )}

        {/* <Typography >
          <Box
            sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' , marginBottom : marginBotts}}>
            {channelDetail?.snippet?.description.slice(0, 60)}
          </Box>
        </Typography> */}

      </CardContent>
    </Link>
  </Box>
);

export default ChannelCard;