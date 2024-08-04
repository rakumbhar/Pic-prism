import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-col sm:flex-row justify-between items-start sm:items-center px-5 py-5 fixed top-0 left-0 right-0 shadow-md gap-1 sm:gap-0 z-30'>
      <div className=' flex justify-between items-center'>
        <Link to='/' className='font-bold text-3xl'>PicPrism</Link>
      </div>
      <ul className='flex gap-5 text-lg font-semibold text-gray-600 '>
        <Link className='hover:text-black cursor-pointer sm:p-2' to='/'>Home</Link>
        <Link className='hover:text-black cursor-pointer sm:p-2 ' to='/about'>About</Link>
        <Link className='hover:text-black cursor-pointer sm:p-2 ' to='/signup'>Signup</Link>
        <Link className='hover:text-black cursor-pointer sm:p-2 ' to='/login'>Login</Link>
      </ul>
    </nav>
  )
}

export default Navbar