import { useNumericFormat } from 'react-number-format';

interface CurrencyPresenterProps {
  value: number | string | undefined;
  prefix?: string;
}

export function CurrencyPresenter({
  value,
  prefix,
}: CurrencyPresenterProps) {
  const { value: formattedValue } = useNumericFormat({
    displayType: 'text',
    thousandSeparator: true,
    decimalScale: 2,
    fixedDecimalScale: true,
    value,
  });

  return <span>{prefix}{formattedValue}</span>;
}
