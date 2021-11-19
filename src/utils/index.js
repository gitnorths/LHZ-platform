// 动态 URL
export function getImageUrl(parmes, name) {
  return new URL(`./../assets/img/${parmes}/${name}.png`, import.meta.url).href;
}