-- CREATE VIEW
CREATE VIEW 
	monthly_summary
AS
  SELECT
    account_id,
    TO_CHAR(transaction_date, 'TMMonth/YYYY') AS MES_REFERENCIA,
    SUM(transactions.amount) AS VALOR_TOTAL_TRANSACOES
  FROM
    transactions
  GROUP BY
	account_id,
	TO_CHAR(transaction_date, 'TMMonth/YYYY')
  ORDER BY
	MES_REFERENCIA ASC;

-- QUERY FOR MONTHLY SUMMARY OVER 10000
SELECT
  account_id,
  mes_referencia,
  valor_total_transacoes
FROM
  monthly_summary
WHERE 
	valor_total_transacoes > 10000
ORDER BY
	account_id,
	mes_referencia;