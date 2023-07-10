import {
    Divider,
    styled,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    marginTop: "-5vh",
    zIndex: "1",
    textAlign: "center",
}));

export const BoxCarousel = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginTop: "5%",
    // marginBottom: "5%",
}));

export const BoxBeritaTerbaru = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "3%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxSemuaBerita = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "5%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxImage = styled("img")(({ src }) => ({
    width: "100%",
    height: "100%",
}));

export const BoxImageBeritaTerbaru = styled("img")(({ src }) => ({
    width: "56vh",
    height: "20vw",
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)"
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    marginTop: "2%",
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2.5em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#464646",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxTitleBeritaTerbaru = styled(Typography)(({ theme }) => ({
    textAlign: "left",
    fontSize: "2.5em",
    color: "rgba(0, 0, 0, 0.80)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

// export const BoxTitleSemuaBerita = styled(Typography)(({ theme }) => ({
//     textAlign: "left",
//     fontSize: "2.5em",
//     color: "#464646",
//     [theme.breakpoints.down("sm")]: {
//         fontSize: "36px",
//     },
// }));

// export const DividerTitle = () => {
//     return (
//         <div>
//             <Divider
//                 sx={{
//                     margin: "0 auto",
//                     height: 2,
//                     width: "65px",
//                     bgcolor: "#464646"
//                 }} />
//         </div>
//     )
// }

// export const DividerBeritaTerbaru = () => {
//     return (
//         <div>
//             <Divider
//                 sx={{
//                     marginLeft: "-7%",
//                     width: "120%",
//                     height: 3,
//                     bgcolor: "rgba(0, 0, 0, 0.40)"
//                 }} />
//         </div>
//     )
// }

export const DividerSemuaBeritaKiri = () => {
    return (
        <div>
            <Divider
                sx={{
                    width: "110%",
                    height: 2,
                    bgcolor: "#464646"
                }} />
        </div>
    )
}

export const DividerSemuaBeritaKanan = () => {
    return (
        <div>
            <Divider
                sx={{
                    marginLeft: "-10%",
                    width: "110%",
                    height: 2,
                    bgcolor: "#464646"
                }} />
        </div>
    )
}