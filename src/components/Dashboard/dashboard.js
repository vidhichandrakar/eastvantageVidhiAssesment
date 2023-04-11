import React from "react";
import { Container } from "react-bootstrap";
import HeaderComponent from "./headerComponent";
import CardDesign from "./cardDesign";
import { Box } from "@mui/material"
const DashboardComponent = () => {
    return (
        <Container>

            <HeaderComponent />
            <Box className="body-design">
                <CardDesign />
            </Box>

        </Container>
    );
}

export default DashboardComponent;