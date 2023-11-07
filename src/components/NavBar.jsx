import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/login')
    }
    const loaded = ()=>{
    return (
        <div>
            <nav>
                <Link to="/sessions">
                    <button>
                    Sessions
                    </button>
                    </Link>
                <Link to="/spots">
                    <button>
                    Spots
                    </button>
                    </Link>
                <button onClick={logout}>Log Out</button>
            </nav>
        </div>
    )
    }
    return localStorage.getItem('token') ? loaded() : ''

}

export default NavBar