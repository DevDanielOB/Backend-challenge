SELECT
  customers.name,
  SUM(orders.total) AS TOTAL_COMPRAS
FROM
  customers
  INNER JOIN
  orders ON customers.id = orders.customer_id
GROUP BY 
	customers.name
ORDER BY
	TOTAL_COMPRAS DESC
