import { View, Text, StyleSheet, FlatList } from 'react-native'
import { Image } from 'expo-image'
import React from 'react'

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
  {
    title: 'Encore un titre',
    type: 'album',
    artist: {
      name: 'Random Artist',
      image: require('../../assets/images/kyana.jpg'),
    },
  },
]

function AnimatedCard({
  isOnFocus,
  article,
  index,
}: {
  isOnFocus: boolean
  article: Article
  index: number
}) {
  const BORDER_RADIUS = 17
  const ITEM_HEIGHT = 570
  const MAX_IMAGE_HEIGHT = 316
  const MIN_IMAGE_HEIGHT = 108

  return (
    <View
      style={[
        styles.card,
        {
          height: isOnFocus ? ITEM_HEIGHT : MIN_IMAGE_HEIGHT,
          marginTop: isOnFocus ? 0 : -BORDER_RADIUS,
          zIndex: articles.length - index,
        },
      ]}
    >
      <Image
        contentFit="cover"
        source={article.artist.image}
        style={{
          width: '100%',
          height: isOnFocus ? MAX_IMAGE_HEIGHT : MIN_IMAGE_HEIGHT,
          borderBottomLeftRadius: BORDER_RADIUS,
          borderBottomRightRadius: BORDER_RADIUS,
        }}
      />
      {isOnFocus && (
        <>
          <Text style={styles.title}>{article.title}</Text>
          <Text style={styles.artist}>{article.artist.name}</Text>
        </>
      )}
    </View>
  )
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item, index }) => (
          <AnimatedCard isOnFocus={index === 0} article={item} index={index} />
        )}
        keyExtractor={(item, index) => `article-${index}`}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#FFE6DE',
    overflow: 'hidden',
    borderBottomLeftRadius: 17,
    borderBottomRightRadius: 17,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2D2D2D',
    marginTop: 8,
  },
  artist: {
    fontSize: 16,
    color: '#2D2D2D',
  },
})
