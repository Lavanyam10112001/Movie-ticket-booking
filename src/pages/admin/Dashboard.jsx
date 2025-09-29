import React, { useEffect, useState } from 'react';
import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon,StarIcon
} from 'lucide-react';
import { dummyDashboardData } from '../../assets/assets';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';
import { dateFormat } from '../../lib/dateFormat';
import Loading from '../../components/Loading';

const Dashboard = () => {
  const currency = import.meta.env.VITE_CURRENCY || '₹';

  const [dashboardData, setDashboardData] = useState(null);
  const [loading, setLoading] = useState(true);

  const dashboardCards = [
    {
      title: 'Total Users',
      value: dashboardData?.totalUsers ?? 0,
      icon: UsersIcon,
    },
    {
      title: 'Total Bookings',
      value: dashboardData?.totalBookings ?? 0,
      icon: ChartLineIcon,
    },
    {
      title: 'Total Revenue',
      value: `${currency}${dashboardData?.totalRevenue ?? 0}`,
      icon: CircleDollarSignIcon,
    },
    {
      title: 'Upcoming Shows',
      value: dashboardData?.upcomingShows?.length ?? 0,
      icon: PlayCircleIcon,
    },
  ];

  useEffect(() => {
    const fetchDashboardData = async () => {
      setDashboardData(dummyDashboardData);
      setLoading(false);
    };

    fetchDashboardData();
  }, []);

  if (loading || !dashboardData) return <Loading />;

  return (
    <>
      <Title text1="Admin" text2="Dashboard" />

      {/* Top cards */}
      <div className="relative flex flex-wrap gap-4 mt-6">
        <BlurCircle top="-100px" left="0" />
        <div className="flex flex-wrap gap-4 w-full">
          {dashboardCards.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between px-4 py-3 bg-primary/10 border border-primary/20 rounded-md w-full max-w-xs"
            >
              <div>
                <h1 className="text-sm">{card.title}</h1>
                <p className="text-xl font-medium mt-1">{card.value}</p>
              </div>
              <card.icon className="w-6 h-6 text-primary" />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Movies */}
      <div className="mt-10">
        <p className="text-lg font-medium mb-4">Popular Movies</p>
        <div className="flex flex-wrap gap-6">
          {dashboardData.popularMovies.map((movie) => (
            <div
              key={movie.movieId}
              className="w-48 bg-primary/10 border border-primary/20 rounded-lg overflow-hidden hover:-translate-y-1 transition"
            >
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-2">
                <p className="font-medium">{movie.title}</p>
                <p className="text-sm text-gray-400">
                  Booked Seats: {movie.bookedSeats}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Shows */}
      <div className="mt-10">
        <p className="text-lg font-medium mb-4">Upcoming Shows</p>
        <div className="flex flex-col gap-4">
          {dashboardData.upcomingShows.map((show) => (
            <div
              key={show.showId}
              className="flex justify-between items-center p-4 bg-primary/10 border border-primary/20 rounded-md"
            >
              <div>
                <p className="font-medium">{show.movie}</p>
                <p className="text-sm text-gray-500">{show.cinema}</p>
              </div>
              <div className="text-sm text-gray-500">
                <p>{dateFormat(show.showDateTime)}</p>
                <p>Available Seats: {show.availableSeats}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Latest Bookings */}
      <div className="mt-10">
        <p className="text-lg font-medium mb-4">Latest Bookings</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-primary/20 text-primary">
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Movie</th>
                <th className="px-4 py-2">Seats</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Show Time</th>
                <th className="px-4 py-2">Payment</th>
              </tr>
            </thead>
            <tbody>
              {dashboardData.latestBookings.map((booking) => (
                <tr key={booking.bookingId} className="border-t">
                  <td className="px-4 py-2">{booking.userName}</td>
                  <td className="px-4 py-2">{booking.movie}</td>
                  <td className="px-4 py-2">{booking.bookedSeats.join(', ')}</td>
                  <td className="px-4 py-2">
                    {currency}
                    {booking.amount}
                  </td>
                  <td className="px-4 py-2">{dateFormat(booking.showDateTime)}</td>
                  <td className="px-4 py-2">
                    {booking.isPaid ? (
                      <span className="text-green-600 font-medium">Paid</span>
                    ) : (
                      <span className="text-red-600 font-medium">Pending</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
