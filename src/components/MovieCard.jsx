import { StarIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import timeFormat from '../lib/timeFormat'
import theaterImg from '../assets/theaters.jpg'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'

const MovieCard = ({ movie }) => {
  const navigate = useNavigate()

  // Defensive checks for movie properties
  const posterUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL}${movie.backdrop_path}`
    : theaterImg

  const releaseYear = movie.release_date
    ? new Date(movie.release_date).getFullYear()
    : 'N/A'

  const genres = movie.genres && movie.genres.length > 0
    ? movie.genres.slice(0, 2).map(genre => genre.name).join(' | ')
    : 'Unknown Genre'

  const runtime = movie.runtime ? timeFormat(movie.runtime) : 'N/A'

  const rating = typeof movie.vote_average === 'number'
    ? movie.vote_average.toFixed(1)
    : 'N/A'

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800 rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
      <img
        onClick={() => {
          navigate(`/movies/${movie._id}`)
          scrollTo(0, 0)
        }}
        src={posterUrl}
        alt={movie.title || 'Movie Poster'}
        className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer'
        onError={(e) => {
          // fallback if image fails to load
          e.target.onerror = null
          e.target.src = theaterImg
        }}
      />
      <p className='font-semibold mt-2 truncate'>{movie.title || 'Untitled'}</p>
      <p className='text-sm text-gray-400 mt-2'>
        {releaseYear} . {genres} . {runtime}
      </p>
      <div className='flex items-center justify-between mt-4 pb-3'>
        <button
          onClick={() => {
            navigate(`/movies/${movie._id}`)
            scrollTo(0, 0)
          }}
          className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull transition rounded-full font-medium cursor-pointer'
        >
          Buy Tickets
        </button>
        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
          <StarIcon className='w-4 h-4 text-primary fill-primary' /> {rating}
        </p>
      </div>
    </div>
  )
}

export default MovieCard
