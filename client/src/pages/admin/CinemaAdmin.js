import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const CinemaAdmin = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/cinema/getAllCinema")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
  })

  return (
    <div className="flex h-full bg-red-500 justify-center items-center">
      <div className="w-full bg-white rounded p-3">
        <Link
          to="/admin/cinema/create"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add +
        </Link>
        <Link
          to="/admin"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4"
        >
          Back
        </Link>
        <table className="table w-full table--users mt-2">
          <thead>
            <tr className="w-auto">
              <th className="text-left">Cinema Name</th>
              <th className="text-left">Ticket Price</th>
              <th className="text-left">City</th>
              <th className="text-left">Address</th>
              <th className="text-left">Seat Available</th>
              <th className="text-left">Image</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((cinema, index) => {
              return (
                <tr key={index}>
                  <td>{cinema.name}</td>
                  <td>
                    <img className="w-[100px]" src={cinema.image}></img>
                  </td>
                  <td>{cinema.ticketPrice}</td>
                  <td>{cinema.city}</td>
                  <td>{cinema.address}</td>
                  <td>{cinema.seatAvailable}</td>
                  <td>
                    <Link
                      to={`/admin/movie/update/${movie._id}`}
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(cinema._id)
                        refreshPage()
                      }}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default CinemaAdmin
