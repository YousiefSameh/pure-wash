"use client";

import Image from "next/image";
import Logo from "@/public/logo.png";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ListIcon, XIcon } from "lucide-react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  Container,
} from "@mui/material";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { label: "العروض", href: "#offers" },
    { label: "الخدمات", href: "#services" },
    { label: "الأشتراكات", href: "#subscriptions" },
    { label: "التواصل", href: "#contact" },
  ];

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "transparent",
        transition: "all 0.3s ease-in-out",
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 2, md: 0 } }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Image
              src={Logo}
              alt="Pure Wash Logo"
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
            />
            <Typography
              variant="h4"
              component="h1"
              sx={{
                fontWeight: "bold",
                color: "black",
                fontSize: { xs: "1.25rem", md: "1.5rem" },
              }}
            >
              Pure Wash
            </Typography>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 3,
            }}
          >
            {menuItems.map((item) => (
              <Typography
                key={item.label}
                component="a"
                href={item.href}
                sx={{
                  fontSize: "1.125rem",
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
              >
                {item.label}
              </Typography>
            ))}
            <Button variant="secondary">احجز دلوقتي</Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            sx={{ display: { xs: "flex", md: "none" }, color: "black" }}
            onClick={() => setOpen(!open)}
            aria-label="Open menu"
          >
            {open ? <XIcon size={24} /> : <ListIcon size={24} />}
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: "66.666667%",
            p: 3,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <IconButton onClick={() => setOpen(false)} aria-label="Close menu">
            <XIcon size={24} />
          </IconButton>
        </Box>
        <List sx={{ textAlign: "right" }}>
          {menuItems.map((item) => (
            <ListItem
              key={item.label}
              sx={{ justifyContent: "flex-end", py: 1 }}
            >
              <Typography
                component="a"
                href={item.href}
                sx={{
                  fontSize: "1.125rem",
                  color: "text.primary",
                  textDecoration: "none",
                  cursor: "pointer",
                  transition: "color 0.2s ease-in-out",
                  "&:hover": {
                    color: "primary.main",
                  },
                }}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Typography>
            </ListItem>
          ))}
          <ListItem sx={{ justifyContent: "flex-end", mt: 2 }}>
            <Button variant="secondary" sx={{ width: "100%" }}>
              احجز دلوقتي
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
}
