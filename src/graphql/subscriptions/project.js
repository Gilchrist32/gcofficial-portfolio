import gql from 'graphql-tag'

export const PROJECT_SUBSCRIPTION = gql`
subscription getProject {
  project(order_by: {created_at: asc}) {
    id
    title
    description
    image_url
    source_code
    created_at
    likeCount: projects_likes_aggregate {
      aggregate {
        count
      }
    }
    commentCount: projects_comments_aggregate {
      aggregate {
        count
      }
    }
  }
}
`