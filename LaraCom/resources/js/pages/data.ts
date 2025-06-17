export type Product = {
    image: string;
    name: string;
    productId: string;
    price: string;
    description: string;
    category: 'Headphones' | 'Earbuds' | 'Tablets' | 'Laptops' | 'Mobiles';
    status: 'In Stock' | 'Out of Stock';
    date: string;
};

export const products: Product[] = [
    {
        image: 'https://m.media-amazon.com/images/I/6196rZ67rvL._AC_UL480_QL65_.jpg',
        name: 'Soundcore by Anker Q20i Hybrid',
        productId: 'B0C3HCD34R',
        price: '125',
        description:
            'Immerse Yourself in Detailed Audio: The noise cancelling headphones have oversized 40mm dynamic drivers that produce detailed sound and thumping beats with BassUp technology. Compatible with Hi-Res certified audio via the AUX cable for more detail.',
        status: 'In Stock',
        category: 'Headphones',
        date: '15-11-2025',
    },
    {
        image: 'https://m.media-amazon.com/images/I/51EQDk1yjwL._AC_UL480_QL65_.jpg',
        name: 'JBL Wave Flex',
        productId: 'B0BW6RL27D',
        price: '157',
        description:
            'The ergonomic, stick-open design of the JBL Wave Flex fits so comfortably you may forget you’re wearing them. The stick-open design allows you to enjoy all the sound without blocking your ear-canal. ',
        status: 'In Stock',
        category: 'Earbuds',
        date: '25-11-2025',
    },
    {
        image: 'https://m.media-amazon.com/images/I/51BpG34MisL._AC_UL480_QL65_.jpg',
        name: 'Samsung Galaxy Tab A9+',
        productId: 'B0CKW1H71H',
        price: '600',
        description:
            'Stylish with a touch of cool, the Galaxy Tab A9 and Tab A9+ features a sleek design and a smooth metal body. Enjoy Samsung’s signature tablet design in Graphite, Silver and Navy with each hue highlighting effortless charm ',
        status: 'In Stock',
        category: 'Tablets',
        date: '25-05-2025',
    },
    {
        image: 'https://m.media-amazon.com/images/I/61NUR7kNpZL._AC_SX679_.jpg',
        name: 'Samsung Galaxy S25 Ultra',
        productId: 'B0DSLS4MN7',
        price: '3138',
        description:
            "Design: Galaxy S25 Ultra's rounded design expresses a unified identity for the Galaxy S Series. With it's sleek and strong titanium frame and a built-in S Pen, it's an ultra-modern, vision of bold design.",
        status: 'In Stock',
        category: 'Mobiles',
        date: '25-05-2025',
    },
];
