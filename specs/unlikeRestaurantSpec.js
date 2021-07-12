import FavoriteRestaurantsdb from '../src/scripts/data/database';
import '../src/scripts/views/component/like-button';
import * as TestFactories from './helpers/testFactories';

describe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantsdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantsdb.deleteRestaurant(1);
  });

  it('should display unlike widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
  });

  it('should not display like widget when the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove liked restaurant from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsdb.getAllRestaurants()).toEqual([]);
  });

  it('should not throw error if the unliked restaurant is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantsdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsdb.getAllRestaurants()).toEqual([]);
  });
});
