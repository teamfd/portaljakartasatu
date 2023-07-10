//import { useTheme } from "@mui/material/styles";
import { Box, List, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  DashboardContainer,
  DashboardContent,
  DashboardTitle,
  menu,
  ListItemStyled,
  DashboarImage,
  listTextStyle,
  listStyle,
  listContainer,
} from "../../../../styles/dashboard";


function Dashboard() {
  //const theme = useTheme();
  //const matches = useMediaQuery(theme.breakpoints.down("md"));

  const [selectedItem, setSelectedItem] = useState(menu[0]);

  // untuk memindahkan fokus dan merubah gambar
  const handleFocus = (item) => {
    setSelectedItem(item);
  };

  // useEffect(() => {
  //   setSelectedItem(menu[0]);
  // }, []);


  return (
    <DashboardContainer>
      <DashboardContent>

        <DashboardTitle variant="h6">Ekplorasi Data Spasial Jakarta dengan tampilan visualisasi dashboard</DashboardTitle>

        <Box
          sx={listContainer}>
          <Box
            sx={{
              marginRight: "90px",
              "@media (max-width: 1043px)": {
                marginRight: "1vw"
              },
            }}>
            <List
              sx={listStyle}>
              {menu.map((item, index) => (
                <ListItemStyled
                  button
                  key={item.id}
                  component={Link}
                  to={item.to}
                  onClick={() => setSelectedItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Tab") {
                      setSelectedItem(item);
                    }
                  }}
                  onFocus={() => handleFocus(item)}
                  sx={{
                    paddingLeft: "30px",

                  }}
                  // autoFocus={index === 0}
                >
                  <ListItemText>
                    <Typography sx={listTextStyle}>
                      {item.text}
                    </Typography>
                  </ListItemText>
                </ListItemStyled>
              ))}
            </List>
          </Box>

          <Box sx={DashboarImage}>
            {selectedItem && (
              <img
                key={selectedItem.id} // Menambahkan properti key
                src={selectedItem.imgSrc}
                alt={selectedItem.text}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0, // Mengubah opacity awal menjadi 1
                  transition: "opacity 0.5s ease-in-out",
                }}
                onLoad={(e) => {
                  e.target.style.opacity = 1;
                }}
              />
            )}
          </Box>
        </Box>

      </DashboardContent>
    </DashboardContainer>
  );
}

export default Dashboard;




/* Back up


 <DashboardContainer>
      <DashboardContent>

        <DashboardTitle variant="h6">Ekplorasi Data Spasial Jakarta dengan tampilan visualisasi dashboard</DashboardTitle>

        <Box
          sx={{
            padding:"50px",
            paddingTop:"0px",
          }}>
          <List
            sx={{
              overflow: "auto",
              height: "400px",
              direction: "rtl",
              "::-webkit-scrollbar": {
                width: "10px",
              },
              "::-webkit-scrollbar-track": {
                background: "white",
              },
              "::-webkit-scrollbar-thumb": {
                backgroundColor: "#1455A3",
                borderRadius: "5px",
              },
              "::-moz-scrollbar": {
                width: "10px",
              },
              "::-moz-scrollbar-track": {
                background: "white",
              },
              "::-moz-scrollbar-thumb": {
                backgroundColor: "#1455A3",
                borderRadius: "5px",
              },

              "@media (max-width: 1440px)": {
                height: "28vw",
              },
            }}
            component="nav">
            {menu.map((item, index) => (
              <ListItemStyled
                button key={item.id}
                component={Link}
                to={item.to}
                onClick={() => setSelectedItem(item)}
                sx={{
                  paddingLeft:"30px"
                }}
              >
                <ListItemText>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      "@media (max-width: 1440px)": {
                        fontSize:"1.5vw"
                      },
                    }}>{item.text}</Typography>
                </ListItemText>
              </ListItemStyled>
            ))}
          </List>
        </Box>

      </DashboardContent>

      <Box
        sx={DashboarImage}>
        {selectedItem && (
          <img
            src={selectedItem.imgSrc}
            alt={selectedItem.text}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </Box>

    </DashboardContainer>



*/