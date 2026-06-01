//Navbar Data
export const navLinks = ["Home", "Shop", "About", "Contact"];

//Browserange Data
import maskGroup from "/src/assets/Mask Group.png";
import maskGroup1 from "/src/assets/Mask Group (1).png";
import livingRoom from "/src/assets/Image-living room.png";

export const browseRangeData = [
  {
    id: 1,
    image: maskGroup,
    title: "Dining",
  },
  {
    id: 2,
    image: livingRoom,
    title: "Living",
  },
  {
    id: 3,
    image: maskGroup1,
    title: "Bedroom",
  },
];

//OurProducts Data
import Syltherine from "/src/assets/syltherines.png";
import Leviosa from "/src/assets/image 2.png";
import Lolito from "/src/assets/Lolito.png";
import Respira from "/src/assets/Respira.png";
import Grifo from "/src/assets/Grifo.png";
import Muggo from "/src/assets/Muggo.png";
import Pingky from "/src/assets/Pingky.png";
import Potty from "/src/assets/Potty.png";

export const productsData = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: { label: "-30%", type: "discount" },
    image: Syltherine,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    badge: null,
    image: Leviosa,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { label: "-50%", type: "discount" },
    image: Lolito,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: Respira,
  },
  {
    id: 5,
    name: "Grifo",
    description: "Night lamp",
    price: "Rp 1.500.000",
    originalPrice: null,
    badge: null,
    image: Grifo,
  },
  {
    id: 6,
    name: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: Muggo,
  },
  {
    id: 7,
    name: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { label: "-50%", type: "discount" },
    image: Pingky,
  },
  {
    id: 8,
    name: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: Potty,
  },
];

export const productsSectionData = {
  title: "Our Products",
  buttonText: "Show More",
};


//Inspiration Data
import BedRoom from "/src/assets/Bed Room.png";
import DiningRoom from "/src/assets/Dining Room.png";
import Dining from "/src/assets/wallDining.png";
import Focus from "/src/assets/Focuse Zoon.png";

export const inspirationSlides = [
  {
    id: 1,
    number: "01",
    category: "Bed Room",
    title: "Inner Peace",
    image: BedRoom,
  },
  {
    id: 2,
    number: "02",
    category: "Dining Room",
    title: "Warm Gather",
    image: DiningRoom,
  },
  {
    id: 3,
    number: "03",
    category: "Dining Room",
    title: "Natural Light",
    image: Dining,
  },
  {
    id: 4,
    number: "04",
    category: "Study Room",
    title: "Focus Zone",
    image: Focus,
  },
];

export const inspirationContent = {
  title: "50+ Beautiful rooms inspiration",
  description:
    "Our designer already made a lot of beautiful prototipe of rooms that inspire you",
  buttonText: "Explore More",
};


//ShareSetup Data
import Shelfroom from "/src/assets/Rectangle 36.png";
import Diningroom from "/src/assets/Dining.png";
import Bedroom from "/src/assets/BedRoom.png";
import Brickwall from "/src/assets/wallDining.png";
import Frame from "/src/assets/Frame.png";
import Kitchen from "/src/assets/Kitchen.png";
import Desktop from "/src/assets/Desktop.png";
import Rectangle from "/src/assets/Rectangle 37.png";
import Vase from "/src/assets/Vase.png";

export const shareSetupContent = {
  subtitle: "Share your setup with",
  title: "#FuniroFurniture",
};

export const shareSetupImages = {
  leftTop: {
    image: Shelfroom,
    alt: "Shelf room",
  },
  leftCenter: {
    image: Desktop,
    alt: "Desk setup with laptop and radio",
  },
  leftBottom: {
    image: Rectangle,
    alt: "Vintage armchair",
  },
  leftRight: {
    image: Vase,
    alt: "Vase and camera on stool",
  },
  center: {
    image: Diningroom,
    alt: "Dining room centerpiece",
  },
  rightTop: {
    image: Bedroom,
    alt: "Bedroom cozy setup",
  },
  rightLarge: {
    image: Brickwall,
    alt: "Brick wall dining daylight",
  },
  rightBottom: {
    image: Frame,
    alt: "Frame mockup with vase",
  },
  rightSmall: {
    image: Kitchen,
    alt: "Kitchen wall geometric tiles",
  },
};

//shopProduct Data

export const productData = [
  {
    id: 1,
    name: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: "Rp 3.500.000",
    badge: { label: "-30%", type: "discount" },
    image: Syltherine,
  },
  {
    id: 2,
    name: "Leviosa",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    originalPrice: null,
    badge: null,
    image: Leviosa,
  },
  {
    id: 3,
    name: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    originalPrice: "Rp 14.000.000",
    badge: { label: "-50%", type: "discount" },
    image: Lolito,
  },
  {
    id: 4,
    name: "Respira",
    description: "Outdoor bar table and stool",
    price: "Rp 500.000",
    originalPrice: null,
    badge: { label: "New", type: "new" },
    image: Respira,
  },
  
];



//Footer Data
export const footerLinks = [
  "Home",
  "Shop",
  "About",
  "Contact",
];
export const footerHelpLinks = [
  "Payment Options",
  "Returns",
  "Privacy Policies",
];
export const footerAddress = {
  line1: "400 University Drive Suite 200 Coral Gables,",
  line2: "FL 33134 USA",
};
export const footerCopyright =
  "2023 furino. All rights reserved";