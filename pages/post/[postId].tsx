import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import React from 'react'
import Post from './../../components/Post';
import { GET_POST_BY_POST_ID } from './../../graphql/queries'

function PostPage() {
  const {
    query: { postId },
  } = useRouter()
  const { loading, error, data } = useQuery(GET_POST_BY_POST_ID, {
    variables: {
      post_id: postId,
    },
  })

  const post: Post = data?.getPostListByPostId

  return (
    <div>
      <Post post={post}/>
    </div>
  )
}

export default PostPage
