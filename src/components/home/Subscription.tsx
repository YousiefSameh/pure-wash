import { Container, Grid, Box } from "@mui/material";
import SpecialHeading from "../shared/SpecialHeading";
import Card from "../shared/Card";

const ServicesData = [
  {
    id: 1,
    title: "VIB اشتراك",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 2,
    title: "اشتراك سنوي",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 3,
    title: "اشتراك شهري",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
];

export default function SubscriptionSection() {
  return (
    <Box component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <SpecialHeading title="الاشتراكات" />
        <Grid container spacing={6}>
          {ServicesData.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <Card {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
