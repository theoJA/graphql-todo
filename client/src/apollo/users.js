import gql from 'graphql-tag';

export const fetchUserById = gql`
query user($id: Int!) {
  user(id: $id) {
    id
    username
    todos {
      id
      heading
      completed
    }
  }
}`;