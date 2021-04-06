// ex1
let a = 1024 // number
let b = 'apples and oranges' // string
const c = 'pineapples' // 'pineapples'
let d = [true, true, false] // boolean[]
let e = {type: 'ficus'} // { type: string; }
let f = [1, false] // (number|boolean)[]
const g = [3] // number[]
let h = null // any

// ex2
// a
let i: 3 = 3
i = 4 // 型 '4' を型 '3' に割り当てることはできません。ts(2322)
// iはリテラル型'3'として型付けられているため.

// b
let j = [1, 2, 3]
j.push(4)
j.push('5') // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。ts(2345)
// jはnumberの配列、'5'はstring型で、配列のベースの型と異なる型の値をpushすることはできないため.

// c
let k: never = 4 // 型 'number' を型 'never' に割り当てることはできません。ts(2322)
// neverには他の型の値を割り当てることはできないため.

// d
let l: unknown = 4
let m = l * 2 // 算術演算の左辺には、'any' 型、'number' 型、'bigint' 型、または列挙型を指定する必要があります。ts(2362)
// 算術演算子がunknown型を受け入れないため. 型を絞り込むことで計算可能になる.