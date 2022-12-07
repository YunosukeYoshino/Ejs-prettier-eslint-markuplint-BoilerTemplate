/**
 * ２点の長さを返す
 * @param {x:number,y:number} pos1 始点
 * @param {x:number,y:number} pos2 終点
 */
export const calcLength = (pos1, pos2) => {
    return Math.sqrt((pos1.x - pos2.x) ** 2 + (pos1.y - pos2.y) ** 2);
}
