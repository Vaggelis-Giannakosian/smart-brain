import React, {useState} from 'react'
import {
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';


const ProfileIcon = ({onRouteChange, toggleModal}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);


    const signout = () => {
       window.sessionStorage.removeItem('token')
       onRouteChange('signout')
    }

    return (
        <div className="pa4 tc">
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle
                    tag="span"
                    data-toggle="dropdown"
                    aria-expanded={dropdownOpen}
                >
                    <img src="http://tachyons.io/img/logo.jpg" alt="avatar"
                         className="br-100 ba h3 w3 dib"/>
                </DropdownToggle>
                <DropdownMenu right
                              className="b--transparent shadow-5"
                              style={{marginTop: '20px', backgroundColor: 'rgba(255,255,255,.5)'}}
                >
                    <DropdownItem onClick={toggleModal}>View Profile</DropdownItem>
                    <DropdownItem onClick={signout}>Sign Out</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
}


export default ProfileIcon;