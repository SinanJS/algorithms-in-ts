type Compareble = number | string;

class Sort {
    less(v: Compareble, a: Compareble): boolean {
        if (v < a) {
            return true
        }
        return false
    }

    exch(arr: Compareble[], i: number, j: number) {
        let t = arr[i]
        arr[i] = arr[j]
        arr[j] = t
    }

    isSorted(arr: Compareble[]) {
        for (let i = 1; i < arr.length; i++) {
            if (this.less(arr[i], arr[i - 1])) {
                return false
            }
        }
        return true
    }
}

class SelectionSort extends Sort {
    sort(arr: Compareble[]): Compareble[] {
        const N = arr.length
        for (let i = 0; i < N; i++) {
            let minIndex = i
            for (let j = i; j < N; j++) {
                if (this.less(arr[j], arr[minIndex])) {
                    minIndex = j;
                }
            }
            this.exch(arr, minIndex, i)
        }
        return arr
    }
}

class InsertionSort extends Sort {
    sort(arr: Compareble[]): Compareble[] {
        const N = arr.length
        for (let i = 1; i < N; i++) {
            for (let j = i; j > 0; j--) {
                if (this.less(arr[j], arr[j - 1])) {
                    this.exch(arr, j, j - 1)
                }
            }
        }
        return arr
    }
}

class ShellSort extends Sort {
    sort(arr: Compareble[]): Compareble[] {
        const N = arr.length
        let h = 1
        while (h < N / 3) {
            h = h * 3 + 1
        }
        for (; h >= 1; h = Math.floor(h / 3)) {
            for (let i = h; i < N; i++) {
                for (let j = i; j >= h; j -= h) {
                    if (this.less(arr[j], arr[j - h])) {
                        this.exch(arr, j, j - h)
                    }
                }
            }
        }
        return arr
    }
}

class MergeSort extends Sort {
    a: Compareble[] = [];
    merge(arr: Compareble[], lo: number, mid: number, hi: number) {
        let i = lo
        let j = mid + 1
        for (let k = lo; k <= hi; k++) {
            this.a[k] = arr[k]
        }
        for (let k = lo; k <= hi; k++) {
            if (i > mid) {
                arr[k] = this.a[j++]
            } else if (j > hi) {
                arr[k] = this.a[i++]
            } else if (this.a[j] < this.a[i]) {
                arr[k] = this.a[j++]
            } else {
                arr[k] = this.a[i++]
            }
        }
    }

    sort(arr: Compareble[]): Compareble[] {
        this.sort2(arr, 0, arr.length - 1)
        return arr;
    }

    sort2(arr: Compareble[], lo: number, hi: number) {
        if (lo >= hi) {
            return;
        }
        let mid = lo + Math.floor((hi - lo) / 2)
        this.sort2(arr, lo, mid)
        this.sort2(arr, mid + 1, hi)
        this.merge(arr, lo, mid, hi)
    }
}

class Quicksort extends Sort {
    sort(arr: Compareble[]) {
        this.sort2(arr, 0, arr.length - 1)
        return arr
    }

    sort2(arr: Compareble[], lo: number, hi: number) {
        if (hi <= lo) return
        let j = this.partition(arr, lo, hi)
        this.sort2(arr, lo, j - 1)
        this.sort2(arr, j + 1, hi)
    }

    partition(arr: Compareble[], lo: number, hi: number): number {
        let v = arr[lo];
        let i = lo
        let j = hi + 1
        while (i < j) {
            while (true) {
                i++
                // 要选比 v 大的元素，准备让大元素滚到后面去
                if (arr[i] > v) {
                    break;
                }
                if (i === hi) {
                    break;
                }
            }
            // 要选比 v 小的元素，准备让小元素滚到前面来
            while (this.less(v, arr[--j])) {
                if (j === lo) {
                    break;
                }
            }
            // 大小元素进行交换
            this.exch(arr, i, j)
            console.log('change',arr)
        }

        this.exch(arr, lo, j)
        console.log('change2',arr)
        return j
    }
}

class NutsAndBolts extends Sort {
    nuts: Compareble[] = [2, 5, 3, 0, 1, 4]
    bolt: Compareble[] = [5, 2, 1, 4, 3, 0]

    sort(bolt: Compareble[], nuts: Compareble[], lo: number, hi: number) {
        if (lo >= hi) return
        let j = this.partition(bolt, nuts, lo, hi)
        this.sort(bolt, nuts, lo, j - 1);
        this.sort(bolt, nuts, j + 1, hi)
        return { nuts, bolt }
    }

    partition(bolt: Compareble[], nuts: Compareble[], lo: number, hi: number) {
        let i = lo;
        let j = hi + 1;
        // 取第一枚螺帽作为标记
        let pivotB = bolt[lo];
        // 找到对应螺钉
        for (let k = 0; k <= hi; k++) {
            if (nuts[k] === pivotB) {
                this.exch(nuts, k, lo)
                break
                // 第一个螺帽 和 第一个螺钉匹配成功
            }
        }

        // 先用螺帽去匹配螺钉
        while (i < j) {
            while (nuts[++i] < pivotB) {
                if (i === hi) break
            }
            while (nuts[--j] > pivotB) {
                if (j === lo) break
            }
            this.exch(nuts, i, j)
        }
        this.exch(nuts, lo, j)

        // 再用螺帽去比较螺钉
        let pivotN = nuts[j];
        i = lo
        j = hi + 1
        while (i < j) {
            while (bolt[++i] < pivotN) {
                if (i === hi) break
            }
            while (bolt[--j] > pivotN) {
                if (j === lo) break
            }
            this.exch(bolt, i, j)
        }
        this.exch(bolt, lo, j)
        return j
    }
    main() {
        const { nuts, bolt } = this
        this.sort(bolt, nuts, 0, nuts.length - 1)
        console.log('nuts', nuts)
        console.log('bolt', bolt)
    }
}

const testNutsAndBolts = new NutsAndBolts()
testNutsAndBolts.main()

export {
    SelectionSort,
    InsertionSort,
    ShellSort,
    MergeSort,
    Quicksort
}