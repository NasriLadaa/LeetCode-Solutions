//https://leetcode.com/problems/implement-queue-using-stacks/description/


class MyQueue  {
    constructor(){
        this.s1 = [];
        this.s2 = [];
    }

    push(x) {
    this.s1.push(x)
    }

    pop() {
    if ( this.s2.length == 0){
         while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2.pop();
}

peek(){
    if ( this.s2.length == 0){
       while(this.s1.length){
            this.s2.push(this.s1.pop())
        }
    }
    return this.s2[this.s2.length -1];    
}

empty(){
    return !this.s1.length && !this.s2.length
}



}





/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */