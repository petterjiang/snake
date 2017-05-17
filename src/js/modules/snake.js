/**
 * Created by 蒋维佳 on 2017/5/4.
 */
define([],function(){
    var SnakePlayer = function(name){
        this.body = document.getElementById(name);
        this.timer=null;
        this.timeSnake=100;
        this.direction='right';
        this.snakeArray=[];
        this.left=0;
        this.top=0;
        this.stat = false;
    }
    SnakePlayer.prototype = {
        initSnake:function(){
            this.createPlayer();
        },
        createPlayer:function(){
            //创建格子；
            for(var i=0;i<400;i++){
                var divCreate = document.createElement('div');
                divCreate.className='gz';
                this.body.appendChild(divCreate);
            }
            //this.playGame();
        },
        playGame:function(){
            if (this.stat == true){
                return false;
            }
            this.stat = true;
            this.snakePosition();
        },
        snakeAddBody:function(){
            var _this = this;
            var sbody = document.createElement('div');
            sbody.className = 'sbody';

            this.body.appendChild(sbody);
            this.snakeArray.push(sbody);
            this.snakeBodyStyle();
        },
        snakeBodyStyle:function(){

        },
        snakePosition:function(){
            //蛇在格子中的起始位置为中间；
            var _this = this;
            var everyBody = this.body.getElementsByTagName('div');
            var snakePosition = parseInt(everyBody.length/2+10);
            _this.left=everyBody[snakePosition].offsetLeft;
            _this.top=everyBody[snakePosition].offsetTop;

            for (var i=0; i<3;i++){
                this.snakeAddBody();
                var style={
                    left:(_this.left-i*20)+'px',
                    top:_this.top+'px'}
                for( var s in style)
                {
                    this.snakeArray[i].style[s]=style[s];
                }
            }
            this.snakeMove();
            this.food();
        },
        snakeMove:function(){
            var _this = this;
            document.onkeydown = function(event){
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if(e && e.keyCode==38 && _this.direction!='down'){//上
                    _this.direction = 'up';
                }
                if(e && e.keyCode==37 && _this.direction!='right'){//左
                    _this.direction = 'left';
                }
                if(e && e.keyCode==40 && _this.direction!='up'){//下
                    _this.direction = 'down';
                }
                if(e && e.keyCode==39 && _this.direction!='left'){//右
                    _this.direction = 'right';
                }
            };
            _this.timer = setInterval(function(){
                if(_this.direction == 'left'){
                    _this.moves('left')
                }
                if(_this.direction == 'right'){
                    _this.moves('right')
                }
                if(_this.direction == 'up'){
                    _this.moves('up')
                }
                if(_this.direction == 'down'){
                    _this.moves('down')
                }
            },_this.timeSnake);
        },
        moves:function(fx){
            var _this = this;
            var offLeft = parseInt(_this.snakeArray[0].offsetLeft);
            var offTop = parseInt(_this.snakeArray[0].offsetTop);
            var foodLeft = parseInt(document.getElementsByClassName('food')[0].style.left);
            var foodTop = parseInt(document.getElementsByClassName('food')[0].style.top);
            if(offLeft < 0 || offLeft > 380 ||offTop < 0 || offTop >380 ){
                this.endGame();
            }else{
                if(offLeft==foodLeft && offTop == foodTop){
                    _this.food();
                    _this.snakeAddBody();
                }
                for(var i=_this.snakeArray.length-1; i>=0; i--){
                    if(i==0 && fx=='right'){
                        _this.snakeArray[i].style.left =(_this.snakeArray[i].offsetLeft+20) +'px';
                    }else if(i==0 && fx=='left'){
                        _this.snakeArray[i].style.left =(_this.snakeArray[i].offsetLeft-20) +'px';
                    }else if(i==0 && fx=='up'){
                        _this.snakeArray[i].style.top =(_this.snakeArray[i].offsetTop-20) +'px';
                    }else if(i==0 && fx=='down'){
                        _this.snakeArray[i].style.top =(_this.snakeArray[i].offsetTop+20) +'px';
                    }else if(offLeft== parseInt(_this.snakeArray[i].offsetLeft) && offTop == parseInt(_this.snakeArray[i].offsetTop)){
                        _this.endGame();
                    }else{
                        _this.snakeArray[i].style.left=(_this.snakeArray[i-1].offsetLeft) +'px';
                        _this.snakeArray[i].style.top=(_this.snakeArray[i-1].offsetTop) +'px';
                    }
                }
            }
        },
        food:function(){
            if(document.getElementsByClassName('food')[0]){
                this.body.removeChild(document.getElementsByClassName('food')[0]);
            }
            var foodBody = document.createElement('div');
            var foodLeft = this.randomNum(0,19)*20;
            var foodTop = this.randomNum(0,19)*20;
            for (var i=0;i<this.snakeArray.length;i++){
                var snakeLeft = parseInt(this.snakeArray[i].left);
                var snakeTop = parseInt(this.snakeArray[i].top);
                if (foodLeft==snakeLeft && foodTop==snakeTop) {
                    this.food();
                }
            }
            this.body.appendChild(foodBody);
            foodBody.className = 'food'
            foodBody.style.left = foodLeft+'px';
            foodBody.style.top = foodTop+'px';
        },
        randomNum:function (minNum,maxNum){
            switch(arguments.length){
                case 1:
                    return parseInt(Math.random()*minNum+1,10);
                    break;
                case 2:
                    return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10);
                    break;
                default:
                    return 0;
                    break;
            }
        },
        endGame:function(){
            alert('game over!');
            clearInterval(this.timer);
            this.timer=null;
            this.timeSnake=100;
            this.direction='right';
            this.snakeArray=[];
            this.left=0;
            this.top=0;
            this.stat = false;
            var arr = document.getElementsByClassName('sbody');
            for(var i=arr.length-1; i>=0; i--){
                this.body.removeChild(arr[i]);
            }
        }
    }
    var snakePlayer=new SnakePlayer('snakePlayer');
    return snakePlayer;
})




