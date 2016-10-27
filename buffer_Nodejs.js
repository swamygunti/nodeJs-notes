var buffer = new Buffer("hello.");
console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
console.log(buffer[2]);
console.log(buffer[7]);

buffer.write("po.");
console.log(buffer.toString());

buffer.write("pooland");
console.log(buffer.toString());