
console.log(masodfokuEgyenletMegoldasa(1,2,1))
console.log(masodfokuEgyenletMegoldasaTeszt())

// Másodfokú egyenlet calculator online http://eprog.hu/oktatas/javascript/feladat05.html

function masodfokuEgyenletMegoldasa(a, b, c) {
    let x1 = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    let x2 = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
    
    if(a === 0){
        const eredmeny = {
            X1: 0,
            X2: 0,
        };
        return "a nem lehet nulla";
    }else{
        const eredmeny = {
            X1: x1,
            X2: x2,
        };
        return eredmeny;
    }
}

//komlex D -> negatív
// 10 különböző teszteset, szövegre nem csak számokra
// vart x1 = mem(,,)x1-e
//      x2 = mem(,,)x2-e

function masodfokuEgyenletMegoldasaTeszt(){
    let eredmeny = masodfokuEgyenletMegoldasa(2,4,1);
    let vartx1 = -0.2928932188134524;
    let vartx2 = -1.7071067811865475;
    let kapottx1 = eredmeny.X1;
    let kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(1,1,1);
    vartx1 = "Nincs megoldás";
    vartx2 = "Nincs megoldás";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(0,2,5);
    vartx1 = "a nem lehet nulla";
    vartx2 = "hibás";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(2,0,5);
    vartx1 = "Nincs megoldás";
    vartx2 = "Nincs megoldás";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(5,2,0);
    vartx1 = 0;
    vartx2 = -0.4;
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);

    eredmeny = masodfokuEgyenletMegoldasa(0,0,0);
    vartx1 = "a nem lehet nulla";
    vartx2 = "nincs";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(-1,2,3);
    vartx1 = -1;
    vartx2 = 3;
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(-1,-2,-3);
    vartx1 = "Nincs megoldás";
    vartx2 = "Nincs megoldás";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(1,-2,3);
    vartx1 = "Nincs megoldás";
    vartx2 = "Nincs megoldás";
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(1,2,-3);
    vartx1 = 1;
    vartx2 = -3;
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(6782645, -65678627, 545641);
    vartx1 = 9.675020602952596;
    vartx2 = 0.008314880476065831;
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
    
    eredmeny = masodfokuEgyenletMegoldasa(1.545468,-34.766346,4);
    vartx1 = 22.380026764654623;
    vartx2 = 0.11564833182100812;
    kapottx1 = eredmeny.X1;
    kapottx2 = eredmeny.X2;
    console.assert(vartx1 === kapottx1 && vartx2 === kapottx2, `várt: ${vartx1, vartx2} kapott: ${kapottx1, kapottx2} HIBA!`);
}