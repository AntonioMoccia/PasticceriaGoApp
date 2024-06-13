    import { Link } from 'react-router-dom'

function Navigation() {
    return (
        <div className=' h-20 flex justify-between items-center w-full max-w-screen px-5 '>

            <div>Navigation</div>
            <ul className=' flex gap-3 justify-center items-center'>
                <li>
                    <Link to={'/catalog'}>Catalog</Link>
                </li>
                <li>
                    <Link to={'/admin'}>Admin Page</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navigation