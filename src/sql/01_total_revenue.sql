SELECT id, product, quantity, price
FROM sales;

SELECT
  product,
  quantity,
  price,
  (quantity * price) AS RECEITA_TOTAL
FROM
  sales
ORDER BY RECEITA_TOTAL DESC;
	