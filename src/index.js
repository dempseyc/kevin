import _ from 'lodash';
import $ from 'jquery';
import scrollify from 'jquery-scrollify';
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

const $page1 = $('.mag-page1');

$(function() {
    $.scrollify({
        section: ".mag-page",
        easing: "easeOutExpo",
        scrollSpeed: 900,
        before: (index,sections) => {
            changeNavHighlight(index,sections);
        }
    });
});

function changeNavHighlight(index,sections) {
    let $all = $('#main-nav > li');
    $all.removeClass('highlight');
    let $li = $(`#main-nav li:eq(${index})`);
    $li.addClass('highlight');
}

function addNavLinks () {
    let links = ['home','calendar','projects','subscribe','apples'];
    let $nav = $('#main-nav');
    links.forEach((li)=>{
        let $link = $(`<li>`);
        let moveTo = `#${li}`;
        $link.click(()=>{
            $.scrollify.move(moveTo);
        });
        $link.text(li);
        $nav.append($link);
    });
    $('#main-nav li:first-child').addClass('highlight');
}

addNavLinks();