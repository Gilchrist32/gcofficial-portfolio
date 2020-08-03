import gql from 'graphql-tag'

export const PROFILE = gql`
query fetchProfile {
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

export const GET_ALL_SUBSCRIBER_QUERY = gql`
query getAllSubscriber{
    cal_subscriber {
        id
        email
    }
}
`
export const COUNT_ALL_SUBSCRIBER_QUERY = gql`
query getCountSubscriber {
    subscriberCount: cal_subscriber_aggregate {
        aggregate {
            count
        }
    }
}
`
export const PROJECT_QUERYS = gql`
query getProject {
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

