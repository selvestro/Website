$(function () {
  var money2_data = [
    {"year": "2008", "premiums": 254007500, "claims": 150800910},
    {"year": "2009", "premiums": 264007500, "claims": 168000910},
    {"year": "2010", "premiums": 270407500, "claims": 180800910},
    {"year": "2011", "premiums": 280407500, "claims": 200800910},
    {"year": "2012", "premiums": 294007500, "claims": 260000910},
    {"year": "2013", "premiums": 354007500, "claims": 308000910},
    {"year": "2014", "premiums": 404007500, "claims": 368000910}
  ];

  Morris.Line({
  element: 'line2-example',
  data: money2_data,
  xkey: 'year',
  ykeys: ['premiums', 'claims'],
  labels: ['Собрано страховых премий', 'Выплачено по страховым случаям']
});

  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
});
