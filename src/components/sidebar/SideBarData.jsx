import React from 'react';
import * as VSCIcons from "react-icons/vsc";
import { RiPercentLine } from "react-icons/ri";


export const SidebarData = [
    {
        title: 'JsonFormat',
        path: '/jsonformat',
        icon: <VSCIcons.VscJson />,
        cName: 'nav-text'
    },
    {
        title: 'LoremIpsum',
        path: '/loremipsum',
        icon: <VSCIcons.VscSymbolKey />,
        cName: 'nav-text'
    },
    {
        title: 'Regex',
        path: '/regex',
        icon: <VSCIcons.VscRegex />,
        cName: 'nav-text'
    },
    {
        title: 'UrlEncDec',
        path: '/urlencdec',
        icon: <RiPercentLine />,
        cName: 'nav-text'
    },
]