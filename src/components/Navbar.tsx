import { Link } from "react-router-dom"

// @TODO create nav bar
const Navbar = () => {
  return (
    <>
        <ul style={{
                display: "flex", 
                gap: "40px", 
                listStyle: "none", 
                background: "rgb(255,255,255)", 
                padding: "10px", 
                margin: "0"
            }}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/latest-launch">Recent Launch</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
    </>
  )
}

export default Navbar