import sortingHeroesByHealth from '../app';

describe('sortingHeroesByHealth:', () => {
  test('sorting heroes by health level from highest level to lowest', () => {
    const received = sortingHeroesByHealth([
      { name: 'мечник', health: 10 },
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
    ]);
    expect(received).toEqual([
      { name: 'маг', health: 100 },
      { name: 'лучник', health: 80 },
      { name: 'мечник', health: 10 },
    ]);
  });
  test('sorting more heroes by health level from highest level to lowest', () => {
    const received = sortingHeroesByHealth([
      { name: 'мечник', health: 50 },
      { name: 'рыцарь', health: 30 },
      { name: 'орк', health: 90 },
      { name: 'некромант', health: 100 },
      { name: 'маг', health: 10 },
      { name: 'лучник', health: 70 },
    ]);
    expect(received).toEqual([
      { name: 'некромант', health: 100 },
      { name: 'орк', health: 90 },
      { name: 'лучник', health: 70 },
      { name: 'мечник', health: 50 },
      { name: 'рыцарь', health: 30 },
      { name: 'маг', health: 10 },
    ]);
  });
});
