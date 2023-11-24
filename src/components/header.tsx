import React, { useState } from "react";
import logo from "@/assets/images/AethTeamLogo.png";
import Image from "next/image";
import NavButtons from "./buttons/nav_buttons";
import profilIcon from "@/assets/images/profilIcon.png";

export default function Header() {
    const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

    const handleMouseEnter = () => {
        console.log("Mouse enter");
        setIsUserMenuVisible(true);
    };

    const handleMouseLeave = () => {
        console.log(" Mouse leave");
        setIsUserMenuVisible(false);
    };

    return (
        <header>
            <div className="header_container">
                <div className="logo_container">
                    <Image src={logo} alt="Aeth Team Logo" width={50} height={50} />
                    <span className="logo_text">AethTeam</span>
                </div>
                <div className="header_nav_container">
                    <NavButtons title="plugins" url="/plugins" />
                    <NavButtons title="map" url="/map" />
                    <NavButtons title="textures" url="/textures" />
                    {/* Add your user icon and menu here */}
                    <div
                        className="user_icon"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Utilisez la balise Image de Next.js pour afficher l'icône de profil */}
                        <Image src={profilIcon} alt="Profil Icon" width={40} height={40}  />
                        {isUserMenuVisible ? (
                            <div className="user_menu">
                                {/* Add your menu items here */}
                                <a href="#">Profil</a>
                                <a href="#">Membres</a>
                                <a href="#">déconnexion</a>
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
