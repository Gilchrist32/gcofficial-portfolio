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