module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'grow-width': 'growWidth 1s ease-in-out infinite',
      },
      keyframes: {
        growWidth: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      backgroundImage: {
        "back-pattern": "url('./src/assets/back-pattern.jpg')",
        "back-eye": "url('./src/assets/back-eye.png')",
        tick: "url('./src/assets/tick.png')",
        universe: "url('./src/assets/universe.jpg')",
        "down-arrow": "url('./src/assets/down-arrow.png')",
        "white-tick": "url('./src/assets/white-tick.png')",
        "add": "url('./src/assets/Add.png')",
        "edit": "url('./src/assets/Edit.png')",
        "delete": "url('./src/assets/delete.png')",
        "green-dot": "url('./src/assets/green-dot.png')",
        "nova-icon": "url('./src/assets/Nova icon.png')",
        "nova-icon-wob": "url('./src/assets/nova-icon-wob.png')",
        "add-browser": "url('./src/assets/Add-browser.png')",
        "black-texture": "url('./src/assets/black-texture.jpg')",
        "black-texture-2": "url('./src/assets/black-texture-2.jpg')",
        "graphs-piechart": "url('./src/assets/graphs-piechart.png')",
        "arrow-right": "url('./src/assets/arrow-right.png')",
        "right": "url('./src/assets/right.png')",
        "tailwind": "url('./src/assets/tailwind-logo.png')",
        "react": "url('./src/assets/react-logo.png')",
        "JS": "url('./src/assets/javascript-logo.png')",
        "express": "url('./src/assets/express-logo.png')",
        "html": "url('./src/assets/html-logo.png')",
        "css": "url('./src/assets/css-logo.png')",
        "sequelize": "url('./src/assets/sequelize-logo.png')",
        "postgres": "url('./src/assets/postgres-logo.png')",
        "node": "url('./src/assets/nodejs-logo.png')",
        "odoo": "url('./src/assets/odoo-logo.png')",
        "axiom": "url('./src/assets/axiom-pattern.png')",
        "diamond": "url('./src/assets/diagmonds-light.png')",
        "space": "url('./src/assets/space-back.png')",
        "inflicted": "url('./src/assets/inflicted.png')",
        "cardboard": "url('./src/assets/cardboard-flat.png')",
        "batthern": "url('./src/assets/batthern.png')",
        "graphcoders": "url('./src/assets/graphcoders-lil-fiber.png')",
        "db-logo": "url('./src/assets/db-logo.png')",
        "apache": "url('./src/assets/apache-logo.png')",
        "yarn": "url('./src/assets/yarn-logo.png')",
        "mysql": "url('./src/assets/mysql-logo.png')",
        "mongodb": "url('./src/assets/mongodb-logo.png')",
        "barchart": "url('./src/assets/barchart.webp')",
        "piechart": "url('./src/assets/piechart.png')",
        "linechart": "url('./src/assets/linechart.png')",
        "area-chart": "url('./src/assets/areachart.png')",
        "dotted-pattern": "url('./src/assets/dotted pattern.png')",
        "new-texture": "url('./src/assets/new-texture.png')",
        "gray-texture": "url('./src/assets/gray-texture.png')",

      },
      colors: {
        "white-60": "rgba(255, 255, 255, 0.6)",
        "white-80": "rgba(255, 255, 255, 0.8)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Use Inter as the default sans-serif font
        inter: ["Inter", "sans-serif"], // Optionally create a dedicated inter class
      },
      screens: {
        "3xl": "1300px",
      },
    },
  },
  plugins: [],
};
