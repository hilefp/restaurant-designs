export const PAPARICCOSS_CONFIG = {
  id: "papariccos",
  name: "Papa Ricco's - Italian Pizzeria",
  brandName: "PapaRicco's",
  title: "A Tradition of Flavor Since 1975",
  description: "For nearly five decades, Papa Ricco's has been serving Miami the true taste of Italy. More than just a pizzeria, we are a family-run destination where passion, quality, and hospitality come together to create unforgettable dining experiences.",
  colors: {
    primary: "red-700",
    secondary: "red-600",
    accent: "yellow-400",
    text: "white",
    background: "black"
  },
  //videoSrc: "/src/assets/videos/2-template_2.mp4",
  imageSrc: "https://pub-fe385b1228f447ba8f3918d974373c55.r2.dev/template_1/heade_image.jpg",
  navItems: [
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ],
  ctaText: "View Our Menu",
  ctaLink: "/menu",
  reservationText: "Order Online",
  reservationLink: "https://www.getsauce.com/order/papa-riccos-restaurant-and-pizzeria/menu",
  hoursData: [
    { day: "Sun", hours: "1pm - 9:30pm" },
    { day: "Mon", hours: "Closed" },
    { day: "Tues", hours: "3pm - 9:30pm" },
    { day: "Wed", hours: "3pm - 9:30pm" },
    { day: "Thurs", hours: "3pm - 9:30pm" },
    { day: "Fri", hours: "12pm - 10:00pm" },
    { day: "Sat", hours: "12pm - 10:00pm" }
  ],
  categories: [
    {
      id: 'popular',
      name: 'POPULAR ITEMS',
      items: [
        {
          name: 'Large 16" Pizza',
          description: 'Top Pick',
          price: '$23.00',
          isTopPick: true
        },
        {
          name: 'Chicken Marsala',
          description: 'With mushroom marsala wine sauce',
          price: '$23.00',
          isPopular: true
        },
        {
          name: 'Chicken Parmigiana',
          description: 'Battered chicken breast, mozzarella cheese, marinara sauce',
          price: '$21.50',
          isPopular: true
        },
        {
          name: 'Carbonara',
          description: 'Onion, ham, bacon in cream sauce',
          price: '$20.50',
          isPopular: true
        },
        {
          name: 'Eggplant Parmigiana',
          description: 'Eggplant battered with mozzarella cheese and our zesty marinara sauce',
          price: '$20.50'
        },
        {
          name: 'Stuffed Shells',
          description: 'Pasta shells stuffed w/ ricotta cheese covered with meat sauce and mozzarella cheese',
          price: '$20.50'
        }
      ]
    },
    {
      id: 'pizza',
      name: 'GOURMET PIZZA',
      items: [
        {
          name: "Ricco's Belly Buster",
          description: 'Our delicious pizza sauce, pepperoni, sausage, meatballs, fresh mushrooms and green peppers smothered with extra thick layer of mozzarella cheese topped with fresh onions and black olives. Anchovies upon request.',
          price: '$18.50'
        },
        {
          name: "Ricco's Vegetarian",
          description: 'Mushrooms, roasted peppers, onions, fresh tomatoes, black olives and tomato sauce with cheese',
          price: '$18.50',
          isVegetarian: true
        },
        {
          name: "Ricco's Classic",
          description: 'Pepperoni, sausage, fresh mushrooms, green peppers, onions, and our zesty pizza sauce',
          price: '$17.50'
        },
        {
          name: 'Chicken Alfredo Pizza',
          description: 'Creamy alfredo sauce with grilled chicken',
          price: '$17.50'
        },
        {
          name: 'Chicken BBQ Pizza',
          description: 'BBQ sauce with grilled chicken',
          price: '$17.00'
        },
        {
          name: "Ricco's Hawaiian",
          description: 'Mouth watering combination of ham, mozzarella cheese, pineapple, and our homemade tomato sauce',
          price: '$16.50'
        },
        {
          name: "Ricco's Florentine",
          description: 'Healthy spinach, fresh tomatoes, ricotta, romano, mozzarella and Monterey jack cheese',
          price: '$16.50',
          isVegetarian: true
        },
        {
          name: "Ricco's Three Cheese",
          description: 'Mozzarella, Monterey jack, cheddar cheese and our zesty pizza sauce',
          price: '$15.50',
          isVegetarian: true
        },
        {
          name: 'Margarita Pizza',
          description: 'Basil, tomato',
          price: '$15.50',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'pasta',
      name: 'PASTA & ENTRÉES',
      items: [
        {
          name: 'Frutti Di Mare',
          description: 'Sautéed shrimp, clams, mussels, fish in a light refresh tomato sauce (Upon Availability)',
          price: '$30.50'
        },
        {
          name: 'Fettuccine Alfredo with Shrimp',
          description: 'Creamy alfredo sauce with shrimp',
          price: '$26.50'
        },
        {
          name: 'Shrimp Pomodoro',
          description: 'Large shrimp in fresh tomato sauce',
          price: '$26.00'
        },
        {
          name: 'Shrimp Scampi',
          description: 'Large shrimps simmered in garlic and wine sauce served over linguine',
          price: '$25.50'
        },
        {
          name: 'Fettuccine Alfredo with Chicken',
          description: 'Creamy alfredo sauce with chicken',
          price: '$23.50'
        },
        {
          name: 'Meat Lasagna',
          description: 'Baked layers of egg noodles, prime ground beef, ricotta, mozzarella, romano cheese',
          price: '$20.50'
        },
        {
          name: 'Fettuccine Alfredo',
          description: 'Classic creamy alfredo sauce',
          price: '$20.50',
          isVegetarian: true
        },
        {
          name: 'Manicotti Florentine',
          description: 'Spinach and ricotta cheese pasta baked in alfredo sauce',
          price: '$20.50',
          isVegetarian: true
        }
      ]
    },
    {
      id: 'wine',
      name: 'WINE LIST',
      items: [
        {
          name: 'Italy, Chianti',
          description: '750ML Bottled Wine',
          price: '$38.00'
        },
        {
          name: 'Pinot Grigio',
          description: '750ML Bottled Wine',
          price: '$34.00'
        },
        {
          name: 'Chardonnay',
          description: '750ML Bottled Wine',
          price: '$34.00'
        },
        {
          name: 'White Zinfandel',
          description: '750 ML Bottled Wine',
          price: '$34.00'
        },
        {
          name: 'Cabernet',
          description: '750ML Bottled Wine',
          price: '$34.00'
        },
        {
          name: 'Merlot',
          description: '750ML Bottled Wine',
          price: '$34.00'
        }
      ]
    }
  ]
};