import gql from 'graphql-tag'

export const ADD_SUBSCRIBER_MUTATION = gql `
mutation insertSubscriber($email: String!) {
    insert_cal_subscriber(objects: {email: $email}) {
        returning {
            id
            email
        }
    }
}
`