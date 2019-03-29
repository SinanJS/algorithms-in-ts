import { lstat } from "fs";

type Compareble = number | string;
type LN = LNode | null;

class MinPQ {
    arr: Compareble[] = [];

    n: number = 0;

    constructor() {

    }

    exch(arr: Compareble[], i: number, j: number) {
        let t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
    }

    insert(item: Compareble) {
        this.arr[this.n++] = item;
        let j = this.n - 1;
        for (let i = this.n - 2; i >= 0; i--) {
            if (this.arr[j] > this.arr[i]) {
                this.exch(this.arr, i, j--);
            }
        }
    }

    delMin() {
        // for (let i = 0; i < this.n; i++) {
        //     let minIndex = i;
        //     for (let j = i; j < this.n; j++) {
        //         if (this.arr[minIndex] < this.arr[j]) {
        //             minIndex = j;
        //         }
        //     }
        //     this.exch(this.arr, minIndex, i);
        // }
        this.n--;
        return this.arr.pop();
    }

    size() {
        return this.n;
    }
}

class LNode {
    value: Compareble = 0;
    next: LN = null;
}

class MinPQWithLink {
    constructor() {

    }

    n: number = 0;

    head: LN = null;

    last: LN = this.head;

    insert(node: LNode) {
        if (this.head === null) {
            this.head = node;
            this.last = this.head;
        }
        if (this.head.value > node.value) {
            node.next = this.head;
            this.head = node;
        } else {
            let leftN = 1;
            let head2 = this.head.next;
            let p = this.head;
            this.head.next = null;
            while (head2) {
                let c = head2;
                head2 = head2.next;
                c.next = null;
                if (node.value < c.value) {
                    p.next = node;
                    node.next = c;
                    c.next = head2;
                    break;
                }
                p.next = c;
                p = c;
                leftN++;
            }
            if (leftN === this.n) {
                p.next = node;
            }
        }
        this.n++;
        // console.log('head',this.head)
    }

    delMin() {
        if (this.head)
            this.head = this.head.next;
    }

    size() {
        return this.n;
    }
}
// let arr = [8, 7, 6, 5, 4, 3, 2, 1]

function mainLink() {
    let arr = [131, 524, 6, 0, 235, 1, 75, 39, 31, 91]
    var pq = new MinPQWithLink();
    arr.map(item => {
        var node = new LNode();
        node.value = item;
        pq.insert(node);
        if (pq.size() > 4) {
            pq.delMin();
        }
    })
    var c = pq.head;
    while (c) {
        console.log('xx', c.value);
        c = c.next;
    }
}
// mainLink();
// var pq = new MinPQ();
// let arr = [131, 524, 6, 0, 235, 1, 75, 39, 31, 91]
// arr.map(item => {
//     pq.insert(item)
// })
// console.log('pq', pq)

function main() {
    var pq = new MinPQ();
    let arr = [131, 524, 6, 0, 235, 1, 75, 39, 31, 91]

    const M = 4;
    arr.map(item => {
        pq.insert(item)
        if (pq.size() > M) {
            pq.delMin()
        }
    });
    console.log('pq', pq.arr)
}
// main();
export default MinPQ;


// 二叉堆 实现优先队列
class MaxPQ {
    pq: any[] = [];

    N: number = 0;

    insert(key: Compareble) {
        this.pq[++this.N] = key;
        this.swim(this.N);
    }

    sink(k: number) {
        while (2 * k <= this.N) {
            let j = 2 * k;
            if (this.less(j, j + 1)) {
                j++;
            }
            if (this.less(j, k)) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

    swim(k: number) {
        while (k > 1) {
            if (this.less(Math.floor(k / 2), k)) {
                this.exch(k, Math.floor(k / 2));
                k = Math.floor(k / 2);
            }else{
                break;
            }
        }
    }

    delMax() {
        var max = this.exch(1, this.N);
        this.pq[this.N] = null;
        this.sink(1);
        this.N--;
        return max;
    }

    size(): number {
        return this.N;
    }

    less(i: number, j: number): boolean {
        return this.pq[i] < this.pq[j];
    }

    exch(i: number, j: number) {
        const t = this.pq[i];
        this.pq[i] = this.pq[j];
        this.pq[j] = t;
    }
    show(){
        console.log(this.pq)
    }
}

function mainHeap() {
    let arr = [131, 524, 6, 0, 235, 1, 75, 39, 31, 91];
    const heap = new MaxPQ();
    const M = 4;
    arr.map(item=>{
        heap.insert(item);
        if (heap.size() > M) {
            heap.delMax()
        }
    })
    heap.show();
}

mainHeap();