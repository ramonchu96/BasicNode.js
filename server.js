  var http = require('http'),
      url = require('url');
  var fs = require('fs');

  // 1- Creo el servidor 
  http.createServer(function (req, res) {
    var pathname = url.parse(req.url).pathname;
    // Si tiene esa ruta hago la respuesta (response ) que sea.
     // La aplicación atenderá a diferentes solicitudes, dependiendo de cual sea la URL
    if (pathname === '/') {
      // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
      fs.readFile('./index.html', (err, data) => {
        if(err) {
          console.log(err);
          res.end()
        } else {
          res.write(data);
          res.end();
        }
      })
      } else if (pathname === '/blog') {
        // Se añade una cabecera con información; tipo de contenido, fecha, etc ,,,
        res.writeHead(200, {
          'Content-Type': 'text/html'
        });
        // 2- Para visualizar una vista en HTML (rederizar) utilizamos módulo fs
        fs.readFile('./blog.html', (err, data) => {
          if(err) {
            console.log(err);
            res.end()
          } else {
            res.write(data);
            res.end();
          }
        })
    } else if (pathname === '/contacto') {
      // Como texto plano
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('./contacto.html', (err, data) => {
        if(err) {
          console.log(err);
          res.end()
        } else {
          res.write(data);
          res.end();
        }
      }) 
    } else if (pathname === '/historia') {
      // Como texto plano
      res.writeHead(200, {
        'Content-Type': 'text/html'
      });
      fs.readFile('./historia.html', (err, data) => {
        if(err) {
          console.log(err);
          res.end()
        } else {
          res.write(data);
          res.end();
        }
      }) 
    } else if (pathname === '/deportes') {
      // Un redireccionamiento
      res.writeHead(301, {
        'Location': 'http://www.marca.com'
      });
      res.end();
    } else if (pathname === '/servicios') {
      // Un redireccionamiento
      res.writeHead(301, {
        'Location': 'https://melillaturismo.com/'
      });
      res.end();
    } else if (pathname === '/volver') {
      // Un redireccionamiento
    // Un redireccionamiento
    res.writeHead(301, {
      'Location': 'http://127.0.0.1:3000'
    });
      res.end();
    
    
    
    } else {
        res.writeHead(404, {
        'Content-Type': 'text/plain'
      });
      res.end('Page not found\n')
    }
  }).listen(3000, "127.0.0.1");
  
  
  
  
  
  console.log('Server running at http://127.0.0.1:3000/');
