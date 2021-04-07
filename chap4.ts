// ex1
// 関数のパラメータは、文脈から型を推論できる特別なケースを除き、推論しない。
// 戻り値の型は推論する。

// ex2
function sumVariadic(): number {
    return Array
        .from(arguments)
        .reduce((total, n) => total + n, 0)
}

sumVariadic(1, 2, 3)

function sumVariadicSafe(...numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0)
}

sumVariadicSafe(1, 2, 3)
// argumentsは型安全ではない。
// 代わりにレストパラメータを使う

// ex3
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (destination: string): Reservation
}

let reserve: Reserve = (
    fromOrDestination: Date | String,
    toOrDestination?: Date | String,
    destination?: string) => {
    //
}

// ex4
function call<T extends [unknown, string, ...unknown[]], R> (
    f:(...args: T) => R,
    ...args: T
): R {
    return f(...args)
}

function take(n: number, s: string,): string
{
    return s.substr(0, n)
}

call(take, 1, "abc")
call(take, 123, 1)

// ex5

function is<T>(a: T, ...args: T[]): boolean {
    return args.every((e) => e === a)
}

is('string', 'otherstring') // false
is(true, false) // false
is(42, 42) // false
is(10, 'foo')
is([1], [1, 2], [1, 2, 3])
