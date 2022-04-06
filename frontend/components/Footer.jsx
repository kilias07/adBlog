
const Footer = () => {
    return (
        <footer className="bg-gray-600 text-center lg:w-auto lg:static lg:block">
            <div className="container p-6 mx-auto">
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-800">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-gray-800">Link 2</a>
                            </li>

                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-800">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-gray-800">Link 2</a>
                            </li>

                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-800">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-gray-800">Link 2</a>
                            </li>
                        </ul>
                    </div>

                    <div className="mb-6">
                        <h5 className="uppercase font-bold mb-2.5 text-gray-800">Links</h5>

                        <ul className="list-none mb-0">
                            <li>
                                <a href="#!" className="text-gray-800">Link 1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-gray-800">Link 2</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-gray-700 text-center p-4">
                <span>© {new Date().getFullYear()} Copyright: Developard</span>
            </div>
        </footer>
    )
}

export default Footer;