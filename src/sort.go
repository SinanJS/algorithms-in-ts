package main

import "fmt"

func exch(arr []int, i int, j int) {
	t := arr[i]
	arr[i] = arr[j]
	arr[j] = t
}

func selectionSort(arr []int) []int {
	var N = len(arr)
	for i := 0; i < N; i++ {
		minIndex := i
		for j := i + 1; j < N; j++ {
			if arr[minIndex] > arr[j] {
				minIndex = j
			}
		}
		exch(arr, i, minIndex)
	}
	return arr
}

func insertionSort(arr []int) []int {
	var N = len(arr)
	for i := 1; i < N; i++ {
		for j := i; j > 0; j-- {
			if arr[j] < arr[j-1] {
				exch(arr, j, j-1)
			} else {
				break
			}
		}
	}
	return arr
}

func shellSort(arr []int) []int {
	var N = len(arr)
	var h = 1
	for h < N/3 {
		h = 3*h + 1
	}
	for h >= 1 {
		for i := h; i < N; i++ {
			for j := i; j >= h; j -= h {
				if arr[j] < arr[j-h] {
					exch(arr, j, j-h)
				}
			}
		}
		h = h / 3
	}
	return arr
}

func main() {
	var a = []int{131, 524, 6, 0, 235, 1, 5, 23, 31}
	var arr = shellSort(a)
	fmt.Println(arr)
}
