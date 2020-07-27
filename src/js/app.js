export default function sortingHeroesByHealth(heroes) {
  return heroes.sort((a, b) => (a.health > b.health ? 1 : -1)).reverse();
}
