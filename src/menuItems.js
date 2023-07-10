import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import ViewInArRoundedIcon from '@mui/icons-material/ViewInArRounded';
import ThreeDRotationRoundedIcon from '@mui/icons-material/ThreeDRotationRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import DownloadingRoundedIcon from '@mui/icons-material/DownloadingRounded';
import LocalPrintshopRoundedIcon from '@mui/icons-material/LocalPrintshopRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ImageSearchRoundedIcon from '@mui/icons-material/ImageSearchRounded';
// import GTranslateRoundedIcon from '@mui/icons-material/GTranslateRounded';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CollectionsIcon from '@mui/icons-material/Collections';
import NextWeekRoundedIcon from '@mui/icons-material/NextWeekRounded';
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';
import IntegrationInstructionsRoundedIcon from '@mui/icons-material/IntegrationInstructionsRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import SwipeVerticalRoundedIcon from '@mui/icons-material/SwipeVerticalRounded';
import BrushRoundedIcon from '@mui/icons-material/BrushRounded';

export const menuItems = [
    {
        icon: <HomeRoundedIcon />,
        title: 'Beranda',
        url: '/',
    },
    {
        icon: <MapRoundedIcon />,
        title: 'Peta',
        url: '/',
        submenu: [
            {
                icon: <SwipeVerticalRoundedIcon />,
                title: 'Interaktif',
                url: '/Interaktif',
            },
            {
                icon: <BrushRoundedIcon />,
                title: 'Tematik',
                url: '/Tematik',
            },
            {
                icon: <ViewInArRoundedIcon />,
                title: '3D',
                url: '/',
                submenu: [
                    {
                        icon: <PublicRoundedIcon />,
                        title: '3D Basemaps',
                        url: '/peta-3d-basemaps',
                    },
                    {
                        icon: <ThreeDRotationRoundedIcon />,
                        title: '3D Transit Orientied',
                        url: '/peta-3d-transit-orientied',
                    },
                ],
            },
        ],
    },
    {
        icon: <HomeRoundedIcon />,
        title: 'IRK',
        url: '/IRK',
    },
    {
        icon: <DownloadRoundedIcon />,
        title: 'Unduh',
        url: '/Unduh',
        // submenu: [
        //     {
        //         icon: <DownloadingRoundedIcon />,
        //         title: 'Peta Jakarta',
        //         url: '/',
        //     },
        //     {
        //         icon: <LocalPrintshopRoundedIcon />,
        //         title: 'Cetak Peta Kelurahan',
        //         url: '/',
        //     },
        // ],
    },
    {
        icon: <InfoRoundedIcon />,
        title: 'Informasi',
        url: '/',
        submenu: [
            {
                icon: <NewspaperIcon />,
                title: 'Berita',
                url: '/Berita',
            },
            {
                icon: <MenuBookRoundedIcon />,
                title: 'Panduan Jakarta Satu',
                url: '/panduan-jakarta-satu',
            },
            {
                icon: <CollectionsIcon />,
                title: 'Galeri',
                url: '/',
            },
            {
                icon: <EmojiEventsIcon />,
                title: 'Penghargaan',
                url: '/',
            },
            {
                icon: <IntegrationInstructionsRoundedIcon />,
                title: 'Integrasi Sistem',
                url: '/integrasi-sistem',
            },
            {
                icon: <AccountTreeRoundedIcon />,
                title: 'Data API',
                url: '/data-api',
            },
        ],
    },
    {
        icon: <ImageSearchRoundedIcon />,
        title: 'Research',
        url: '/',
        submenu: [
            {
                icon: <NextWeekRoundedIcon />,
                title: 'Publikasi',
                url: '/Publikasi',
            },
        ],
    },
];