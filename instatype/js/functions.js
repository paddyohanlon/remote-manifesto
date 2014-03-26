var accessTokenHash = window.location.hash;

// 14 is number of characters in #access_token=
var accessToken = accessTokenHash.substring(14,accessTokenHash.length);

console.log(accessToken);