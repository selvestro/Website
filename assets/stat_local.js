$(function () {
  // data stolen from http://howmanyleft.co.uk/vehicle/jaguar_'e'_type
  var tax_data = [
       {"period": "2011 Q3", "licensed": 3407, "sorned": 660},
       {"period": "2011 Q2", "licensed": 3351, "sorned": 629},
       {"period": "2011 Q1", "licensed": 3269, "sorned": 618},
       {"period": "2010 Q4", "licensed": 3246, "sorned": 661},
       {"period": "2009 Q4", "licensed": 3171, "sorned": 676},
       {"period": "2008 Q4", "licensed": 3155, "sorned": 681},
       {"period": "2007 Q4", "licensed": 3226, "sorned": 620},
       {"period": "2006 Q4", "licensed": 3245, "sorned": null},
       {"period": "2005 Q4", "licensed": 3289, "sorned": null}
  ];
  Morris.Line({
    element: 'hero-graph',
    data: tax_data,
    xkey: 'period',
    ykeys: ['licensed', 'sorned'],
    labels: ['Licensed', 'Off the road']
  });

  Morris.Donut({
    element: 'hero-donut',
    data: [
      {label: 'Jam', value: 25 },
      {label: 'Frosted', value: 40 },
      {label: 'Custard', value: 25 },
      {label: 'Sugar', value: 10 }
    ],
    formatter: function (y) { return y + "%" }
  });

  Morris.Line({
  element: 'line-example',
  data:[
    {
        "area": 468,
        "capital": "Andorra la Vella",
        "y": "2006",
        "createdAt": "2015-03-07T11:11:27.611Z",
        "currency": "Euro",
        "name": "Andorra",
        "objectId": "tgziZQesRG",
        "phone": "376",
        "population": 490,
        "tld": ".ad",
        "updatedAt": "2015-03-07T11:11:27.611Z"
    },
    {
        "area": 828,
        "capital": "Abu Dhabi",
        "y": "2007",
        "createdAt": "2015-03-07T11:11:27.636Z",
        "currency": "Dirham",
        "name": "United Arab Emirates",
        "objectId": "rr8btfKNKI",
        "phone": "971",
        "population": 880,
        "tld": ".ae",
        "updatedAt": "2015-03-07T11:11:27.636Z"
    },
    {
        "area": 647,
        "capital": "Kabul",
        "y": "2008",
        "createdAt": "2015-03-07T11:11:27.645Z",
        "currency": "Afghani",
        "name": "Afghanistan",
        "objectId": "NfsDuWDQvf",
        "phone": "93",
        "population": 750,
        "tld": ".af",
        "updatedAt": "2015-03-07T11:11:27.645Z"
    },
    {
        "area": 443,
        "capital": "St. John's",
        "y": "2009",
        "createdAt": "2015-03-07T11:11:27.654Z",
        "currency": "Dollar",
        "name": "Antigua and Barbuda",
        "objectId": "x187fUz8pS",
        "phone": "+1-268",
        "population": 867,
        "tld": ".ag",
        "updatedAt": "2015-03-07T11:11:27.654Z"
    },
    {
        "area": 102,
        "capital": "The Valley",
        "y": "2010",
        "createdAt": "2015-03-07T11:11:27.664Z",
        "currency": "Dollar",
        "name": "Anguilla",
        "objectId": "Hda8szrAZn",
        "phone": "+1-264",
        "population": 132,
        "tld": ".ai",
        "updatedAt": "2015-03-07T11:11:27.664Z"
    }
],
  xkey: 'y',
  ykeys: ['area', 'population'],
  labels: ['Series A', 'Series B']
});

  Morris.Bar({
    element: 'hero-bar',
    data: [
      {device: 'iPhone', geekbench: 136},
      {device: 'iPhone 3G', geekbench: 137},
      {device: 'iPhone 3GS', geekbench: 275},
      {device: 'iPhone 4', geekbench: 380},
      {device: 'iPhone 4S', geekbench: 655},
      {device: 'iPhone 5', geekbench: 1571}
    ],
    xkey: 'device',
    ykeys: ['geekbench'],
    labels: ['Geekbench'],
    barRatio: 0.4,
    xLabelAngle: 35,
    hideHover: 'auto'
  });

  new Morris.Line({
    element: 'examplefirst',
    xkey: 'year',
    ykeys: ['value'],
    labels: ['Value'],
    data: [
      {year: '2008', value: 20},
      {year: '2009', value: 10},
      {year: '2010', value: 5},
      {year: '2011', value: 5},
      {year: '2012', value: 20}
    ]
  });

  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
});
