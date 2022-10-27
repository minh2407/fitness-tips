import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../assets/images/Logo-1.png";

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack
      gap="40px"
      sx={{ alignItems: "center" }}
      flexWrap="wrap"
      px="40px"
      pt="24px"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/2721/2721264.png"
        width={100}
        height={100}
      />
    </Stack>
    <Typography
      variant="h5"
      sx={{ fontSize: { lg: "28px", xs: "20px" } }}
      mt="10px"
      textAlign="center"
      pb="40px"
    >
      Made with Minh Front-End
    </Typography>
  </Box>
);

export default Footer;
