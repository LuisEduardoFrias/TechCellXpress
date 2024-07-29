
export default function getColorName(hexColor: string) {
  const colorMap = {
    '#3366FF': 'Azul',
    '#66CC99': 'Verde menta',
    '#663399': 'Púrpura oscuro',
    '#FF3399': 'Rosa',
    '#FF3366': 'Rosa',
    '#99CC00': 'Verde lima',
    '#FFFF00': 'Amarillo',
    '#9900CC': 'Púrpura',
    '#336633': 'Verde oscuro',
    '#FF5733': 'Naranja',
    '#3399FF': 'Azul claro'
  };

  return colorMap[hexColor?.toUpperCase()] || hexColor;
}