"use client";

import * as React from "react";
import { Button as MuiButton, ButtonProps as MuiButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";

export type ButtonProps = Omit<MuiButtonProps, 'variant' | 'size'> & {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
};

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== 'customVariant' && prop !== 'customSize',
})<{ customVariant?: string; customSize?: string }>(({ theme, customVariant, customSize }) => ({
  borderRadius: '9999px',
  textTransform: 'none',
  fontWeight: 700,
  transition: 'all 0.2s ease-in-out',
  
  // Size styles
  ...(customSize === 'sm' && {
    height: '36px',
    padding: '0 12px',
    fontSize: '0.875rem',
  }),
  ...(customSize === 'default' && {
    height: '40px',
    padding: '0 16px',
    fontSize: '0.875rem',
  }),
  ...(customSize === 'lg' && {
    height: '44px',
    padding: '0 32px',
    fontSize: '1rem',
  }),
  ...(customSize === 'icon' && {
    height: '40px',
    width: '40px',
    minWidth: '40px',
    padding: 0,
  }),

  // Variant styles
  ...(customVariant === 'default' && {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
  }),
  ...(customVariant === 'secondary' && {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  }),
  ...(customVariant === 'outline' && {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    border: `1px solid ${theme.palette.divider}`,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(customVariant === 'ghost' && {
    backgroundColor: 'transparent',
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  }),
  ...(customVariant === 'link' && {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    '&:hover': {
      textDecoration: 'underline',
    },
  }),
  ...(customVariant === 'destructive' && {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.error.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.error.dark,
    },
  }),
}));

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "default", size = "default", children, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        customVariant={variant}
        customSize={size}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

Button.displayName = "Button";
