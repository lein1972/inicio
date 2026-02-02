const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // Tu lógica de suma
  const suma = (a, b) => a + b;
  const resultado = suma(5, 5);

  res.end(`<h1>Hola! El resultado de la suma es: ${resultado}</h1><p>Desplegado con CD desde GitHub</p>`);
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});