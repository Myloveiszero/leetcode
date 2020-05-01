//优化一下爬楼梯算法
function f(n) {
    const w = new Map();
    // if(n >= 40) throw new Error('内存会溢出！')
    if(n == 1) return 1;
    if(n == 2) return 2;
    if(w.has(n)) {
        return w.get(n);
    }
    const ref = f(n-1) + f(n-2);
    w.set(n, ref);
    console.log(n,'---------------------')
    return ref;
}
console.log(f(100));