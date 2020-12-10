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
export const ADD_LIKE_MUTATION = gql`
mutation insertlikeProject($project_id: uuid!, $name: String!) {
    insert_like(objects: {project_id: $project_id, name: $name}) {
      returning {
        id
        name
        project_id
        like
      }
    }
  }  
`