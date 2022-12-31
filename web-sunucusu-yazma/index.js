
const http = require('http')
const port = 5000
const server = http.createServer((req, res) => {
    const url = req.url
    switch (url) {
        case '/':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h2>Anasayfaya hosgeldiniz</h2>','utf-8')
            break
        case '/index':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h2>Index sayfasina hosgeldiniz</h2>')
            break
        case '/hakkimda':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h2>Hakkimda sayfasina hosgeldiniz</h2>')
            break
        case '/iletisim':
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write('<h2>Iletisim sayfasina hosgeldiniz</h2>')
            break
        default:
            res.writeHead(404, { 'Content-Type': 'text/html' })
            res.write('<h2>404 Not Found</h2>')

    }
    res.end()
})

server.listen(port,()=>{
    console.log(`Server ${port} portunda çalıştırıldı.`)
})
