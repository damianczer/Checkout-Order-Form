export const PRODUCTS = [
    {
        id: 'dc-platform',
        nameKey: 'products.dcPlatform.name',
        descKey: 'products.dcPlatform.description',
        name: 'DC Platform (Premium+)',
        description: 'Monthly subscription',
        price: 14.99,
        priceFormatted: '$14.99',
    },
    {
        id: 'software-package',
        nameKey: 'products.softwarePackage.name',
        descKey: 'products.softwarePackage.description',
        name: 'Software package',
        description: 'License',
        price: 9.99,
        priceFormatted: '$9.99',
    },
    {
        id: 'service-launch',
        nameKey: 'products.serviceLaunch.name',
        descKey: 'products.serviceLaunch.description',
        name: 'Service launch',
        description: 'One-time service start-up',
        price: 4.99,
        priceFormatted: '$4.99',
    },
    {
        id: 'base-support',
        nameKey: 'products.baseSupport.name',
        descKey: 'products.baseSupport.description',
        name: 'Base Support',
        description: 'Included in subscription plan',
        price: 0,
        priceFormatted: 'Free',
        isFree: true,
    },
];

const calculateTotal = (products = PRODUCTS) => {
    return products.reduce((sum, product) => sum + product.price, 0);
};

export const TOTAL_PRICE = calculateTotal();
export const TOTAL_FORMATTED = `$${TOTAL_PRICE.toFixed(2)}`;

export default PRODUCTS;
