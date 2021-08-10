import { v4 as uuid } from 'uuid';

/**
 * Counter class
 *
 * @export
 * @class Counter
 */
export default class Counter {
  /**
   * Creates an instance of Counter.
   * @param {string} name
   * @param {number} [startingValue=0]
   * @param {number} [stepUpValue=1]
   * @param {number} [stepDownValue=1]
   * @memberof Counter
   */
  constructor(name, startingValue = 0, stepUpValue = 1, stepDownValue = 1) {
    this.name = name;
    this.startingValue = startingValue;
    this.value = startingValue;
    this.stepUp = stepUpValue;
    this.stepDown = stepDownValue;
    this.id = uuid();
  }
}
