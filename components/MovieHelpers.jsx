// https://justpaste.it/h2huw
export const MOVIE_DIRECTORY = {
  name: "movies",
  subDirs: [
    {
      name: "Fantasy",
      subDirs: [
        {
          name: "Magic",
          subDirs: [],
          files: ["Harry Potter.txt"],
        },
        {
          name: "Adventure",
          subDirs: [],
          files: ["Lord of the rings.txt", "Wizard of Oz.txt"],
        },
      ],
      files: ["Fantasy Genre.txt"],
    },
    {
      name: "Action",
      subDirs: [
        {
          name: "Superhero",
          subDirs: [],
          files: ["The Avengers.txt"],
        },
      ],
      files: ["Action Genre.txt"],
    },
    {
      name: "Animation",
      subDirs: [],
      files: ["The Lion King.txt", "Mulan.txt", "Animation Genre.txt"],
    },
    {
      name: "Romance",
      subDirs: [
        {
          name: "Fantasy",
          subDirs: [],
          files: [
            "Twilight.txt",
            "Ghost.txt",
            "Beauty and the Beast.txt",
            "Van Helsing.txt",
            "Underworld.txt",
          ],
        },
        {
          name: "Drama",
          subDirs: [],
          files: ["Fifty Shades of Grey.txt"],
        },
        {
          name: "Sci-Fi",
          subDirs: [],
          files: ["The Time Traveler's Wife.txt"],
        },
      ],
      files: ["Romance Genre.txt"],
    },
    {
      name: "Sci-Fi",
      subDirs: [
        {
          name: "Cyberpunk",
          subDirs: [],
          files: ["Blade Runner.txt", "The Matrix.txt"],
        },
        {
          name: "Horror",
          subDirs: [],
          files: ["Alien.txt"],
        },
        {
          name: "Adventure",
          subDirs: [],
          files: ["Jurassic Park.txt"],
        },
        {
          name: "Family",
          subDirs: [],
          files: ["E.T. the Extra-Terrestrial.txt"],
        },
      ],
      files: ["Sci-Fi Genre.txt"],
    },
  ],
  files: ["about.txt"],
};

export function Opener({ isOpen }) {
  return <></>;//{isOpen ? "▼" : "▶"}</>;
}
