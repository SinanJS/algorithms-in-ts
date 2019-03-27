type Compareble = number | string;

type LN = LNode | null;

class LNode {
    data: Compareble = 0;
    next: LN = null;
}

class LinkList {
    // 链表的头部指针
    head: LN = null;
    // 链表的尾部指针
    last: LN = this.head;

    count = 0;

    addTohead(data: Compareble) {
        const oldhead = this.head;
        this.head = new LNode();
        this.head.data = data;
        this.head.next = oldhead;
        if (this.count === 0) {
            this.last = this.head;
        }
        this.count++;
    }

    addToLast(data: Compareble) {
        if (this.last) {
            let oldLast = this.last;
            this.last = new LNode();
            this.last.data = data;
            oldLast.next = this.last;
            this.count++;
        } else {
            this.addTohead(data);
        }
    }

    delhead() {
        if (this.head) {
            this.head = this.head.next;
        }
    }

    exchange(pre1: LNode, node1: LNode, pre2: LNode, node2: LNode) {

    }

}

function insertSort(head: LN) {
    if (head === null || head.next === null) {
        return head;
    }
    let p: LN;
    let head2: LN = head.next; // 右链表从第二个节点开始
    head.next = null; // 拆出第一个节点
    let pt: LN; //指向 p 节点之前的节点
    let aim: LN;// 指向从右链表中拆出的目标节点
    while (head2) {
        // 每次遍历结束后，p 要拨回到初始位置：head
        p = head;
        pt = null;
        // 目标节点是右链表的首节点
        aim = head2;
        // 右链表去掉首节点
        head2 = head2.next;
        // 拆出的节点
        aim.next = null;
        while (p) {
            // 遍历遇到data的值大于目标节点的data
            if (p.data > aim.data) {
                // 如果左链表只有一个链表，
                if (pt === null) {
                    head = aim; // 放在左链表的头部
                } else {
                    pt.next = aim;// 否则，插在 pt 与 p之间
                }
                aim.next = p; 
                break;
            }
            // 若遍历到左链表尾部还没遇到大于 aim.data 的节点
            // 说明 aim.data 是左链表最大的节点
            if (p.next === null) {
                // 放在左链表尾部，跳出循环
                p.next = aim;
                break;
            }
            // p 指针继续向后移动
            pt = p;
            p = p.next;
        }
    }
    return head;
}

function reverseList(head: LN): LN {
    if (!head || !head.next) {
        return head;
    }
    let p: LN = head;
    let q: LN = head.next;
    let r: LN;

    p.next = null;

    while (q) {
        r = q.next;
        q.next = p;
        p = q;
        q = r;
    }
    head = p;
    return head;
}

const arr = [4, 1, 10, 3, 51, 10, 34]
const linkList = new LinkList();
arr.forEach((item, index) => {
    if (index === 0) {
        linkList.addTohead(item);
    } else {
        linkList.addToLast(item);
    }
})

var a = insertSort(linkList.head);
// var a = reverseList(linkList.head);

console.log('linkList', a)

while (a) {
    console.log(a.data);
    a = a.next;
}

export {
    insertSort
}