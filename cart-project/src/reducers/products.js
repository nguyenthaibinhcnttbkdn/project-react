let initialState = [
    {
        id: 1,
        name: 'Iphone 7 Plus',
        price: 5000000,
        image: '/template-card/img/iphone-7-plus.jpg'
    },
    {
        id: 2,
        name: 'Samsung galaxy S7',
        price: 6000000,
        image: '/template-card/img/samsung-galaxy-s6.jpg'
    },
    {
        id: 3,
        name: 'Oppo F1s',
        price: 7000000,
        image: '/template-card/img/oppo-f1s-hero-400x460-400x460.png'
    }
];

const products = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state];
    }
}

export default products;