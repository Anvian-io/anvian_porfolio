"use client";
import React from 'react';

const SemanticWrapper = ({ 
  children, 
  as = 'div', 
  className = '', 
  id,
  role,
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledby,
  'aria-describedby': ariaDescribedby,
  ...props 
}) => {
  const Component = as;
  
  return (
    <Component
      className={className}
      id={id}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      aria-describedby={ariaDescribedby}
      {...props}
    >
      {children}
    </Component>
  );
};

// Semantic section components
export const Main = ({ children, ...props }) => (
  <SemanticWrapper as="main" {...props}>
    {children}
  </SemanticWrapper>
);

export const Section = ({ children, ...props }) => (
  <SemanticWrapper as="section" {...props}>
    {children}
  </SemanticWrapper>
);

export const Article = ({ children, ...props }) => (
  <SemanticWrapper as="article" {...props}>
    {children}
  </SemanticWrapper>
);

export const Aside = ({ children, ...props }) => (
  <SemanticWrapper as="aside" {...props}>
    {children}
  </SemanticWrapper>
);

export const Header = ({ children, ...props }) => (
  <SemanticWrapper as="header" {...props}>
    {children}
  </SemanticWrapper>
);

export const Footer = ({ children, ...props }) => (
  <SemanticWrapper as="footer" {...props}>
    {children}
  </SemanticWrapper>
);

export const Nav = ({ children, ...props }) => (
  <SemanticWrapper as="nav" {...props}>
    {children}
  </SemanticWrapper>
);

// Heading components with proper hierarchy
export const H1 = ({ children, ...props }) => (
  <SemanticWrapper as="h1" {...props}>
    {children}
  </SemanticWrapper>
);

export const H2 = ({ children, ...props }) => (
  <SemanticWrapper as="h2" {...props}>
    {children}
  </SemanticWrapper>
);

export const H3 = ({ children, ...props }) => (
  <SemanticWrapper as="h3" {...props}>
    {children}
  </SemanticWrapper>
);

export const H4 = ({ children, ...props }) => (
  <SemanticWrapper as="h4" {...props}>
    {children}
  </SemanticWrapper>
);

export const H5 = ({ children, ...props }) => (
  <SemanticWrapper as="h5" {...props}>
    {children}
  </SemanticWrapper>
);

export const H6 = ({ children, ...props }) => (
  <SemanticWrapper as="h6" {...props}>
    {children}
  </SemanticWrapper>
);

// List components
export const Ul = ({ children, ...props }) => (
  <SemanticWrapper as="ul" {...props}>
    {children}
  </SemanticWrapper>
);

export const Ol = ({ children, ...props }) => (
  <SemanticWrapper as="ol" {...props}>
    {children}
  </SemanticWrapper>
);

export const Li = ({ children, ...props }) => (
  <SemanticWrapper as="li" {...props}>
    {children}
  </SemanticWrapper>
);

// Other semantic elements
export const P = ({ children, ...props }) => (
  <SemanticWrapper as="p" {...props}>
    {children}
  </SemanticWrapper>
);

export const Span = ({ children, ...props }) => (
  <SemanticWrapper as="span" {...props}>
    {children}
  </SemanticWrapper>
);

export const Strong = ({ children, ...props }) => (
  <SemanticWrapper as="strong" {...props}>
    {children}
  </SemanticWrapper>
);

export const Em = ({ children, ...props }) => (
  <SemanticWrapper as="em" {...props}>
    {children}
  </SemanticWrapper>
);

export const Blockquote = ({ children, ...props }) => (
  <SemanticWrapper as="blockquote" {...props}>
    {children}
  </SemanticWrapper>
);

export const Code = ({ children, ...props }) => (
  <SemanticWrapper as="code" {...props}>
    {children}
  </SemanticWrapper>
);

export const Pre = ({ children, ...props }) => (
  <SemanticWrapper as="pre" {...props}>
    {children}
  </SemanticWrapper>
);

export default SemanticWrapper; 