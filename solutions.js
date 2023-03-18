class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.listHead = null;
    this.listSize = 0;
  }
  append(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
    } else {
      let current = this.listHead;

      while (current.next != null) {
        current = current.next;
      }
      current.next = new Node(value);
    }
    this.listSize++;
  }
}
