//  Race condition test with JavaScript event loop
//  Conclusion:  No issue since Javascript is singl threaded, including event loop

var arr = [];
var timer;

var startRange = 100 ;
var endRange = 200;

function longTask(l) {
   arr.push(l) ;

   if (timer) {
      clearTimeout(timer) ;
   }

   timer = setTimeout(function()
      {
         //  var x = arr.splice(0, arr.length) ;
         console.log('arr:  ' + arr.length) ;
         for (var i = 0; i < 500000; i++) {
            //  forced delay
            process.stdout.write('');
         }
         arr = [] ;
	 console.log('Done forced delay. arr:  ' + arr.length) ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

function getSample(key) {
   return key + (new Date()).getTime();
}

function sample1() {
   setTimeout(function()
      {
         console.log('Sample1.  Arr Length:  ' + arr.length) ;
         longTask(getSample('sample 1:  ')) ;
         sample1() ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

function sample2() {
   setTimeout(function()
      {
         console.log('Sample2.  Arr Length:  ' + arr.length) ;
         longTask(getSample('sample 2:  ')) ;
         sample2() ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

sample1();
sample2();
