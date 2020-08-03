import gql from 'graphql-tag'

export const PROFILE_SUBSCRIPTION = gql`
subscription fetshProfile {
    profile {
        id
        firstname
        middlename
        lastname
        age
        birthdate
        gender
        status
        religion
        address
        bio
    }
}
`
export const GET_ALL_SUBSCRIBER_QUERY_SUBSCRIPTION = gql`
subscription getAllSubscriber {
    cal_subscriber {
      id
      email
    }
  }
`
export const COUNT_ALL_SUBSCRIBER_SUBSCRIPTION = gql`
subscription getCountSubscriber {
    subscriberCount: cal_subscriber_aggregate {
      aggregate {
        count
      }
    }
  }  
`
export const PROJECT_SUBSCRIPTION = gql`
subscription getProject {
  project(order_by: {created_at: asc}) {
    id
    title
    description
    image_url
    source_code
    created_at
  }
}
`