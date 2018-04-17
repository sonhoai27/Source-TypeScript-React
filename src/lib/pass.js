function checkPassword(pass) {

    var numbers = pass.match(/\d+/g);
    var uppers  = pass.match(/[A-Z]/);
    var lowers  = pass.match(/[a-z]/);
    var special = pass.match(/[!@#$%\^&*\+]/);

    if (numbers === null || uppers === null || lowers === null || special === null)
        valid = false;

    if (numbers !== null && uppers !== null && lowers !== null && special !== null)
        valid = true;

    return valid;

}

function scorePassword(pass) {
    var score = 0;
    if (!pass)
        return score;

    // award every unique letter until 5 repetitions
//  var letters = new Object();
    var letters = {};
    for (var i=0; i<pass.length; i++) {
        letters[pass[i]] = (letters[pass[i]] || 0) + 1;
        score += 5.0 / letters[pass[i]];
    }

    // bonus points for mixing it up
    var variations = {
        digits: /\d/.test(pass),
        lower: /[a-z]/.test(pass),
        upper: /[A-Z]/.test(pass),
        nonWords: /\W/.test(pass)
    };

    variationCount = 0;
    for (var check in variations) {
        variationCount += (variations[check] === true) ? 1 : 0;
    }
    score += (variationCount - 1) * 10;

//    return parseInt(score);
    return parseInt(score, 10);
}

//********************************************************
// run scoring and apply a value to it
//********************************************************

function checkPassStrength(pass) {
    var score = scorePassword(pass);
    if (score > 79)
        return 'excellent';

    if (between(score, 60, 79))
        return 'strong';

    if (between(score, 40, 59))
        return 'good';

    if (between(score, 21, 39))
        return 'weak';

    if (score < 21)
        return 'poor';

    return '';
}
module.exports = {
    checkPassword,scorePassword,checkPassStrength
}