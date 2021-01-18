import enchantingAmulet from './images/enchanting-amulet.jpg';
import hunkOfWood from './images/hunk-of-wood.jfif'
import audreyHepburnMirror from './images/audrey-hepburns-haunted-mirror.jpg';
import babeRuthHomeRunBall from './images/babe-ruth-home-run-ball.png';
import timeLordGlasses from './images/time-lords-glasses.jpg';
import abrahamTunic from './images/abrahams-tunic.jpg';



const wholeInventory = [
    {
        item: 'Enchanting Amulet', 
        id: 'enchanting-amulet', 
        price: 12.99, 
        collection: 'jewellery', 
        gallery: [
            enchantingAmulet,
        ],
        itemTotal: 1,
    },
    {
        item: 'Hunk of Wood', 
        id: 'hunk-of-wood', 
        price: 33.99, 
        collection: 'biblical',
        gallery: [
            hunkOfWood,
        ],
        itemTotal: 1,
    },
    {
        item: 'Audrey Hepburn\'s Haunted Mirror', 
        id: 'audrey-hepburn\'s-haunted-mirror', 
        price: 15.82, 
        collection: 'memorabilia',
        gallery: [
            audreyHepburnMirror,
        ],
        itemTotal: 1,
    },
    {
        item: 'Babe Ruth Home-Run Ball', 
        id: 'babe-ruth-home-run-ball', 
        price: 3.20, 
        collection: 'memorabilia',
        gallery: [
            babeRuthHomeRunBall,
        ],
        itemTotal: 1,
    },
    {
        item: 'Time-Lord\'s Glasses', 
        id: 'time-lord\'s-glasses',
        price: 68.50, 
        collection: 'jewellery', 
        gallery: [ 
            timeLordGlasses,
        ],
        itemTotal: 1,
    },
    {
        item: 'Abraham\'s Tunic', 
        id: 'abraham\'s-tunic', 
        price: 4.60, 
        collection: 'biblical',
        gallery: [
            abrahamTunic,
        ],
        itemTotal: 1,
    }
]

export default wholeInventory;
