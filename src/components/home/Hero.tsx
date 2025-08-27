import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import HeroCar from "@/public/hero-car.png";
import { Button } from "../ui/Button";

export default function HeroSection() {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        overflowX: 'hidden',
        height: 'calc(100vh - 160px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, md: 0 }}
          alignItems="center"
          justifyContent="space-between"
          sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}
        >
          <Grid item xs={12} md={5}>
            <Box
              sx={{
                textAlign: { xs: 'center', md: 'left' },
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
              }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { xs: '1.875rem', md: '2.5rem' },
                }}
              >
                نظافة عربيتك تبدأ من هنا
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1.125rem', md: '1.25rem' },
                  color: 'text.secondary',
                }}
              >
                خدمات غسيل احترافية بأفضل الأسعار وأسرع وقت
              </Typography>
              <Box>
                <Button size="lg" sx={{ width: '150px' }}>
                  ابدأ الحجز
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-end' },
                width: '100%',
              }}
            >
              <Image
                src={HeroCar}
                alt="Hero Car"
                loading="eager"
                style={{
                  width: '100%',
                  maxWidth: '700px',
                  height: 'auto',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}