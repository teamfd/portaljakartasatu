import { Divider, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";

export const BoxContainer = styled(Box)(({ theme }) => ({
    justifyContent: "center",
    position: "relative",
    paddingTop: "10%",
    zIndex: "1",
    textAlign: "center",
}));

export const BoxImage1 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: "-80px",
}));

export const BoxImage2 = styled("img")(({ src }) => ({
    src: `url(${src})`,
    position: "absolute",
    width: "40%",
    marginTop: "-80px",
}));

export const BoxTitle = styled(Typography)(({ theme }) => ({
    lineHeight: 1.5,
    zIndex: "10",
    fontSize: "2em",
    textAlign: "center",
    marginBottom: "15px",
    color: "#004581",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
    },
}));

export const BoxLittleTitle = styled(Typography)(({ theme }) => ({
    fontSize: "1em",
    textAlign: "center",
    marginBottom: "45px",
    color: "rgba(0, 0, 0, 0.6)",
    [theme.breakpoints.down("sm")]: {
        fontSize: "36px",
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