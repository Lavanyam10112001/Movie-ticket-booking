import logo from './logo.svg'
import icon from './icon.png'
import marvelLogo from './marvelLogo.svg'
import googlePlay from'./googlePlay.svg'
import appStore from './appStore.svg'
import screenImage from './screenImage.svg'
import profile from './profile.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from  './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'
import profile_img_4 from './profile_img_4.png'
import profile_img_5 from './profile_img_5.png'
import theaters from './theaters.jpg'


export const assets = {
    logo,
    icon,
    marvelLogo,
    googlePlay,
    appStore,
    screenImage,
    profile,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    profile_img_1,
    profile_img_2,
    profile_img_3,
    profile_img_4,
    profile_img_5,
    theaters
}

 export const dummyTrailer = [
  {
    image: "https://img.youtube.com/vi/WpW36ldAqnM/maxresdefault.jpg",
    videurl:'https://www.youtube.com/watch>v=WpW361AqnM'
  },
  {
    image: "https://img.youtube.com/vi/ywC__z5VgZM/maxresdefault.jpg",
    videurl:'https://www.youtube.com/watch?v=ywC__z5VgZM'
  },

  {
    image: "https://img.youtube.com/vi/oL6jZqExlIk/maxresdefault.jpg",
    videurl:'https://www.youtube.com/watch?v=oL6jZqExlIk'
  },

  {
    image: "https://img.youtube.com/vi/CT2_P2DZBR0/maxresdefault.jpg",
    videurl:'https://www.youtube.com/watch?v=CT2_P2DZBR0'
  },

]
 const dummyCastesData = [

  { "name": "Robert Downey Jr", "profilePath": "https://image.tmdb.org/t/p/w500/1YjdSym1jTG7xjHSI0yGGWEsw5i.jpg",},

  { "name": "Chris Evans", "profilePath": "https://image.tmdb.org/t/p/w500/3bOGNsHlrswhyW79uvIHH1V43JI.jpg",},

  {"name": "Scarlett Johansson","profilePath": "https://image.tmdb.org/t/p/w500/6NsMbJXRlDZuDzatN2akFdGuTvx.jpg",},
  
  { "name": "Chris Hemsworth", "profilePath": "https://image.tmdb.org/t/p/w500/jpurJ9jAcLCYjgHHfYF32m3zJYm.jpg",},
  
  { "name": "Tom Holland",  "profilePath": "https://image.tmdb.org/t/p/w500/bBRlrpJm9XkNSg0YT5LCaxqoFMX.jpg",},
  
  { "name": "Zendaya", "profilePath": "https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",},
  
  { "name": "Benedict Cumberbatch", "profilePath": "https://image.tmdb.org/t/p/w500/fBEucxECxGLKVHBznO0qHtCGiMO.jpg",},

]
// src/assets/assets.js


export const dummyShowsData = [
  {
    _id: "m1",
    id: 1,
    title: "The Dark Knight",
    overview:
      "Batman faces the Joker, a criminal mastermind who plunges Gotham City into chaos...",
    poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    genres: ["Action", "Crime", "Drama"],
    casts: [
      {
        name: "Christian Bale",
        profile_path: profile_img_1,
      },
      {
        name: "Heath Ledger",
        profile_path: profile_img_2,
      },
      {
        name: "Aaron Eckhart",
        profile_path: profile_img_3, 
      },
      {
        name: "Aaron Eckhart",
        profile_path: profile_img_4, 
      },
      {
        name: "Aaron Eckhart",
        profile_path: profile_img_5, 
      },
    ],
  },
  {
    _id: "m2",
    id: 2,
    title: "Inception",
    overview:
      "A skilled thief who steals corporate secrets through dream-sharing technology...",
    poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/s3TBrRGB1iav7gFOCNx3H31MoES.jpg",
    genres: ["Action", "Sci-Fi", "Thriller"],
    casts: [
      {
        name: "Leonardo DiCaprio",
        profile_path: profile_img_1,
          
      },
      {
        name: "Joseph Gordon-Levitt",
        profile_path: profile_img_2,
         
      },
       {
        name: "Maren Massey",
        profile_path: profile_img_4,
         
      },
      {
        name: "Elliot Page",
        profile_path: profile_img_3,
         
      },
    ],
  },
  {
    _id: "m3",
    id: 3,
    title: "Joker",
    overview:
      "A mentally troubled comedian embarks on a downward spiral that leads to chaos...",
    poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    backdrop_path: "https://image.tmdb.org/t/p/original/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
    genres: ["Adventure", "Drama", "Sci-Fi"],
    casts: [
      {
        name: "Joaquin Phoenix",
        profile_path: profile_img_1,
          
      },
      {
        name: "Robert De Niro",
        profile_path: profile_img_2,
          
      },
      {
        name: "Zazie Beetz",
        profile_path: profile_img_3,
          
      },
    ],
  }
];

