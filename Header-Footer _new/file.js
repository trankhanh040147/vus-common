let qty = 1;
document.addEventListener('DOMContentLoaded', function () {
  const iframe = document.getElementById("_iframe-form");
  const firstField = iframe.contentWindow.document.getElementById("popName");
  if (firstField) {
    firstField.addEventListener('keydown', function (event) {
      gtag('event', `keydown_first_field${qty}`);
      qty++;
    });
  }
});

jQuery(document).ready(function ($) {
  /* START <Load more posts on Blog Category page>*/

  // Create the script element
  var script = $('<script/>', {
    html: '(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({\'gtm.start\': new Date().getTime(), event: \'gtm.js\'}); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != \'dataLayer\' ? \'&l=\' + l : \'\'; j.async = true; j.src =\'https://www.googletagmanager.com/gtm.js?id=\' + i + dl; f.parentNode.insertBefore(j, f);})(window, document, \'script\', \'dataLayer\', \'GTM-K5TGJQ\');'
  });

  // Create the noscript element
  var noscript = $('<noscript/>').html('<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5TGJQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>');

  // Append the script and noscript elements to the body
  $('body').append(script).append(noscript);

})
jQuery(document).ready(function ($) {
  // Check if the current URL contains the specified string
  if (window.location.href.indexOf('https://english.vus.edu.vn/superkids.html') !== -1) {
    // Hide the .dropdown.btn-hotline element
    $('.dropdown.btn-hotline').hide();
  }
});

/* <-- START: GTM-tag -->
/*

$(document).ready(function() {
// Create the script element
var script = $('<script/>', {
  html: '(function (w, d, s, l, i) { w[l] = w[l] || []; w[l].push({\'gtm.start\': new Date().getTime(), event: \'gtm.js\'}); var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != \'dataLayer\' ? \'&l=\' + l : \'\'; j.async = true; j.src =\'https://www.googletagmanager.com/gtm.js?id=\' + i + dl; f.parentNode.insertBefore(j, f);})(window, document, \'script\', \'dataLayer\', \'GTM-K5TGJQ\');'
});

// Create the noscript element
var noscript = $('<noscript/>').html('<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K5TGJQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>');

// Append the script and noscript elements to the body
$('body').append(script).append(noscript);
});

*/
/* END: <-- GTM-tag --> */

$(".box-tuvan").click(function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: $("#form-Italk,#__section-form123,#__section-form-EH,#__section-form-SPK").offset().top
  }, 300);
});
var linkTag = document.createElement("link");
linkTag.rel = "shortcut icon";
linkTag.type = "image/png";
linkTag.href = "https://vus.edu.vn/wp-content/themes/proapp/favicon.png?v=1.2";

// Get the <head> element
var headElement = document.querySelector("head");

// Get the <title> element
var titleElement = document.querySelector("title");

// Insert the link tag before the <title> element
headElement.insertBefore(linkTag, titleElement);
$(document).ready(function () {
  jQuery(function ($) {
    // create an iframe
    iframe_form = $('<iframe>');
    // get all the param value in the current url
    currentUrl = new URL(window.location.href);
    searchParams = new URLSearchParams(currentUrl.search);
    // Get the full URL
    var fullUrl = window.location.href
    // Remove the query parameters
    var baseUrl = fullUrl.split('?')[0];

    $param = searchParams.toString();

    if ($param == '') {
      $param = 'currentUrl=' + baseUrl;
    }
    else {
      $param += '&currentUrl=' + baseUrl;
    }

    console.log($param)

    // assign the src
    iframe_form.attr("src", "https://vus.edu.vn/form-iframe-homepage?" + $param);

    //assign iframe id 
    iframe_form.attr("id", "__iframe-form");

    // disable scrolling of the iframe
    iframe_form.attr("scrolling", "no");

    // lazy load the iframe
    iframe_form.attr("loading", "lazy");

    // Set the width and height of the iframe to 100%
    iframe_form.css({ "width": "100%", "height": "100%" });

    // Add the iframe inside the section #__section-form
    $('#__section-form').append(iframe_form);
  })
})
$('.js-fmenu ').click(function () {
  $(this).toggleClass('active');
})
$('.menu-mobile li').click(function (e) {
  e.preventDefault();
  $('.menu-mobile li').removeClass('current-menu-item');
  $(this).toggleClass('current-menu-item');
})
// Lazy load iframe: youtube