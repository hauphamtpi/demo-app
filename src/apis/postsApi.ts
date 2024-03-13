import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQuery } from './baseQuery'
import { DataPosts } from '@/types/posts'

export const postsAPi = createApi({
  reducerPath: 'postApi',
  baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<DataPosts[], void>({
      query: () => ({
        url: '/posts',
        method: 'GET'
      })
    })
  })
})

export const { useGetPostsQuery } = postsAPi
