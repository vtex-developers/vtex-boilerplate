export const numberFormatter = ({
  style = 'decimal',
  value = 0,
  currency = 'BRL',
  decimals = 2,
  currencyDisplay = 'symbol',
}) => {
  return Intl.NumberFormat('pt-BR', {
    style,
    currency,
    currencyDisplay,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value)
}

export const currencyFormatter = props => {
  return numberFormatter({
    ...props,
    style: 'currency',
  })
}

export const percentFormatter = ({ value, ...props }) => {
  return numberFormatter({
    ...props,
    value: value / 100,
    style: 'percent',
  })
}
