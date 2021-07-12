import LikeButtonPresenter from '../../src/scripts/presenters/like-button-presenter';
import FavoriteRestaurantsdb from '../../src/scripts/data/database';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('like-button'),
    favoriteRestaurant: FavoriteRestaurantsdb,
    restaurant,
  });
};

export { createLikeButtonPresenterWithRestaurant };
