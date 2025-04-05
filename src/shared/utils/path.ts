/**
 * 특정 w500 이미지의 URL을 리턴하는 함수
 * @param img 이미지
 * @returns 이미지 주소 URL
 */
export function makeImagePath(img: string) {
  return `https://image.tmdb.org/t/p/w500${img}`;
}

/**
 * 특정 original 이미지의 URL을 리턴하는 함수
 * @param img 배경 이미지
 * @returns 배경 이미지 주소 URL
 */
export function makeBgPath(img: string) {
  return `https://image.tmdb.org/t/p/original${img}`;
}
