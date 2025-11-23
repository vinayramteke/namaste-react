//step 0: Import whatever u will going to use
import React from "react";
import ReactDOM from "react-dom/client";
///step 1: Build Header of my Food App
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo-img"
          src="https://s.tmimgcdn.com/scr/1200x627/346100/food-creative-logo-template_346101-original.jpg"
        ></img>
      </div>
      <div className="nav-container">
        <ul className="nav-items">
          <li className="nav-link">Home</li>
          <li className="nav-link">About Us</li>
          <li className="nav-link">Contact Us</li>
          <li className="nav-btn">Cart</li>
        </ul>
      </div>
    </div>
  );
};

//sample data to learn how dynamically ui work
const restroList = [
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1053625",
      name: "Junction Food Corner",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/14/d6dadd1a-54c5-48f8-a42d-fea3d72da53e_1053625.jpg",
      locality: "Hamirpur Central",
      areaName: "Hamirpur Central",
      costForTwo: "₹200 for two",
      cuisines: [
        "Chinese",
        "Beverages",
        "Snacks",
        "Fast Food",
        "Burgers",
        "Cafe",
      ],
      avgRating: 4.2,
      parentId: "112144",
      avgRatingString: "4.2",
      totalRatingsString: "58",
      sla: {
        deliveryTime: 21,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 22:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/junction-food-corner-hamirpur-central-rest1053625",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1047991",
      name: "Vidyarthi Canteen",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/19/eb8c99fe-44e2-44a3-bc8b-54cd8ba701a9_1047991.jpg",
      locality: "Near Degree College",
      areaName: "Hamirpur Central",
      costForTwo: "₹300 for two",
      cuisines: ["Chinese", "Biryani", "Snacks", "North Indian"],
      avgRating: 3.7,
      parentId: "609654",
      avgRatingString: "3.7",
      totalRatingsString: "155",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹70",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/vidyarthi-canteen-near-degree-college-hamirpur-central-rest1047991",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "786988",
      name: "Lucknow Foods",
      cloudinaryImageId: "094f1e277180a117cf93d131397d1358",
      locality: "Degree College Anu Tehsil",
      areaName: "Anu",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Burgers", "Biryani", "Snacks"],
      avgRating: 3.9,
      parentId: "126488",
      avgRatingString: "3.9",
      totalRatingsString: "260",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 1.6,
        serviceability: "SERVICEABLE",
        slaString: "30-40 mins",
        lastMileTravelString: "1.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/lucknow-foods-degree-college-tehsil-anu-rest786988",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1136693",
      name: "Aanch Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/2/be78b854-90d5-423b-a811-40910dc07358_1136693.JPG",
      locality: "NEAR SHIV MANDIR ANU",
      areaName: "Hamirpur Central",
      costForTwo: "₹450 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani",
        "Snacks",
        "Tandoor",
        "Asian",
        "Cafe",
      ],
      avgRating: 4.6,
      parentId: "654533",
      avgRatingString: "4.6",
      totalRatingsString: "187",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "android/static-assets/icons/big_rx.png",
            description: "bolt!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "bolt!",
                  imageId: "android/static-assets/icons/big_rx.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹75",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/aanch-restaurant-near-shiv-mandir-anu-hamirpur-central-rest1136693",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1211522",
      name: "RB CAFE",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/4/51e4da70-2260-4aaa-8f92-ebf036da086d_1211522 (1).jpg",
      locality: "Hamirpur Central",
      areaName: "Hamirpur Central",
      costForTwo: "₹250 for two",
      cuisines: ["Pizzas", "Burgers", "Rolls & Wraps", "Beverages"],
      veg: true,
      parentId: "167926",
      avgRatingString: "NEW",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 20:15:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "65% OFF",
        subHeader: "UPTO ₹130",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/rb-cafe-hamirpur-central-rest1211522",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "786889",
      name: "M/S Kathi Junction",
      cloudinaryImageId: "04fb67f176cf4ff4614a3319c2a00bec",
      locality: "Obc Bank",
      areaName: "Hamirpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "rolls",
        "Chinese",
        "Snacks",
        "Burgers",
        "Thalis",
        "North Indian",
      ],
      avgRating: 4.4,
      parentId: "467918",
      avgRatingString: "4.4",
      totalRatingsString: "729",
      sla: {
        deliveryTime: 18,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/m-s-kathi-junction-obc-bank-hamirpur-rest786889",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "787188",
      name: "Hangout Restaurant & Gaming Club",
      cloudinaryImageId: "6fbc79e6eb996251abae94dcc8c28c14",
      locality: "Hira Nagar",
      areaName: "Hamirpur",
      costForTwo: "₹200 for two",
      cuisines: [
        "Pizzas",
        "Fast Food",
        "Chinese",
        "Bakery",
        "North Indian",
        "Snacks",
      ],
      avgRating: 4.2,
      parentId: "468182",
      avgRatingString: "4.2",
      totalRatingsString: "508",
      sla: {
        deliveryTime: 39,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹99",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/hangout-restaurant-and-gaming-club-hira-nagar-hamirpur-rest787188",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "786983",
      name: "A9 Food Court",
      cloudinaryImageId: "4c5cccc1bab7128c6d6bceb43dc65bc8",
      locality: "First Main Road",
      areaName: "Hamirpur",
      costForTwo: "₹350 for two",
      cuisines: [
        "North Indian",
        "Chinese",
        "Biryani and Beverages",
        "Tandoor",
        "Snacks",
        "Burgers",
        "Thalis",
        "Meal",
      ],
      avgRating: 4.1,
      parentId: "467988",
      avgRatingString: "4.1",
      totalRatingsString: "310",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2025-11-23 23:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹15",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-f25abfc7-aa29-4a5c-96c8-61997ecfa7e8",
    },
    cta: {
      link: "https://www.swiggy.com/city/hamirpur/a9-food-court-first-main-road-hamirpur-rest786983",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

//step3: Build restro cards
const RestroCard = (props) => {
  //restructure of props so that props.restroName not need to be used and this only javascript not react
  const { restroInfo } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    restroInfo?.info;
  return (
    <div className="restro-card">
      <div className="restro-img-container">
        <img
          className="restro-img"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        ></img>
      </div>
      <div className="restro-info">
        <h3>{name}</h3>
        <h4 className="cuisines">{cuisines.join(",")}</h4>
        <div className="restro-meta">
          <span className="rating">★ {avgRating}</span>
          <span className="delivery-time">{sla.deliveryTime} mins</span>
        </div>
        <h4 className="cost">{costForTwo}</h4>
      </div>
    </div>
  );
};

//step 2:building Body for my food app
const Body = () => {
  return (
    <div className="app-body">
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for restaurants..."
        />
        <button className="search-btn">Search</button>
      </div>
      <div className="restro-container">
        {restroList.map((restaurant) => (
          <RestroCard key={restaurant.info.id} restroInfo={restaurant} />
        ))}
      </div>
    </div>
  );
};

//step 0: Build Body of my Food App
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//step 0: where you whant to render
const root = ReactDOM.createRoot(document.getElementById("root"));

//step 0: render
root.render(<AppLayout />);
