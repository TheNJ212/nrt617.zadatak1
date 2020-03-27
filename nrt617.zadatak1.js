var math=require("mathjs");

exports.RastojanjeIzmedjuDveTacke= (ax,ay,bx,by)=>{
    return math.sqrt(math.square(bx-ax)+math.square(by-ay));
}

exports.Hipotenuza= (a,b)=>{
    return math.sqrt(math.square(a)+math.square(b));
}

exports.PovrsinaKruga= (r)=>{
    return math.square(r)*math.pi;
}

exports.ZapreminaValjka=(r,H)=>{
    return this.PovrsinaKruga(r)*H;
}
exports.PovrsinaTrougla=(a,b,angle)=>{
    return a*b*math.sin(angle*math.PI/180)/2;
}
