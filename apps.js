var friends = ['Haley', 'Zellie', 'Josh', 'Heather', 'Lauren'];
var places = ['closet', 'bathroom', 'kitchen', 'garage', 'garden', 'attic', 'bedroom', 'shed', 'basement', 'living room'];
var weapons = ['Wiimote', 'frying pan', 'hot dog', 'corgie', 'cake', 'fork', 'drill', 'sticky note', 'spring', 'potato', 'loofa', 'toothbrush', 'brush', 'cup', 'plate', 'chair', 'book', 'coaster', 'pillow', 'passport'];


for (var i = 1; i <= 100; i++) {
    var $h3 = $('<h3> Accusation' + i + '</h3>');
    $h3.appendTo('body');
    var alerter = displayAlert(i);
    $h3.click(alerter);
};

function displayAlert(num) {
    var friend = friends[num % friends.length];
    var place = places[num % places.length];
    var weapon = weapons[num % weapons.length];
    return function () {
        alert('I accuse ' + friend + ', with the ' + weapon + ' in the ' + place);
    };
};


