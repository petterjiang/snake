require.config({
    baseUrl: '../../src/js',
    paths: {
        snake: 'modules/snake',
        jquery:'lib/jquery',
        jsSrc:document.getElementById('main').getAttribute('jsSrc')
    }
});
define(['jsSrc'],function(){
});