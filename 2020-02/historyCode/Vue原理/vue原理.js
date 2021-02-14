var a = {
    age:18
}
Object.defineProperty(a,'hisage',{
    get: function(){
        return this.age;
    },
    set: function(newdata){
        this.age = newdata;
    }
});
a.hisage = 2005;
console.log(a.age);