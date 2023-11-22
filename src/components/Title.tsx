import { Link } from "react-router-dom"

const Title = () => {
  return (
    <div>                
        <h3 data-testid="subheading">Welcome to</h3>
        <Link to="/"><h1>Space-Xplore</h1></Link>
        </div>
  )
}

export default Title