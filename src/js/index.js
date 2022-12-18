import '../sass/style.scss';
import { calcLength } from './test/index';

const startPos = { x: 10, y: 20 };
const endPos = { x: 100, y: 200 };

// ２点の距離を求める
const length = calcLength(startPos, endPos);
