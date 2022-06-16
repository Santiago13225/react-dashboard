import { useQuery, gql } from "@apollo/client";

const GET_EMPLOYEES = gql`
    
`;

export const useEmployees = () => {
    const { error, data, loading } = useQuery(GET_EMPLOYEES);

    return {
        error,
        data,
        loading
    };

};