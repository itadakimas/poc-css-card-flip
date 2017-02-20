/**
 * An abstract class for custom exceptions
 */
class AbstractException
{
  /**
   * Constructor
   * @param {String} message the exception message
   */
  constructor(message) {

    this.message = message;
    this.name = this.constructor.name;
    this.stack = new Error(message).stack;
  }

  /**
   * Returns the exception's message
   * @returns {String} the message
   */
  getMessage() {

    return this.message;
  }

  /**
   * Returns the exception's class name
   * @returns {String} the class name
   */
  getName() {

    return this.name;
  }

  /**
   * Returns the exception's stack trace
   * @returns {String} the stack trace
   */
  getStack() {

    return this.stack;
  }

  /**
   * Returns a string serialization of the exception
   * @returns {string} the string serialization
   */
  toString() {

    return `${this.name}: ${this.message}`;
  }
}

export default AbstractException;
