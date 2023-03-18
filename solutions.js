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
  prepend(value) {
    if (this.listHead == null) {
      this.listHead = new Node(value);
    } else {
      let newHead = new Node(value);

      newHead.next = this.listHead;
      this.listHead = newHead;
    }
    this.listSize++;
  }
  size() {
    return this.listSize;
  }
  head() {
    return this.listHead;
  }
  tail() {
    let current = this.listHead;

    while (current.next != null) {
      current = current.next;
    }
    return current;
  }
  at(givenIndex) {
    if (givenIndex > this.listSize) {
      return "List isn't that long!";
    } else if (givenIndex < 1) {
      return "List isn't that small!";
    }

    let currentIndex = 1;
    let currentNode = this.listHead;

    while (currentIndex < givenIndex) {
      currentNode = currentNode.next;
      currentIndex++;
    }
    return currentNode;
  }
  pop() {
    if (this.listSize < 1) {
      return "There is nothing to be removed!";
    }
    let currentNode = this.listHead;

    while (currentNode.next.next != null) {
      currentNode = currentNode.next;
    }
    currentNode.next = null;
    this.listSize--;
  }
  find(value) {
    let currentIndex = 1;
    let currentNode = this.listHead;

    while (currentNode) {
      if (currentNode.data == value) {
        return currentIndex;
      }
      currentNode = currentNode.next;
      currentIndex++;
    }
    return null;
  }
  toString() {
    let currentNode = this.listHead;
    let formattedString = "";

    while (currentNode) {
      formattedString += `(${currentNode.data}) -> `;
      currentNode = currentNode.next;
    }
    formattedString += "null";
    return formattedString;
  }
}
