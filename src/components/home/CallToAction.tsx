import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import CTAImage from "@/public/cta-car.png";
import { Button } from "../ui/Button";

export default function CallToActionSection() {
  return (
    <Box
      component="section"
      sx={{
        p: { xs: 4, md: 8 },
        backgroundColor: '#FAF3E0',
      }}
    >
      <Container maxWidth="lg">
        <Grid 
          container 
          spacing={{ xs: 4, md: 10 }}
          alignItems="center"
        >
          <Grid item xs={12} lg={7}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Image
                src={CTAImage}
                alt="CTA Car Image"
                width={400}
                style={{
                  width: '100%',
                  maxWidth: '800px',
                  height: 'auto',
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} lg={5}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                textAlign: { xs: 'center', lg: 'right' },
              }}
              dir="rtl"
            >
              <Typography
                sx={{
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  fontWeight: 'bold',
                  lineHeight: 2,
                }}
              >
                الحق خصوماتنا!
                <br />
                خصومات لغاية{' '}
                <Box
                  component="span"
                  sx={{
                    fontSize: { xs: '1.875rem', md: '2.5rem' },
                    color: 'red',
                  }}
                >
                  30%
                </Box>{' '}
                على باقات
                <br />
                الغسيل الكامل
              </Typography>
              <Box>
                <Button 
                  size="lg" 
                  sx={{ 
                    width: { xs: '100%', md: 'auto' },
                    minWidth: '200px',
                  }}
                >
                  اشترك الان
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
