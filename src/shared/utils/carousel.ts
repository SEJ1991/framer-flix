/**
 * 한번에 보여질 아이템 갯수를 리턴하는 함수
 * @param innerWidth innerWidth
 */
export function getOffset(innerWidth: number) {
  if (innerWidth < 540) {
    return 2;
  } else if (innerWidth < 768) {
    return 2;
  } else if (innerWidth < 1024) {
    return 4;
  }

  return 5;
}

/**
 * 전체 아이템 갯수와 한본에 보여질 아이템 갯수 기준으로 최대 페이지 수를 리턴하는 함수
 * @param offset 한번에 보여질 아이템 갯수
 * @param amount 전체 아이탬 갯수
 */
export function getMaxPage(offset: number, amount: number) {
  if (!offset || !amount) return 0;
  return Math.ceil(amount / offset);
}