export const dummyDateTimeData =  {
   "2025-07-24" :[
      {
        "time": "2025-07-24T10:00:00.000Z",
        "showId": "6838976543236bfg",
      },
      {
        "time": "2025-07-24T13:00:00.000Z",
        "showId": "6838976543236bfh",
      },
      {
       " time": "2025-07-24T16:00:00.000Z",
        "showId": "6838976543236bfi",
      }
    ],
    
     "2025-07-25" : [
      {
        "time": "2025-07-25T09:30:00.000Z",
        "showId": "6838976543236bfk",
      },
      {
        "time": "2025-07-25T12:30:00.000Z",
        "showId": "6838976543236bfl",
      },
      {
        "time": "2025-07-25T15:30:00.000Z",
        "showId": "6838976543236bfm",
      }
     
    ],
 
     "2025-07-26" : [
      {
       " time": "2025-07-26T11:00:00.000Z",
        "showId": "6838976543236bfo",
      },
      {
        "time": "2025-07-26T14:00:00.000Z",
        "showId": "6838976543236bfp",
      },
      {
        "time": "2025-07-26T17:00:00.000Z",
        "showId": "6838976543236bfq",
      }
      
    ],
 
     "2025-07-27" : [
      {
        "time": "2025-07-27T10:30:00.000Z",
        "showId": "6838976543236bfs",
      },
      {
        "time": "2025-07-27T13:30:00.000Z",
        "showId": "6838976543236bft",
      },
      {
       " time": "2025-07-27T16:30:00.000Z",
        "showId": "6838976543236bfu",
      }
     ],
  }

  

export const dummyBookingData = [
  {
    _id: "bkg_001",
    user: { name: "Anjali" },
    show: {
      _id: "6838976543236bfg",
      movie: {
        title: "Avengers: Endgame",
        poster_path: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
        runtime: 181
      },
      showDateTime: "2025-07-24T10:00:00.000Z",
      showPrice: 250
    },
    amount: 750,
    bookedSeats: ["A1", "A2", "A3"],
    isPaid: true
  },
  {
    _id: "bkg_002",
    user: { name: "Arun K" },
    show: {
      _id: "6838976543236bfh",
      movie: {
        title: "Inception",
        poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
        runtime: 148
      },
      showDateTime: "2025-07-24T13:00:00.000Z",
      showPrice: 250
    },
    amount: 500,
    bookedSeats: ["B4", "B5"],
    isPaid: true
  },
  {
    _id: "bkg_003",
    user: { name: "Priya R" },
    show: {
      _id: "6838976543236bfl",
      movie: {
        title: "The Dark Knight",
        poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        runtime: 152
      },
      showDateTime: "2025-07-25T12:30:00.000Z",
      showPrice: 250
    },
    amount: 1000,
    bookedSeats: ["C1", "C2", "C3", "C4"],
    isPaid: true
  },
  {
    _id: "bkg_004",
    user: { name: "Ravi T" },
    show: {
      _id: "6838976543236bfm",
      movie: {
        title: "Interstellar",
        poster_path: "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
        runtime: 169
      },
      showDateTime: "2025-07-25T15:30:00.000Z",
      showPrice: 300
    },
    amount: 600,
    bookedSeats: ["D5", "D6"],
    isPaid: false
  },
  {
    _id: "bkg_005",
    user: { name: "Kiran J" },
    show: {
      _id: "6838976543236bfo",
      movie: {
        title: "Avatar: The Way of Water",
        poster_path: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        runtime: 192
      },
      showDateTime: "2025-07-26T11:00:00.000Z",
      showPrice: 275
    },
    amount: 550,
    bookedSeats: ["E2", "E3"],
    isPaid: true
  }
];


export const projectsData = [
    {
      title: "Skyline Haven", 
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    }  
  ]


export const dummyDashboardData = {
  totalUsers: 1200,
  totalBookings: 875,
  totalRevenue: 256500,
  upcomingShows: [
    {
      showId: "6838976543236bfg",
      movie: "Avengers: Endgame",
      cinema: "PVR Inox Chennai",
      showDateTime: "2025-07-24T10:00:00.000Z",
      availableSeats: 120,
    },
    {
      showId: "6838976543236bfh",
      movie: "Inception",
      cinema: "PVR Inox Chennai",
      showDateTime: "2025-07-24T13:00:00.000Z",
      availableSeats: 95,
    },
    {
      showId: "6838976543236bfl",
      movie: "The Dark Knight",
      cinema: "INOX VR Mall",
      showDateTime: "2025-07-25T12:30:00.000Z",
      availableSeats: 88,
    },
  ],
  popularMovies: [
    {
      movieId: "m1",
      title: "Avengers: Endgame",
      poster_path: "https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
      bookedSeats: 450,
    },
    {
      movieId: "m2",
      title: "Inception",
      poster_path: "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg",
      bookedSeats: 380,
    },
    {
      movieId: "m3",
      title: "The Dark Knight",
      poster_path: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      bookedSeats: 420,
    },
  ],
  latestBookings: [
    {
      bookingId: "bkg_001",
      userName: "Lavanya M",
      movie: "Avengers: Endgame",
      showDateTime: "2025-07-24T10:00:00.000Z",
      bookedSeats: ["A1", "A2", "A3"],
      amount: 750,
      isPaid: true,
    },
    {
      bookingId: "bkg_002",
      userName: "Arun K",
      movie: "Inception",
      showDateTime: "2025-07-24T13:00:00.000Z",
      bookedSeats: ["B4", "B5"],
      amount: 500,
      isPaid: true,
    },
    {
      bookingId: "bkg_003",
      userName: "Priya R",
      movie: "The Dark Knight",
      showDateTime: "2025-07-25T12:30:00.000Z",
      bookedSeats: ["C1", "C2", "C3", "C4"],
      amount: 1000,
      isPaid: true,
    }
  ]
}


  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];