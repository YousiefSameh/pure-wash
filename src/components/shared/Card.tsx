import Image, { StaticImageData } from "next/image";
import { Card as MuiCard, CardContent, Typography, Box } from "@mui/material";
import { Button } from "../ui/Button";

export default function Card(props: {
  icon?: StaticImageData;
  title: string;
  description: string;
  price: number;
}) {
  return (
    <MuiCard
      sx={{
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        borderRadius: '16px',
        height: '100%',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          p: 3,
          textAlign: 'center',
          height: '100%',
        }}
      >
        {props.icon && (
          <Box sx={{ mb: 1 }}>
            <Image src={props.icon} alt={props.title} width={80} height={80} />
          </Box>
        )}
        <Typography variant="h4" component="h3" fontWeight="bold">
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.description}
        </Typography>
        <Typography variant="h4" component="span" fontWeight="bold">
          {props.price} جنيه
        </Typography>
        <Button size="lg">اطلب الأن</Button>
      </CardContent>
    </MuiCard>
  );
}
