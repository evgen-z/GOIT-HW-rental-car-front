export const formatMileage = (value) =>
    value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');