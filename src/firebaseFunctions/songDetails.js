const songDetails = (data) => {
  return {
    artist: data.artist,
    song: data.song,
    year: data.year,
    seconds: data.seconds,
    lyric: data.lyric
  }
}
module.exports = songDetails