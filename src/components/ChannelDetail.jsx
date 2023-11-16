import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, ChannelCard} from './';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Gradient } from '@mui/icons-material';

const ChannelDetail = () => {
  const [channelDetail, setchannelDetail] = useState(null);
  const [videos, setvideos] = useState([]);
  const { id } = useParams();
  console.log(channelDetail, videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setchannelDetail(data?.items[0]));  

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setvideos(data?.items));  
  }, [id])
  
  return (
    <Box minHeight="95vh">
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(0,238, 247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px',          
        }}/>
        <ChannelCard channelDetail={channelDetail}/>
      </Box>
    </Box>
  )
}

export default ChannelDetail