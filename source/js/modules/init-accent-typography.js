import AccentTypography from './accent-typography';

export default () => {
  const introTitle = new AccentTypography(`.intro__title`, {
    animationDelay: 100,
    stringsAnimationDelayOffset: 300,
    animationDuration: 500,
  });

  introTitle.init();

  const introDate = new AccentTypography(`.intro__date`, {
    animationDelay: 1100,
    animationDuration: 400,
  });

  introDate.init();

  const sliderItemTitle = new AccentTypography(`.slider__item-title`, {
    animationDelay: 0,
    animationDuration: 400,
  });

  sliderItemTitle.init();

  const prizesTitle = new AccentTypography(`.prizes__title`, {
    animationDelay: 0,
    animationDuration: 400,
  });

  prizesTitle.init();

  const rulesTitle = new AccentTypography(`.rules__title`, {
    animationDelay: 0,
    animationDuration: 400,
  });

  rulesTitle.init();

  const gameTitle = new AccentTypography(`.game__title`, {
    animationDelay: 0,
    animationDuration: 400,
  });

  gameTitle.init();
};
