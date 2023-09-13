// Common Variables
const commonVariables = {
  // Link and Text Colors
  "--link-color": "#007bff",
  "--link-hover-color": "#0056b3",

  // Notification Colors
  "--error-color": "#ff0000",
  "--success-color": "#28a745",
  "--warning-color": "#ffc107",
  "--info-color": "#17a2b8",

  // Border Colors
  "--border-color": "#e0e0e0",
};

// Light Theme Variables
const lightTheme = {
  // Primary Colors
  "--primary-bg-color": "#ffffff",
  "--primary-text-color": "#333333",

  // Secondary Colors
  "--secondary-bg-color": "#f1f1f1",
  "--secondary-text-color": "#666666",

  // Button Colors
  "--button-bg": "#007bff",
  "--button-text": "#ffffff",
  "--button-text-dark": "#444444",
  "--button-bg-hover": "#0056b3",
  "--button-text-hover": "#ffffff",
  "--button-bg-active": "#004999",
  "--button-text-active": "#ffffff",

  // Card Colors
  "--card-bg": "rgba(240,240,240, 0.5)",
  "--card-bg-lighter": "rgba(250, 250, 250, 0.5)",
  "--card-bg-darker": "rgba(120, 120, 120, 0.5)",
  "--card-text": "#333333",

  // Navbar Colors
  "--navbar-bg": "rgba(123,16,189,0.5)",
  "--navbar-text-color": "#ffffff",

  // Input Colors
  "--input-bg": "#ffffff",
  "--input-border": "#cccccc",
  "--input-placeholder": "#aaaaaa",

  // Box Shadow Colors
  "--box-shadow-color": "rgba(0, 0, 0, 0.1)",
  "--box-shadow-color-hover": "rgba(0, 0, 0, 0.2)",

  // Quote Colors
  "--quote-bg": "rgba(80, 80, 80, 0.05)",

  // Background Gradient for Light Theme
  "--background-gradient": "linear-gradient(90deg, rgb(230, 230, 230) 0%, rgb(240, 240, 240) 100%)",
};

// Dark Theme Variables
const darkTheme = {
  // Primary Colors
  "--primary-bg-color": "#121212",
  "--primary-text-color": "#ffffff",

  // Secondary Colors
  "--secondary-bg-color": "#1f1f1f",
  "--secondary-text-color": "#bbbbbb",

  // Button Colors
  "--button-bg": "#6200ea",
  "--button-text": "#ffffff",
  "--button-text-dark": "#bbbbbb",
  "--button-bg-hover": "#5300d3",
  "--button-text-hover": "#ffffff",
  "--button-bg-active": "#4a00c2",
  "--button-text-active": "#ffffff",

  // Card Colors
  "--card-bg": "rgba(30,30,30,0.5)",
  "--card-bg-lighter": "rgba(30,30,30,0.7)",
  "--card-bg-darker": "rgba(30,30,30,0.3)",
  "--card-text": "#ffffff",

  // Navbar Colors
  "--navbar-bg": "rgba(123,16,189,0.5)",
  "--navbar-text-color": "#ffffff",

  // Input Colors
  "--input-bg": "#333333",
  "--input-border": "#555555",
  "--input-placeholder": "#777777",

  // Box Shadow Colors
  "--box-shadow-color": "rgba(255, 255, 255, 0.1)",
  "--box-shadow-color-hover": "rgba(255, 255, 255, 0.2)",
  "--tw-shadow": "0px 8px 40px -10px rgba(9, 14, 52, 0.1)",

  // Quote Colors
  "--quote-bg": "rgba(255, 255, 255, 0.05)",

  // Background Gradient for Dark Theme
  "--background-gradient": "linear-gradient(90deg, rgb(39, 39, 39) 0%, rgb(30, 30, 30) 100%)",

};

module.exports = {
  commonVariables,
  lightTheme,
  darkTheme,
};