const Node = require('./node');


class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }


    append(data) {
        let node = new Node();
        node.data = data;

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        return this;
    }


    head() {
        return this._head.data;
    }


    tail() {
        return this._tail.data;
    }


    at(index) {
        let node = this._head;

        for (var i = 0; i < index; i++) {
            node = node.next;
        }

        return node.data;
    }


    insertAt(index, data) {
        let node = this._head;
        var newNode = new Node();
        newNode.data = data;

        for (var i = 0; i < index; i++) {
            node = node.next;
        }

        if (index == this.length) {
            this.append(data);

        } else if (node.prev == null) {
            newNode.next = node;
            node.prev = newNode;
            this._head = newNode;

            this.length++;

        } else {
            var prevNode = node.prev;

            prevNode.next = newNode;
            newNode.prev = prevNode;
            newNode.next = node;
            node.prev = newNode;

            this.length++;
        }

        return this;
    }


    isEmpty() {
        return this.length == 0;
    }


    clear() {
        let node = new Node();
        this._head = node;
        this._tail = node;
        this.length = 0;

        return this;
    }


    deleteAt(index) {
        let node = this._head;

        for (var i = 0; i < index; i++) {
            node = node.next;
        }

        if (node.prev == null) {
            this._head = node.next;
            node = null;

            this.length--;

        }else if (node.next == null) {
            var prevNode = node.prev;
            prevNode.next = null;
            this._tail = prevNode;

            this.length--;
        } else {
            var prevNode = node.prev;
            var nextNode = node.next;

            prevNode.next = nextNode;
            nextNode.prev = prevNode;

            this.length--;
        }

        return this;
    }


    reverse() {
        var node = this._head;
        var change = new Node();

        while (node) {
            change = node.prev;
            node.prev = node.next;
            node.next = change;

            node = node.prev;
        }

        change = this._tail;
        this._tail = this._head;
        this._head = change;

        return this;
    }


    indexOf(data) {
        let node = this._head;
        var index = 0;

        while (node) {
            if (node.data == data) {
                return index;
            }
            node = node.next
            index++;
        }

        return -1;

    }
}


module.exports = LinkedList;