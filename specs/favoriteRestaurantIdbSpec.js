import { itActsFavoriteRestaurantModel } from './contract/favoriteRestaurantContract';
import FavoriteRestaurantsdb from '../src/scripts/data/database';

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantsdb.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteRestaurantsdb.deleteRestaurant(restaurant.id);
    });
  });

  itActsFavoriteRestaurantModel(FavoriteRestaurantsdb);
});
