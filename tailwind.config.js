module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    customForms: (theme) => ({
      default: {
        input: {
          borderRadius: theme("borderRadius.lg"),
          "&:focus": {
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.land-green"),
          },
          "&:hover": {
            boxShadow: theme("boxShadow.none"),
            borderColor: theme("colors.land-green"),
          },
        },
      },
    }),
    extend: {
      colors: {
        "sea-blue": "#1B9CFC",
        "land-green": "#82D881",
        "study-black": "#222F3E",
        "paper-white": "#FFFFFF",
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        body: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "2.5xl": "1.75rem",
        "4.5xl": "2.5rem",
      },
      inset: {
        "1/2": "50%",
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")],
};
