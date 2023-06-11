

const getCategoryColorClass = (category) => {
  switch (category) {
    case 'travel':
      return 'category-color-travel';
    case 'birthday':
      return 'category-color-birthday';
    case 'family':
      return 'category-color-family';
    case 'business':
      return 'category-color-business';
    case 'concert':
      return 'category-color-concert';
    case 'wedding':
      return 'category-color-wedding';
    case 'sports':
      return 'category-color-sports';
    case 'social':
      return 'category-color-social';
    default:
      return '';
  }
}

export default getCategoryColorClass;