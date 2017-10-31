var through = require('through2');
var gutil = require('gulp-util');
var PluginError = require('gulp-util').PluginError;
var fs = require("fs");
// consts
var PLUGIN_NAME = 'gulp-preview-cshtml';

module.exports = function(opts, projectSource) {
    return through.obj(function(file, encoding, callback) {
        if (file.isNull()) {
            // nothing to do
            return callback(null, file);
        }

        if (file.isStream()) {
            // file.contents is a Stream - https://nodejs.org/api/stream.html
            this.emit('error', new PluginError(PLUGIN_NAME, 'Streams not supported!'));

            // or, if you can handle Streams:
            //file.contents = file.contents.pipe(...
            //return callback(null, file);
        } else if (file.isBuffer()) {
            // file.contents is a Buffer - https://nodejs.org/api/buffer.html
            let content = file.contents.toString();


            const includes = new RegExp('@Html.Partial\\(\\"(.*)\\"\\)',"gm");
            const lines = new RegExp('[^a-z]@[a-zA-Z].+',"gm");
            const comments = new RegExp('@\\*[^\\*]+\\*@',"gm");
            const blocks = new RegExp('@{[^}]+}',"gm");
            let layout = fs.readFileSync(opts);
            layout = layout.toString();




            layout = layout.replace('@RenderBody()',content);


            let match = includes.exec(layout);
            while (match != null) {
                let filename = match[1].replace('.cshtml', '.ref.cshtml');
                
                let partial = fs.readFileSync(projectSource+''+filename);
                
                layout = layout.replace(match[0],partial.toString());


                match = includes.exec(layout);
            }          


            layout = layout.replace(comments,'');
            layout = layout.replace(blocks,'');
            layout = layout.replace(lines,'');

            file.contents =  Buffer.from( layout, 'utf8' );            


            return callback (null, file);
        }
    });
};
