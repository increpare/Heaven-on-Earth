//lade alle Datein im Ebene-Ordner

const path = require('path');
const fs = require('fs');
var PNG = require('pngjs').PNG;


var datein = fs.readdirSync("ebenen/");

var bilder=[]
var ebenen=[]
for (let i=0;i<datein.length;i++){
	var d= datein[i];
	if (d[0]==="."){
		continue;
	}
	console.log(d)
	var fn = "ebenen/"+d;

	var data = fs.readFileSync(fn);
	var png = PNG.sync.read(data);


	for (var y = 0; y < png.height; y++) {
        for (var x = 0; x < png.width; x++) {
            var idx = (png.width * y + x) << 2;

            // invert color
            var summe=png.data[idx]+png.data[idx+1]+png.data[idx+2]
            if (summe===0||summe===3*255)
            {
            	png.data[idx] = 255 - png.data[idx];
            	png.data[idx+1] = 255 - png.data[idx+1];
            	png.data[idx+2] = 255 - png.data[idx+2];
            }
        }
    }

	var options = { colorType: 6 };
	var buffer = PNG.sync.write(png, options);
	fs.writeFileSync('output/'+"invertiert_"+d, buffer);

	data = fs.readFileSync(fn);
	png = PNG.sync.read(data);


	if (fn.indexOf("fenster_")===-1){
		console.log(fn)
		for (var y = 0; y < png.height; y++) {
	        for (var x = 0; x < png.width; x++) {
	            var idx = (png.width * y + x) << 2;

	            // invert color
	            var summe=png.data[idx]+png.data[idx+1]+png.data[idx+2]
	            if (summe===0||summe===3*255)
	            {
	            	png.data[idx+3]=0;
	            }
	        }
	    }
	}

	var options = { colorType: 6 };
	var buffer = PNG.sync.write(png, options);
	fs.writeFileSync('output/'+"beleuchtung_"+d, buffer);


	//1:flip black to white

}



