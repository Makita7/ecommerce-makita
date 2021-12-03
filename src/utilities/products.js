//capsules
import capLatte from '../img/Capsule_Latte.png'
import capHazel from '../img/Capsule_Hazel_Mokka.png'
import capMokka from '../img/Capsule_Mokka.png'
import capVani from '../img/Capsule_Vanilla.png'
import capCapu from '../img/Capsule_Capuccino.png'
//coffee grains
import cofArabica from '../img/coffee_Arabica.png'
import cofExcelsa from '../img/coffee_Excelsa.png'
import cofLiberica from '../img/coffee_Liberica.png'
import cofRobusta from '../img/coffee_Robusta.png'
//tea strands
import berry from '../img/tea-berries.png'
import cinnamon from '../img/tea-cinnamon.png'
import green from '../img/tea-green.png'
import sakura from '../img/tea-sakura.png'
//yerba mate
import mateO from '../img/mate-original.png'
import mateC from '../img/mate-citrico.png'
import mateM from '../img/mate-menta.png'
//Accesories
import FrenchPress from '../img/frenchPress.jpg'
import ItalianPress from '../img/italianPress.jpg'
import Mate from '../img/mate.jpg'


const products = [
    //Coffee Capsules - ID 11-19
    {
        id: 11,
        name: "Latte",
        sweetness: 5,
        strength: 1,
        description:"half milk half coffee",
        price:200,
        img: capLatte,
        category:"CoffeeCapsules",
        stock: 40,
        categoryId:12,
    },
    {
        id: 12,
        name: "Hazel Mokka",
        sweetness: 5,
        strength: 3,
        description:"Hazel, caramel, chocolate, milk and sugary sweet coffee",
        price:200,
        img: capHazel,
        category:"CoffeeCapsules",
        stock: 20,
        categoryId:12,
    },
    {
        id: 13,
        name: "Mokka",
        sweetness: 5,
        strength: 3,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capMokka,
        category:"CoffeeCapsules",
        stock: 22,
        categoryId:12,
    },
    {
        id: 14,
        name: "Capuccino",
        sweetness: 5,
        strength: 2,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capCapu,
        category:"CoffeeCapsules",
        stock: 12,
        categoryId:12,
    },
    {
        id: 15,
        name: "Vanilla",
        sweetness: 5,
        strength: 1,
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        price:200,
        img: capVani,
        category:"CoffeeCapsules",
        stock: 32,
        categoryId:12,
    },
    //Coffee Beans - ID 1-9
    {
        id: 1,
        name: "Robusta",
        roast: "dark",
        description:"Single-origin coffees made from craft, small-batch roasters. With a more bitter profile, perfect for drinking with a splash of cream",
        origin: "Vietnam",
        price:200,
        img: cofRobusta,
        category:"CoffeeBeans",
        stock: 5,
        categoryId:11,
    },
    {
        id: 2,
        name: "Liberica",
        roast: "light",
        description:"Liberica coffee beans are a rare treat. They’re grown in very specific climates. It has a soft cent of fruit and flowers.",
        origin: "Southeast Asia",
        price:310,
        img: cofLiberica,
        category:"CoffeeBeans",
        stock: 53,
        categoryId:9,
    },
    {
        id: 3,
        name: "Arabica",
        roast: "dark",
        description:"Arabica beans have a sweeter tone to their taste, more delicate flavor and the coffee itself tends to be less acidic.",
        origin: "Brazil",
        price:280,
        img: cofArabica,
        category:"CoffeeBeans",
        stock: 65,
        categoryId:7,
    },
    {
        id: 4,
        name: "Excelsa",
        roast: "medium",
        description:"These Excelsa beans are for the purpose of being mixed with other varieties in order soften the pronounced taste and aroma yet complementing other beans.",
        origin: "Southeast Asia",
        price:450,
        img: cofExcelsa,
        category:"CoffeeBeans",
        stock: 88,
        categoryId:6,
    },
    //Tea Strands - ID 21-29 //
    {
        id: 21,
        name: "Berry Tea",
        strength: 1,
        description:"Soft and sweet blend of berries and honey",
        price:185,
        img: berry,
        category:"TeaStrands",
        categoryId:3,
        stock: 12,
    },
    {
        id: 22,
        name: "Green Tea",
        strength: 2,
        description:"Traditional Matcha with japanese traditional style",
        price:185,
        img: green,
        category:"TeaStrands",
        categoryId:3,
        stock: 35,
    },
    {
        id: 23,
        name: "Sakura Tea",
        strength: 1,
        description:"Selected petals of Sakura trees to make a soft fragrant tea",
        price:388,
        img: sakura,
        category:"TeaStrands",
        categoryId:3,
        stock: 26,
    },
    {
        id: 24,
        name: "Cinnamon Tea",
        strength: 1,
        description:"Blend of chocolate and cinnamon bark perfect for chilly dark",
        price:224,
        img: cinnamon,
        category:"TeaStrands",
        categoryId:3,
        stock: 65,
    },
    //Yerba Mate - ID 31-39
    {
        id: 31,
        name: "Mate Original",
        strength: 4,
        description:"Yerba Mate sola sin ningun otro agregado",
        price:200,
        img: mateO,
        category:"YerbaMate",
        categoryId:2,
        stock: 28,
    },
    {
        id: 32,
        name: "Mate Menta",
        strength: 3,
        description:"Yerba mate con hojas de Menta",
        price:150,
        img: mateM,
        category:"YerbaMate",
        categoryId:2,
        stock: 24,
    },
    {
        id: 33,
        name: "Mate Citrico",
        strength: 2,
        description:"Yerba Mate con cascaras de pomelo, limon y naranza.",
        price:168,
        img: mateC,
        category:"YerbaMate",
        categoryId:2,
        stock: 22,
    },
    //Accesories - ID 41-49
    {
        id: 41,
        name: "French Press",
        roast: "dark",
        description:"Used for infusing coffee or tea strands, which ever is to your liking",
        price:3000,
        img: FrenchPress,
        category:"Accesories",
        categoryId:5,
        stock: 31,
    },
    {
        id: 42,
        name: "Mate Stanley",
        roast: "dark",
        description:"Used for infusing Yerba Mate",
        price:3500,
        img: Mate,
        category:"Accesories",
        categoryId:5,
        stock: 31,
    },
    {
        id: 43,
        name: "Italian Press",
        roast: "dark",
        description:"Used for preparing the most delicious coffees",
        price:4000,
        img: ItalianPress,
        category:"Accesories",
        categoryId:5,
        stock: 31,
    },
];

export default products;