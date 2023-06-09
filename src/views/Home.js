import { Outlet, Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <nav className="fixed top-0 left-0 right-0 bg-white bg-opacity-40 backdrop-blur-md pt-3 pb-3">
                <ul className="flex justify-center">
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/newsletter">Newsletter</Link>
                    </li>
                </ul>
            </nav>
            <div className="mt-10">
                <Outlet />
            </div>
        </div>
    );
}

export default Home;