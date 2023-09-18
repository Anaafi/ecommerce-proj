

const createProduct = `
INSERT INTO products (
    name,
    price,
    quantity,
   category_id 
) 
VALUES ($1, $2, $3, $4) RETURNING *
`;




const buyProduct = `
UPDATE products
SET quantity_sold = quantity_sold + $2, 
quantity = quantity - $2
WHERE name=$1
RETURNING name, price, quantity, quantity_sold
`;


const updateProductQuantity = `
UPDATE products
SET quantity=$2, price=$3
WHERE name=$1
RETURNING name, price, quantity, quantity_sold
`





const fetchAllProducts = `SELECT 
products.name AS product,
products.price, 
products.quantity, 
products.quantity_sold,
category.name AS category

FROM 
products

INNER JOIN category

ON products.category_id=category.id`


const getProductsByCategory = `SELECT 
products.name AS product,
products.price, 
products.quantity, 
products.quantity_sold,
category.name AS category

FROM products
INNER JOIN category

ON products.category_id = category.id

WHERE products.category_id=$1`




const fetchProductsByName = `

SELECT name, quantity FROM products WHERE name=$1
`


const getProductPrice = `
SELECT price FROM products WHERE name=$1 
`



module.exports = {
 createProduct,
 buyProduct,
 fetchAllProducts,
 getProductsByCategory,
 fetchProductsByName,
 getProductPrice,
 updateProductQuantity
}




