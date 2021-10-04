"use strict";

class Message {
  constructor(text) {
    this.text = text;
    this.encrypted = "";
  }

  encrypt() {
    let symbolsAsNumbers = [];
    for (let i = 0; i < this.text.length; i++) {
      // charCodeAt https://mzl.la/2KExdCr
      // push https://mzl.la/3oba48D
      symbolsAsNumbers.push(this.text.charCodeAt(i));
    }
    // join https://mzl.la/3sMknDs
    this.encrypted = symbolsAsNumbers.join(" ");
  }

  decrypt() {
    // split https://mzl.la/3oaa6O2
    let encryptedStringAsArray = this.encrypted.split(" ");
    // Spread оператор https://mzl.la/3p5PDep
    // console.log(...[10, 3, 89]) <--- посмотрите в консоли пример работы spread оператора
    // fromCharCode https://mzl.la/3pdsiHH
    let decryptedString = String.fromCharCode(...encryptedStringAsArray);
    return decryptedString;
  }
}

// let message = new Message("hello world");
// message.encrypt();
// console.log(message.encrypted);
// console.log(message.decrypt());

// просто другой вид кодировки
class HashMessage extends Message {
  constructor(text, hash) {
    super(text);
    this.hash = hash;
  }

  hashEncrypt() {
    // btoa https://mzl.la/3c5VTz8
    this.encrypted = window.btoa(this.text + "|" + this.hash);
  }

  hashDecrypt() {
    // atob https://mzl.la/3c5VTz8
    let fullDecryptedString = window.atob(this.encrypted);
    // indexOf https://mzl.la/3c8xCbF
    let positionOfSeparator = fullDecryptedString.indexOf("|");
    // slice https://mzl.la/365xoyg
    return fullDecryptedString.slice(0, positionOfSeparator);
  }
}

let hashMessage1 = new HashMessage("lorem ipsum", "adsf!@#_(*+-&ktyusqewad");
hashMessage1.hashEncrypt();
console.log(hashMessage1.encrypted);
console.log(hashMessage1.hashDecrypt());

hashMessage1.encrypt();
console.log(hashMessage1.encrypted);
console.log(hashMessage1.decrypt());
