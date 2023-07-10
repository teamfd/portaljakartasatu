import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Colors } from "../../styles/theme";

export const BoxContainer = styled(Box)(({ theme }) => ({
    display: "relative",
    backgroundImage: "linear-gradient(rgba(186, 223, 255, 0.2), rgba(0, 0, 0, 0))",
}));

export const BoxBukuPanduan = styled(Box)(({ theme }) => ({
    paddingTop: "12%",
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "10%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxTutorialdanPanduanGIS = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "20%",
    justifyContent: "center",
    textAlign: "center",
}));

export const BoxTutorialdanPanduanIRK = styled(Box)(({ theme }) => ({
    marginLeft: "9%",
    marginRight: "9%",
    marginBottom: "5%",
    justifyContent: "center",
    textAlign: "center",
}));

export const ImageUnduhBukuPanduan = styled("img")(({ src }) => ({
    width: "80%",
    objectFit: "cover",
}));

// export const BoxImage1 = styled("img")(({ src }) => ({
//     position: "fixed",
//     width: "100%",
//     objectFit: "cover",
// }));

// export const BoxImage2 = styled("img")(({ src }) => ({
//     src: `url(${src})`,
//     position: "absolute",
//     width: "40%",
//     marginTop: "-80px",
// }));

export const BoxTitle2 = styled(Typography)(({ theme }) => ({
    lineHeight: 1.1,
    marginBottom: "20px",
    color: Colors.title,
    position: "relative",
    [theme.breakpoints.down(1440)]: {
        fontSize: "3.3vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "6.5vw",
    },
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    marginBottom: "20px",
    color: Colors.title,
    position: "relative",
    [theme.breakpoints.down(1440)]: {
        fontSize: "3.3vw",
    },
    [theme.breakpoints.down(1043)]: {
        fontSize: "6.5vw",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.8,
    marginBottom: "3em",
    maxWidth: "100%",
    position: "relative",
    [theme.breakpoints.down(1043)]: {
        fontSize: "2vw",
    },
}));

export const Dividers = () => {
    return (
        <div>
            <Divider
                color="#004581"
                sx={{
                    marginLeft: "47%",
                    marginRight: "47%",
                    height: 4,
                    width: "75px",
                    borderRadius: "10px",
                    marginBottom: "20px"
                }} />
        </div>
    )
}