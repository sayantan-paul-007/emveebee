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
        'tablet': '1201px',
        'laptop': '1600px',
        'mobile': '429px',
        },
      boxShadow: {
       
              'neo-border': '16px 16px 0px 0px #0f0f0f',
              'neo-border-mid': '8px 8px 0px 0px #0f0f0f',
              'neo-border-mobile': '6px 6px 0px 0px #0f0f0f',
              'neo-border-mobile-small': '4px 4px 0px 0px #0f0f0f',      
      }
    }
  }
}