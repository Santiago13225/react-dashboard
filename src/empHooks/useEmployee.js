import { useQuery, gql } from "@apollo/client";

const GET_EMPLOYEE = gql`
query GetEmployee($id: ID!){
    employee(id: $id){
      name  
      id
      image
      episode {
        name
        episode
      }
    }
  }
`;

export const useEmployee = (id) => {
    const {data, error, loading} = useQuery(GET_EMPLOYEE, {
        variables: {
            id
        }
    });

    return {
        data,
        error,
        loading,
    };
}