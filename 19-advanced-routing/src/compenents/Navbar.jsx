import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex py-4 px-8 bg-cyan-800 items-center justify-between'>
      <h2 className='text-2xl font-bold'>Shadab</h2>
      <div className='flex gap-10'>

        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
        <Link className='text-lg font-medium' to='/contact'>Contact</Link>
        <Link className='text-lg font-medium' to='/product'>Products</Link>


      </div>
    </div>
  )
}

export default Navbar
