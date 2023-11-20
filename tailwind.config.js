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
    }
  }
}