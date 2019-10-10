const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        /* this.data = null; // data */
        /* this.prev = null; // reference to the prev node
        this.next = null; // . reference to next node */

        // console.log('**** this *****');
        // console.log(this);
    }

    append(data) {

        let node = new Node(data);
        /* console.log('node');
        console.log(node);

        console.log('**** start append this *****');
        console.log(this);
        console.log(); */

        if (this.length) {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        } else {
            this._head = node;
            this._tail = node;
        }

        this.length++;

        /* console.log('**** END append this *****');
        console.log(this);
        console.log(); */

        return this;
    }

    head() {
        let answer;

        if (this._head) answer = this._head['data'];
        else answer = null;

        return answer;
    }

    tail() {
        let answer;

        if (this._tail) answer = this._tail['data'];
        else answer = null;

        return answer
    }

    at(index) {
        let currentNode = this._head;
        let position = index;
        let count = 0;
        let value;

        while (count < position) {
            currentNode = currentNode.next;
            count++;
        }

        value = currentNode['data'];

        return value;
    }

    insertAt(index, data) {
        let pos = index;
        let item = data;
        let current = this._head;
        let counter = 1;
        let node = new Node(item);


        if (pos == 0 && this.length !== 0) {
            this._head.prev = node;
            node.next = this._head;
            this._head = node;
        } else {
            while (current) {
                current = current.next;
                if (counter == pos) {
                    node.prev = current.prev;
                    current.prev.next = node;
                    node.next = current;
                    current.prev = node;
                }
                counter++
            }
        }



    }

    isEmpty() {
        let answer;

        if (this.length == 0) answer = true;
        else answer = false;

        return answer;

    }

    clear() {

        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;
    }

    deleteAt(index) {
        let pos = index;
        let current = this._head;
        let counter = 1;

        // console.log(this.length);
        if (this.length > 1) {
            if (pos == 0) {
                this._head = this._head.next;
                this._head.prev = null;
            } else {
                while (current) {
                    current = current.next;
                    if (current == this._tail) {
                        this._tail = this._tail.prev;
                        this.tail._next = null;
                    } else if (counter == pos) {
                        current.prev.next = current.next;
                        current.next.prev = current.prev;
                        break;
                    }
                    counter++;
                }
            }
        }

        return this;

    }

    reverse() {

        // console.log(this);

        let current = this._head;
        let prev = null;

        // if(this.length == 0) 

        while (current) {
            let next = current.next;
            current.next = prev;
            current.prev = next;
            prev = current;
            current = next;
        }
        this._tail = this._head;
        this._head = prev;

        return this;
    }

    indexOf(data) {

        let item = data;
        let current = this._head;
        let counter = 0;
        while (current) {
            if (current.data == item) {
                return counter
            }
            current = current.next
            counter++
        }
        return -1;
    }
}

module.exports = LinkedList;
