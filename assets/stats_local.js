$(function () {
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

  $('.code-example').each(function (index, el) {
    eval($(el).text());
  });
});
