// Constructor
Vec3 = function(x,y,z)
{
    this.x = x;
    this.y = y;
    this.z = z;
}

// Add method
Vec3.prototype.add = function( v )
{
this.x += v.x;
this.y += v.y;
this.z += v.z;
return this;
}

// Sum method
Vec3.prototype.sum = function()
{
return this.x + this.y + this.z;
}

Vec3.prototype.max = function()
{
    var max;

    if(this.x > this.y){
        max = x;
    }else{
        max = y;
    }

    if(this.z > max){
        max = z;
    }

    return max;
}

Vec3.prototype.min = function()
{
    var min;

    if(this.x > this.y){
        min = y;
    }else{
        min = x;
    }

    if(this.z < min){
        min = z;
    }

    return min;
}

Vec3.prototype.mid = function(){
     var mid;

    if(this.x > this.y & this.y > this.z){
            mid = y;
    }
    else if(this.y > this.z & this.z > this.x){
        mid = z;
    }
    else{
        mid = x;
    }

    return mid;
}

Vec3.prototype.AreaOfTriangle = function(a,b,c){

    var xg,yg,zg,s;
    xg = (b.v0-b.v2)*(c.v1-c.v2) - (c.v0-c.v2)*(b.v1-b.v2);
    yg = (c.v0-c.v2)*(a.v1-a.v2) - (a.v0-a.v2)*(c.v1-c.v2);
    zg = (a.v0-a.v2)*(b.v1-b.v2) - (b.v0-b.v2)*(a.v1-a.v2);
     s = Math.sprt(xg*xg+yg*yg+zg*zg)*(1/2)
     return s;
}