import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
    {
        categories {
            _id
            name
            exercises {
                _id
                name
                description
                mainMuscles
                minorMuscles
                equipment
                difficulty
                instructions
        }
    }
}
`;

export const GET_ME = gql`
    query user{
        user {
            _id
            firstName
            lastName
        }
    }
`;