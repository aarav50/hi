/**
 * @param {string} s
 * @return {number}
 */
var bb;
onEvent("button1", "click", function( ) {
  bb = prompt("num");
  bb = bb.toUpperCase();
  romanToInt(bb);
  setText("label1", completenum);
});
var completenum = 0
var runtime = 0
var staus = 1
var lastdig = 1
var numlist = [1]
var cur = 0
var nex = 0
var lete = ["I", "V", "X", "L", "C", "D", "M"]
function bla(num, lett, s, i) {
        console.log(completenum)
        console.log(num)
        console.log(lett)
        if (num < lett) {
                completenum = completenum - num
        } else {
                completenum = completenum + num
        }

}


function listmake() {
        for (var i = 2; i < 8; i++) {
                
                        if (i % 2 == 0) {
                                lastdig = lastdig * 5
                        } else {
                                lastdig = lastdig * 2
                        }
                        numlist.push(lastdig)

                
        }

}
listmake()
console.log(numlist)
var romanToInt = function(s) {
        console.log("bla")
        for (var i = 0; i < s.length; i++) {
                for (var a = 0; a < 7; a++) {
                        if (s[i] == lete[a]) {
                                cur = numlist[a]
                        }
                        if (s[i + 1] == lete[a]) {
                                nex = numlist[a]
                        }
                }
                bla(cur, nex, s, i)

        }
        return completenum;
};
