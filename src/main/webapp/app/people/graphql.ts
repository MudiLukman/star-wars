import { gql } from 'apollo-angular';

export const PEOPLE_QUERY = gql`
    query People($page: Int) {
        people(page: $page) {
            count
            results {
                name
                mass
                gender
                homeworld
            }
        }
    }
`;

export const PERSON_QUERY = gql`
    query Person($name: String) {
        person(name: $name){
            name
            mass
            gender
            homeworld
        }
    }
`;
