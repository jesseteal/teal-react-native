import { getDistance, convertDistance, getCompassDirection } from 'geolib';

export { getDistance } from 'geolib';

export const distanceAsString = (from, to) => {
  const meters = getDistance(from, to)
  const miles = convertDistance(meters, 'mi');
  const bearing = getCompassDirection(from, to)

  if(miles < 0.25){
    const feet = Math.floor(convertDistance(meters, 'ft'));
    if(feet < 100){
      return '< 100 ft';
    }
    return `${feet} ft ${bearing}`;
  } else if(miles < 5){
    return `${Number.parseFloat(miles).toPrecision(1)} mi ${bearing}`
  }
  return `${Math.floor(miles)} mi ${bearing}`
}
