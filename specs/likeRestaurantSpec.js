import FavoriteRestaurantsdb from '../src/scripts/data/database';
import '../src/scripts/views/component/like-button';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<like-button></like-button>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restaurant has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
  });

  it('should be able to like the restaurant', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('[aria-label="like this restaurant"]').dispatchEvent(new Event('click'));

    const restaurant = await FavoriteRestaurantsdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });

    FavoriteRestaurantsdb.deleteRestaurant(1);
  });

  it('should not add a restaurant again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantsdb.putRestaurant({ id: 1 });

    document.querySelector('[aria-label="like this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantsdb.deleteRestaurant(1);
  });

  it('should not add a restaurant when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('[aria-label="like this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsdb.getAllRestaurants()).toEqual([]);
  });
});
