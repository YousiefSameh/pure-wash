import { Container, Grid, Box } from "@mui/material";
import SpecialHeading from "../shared/SpecialHeading";
import CarWash from "@/public/car-wash.png";
import CarService from "@/public/car-service.png";
import Vehical from "@/public/vehical.png";
import Card from "../shared/Card";

const ServicesData = [
  {
    id: 1,
    icon: CarWash,
    title: "تنظيف بالبخار",
    description:
      "تنظيف فعال وأمن للمحرك بأستخدام البخار لإزالة الشحوم والأوساخ للمعان أمن",
    price: 500,
  },
  {
    id: 2,
    icon: CarService,
    title: "تلميع الشمع",
    description:
      "استعادة اللمعان وحماية الطلاء بأستخدام تلميع الشمع المتخصص والحفاظ على لونها",
    price: 500,
  },
  {
    id: 3,
    icon: Vehical,
    title: "غسيل خارجي وداخلي",
    description:
      "غسيل شامل للعربيه من الخارج والداخل بأستخدام مواد تنظيف عالية الجودة",
    price: 500,
  },
];

export default function ServiceSection() {
  return (
    <Box component="section" sx={{ py: 12 }}>
      <Container maxWidth="lg">
        <SpecialHeading title="أتعرف على خدماتنا" />
        <Grid container spacing={6}>
          {ServicesData.map((service) => (
            <Grid item xs={12} md={6} lg={4} key={service.id}>
              <Card {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}