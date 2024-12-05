import { View, Text } from 'react-native'
import { Image } from 'expo-image'

interface Artist {
  name: string
  image: string
}

interface Article {
  title: string
  type: string
  artist: Artist
}

const articles: Article[] = [
  {
    title: 'Tout recommencer',
    type: 'song',
    artist: {
      name: 'Kyana',
      image: require('../../assets/images/kyana.jpg'),
    },
  },
  {
    title: 'Graou',
    type: 'single',
    artist: {
      name: 'Miki',
      image: require('../../assets/images/miki.jpg'),
    },
  },
  {
    title: 'la Favorite',
    type: 'album',
    artist: {
      name: 'Yoa',
      image: require('../../assets/images/yoa.jpg'),
    },
  },
]

export default function HomeScreen() {
  return (
    <View className="flex-1 flex items-center w-full h-full">
      <Image
        contentFit="cover"
        source={articles[0].artist.image}
        style={{
          width: '100%',
          height: 316,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
          zIndex: 10,
        }}
      />
      <View
        className="h-[280px] flex items-center w-full bg-[#FEE6DE]"
        style={{
          zIndex: 9,
          marginTop: -17,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
        }}
      >
        <Text className="text-2xl font-bold text-[#2D2D2D]">{articles[0].title}</Text>
        <Text className="text-lg text-[#2D2D2D]">{articles[0].artist.name}</Text>
      </View>
      <Image
        contentFit="cover"
        source={articles[1].artist.image}
        style={{
          zIndex: 8,
          marginTop: -17,
          width: '100%',
          height: 108,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
        }}
      />
      <Image
        contentFit="cover"
        source={articles[2].artist.image}
        style={{
          zIndex: 7,
          marginTop: -17,
          width: '100%',
          height: 108,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
        }}
      />
      <Image
        contentFit="cover"
        source={articles[0].artist.image}
        style={{
          zIndex: 6,
          marginTop: -17,
          width: '100%',
          height: 108,
          borderBottomLeftRadius: 17,
          borderBottomRightRadius: 17,
        }}
      />
    </View>
  )
}
