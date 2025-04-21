SELECT
  categories.name,
  products.name,
  SUM(sales.quantity) AS TOTAL_VENDIDA
FROM categories
  INNER JOIN
  products ON categories.id = products.category_id
  INNER JOIN
  sales ON sales.product_id = products.id
GROUP BY 
	categories.name, products.name
HAVING 
	SUM(sales.quantity) > 100;