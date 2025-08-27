import Image from "next/image";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@/public/phone.svg";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        height: { xs: "200px", md: "400px" },
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "black",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 3,
          pb: 1,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            color: "primary.main",
            fontSize: { xs: "1.875rem", md: "2.25rem" },
          }}
        >
          أتصل بنا
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: "bold",
              color: "primary.main",
              fontSize: { xs: "1.875rem", md: "2.25rem" },
            }}
          >
            01022334455
          </Typography>
          <Image src={PhoneIcon} alt="" width={50} height={50} />
        </Box>
      </Box>
    </Box>
  );
}
