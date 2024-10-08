import React from 'react';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <div className='w-full mx-auto h-20 flex justify-between items-center font-titleFont'>

            <div>
                <img src={logo} alt='logo' />
            </div>

            <div>
                <ul className='flex items-center gap-10'>
                    {navLinksdata.map((navlink) => (
                        <li
                            className='text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300'
                            key={navlink._id}>
                            <Link
                                activeClass='active'
                                to={navlink.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                {navlink.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Navbar