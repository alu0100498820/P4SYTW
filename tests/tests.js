var expect = chai.expect;

describe("Test para ConverTemp", function() {

    it("Debería ser: 32e4F", function() {
      var temp = new Temperatura();

      temp.set_valor(32e4);
      temp.set_tipo("F");

      var espia = sinon.spy();
      espia(temp.get_valor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(32e4)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      expect(temp.get_valor()).to.equal(32e4);
      expect(temp.get_tipo()).to.equal("F");
    });

    it("Debería ser: -4.3e-2C", function() {
      var temp = new Temperatura();
      temp.set_valor(-4.3e-2);
      temp.set_tipo("C");

      var espia = sinon.spy();
      espia(temp.get_tipo());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith("C")).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.string)).to.be.true;

      expect(temp.get_valor()).to.equal(-4.3e-2);
      expect(temp.get_tipo()).to.equal("C");
    });

    it("0.032C = 32.0576F", function() {
      var temp = new Temperatura();

      temp.set_valor(0.032);
      temp.set_tipo("C");

      var espia = sinon.spy();
      espia(temp.get_valor());

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith(0.032)).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.number)).to.be.true;

      var result = temp.convertir();

      expect(result).to.equal("El resultado es: 32.0576 F");
    });


    it("45C = 113F", function() {
      /*var temp = new Temperatura();

      temp.set_valor(32.0576);
      temp.set_tipo("F");

      var result = temp.convertir();*/
      original.value = "45C";
      convertir()
      expect(converted.innerHTML).to.equal("113 Fahrenheit");

      var espia = sinon.spy();
      espia(result);

      expect(espia.called).to.be.true;
      expect(espia.calledOnce).to.be.true;
      expect(espia.firstCall.calledWith("El resultado es: 113 Fahrenheit")).to.be.true;
      expect(espia.firstCall.calledWith(sinon.match.string)).to.be.true;

      expect(result).to.equal("El resultado es:113 Fahrenheit");
    });

    it("convertir()", function() {
      window.onload = function() {
        var ini = document.getElementById("inicial");

        ini.value = "0C";
        convertir();

        var espia = sinon.stub();
        espia.withArgs("El resultado es: 32.0576 F").returns(convertir());
        espia.throws();

        expect(espia("El resultado es: 32.0576 F")).to.equal(convertir());
        expect(espia).to.throw(Error);

        expect(resultado.innerHTML).to.equal("El resultado es: 32.0576 F");
      }
    });
});