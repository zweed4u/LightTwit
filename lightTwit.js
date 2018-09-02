if (window.location.href.includes('https://twitter') || window.location.href.includes('https://www.twitter')) {
    var username = window.location.href.split('.com/')[1].split('?')[0].split('/')[0];  // get what's after the domain, what's before query string and what's before the next path - username
    if (window.location.href.includes('/status/')) {
        var tweet_id = window.location.href.split('/status/')[1].split('?')[0].split('/')[0];  // get tweet id - grab before querystring and further path
        window.location.href = 'https://mobile.twitter.com/' + username + '/status/' + tweet_id;
    }
    else {
        window.location.href = 'https://mobile.twitter.com/' + username;
    }
}
