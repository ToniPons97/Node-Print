const http = require('http');
const fs = require('fs');
const formidable = require('formidable');
const exec = require('child_process').exec;

function renderHTMLResponse(fileName, res) {
    fs.readFile(fileName, (err, data) => {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
}

http.createServer((req, res) => {
    if (req.url === '/fileupload') {
        let form = new formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            let oldpath = files.filetoupload.filepath;
            //console.log(files.filetoupload.originalFilename);
            let newpath = '/tmp/' + files.filetoupload.originalFilename;

            fs.rename(oldpath, newpath, err => {
                if (err) throw err;
                renderHTMLResponse('success.html', res);
            });

            let cmd = `lp -d Samsung_C48x_Series \"${newpath}\"`;
            exec(cmd, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error}`);
                    return;
                }

                if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    return;
                }
                //console.log(`stdout: ${stdout}`);
            });
        });
    } else {
        renderHTMLResponse('index.html', res);
    }
}).listen(8081);