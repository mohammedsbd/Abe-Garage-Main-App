// src/pages/404.jsx

import React from "react";

const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>
        Sorry, the page you're looking for doesn't exist.
      </p>
      <a href="/" style={styles.link}>
        ← Return to Home
      </a>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#ffcccc",
    color: "#8b0000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    textAlign: "center",
  },
  heading: {
    fontSize: "3.5rem",
    marginBottom: "1rem",
  },
  text: {
    fontSize: "1.25rem",
    marginBottom: "1.5rem",
  },
  link: {
    fontSize: "1rem",
    color: "#8b0000",
    textDecoration: "underline",
  },
};

export default NotFoundPage;
