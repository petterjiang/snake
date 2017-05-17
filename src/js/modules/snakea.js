define(['snake','jquery'],function(snake,$){
    snake.initSnake();
    $('#start').click(function(){
        snake.playGame();
    })
});