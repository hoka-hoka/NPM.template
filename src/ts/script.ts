import $ from 'jquery';

(function($) {
  let a: JQuery<HTMLElement> = $('<div class="newElement">');
})(jQuery);

type C = {a: string, b?: number};

function f({a, b}: C): string {
  return a;
}
let rezult = f({a:'Vasia', b:10});
console.log(rezult);
