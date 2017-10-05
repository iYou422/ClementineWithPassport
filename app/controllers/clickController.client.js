'use strict';

(function() {
  var addButton = document.querySelector('.btn-add');
  var deleteButton = document.querySelector('.btn-delete');
  var clickNbr = document.querySelector('#click-nbr');
  var apiUrl = appUrl + '/api/:id/clicks';

  function updateClickCount(data) {
    var clicksObject = JSON.parse(data);
    clickNbr.innerHTML = clicksObject.clicks;
  }

  ajaxFunctions.ready(ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount));

  addButton.addEventListener('click', function() {
    clickNbr.innerHTML = +clickNbr.innerHTML + 1;
    ajaxFunctions.ajaxRequest('POST', apiUrl, function() {
      //ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
    });
  }, false);

  deleteButton.addEventListener('click', function() {
    clickNbr.innerHTML = '0';
    ajaxFunctions.ajaxRequest('DELETE', apiUrl, function() {
      //ajaxFunctions.ajaxRequest('GET', apiUrl, updateClickCount);
    });
  }, false);
})();