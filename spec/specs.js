describe('triangleType', function(){

    it("it checks whether given inputs are valid measurements", function(){
        expect(triangleType(3,7,2)).to.equal(false);
    });

    it("it finds type of triangle for the given two eual and one different measurements", function(){
        expect(triangleType(6,9,6)).to.equal("isosceles");
    });

    it("it finds type of triangle for the given three different measurements", function(){
        expect(triangleType(11,20,30)).to.equal("scalene");
    });

    it("it finds type of triangle for the given equal measurements measurements", function(){
        expect(triangleType(20,20,20)).to.equal("equilateral");
    });

    
});
