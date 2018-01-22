//  Race condition test with JavaScript event loop
//  Conclusion:  No issue since Javascript is singl threaded, including event loop

var arr = [];
var timer;

var startRange = 100 ;
var endRange = 1000;

function processLongTask() {
   console.log('arr:  ' + arr.length) ;
   for (var i = 0; i < 500000; i++) {
      //  forced delay
      process.stdout.write('');
   }
   arr = [] ;
   console.log('Done forced delay. arr:  ' + arr.length) ;
}

function scheduleLongTask(l) {
   arr.push(l) ;

   if (arr.length === 25) {
      console.log('Force processing.') ;
      processLongTask() ;
   } else {
      if (timer) {
         clearTimeout(timer) ;
      }

      timer = setTimeout(function()
         {
            processLongTask() ;
         }, 500) ;
   }
}

function getSample(key) {
   return key + (new Date()).getTime();
}

function sample1() {
   setTimeout(function()
      {
         console.log('Sample1.  Arr Length:  ' + arr.length) ;
         scheduleLongTask(getSample('sample 1:  ')) ;
         sample1() ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

function sample2() {
   setTimeout(function()
      {
         console.log('Sample2.  Arr Length:  ' + arr.length) ;
         scheduleLongTask(getSample('sample 2:  ')) ;
         sample2() ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

function sample3() {
   setTimeout(function()
      {
         console.log('Sample2.  Arr Length:  ' + arr.length) ;
         scheduleLongTask(getSample('sample 3:  ')) ;
         sample3() ;
      }, Math.floor(Math.random() * ((endRange-startRange)+1) + startRange));
}

sample1();
sample2();
sample3();
