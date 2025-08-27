import Image from "next/image";
import { Box, Typography } from "@mui/material";
import ArrowDown from "@/public/heading-special-arrow-down.svg";

export default function SpecialHeading({ title }: { title: string }) {
  return (
    <Box
      sx={{
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        my: 6,
        gap: 3,
      }}
    >
      <Typography variant="h1" component="h1" fontWeight="bold">
        {title}
      </Typography>
      <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} />
    </Box>
  )
}