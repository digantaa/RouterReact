import React from 'react'


const Header = () => {
  return (
    <header className="shadow sticky z-50 top-0">
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to='/' className="items-center flex">
                    <img src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png" alt="Logo"
                        className='mr-3 h-12' />
                </Link>

                <div className="items-center flex lg:order-2">
                    <Link className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg
                    text-sm px-4 lg;px-5 py-2 lg:py-2.5 mr-2 focus:outline-non" to='#'>
                        Log in
                    </Link>

                    <Link className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300
                    font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
                    
                    </Link>
                </div>

            </div>
        </nav>
    </header>
  )
}

export default Header
