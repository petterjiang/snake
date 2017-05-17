//封装对象继承方法
function extend (child,parent){
    var F = function(){}
    F.prototype = parent.prototype;
    child.prototype = new F();
    child.prototype.constructor = child;
    child.uber = parent.prototype;
}
var Person = function(){}
Person.prototype.name = 'jiang';
Person.prototype.sname = function (){
    console.log(this.name);
}
var Student = function(name){
    this.name = name;
}

var Man = function (name,age){
    this.name = name;
    this.age = age;
}


//让子对象继承父对象

extend (Student,Person);
extend (Man,Student);

var man = new Man('wo',22);
man.sname();

var stu = new Student('ni');
stu.sname();

var person = new Person();
person.sname();


alert(stu.hasOwnProperty('prototype'));