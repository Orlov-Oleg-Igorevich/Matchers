import getHealthStatus, {sortHeroes} from '../health';

test.each([
  ["маг", 100, "health"],
  ["целитель", 15, "wounded"],
  ["танк", 3, "critical"],
])("testing function health with a %s character and a health value of %i", (name, health, expected) => {
  let healthStatus = getHealthStatus({name, health});
  expect(healthStatus).toBe(expected);
});

test("testing the hero sorting function", () => {
  const heroes = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
  ];
  sortHeroes(heroes);
  expect(heroes).toEqual([
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'мечник', health: 10},
  ]);
})