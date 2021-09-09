const baseURL = process.env.FIREBASE_DATABASE_URL;
const songDetails = require("./firebaseFunctions/songDetails")

const resolvers = {
  Query: {
    songs: async () => {
      const data = await fetch(`${baseURL}`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function(item) {
        const songData = dataJson[item];
        const graphqlSong = songDetails(songData);
        return graphqlSong;
      });
      return mapsKeys;
    }
  }
}

module.exports = resolvers