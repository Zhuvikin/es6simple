import Moment from 'moment';
import {sine} from './lib';

console.log('the time is', Moment().format());

let arr = [1, 10, 5];
arr = arr.map(item => item + 1);

console.log('arr', ...arr);
console.log('sin(0.707) is', sine(0.707));
