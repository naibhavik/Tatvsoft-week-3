import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

function Footer() {
    return(
        <div>
            <React.Fragment>
                <CssBaseline/>
                <Box
                sx={{
                    bgcolor: "#E6E6FA",
                    height: "30vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
                >
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tV6t14yHTNfrJ49kuDtorFtJ6XYSl7cclWvmiRvp&s"
                    alt="logo"
                    style={{ height: "41px"}}
                    />
                    <p style={{ marginTop: "10px", font: "10px", color: "gray"}}>
                        &copy; 2015 Tatvasoft.com. All Rights Reserved
                    </p>
                </Box>
            </React.Fragment>
        </div>
    );
}
export default Footer;