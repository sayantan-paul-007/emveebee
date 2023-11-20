tailwind.config = {
  theme: {
    extend: {
      colors: {
        'primary': "#0f0f0f",
      "primary-gray": "#404040",
      'gray': "#7f7f7f",
      "light-gray": "#bfbfbf",
      'neutral': "#ffffff",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        'tablet': '1025px',
        // => @media (min-width: 640px) { ... }
  
        'desktop': '1441px',
        // => @media (min-width: 1024px) { ... }
  
        'mobile': '429px',
        // => @media (min-width: 1280px) { ... }
      },
      boxShadow: {
        'neo-border': '16px 16px 0px 0px #0f0f0f',
        'neo-border-mobile': '6px 6px 0px 0px #0f0f0f',
      }
    }
  }
}