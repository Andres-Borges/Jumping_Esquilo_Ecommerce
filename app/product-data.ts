export interface Product {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
}

export const products: Product[] = [{
    id: '1',
    name: 'Jumping Esquilo\'s Black Shirt',
    imageUrl: 'BlackShirtFront.png',
    description: 'A modern and clean design. Our black shirts are sure to leave an impression while keeping you fashionable and well dressed!',
    price: 12
}, {
    id: '2',
    name: 'Jumping Esquilo\'s White Shirt',
    imageUrl: 'WhiteShirtFront.png',
    description: 'Made with high quality materials, our white shirts deliver comfort while while presenting a clean design!',
    price: 12
}, {
    id: '3',
    name: 'Jumping Esquilo\'s Standard Mug',
    imageUrl: 'MugFront.png',
    description: 'Perfect for long coding sessions. This fashionable mug will make sure you always have energy, or coffe at least!',
    price: 5
}, {
    id: '4',
    name: 'Jumping Esquilo\'s Sticker',
    imageUrl: 'EsquiloSticker.png',
    description: 'A simple holographic sticker. Long lasting and can be used to customize your belongings. From laptops to water bottles!',
    price: 1
}]