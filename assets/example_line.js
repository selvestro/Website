$(function () {
  // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
  var money_data = [
    {"year": "2008", "premiums": 25407500, "claims": 15800910},
    {"year": "2009", "premiums": 26407500, "claims": 16800910},
    {"year": "2010", "premiums": 27407500, "claims": 18800910},
    {"year": "2011", "premiums": 28407500, "claims": 20800910},
    {"year": "2012", "premiums": 29407500, "claims": 26000910},
    {"year": "2013", "premiums": 35407500, "claims": 30800910},
    {"year": "2014", "premiums": 40407500, "claims": 36800910}
  ];

  Morris.Line({
  element: 'line-example',
  data: money_data,
  xkey: 'year',
  ykeys: ['premiums', 'claims'],
  labels: ['Собрано страховых премий', 'Выплачено по страховым случаям']
});

  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
});
