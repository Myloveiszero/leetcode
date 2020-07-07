
 function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
  }

var oddEvenList = function(head) {
    let list1 = new ListNode(null,null),l1Current = list1,
        list2 = new ListNode(null,null),l2Current = list2,
        i = 1,
        current = head;
        while(current) {
            if(i % 2 !== 0) {
                l1Current.next = current;
                l1Current = l1Current.next;
            } else {
                l2Current.next = current;
                l2Current = l2Current.next;
            }
            i ++;
            current = current.next;
        }
        if(i % 2 !== 0) {
            l1Current.next = null;
        } else {
            l2Current.next = null;
        }
        l1Current.next = list2.next;
        return list1.next;
};