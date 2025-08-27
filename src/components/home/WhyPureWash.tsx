import Image from "next/image";
import { Box, Container, Typography, Grid } from "@mui/material";
import ArrowDown from "@/public/heading-special-arrow-down.svg";
import Logo from "@/public/logo.png";
import CustomerSuccess from "@/public/customer-success.png";
import Time from "@/public/time.png";
import Reward from "@/public/reward.png";

const ReasonsData = [
  {
    id: 1,
    title: "خدمات أحترافية",
    description:
      "نستخدم أحدث التقنيات وأفضل المواد للحفاظ على عربيتك بأفضل حال",
    icon: Reward,
  },
  {
    id: 2,
    title: "سرعة وكفاءة",
    description: "بنقدم خدماتنا في وقت قياسي بدون تأثير على الجودة",
    icon: Time,
  },
  {
    id: 3,
    title: "راحة العملاء أولوياتنا",
    description: "بنوفر خيارات حجز سهله ومريحة علشان تناسب جدولك",
    icon: CustomerSuccess,
  },
];

export default function WhyPureWashSection() {
  return (
    <Box component="section" sx={{ py: 12 }} dir="rtl">
      <Box
        sx={{
          textAlign: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          my: 6,
          mb: 8,
          gap: 3,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          ليه Pure Wash
          <Image
            src={Logo}
            alt="Pure Wash Logo"
            width={60}
            height={60}
            style={{ borderRadius: '50%' }}
          />
          ؟
        </Typography>
        <Image src={ArrowDown} alt="Arrow Down" width={20} height={20} />
      </Box>

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {ReasonsData.map((reason) => (
            <Grid item xs={12} sm={6} md={4} key={reason.id}>
              <Box
                sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'flex-start',
                }}
              >
                <Image
                  src={reason.icon}
                  height={60}
                  width={60}
                  alt={reason.title}
                  style={{ flexShrink: 0 }}
                />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 1,
                  }}
                >
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 'bold',
                      fontSize: { xs: '1.5rem', md: '1.875rem' },
                    }}
                  >
                    {reason.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {reason.description}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
