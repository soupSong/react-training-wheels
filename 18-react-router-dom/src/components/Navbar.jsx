import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className='nav'>
    <h3>Shadab</h3>
    <div>

        {/* Creating routes with a tag will make the page reload */}
        {/* <a href='/'>Home</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a> */}


        {/* Creating routes with an element called Link provided by react router dom will not make the page reload */}

        <Link to='/'>Home</Link>
        <Link to='about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Products</Link>
        
    </div>

    </div>
  )
}

export default Navbar
