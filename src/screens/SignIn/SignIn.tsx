import React from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View } from 'react-native'

import { useGetPostsQuery } from '@/apis/postsApi'

export default function SignIn() {
  const { data } = useGetPostsQuery()

  return (
    <SafeAreaView>
      <ScrollView>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: '#eee',
                padding: 16,
                borderRadius: 5,
                marginBottom: 16
              }}
            >
              <Text
                style={{ fontWeight: '700', marginBottom: 8, fontSize: 18 }}
              >
                {item.title}
              </Text>
              <Text style={{ fontSize: 16 }}>{item.body}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
