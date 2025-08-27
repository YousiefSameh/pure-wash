import Image from "next/image";
import { Box, Typography, Grid, Container } from "@mui/material";
import SpecialHeading from "../shared/SpecialHeading";
import CheckIcon from "@/public/check.svg";

const futurePlans = [
  { id: 1, title: "تشحيم" },
  { id: 2, title: "ترصيص وظبط زوايا" },
  { id: 3, title: "تغيير فيلم الحماية" },
];

export default function FuturePlansSection() {
  return (
    <Box component="section" sx={{ position: 'relative', zIndex: 20 }}>
      <Box sx={{ mb: 8 }}>
        <SpecialHeading title="خططنا المستقبلية" />
      </Box>
      <Container maxWidth="lg">
        <Box
          sx={{
            width: { xs: '100%', md: '90vw' },
            backgroundColor: 'secondary.main',
            borderRadius: { xs: 0, md: '16px' },
            p: { xs: 4, sm: 5, md: 8 },
            boxShadow: 3,
            position: { xs: 'static', md: 'absolute' },
            left: { md: '50%' },
            bottom: { md: '-30%' },
            transform: { md: 'translate(-50%, 100%)' },
            maxWidth: { md: '72rem' },
          }}
        >
          <Grid container spacing={{ xs: 2, sm: 3, md: 8 }}>
            {futurePlans.map((plan) => (
              <Grid item xs={12} sm={6} md={4} key={plan.id}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    gap: 2,
                  }}
                >
                  <Image src={CheckIcon} alt="Check icon" width={60} height={60} />
                  <Typography
                    sx={{
                      fontSize: { xs: '1.5rem', md: '1.875rem' },
                      fontWeight: 'bold',
                    }}
                  >
                    {plan.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
