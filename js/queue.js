class Queue {
  constructor() {
    this.pushStack = [];
    this.popStack = [];
  }

  enqueue(data) {
    this.pushStack.push(data);
    return data;
  }

  dequeue() {
    const data = this.popStack.pop();
    if (!data) {
      while (this.pushStack.length > 0) {
        this.popStack.push(this.pushStack.pop());
      }

      return this.popStack.pop();
    } else {
      return data;
    }
  }
}

module.exports = Queue;
