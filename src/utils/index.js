export function getImageUrl(parmes, name) {
  return new URL(`./../assets/img/${parmes}/${name}`, import.meta.url).href;
}
