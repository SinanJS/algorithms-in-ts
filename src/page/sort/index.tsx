import React, { Component } from 'react'
import { SelectionSort, InsertionSort, ShellSort, MergeSort, Quicksort } from './sorts';
import './sortLink'

enum Types {
  SEL = '选择排序',
  INS = '插入排序',
  SHELL = '希尔排序',
  MER = '归并排序',
  QUI = '快速排序'
}
class Sort extends Component {

  emit = (type: Types) => {
    const { SEL, INS, SHELL, MER, QUI } = Types;
    let s = null
    // let arr = [131, 524, 6, 0, 235, 1, 75, 39, 31, 91]
    let arr = [4, 2, 5, 1, 0, 3, 6]
    // let arr = Array.from('AFWETUIOZNVIAUQTJQS');
    switch (type) {
      case SEL: {
        s = new SelectionSort();
        console.log(type, s.sort(arr));
        break;
      }
      case INS: {
        s = new InsertionSort();
        console.log(type, s.sort(arr));
        break;
      }
      case SHELL: {
        s = new ShellSort();
        console.log(type, s.sort(arr));
        break;
      }
      case MER: {
        s = new MergeSort();
        console.log(type, s.sort(arr));
        break;
      }
      case QUI: {
        s = new Quicksort();
        console.log(type, s.sort(arr));
        break;
      }
    }
  }

  render() {
    const { SEL, INS, SHELL, MER, QUI } = Types;
    return (
      <div className="App">
        <button onClick={this.emit.bind(this, SEL)}>{SEL}</button>
        <button onClick={this.emit.bind(this, INS)}>{INS}</button>
        <button onClick={this.emit.bind(this, SHELL)}>{SHELL}</button>
        <button onClick={this.emit.bind(this, MER)}>{MER}</button>
        <button onClick={this.emit.bind(this, QUI)}>{QUI}</button>
      </div>
    )
  }
}

export default Sort;
