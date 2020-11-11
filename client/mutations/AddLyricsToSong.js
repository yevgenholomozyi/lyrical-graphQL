import gql from 'graphql-tag'; 

const mutation = gql`
    mutation AddLyricToSong($content: String, $songId: ID) {
        addLyricToSong (content: $content, songId: $songId) {
            id
            lyrics {
                content
                id
                likes
            }
        }
    }
`;

export default mutation;