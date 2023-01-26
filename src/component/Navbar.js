import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faUser, faBars, faSearch, faClose, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { key } from 'localforage'



const Navbar = ({ authenticate, setAuthenticate }) => {

    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M HOME", "Sale", "지속가능성"];
    const [mobileMenu, setMobileMenu] = useState(false)
    const mobileMenuAppear = () => {
        console.log("click")
        if(mobileMenu==false)
        {
            setMobileMenu(true)
        }
        else{
            setMobileMenu(false)
        }
    }

    const navigate = useNavigate();
    const goToLogin = () => {
        authenticate ? setAuthenticate(false) : navigate("/login");
    }

    const goToHome = () => {
        navigate("/");
    }
    const search = (event) => {
        if (event.key == "Enter") {
            let keyword = event.target.value;


            navigate(`/?q=${keyword}`)
        }

    }


    return (
        <div>
            {mobileMenu ? <div className='mobile-menu-area'>
                <div className='mobile-close-button-control'>
                    <div >
                        <FontAwesomeIcon onClick={mobileMenuAppear} className='m-4 mobile-close-button' icon={faClose} size="lg" />
                    </div>
                </div>
                <div>
                    <ul className='mobile-menu-list'>
                        {menuList.map((item) => (
                            <li>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

            </div> :
                ""}



            <div className='login-button-area'>

                <div className='mobile-menu-button'>
                    <FontAwesomeIcon icon={faBars} onClick={mobileMenuAppear} />
                </div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{authenticate ? "로그아웃" : "로그인"}</div>
                </div>
            </div>

            <div className='nav-section'>
                <img onClick={goToHome} className='nav-img-area' width={100} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/2560px-H%26M-Logo.svg.png' />
            </div>

            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((item) => (
                        <li>
                            {item}
                        </li>
                    ))}
                </ul>

                <div className='search-area-mother'>
                    <div className='search-area'>
                        <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
                        <input className='input' type="text" placeholder='제품검색' onKeyPress={(event) => search(event)} />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Navbar
