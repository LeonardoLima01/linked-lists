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
  insertAt(value, givenIndex) {
    if (givenIndex > this.listSize) {
      return "List isn't that long!";
    } else if (givenIndex < 1) {
      return "List isn't that small!";
    }

    if (givenIndex == 1) {
      let newNode = new Node(value);

      newNode.next = this.listHead.next;
      this.listHead = newNode;
    } else if (givenIndex == this.listSize) {
      let nodeBeforeTail = this.listHead;

      while (nodeBeforeTail.next.next != null) {
        nodeBeforeTail = nodeBeforeTail.next;
      }
      let newTailNode = new Node(value);
      nodeBeforeTail.next = newTailNode;
    } else {
      let nodeBefore = this.listHead;
      let currentIndex = 1;

      while (currentIndex + 1 < givenIndex) {
        nodeBefore = nodeBefore.next;
        currentIndex++;
      }

      let nodeAtGivenIndex = this.listHead;
      currentIndex = 1;

      while (currentIndex < givenIndex) {
        nodeAtGivenIndex = nodeAtGivenIndex.next;
        currentIndex++;
      }

      let newNode = new Node(value);
      newNode.next = nodeAtGivenIndex.next;

      nodeBefore.next = newNode;
    }
  }
  removeAt(givenIndex) {
    if (givenIndex > this.listSize) {
      return "List isn't that long!";
    } else if (givenIndex < 1) {
      return "List isn't that small!";
    }

    if (givenIndex == 1) {
      this.listHead = this.listHead.next;
      this.listSize--;
    } else if (givenIndex == this.listSize) {
      let nodeBefore = this.listHead;
      let currentIndex = 1;

      while (currentIndex + 1 < givenIndex) {
        nodeBefore = nodeBefore.next;
        currentIndex++;
      }
      nodeBefore.next = null;
      this.listSize--;
    } else {
      let nodeBefore = this.listHead;
      let currentIndex = 1;

      while (currentIndex + 1 < givenIndex) {
        nodeBefore = nodeBefore.next;
        currentIndex++;
      }

      let nodeAfter = this.listHead;
      currentIndex = 1;

      while (currentIndex < givenIndex + 1) {
        nodeAfter = nodeAfter.next;
        currentIndex++;
      }
      nodeBefore.next = nodeAfter;
      this.listSize--;
    }
  }
}
