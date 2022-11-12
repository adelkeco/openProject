import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';
import AlarmIcon from '@mui/icons-material/Alarm';
import RestoreIcon from '@mui/icons-material/Restore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import LogoutIcon from '@mui/icons-material/Logout';

export const SlidebarData1 = [
    {
        title:'Home',
        icon: <HomeIcon />,
        link: '/home'
    },
    {
        title:'Discovery',
        icon: <ExploreIcon />,
        link: '/discovery'
    },
    {
        title:'Community',
        icon: <GroupsIcon />,
        link: '/community'
    },
    {
        title:'Coming soon',
        icon: <AlarmIcon />,
        link: '/coming'
    },
   
];

export const SlidebarData2 = [
    {
        title:'Recent',
        icon: <RestoreIcon />,
        link: '/recent'
    },
    {
        title:'Bookmarked',
        icon: <BookmarkIcon />,
        link: '/bookmarked'
    },
    {
        title:'Top rated',
        icon: <StarBorderIcon />,
        link: '/top'
    },
    {
        title:'Downloaded',
        icon: <DownloadForOfflineIcon/>,
        link: '/downloaded'
    }
]

export const SlidebarData3 = [
    {
        title:'Settings',
        icon: <SettingsIcon />,
        link: '/settings'
    },
    {
        title:'Help',
        icon: <InfoIcon/>,
        link: '/help'
    }
]

export const SlidebarData4 = [
    {
        title:'Logout',
        icon: <LogoutIcon />,
        link: '/logout'
    }
]