import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "category" },
    { name: "Music", icon: <CgMusicNote />, type: "category" },
    { name: "Films", icon: <FiFilm />, type: "category" },
    { name: "Live", icon: <MdLiveTv />, type: "category" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "category" },
    { name: "News", icon: <ImNewspaper />, type: "category" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "category" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "category" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "category",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
index.css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#root {
    height: 100vh;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
        monospace;
}

.load-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background-color: #fdba2c;
}
.bar {
    content: "";
    display: inline;
    position: absolute;
    width: 0;
    height: 100%;
    left: 50%;
    text-align: center;
}
.bar:nth-child(1) {
    background-color: #da4733;
    animation: loading 3s linear infinite;
}
.bar:nth-child(2) {
    background-color: #3b78e7;
    animation: loading 3s linear 1s infinite;
}
.bar:nth-child(3) {
    background-color: #fdba2c;
    animation: loading 3s linear 2s infinite;
}
@keyframes loading {
    from {
        left: 50%;
        width: 0;
        z-index: 100;
    }
    33.3333% {
        left: 0;
        width: 100%;
        z-index: 10;
    }
    to {
        left: 0;
        width: 100%;
    }
}

.custom-h {
    height: auto !important;
}
@media screen and (min-width: 1024px) {
    .custom-h {
        height: 100vh !important;
    }
}