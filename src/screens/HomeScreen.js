import React, { useContext } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  SafeAreaView,
  Image,
  FlatList,
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

const HomeScreen = () => {
  const { isLoading, error, data: images } = useGetImages();
  // const { data, setData } = useContext(SampleContext);

  if (isLoading) {
    return <ActivityIndicator height="100%" />;
  }

  if (error) {
    return <Typography>Error: {error.message}</Typography>;
  }

  const renderItem = ({ item }) => {
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

  return (
    <SafeAreaView>
      {/* <TouchableOpacity onPress={() => {
        const images = queryClient.getQueryData('images');
      }}><Typography>Fetch from cache</Typography></TouchableOpacity> */}
      <FlatList
        data={images}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item, index) => index}
      >
      </FlatList>
    </SafeAreaView>
  );
};

export default HomeScreen;