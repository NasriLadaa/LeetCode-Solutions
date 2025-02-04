//https://leetcode.com/problems/flatten-nested-list-iterator/description/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
public class NestedIterator implements Iterator<Integer> {

    List<Integer> mylist = null;
    int current = 0;
    public NestedIterator(List<NestedInteger> nestedList) {
    mylist = new ArrayList<>();
        for ( NestedInteger num:nestedList){
            helper(num);
        }
    }

    @Override
    public Integer next() {
        return mylist.get(current++);
    }

    @Override
    public boolean hasNext() {
        return current < mylist.size();
    }


    public void helper(NestedInteger num){
        if ( num.isInteger()){
            mylist.add(num.getInteger());
        }
        else{
            for (NestedInteger n  :num.getList()){
                helper(n);
            }
        }
    }
}

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i = new NestedIterator(nestedList);
 * while (i.hasNext()) v[f()] = i.next();
 */