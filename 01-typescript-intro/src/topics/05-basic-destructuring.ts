interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  song: string;
  details: DetailsSong;
}

interface DetailsSong {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  song: "Mess",
  details: {
    author: "Ed Sheeran",
    year: 2015,
  },
};

const song = "New Song";

// without destructuring
console.log("Song: " + audioPlayer.song);
console.log("Song Duration: " + audioPlayer.songDuration);
console.log("Author: " + audioPlayer.details.author);

// with destructuring
const { song: otherSong, songDuration: duration, details } = audioPlayer; // se destructura la propiedad song y songDuration del objeto audioPlayer en unas constantes llamadas otherSong y duration. Sintaxis: 'propiedad: nombreDeLaContante'
const { author } = details;

console.log("Song: " + otherSong);
console.log("Song Duration: " + duration);
console.log("Author: " + author);
