const { gql } = require("apollo-server");
const typeDefs = gql`
  type Song {
    artist: String
    lyric: String
    number: String
    seconds: String
    song: String
    year: String
  }
type Query {
    songs: [Song]
  }
`;
module.exports = typeDefs;