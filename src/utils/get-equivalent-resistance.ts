export function getEquivalentResistance(inputVal: string) {
  const sumReciprocals = inputVal
    .split(',')
    .map((resistance) => Math.pow(Number(resistance), -1))
    .reduce((acc, val) => acc + val, 0);

  const equivalentResistance = Math.pow(Number(sumReciprocals), -1);

  return Number(equivalentResistance.toFixed(5));
}
