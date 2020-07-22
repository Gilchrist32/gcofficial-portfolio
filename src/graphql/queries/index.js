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

