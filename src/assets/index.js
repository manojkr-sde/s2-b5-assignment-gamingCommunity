const games = [
  { id: 1, title: 'Valorant', genre: 'FPS', platform: 'PC', rating: 4.5 },
  {
    id: 2,
    title: 'FIFA 22',
    genre: 'Sports',
    platform: 'Console',
    rating: 4.2,
  },
  {
    id: 3,
    title: 'Among Us',
    genre: 'Party',
    platform: 'Mobile',
    rating: 4.0,
  },
];
const players = [
  {
    id: 1,
    name: 'Akash Gupta',
    username: 'AkashGamer',
    platform: 'PC',
    rating: 4.7,
  },
  {
    id: 2,
    name: 'Rohit Kumar',
    username: 'RohitPlayz',
    platform: 'Console',
    rating: 4.5,
  },
  {
    id: 3,
    name: 'Sneha Singh',
    username: 'SnehaWins',
    platform: 'Mobile',
    rating: 4.6,
  },
];
const tournaments = [
  {
    id: 1,
    gameId: 1,
    name: 'Valorant Championship',
    date: '2022-12-01',
    prizePool: 5000,
  },
  {
    id: 2,
    gameId: 2,
    name: 'FIFA World Cup',
    date: '2022-11-15',
    prizePool: 3000,
  },
  {
    id: 3,
    gameId: 3,
    name: 'Among Us Showdown',
    date: '2022-10-20',
    prizePool: 2000,
  },
];

module.exports = {
  games,
  players,
  tournaments,
};
