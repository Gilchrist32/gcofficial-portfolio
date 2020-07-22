import gql from 'graphl-tag'

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