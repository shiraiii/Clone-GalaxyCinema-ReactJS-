import axios from 'axios' 
import React, {useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const UpdateUser = () => {
    const {id} = useParams()

    const[movieName, setMovieName] = useState()

    const[movieImg, setMovieImg] = useState()

    const[movieRating, setMovieRating] = useState()

    const[ageLimit, setAgeLimit] = useState()

    useEffect(() => {
        const fectchData = async() =>{
            try{
                const response = await axios.get('http://localhost:5000/api/movie/get/' +id);
                console.log(response)
                setMovieName(response.data.movieName)
                setMovieImg(response.data.movieImg)
                setMovieRating(response.data.movieRating)
                setAgeLimit(response.data.ageLimit)
            }catch(err){
                console.log(err)
            }
        }
        fectchData()
    },[])

    const navigate = useNavigate()

    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/api/movie/update/' +id, {movieName, movieImg, movieRating, ageLimit })
            .then(res => {
                console.log(res)
                navigate('/admin')
            })
            .catch(err => console.log(err))
    }
  return (
    <div className='flex h-100 justify-center items-center'>
        <div className='w-full bg-white rounded p-3'>
            <form onSubmit={handleUpdate}>
                <h2>Update Movie</h2>
                <label htmlFor='' className='text-xs block font-bold not-italic text-[#777777]'>Tên phim</label>
                <span className='w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300'>
                    <input autoComplete='true' type='text' id='movieName' placeholder='Nhập tên phim' className='bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2' name='fullname' value={movieName} onChange={(e) => setMovieName(e.target.value)} ></input>
                </span>
                <label htmlFor='' className='text-xs block font-bold not-italic text-[#777777]'>Ảnh phim</label>
                <span className='w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300'>
                    <input value={movieImg} required autoComplete='true' type='text' id='movieImg' placeholder='Ảnh phim' className='bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2' name='email' onChange={(e) => setMovieImg(e.target.value)}></input>
                </span>
                <label htmlFor='' className='text-xs block font-bold not-italic text-[#777777]'>Đánh giá</label>
                <span className='w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300'>
                    <input value={movieRating} required autoComplete='true' type='text' id='movieRating' placeholder='Nhập đánh giá' className='bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2' name='movieRating' onChange={(e) => setMovieRating(e.target.value)}></input>
                </span>
                <label htmlFor='' className='text-xs block font-bold not-italic text-[#777777]'>Độ tuổi</label>
                <span className='w-full mb-1 relative h-auto border inline-flex items-center min-w-0 text-sm bg-white rounded transition-all duration-300'>
                    <input value={ageLimit} required autoComplete='true' type='text' id='ageLimit' placeholder='Nhập độ tuổi' className='bg-transparent w-full h-9 focus:ring-2 focus:outline-blue-500 focus:rounded px-2' name='ageLimit' onChange={(e) => setAgeLimit(e.target.value)}></input>
                </span>
                <button type='submit' className='w-full bg-blue-500 text-white font-bold py-1 rounded'>Update</button>
            </form>
        </div>
    </div>
  )
}

export default UpdateUser