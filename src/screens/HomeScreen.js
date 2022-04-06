import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Box } from '../components/Box/Box';
import { Typography } from '../components/Typography/Typography';
import { SampleContext } from '../contexts/SampleContext';
import { useGetImages } from '../hooks/useImages';
import colors from '../theme/colors';
import text from '../theme/text';
import { getProportionalHeight } from '../utils/getProportionalHeight';
import { optimizeImageUrl } from '../utils/optimizeImageUrl';

const screenWidth = Dimensions.get('screen').width;

const Item = ({ item }) => {
  const { author, id, download_url } = item;
  const imageWidth = screenWidth / 3 - 20;
  const imageHeight = getProportionalHeight(download_url, imageWidth);

  return (
    <Box as={TouchableOpacity} borderWidth="1px" width={screenWidth / 3} mb="10px" py="10px" onPress={() => console.log(`id:${id} pressed`)}>
      <Image
        style={{
          width: imageWidth,
          height: imageHeight,
          marginLeft: 'auto',
          marginRight: 'auto'
        }}
        source={{ uri: optimizeImageUrl(download_url, imageWidth) }}
        resizeMode="contain"
      />
      <Typography textAlign="center" mt="4px" {...text.caption_medium_12_12} color={colors.neutral_900}>{`ID: ${id}`}</Typography>
      <Typography textAlign="center" mt="2px" {...text.caption_medium_12_12} color={colors.neutral_700}>{`Author: ${author}`}</Typography>
    </Box>
  )
}

const HomeScreen = () => {
  const ELEMENTS_PER_PAGE = 3;
  const { isLoading, error, data: images } = useGetImages();
  const [totalPages, setTotalPages] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  // const { data, setData } = useContext(SampleContext);

  useEffect(() => {
    if(images?.length > 0) {
      setTotalPages(images?.length / ELEMENTS_PER_PAGE);
    }
  }, [images]);

  if (isLoading) {
    return <ActivityIndicator height="100%" />;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={() => {
        const images = queryClient.getQueryData('images');
      }}><Typography>Fetch from cache</Typography></TouchableOpacity> */}
      <ScrollView>
        {images.slice(0, currentPage * ELEMENTS_PER_PAGE).map((item, index) => <Item item={item} key={index} />)}
        {currentPage !== totalPages && (
          <Box as={TouchableOpacity} borderWidth="1px" width="200px" ml="auto" mr="auto" onPress={() => {setCurrentPage(currentPage + 1)}}>
            <Typography textAlign={'center'}>Load More</Typography>
          </Box>
        )}
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default HomeScreen;