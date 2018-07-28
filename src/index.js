import _ from 'lodash';
import $ from 'jquery';
import './style.scss';

let $body = $(document.body);

function component() {
    let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');
    return element;

    
}
function jqComponent() {
    let $el = $('<div>');
    $el.text('jquery ready');
    return $el;
}

document.body.appendChild(component());
$body.append(jqComponent());
