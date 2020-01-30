//lade alle Datein im Ebene-Ordner

const path = require('path');
const fs = require('fs');
PNG = require('png-js');


var datein = fs.readdirSync("ebenen/");

var bilder=[]
var ebenen=[]
for (let i=0;i<datein.length;i++){
	var d= datein[i];
	if (d[0]==="."){
		continue;
	}
	console.log(d)
	var myimage = new PNG.load("ebenen/"+d);
	var name = (d.split("-")[1]).split(".")[0];
	var layer = d.split("-")[0];
	bilder[name]=myimage;
	ebenen[name]=parseInt(layer);
}

console.log(Object.keys(bilder))
console.log(ebenen)

var datei = [

	{
		name:"uhr",
		vollname_en:"Smart watch",
		vollname_de:"Smartwatch",
		kauftext_en:"Charging every night suits me - I enjoy sleeping with my wrists unburdened.",
		kauftext_de:"Es ist mir ganz angenehm, ohne eine Armbanduhr zu schlafen.  Deswegen stört es mir gar nicht, jedes nacht die laden lassen zu müssen.",
		img:function(zustand){ return "uhr" },
		erfordernis:function(zustand){ return zustand.includes("strip3")}
	},

	{
		name:"kopfhoerer",
		vollname_en:"Bluetooth headphones",
		vollname_de:"Bluetooth Kopfhörer",
		kauftext_en:"I bought these to make music, but that's not possible due to bluetooth latency.  So now I just consume.",
		kauftext_de:"Ich habe die gekäuft, um Musik zu machen.  Habe aber vergessen dass Bluetooh eine verschissene Latenz hat.  Also kann ich nur Musik konsumiere.",
		img:function(zustand){ return "kopfhoerer" },
		erfordernis:function(zustand){ return zustand.includes("strip3")}
	},

	{
		name:"razer",
		vollname_en:"Electric razor",
		vollname_de:"Elektrorasierer",
		kauftext_en:"It comes with a special and very helpful nose-hair trimmer attachment.",
		kauftext_de:"Es hat einen effektiven Nasenhaar-Trimmer.",
		img:function(zustand){ return "razer" },
		erfordernis:function(zustand){ return zustand.includes("strip1")}
	},

	{
		name:"ebook",
		vollname_en:"Kindle",
		vollname_de:"Kindle",
		kauftext_en:"Now I can combine two of my favourite hobbies: reading and piracy.",
		kauftext_de:"Mit diesem E-Book-Reader kann ich zwei meiner Hobbys zusammenfügen: Lesen und Urheberrechtsverletzung.",
		img:function(zustand){ return "ebook" },
		erfordernis:function(zustand){ return zustand.includes("strip1")}
	},

	{
		name:"ds",
		vollname_en:"Nintendo DS",
		vollname_de:"Nintendo DS",
		kauftext_en:"Clash of Heroes is such an amazing game!",
		kauftext_de:"Clash of Heroes ist ein so echt geiles Spiel!",
		img:function(zustand){ return "ds" },
		erfordernis:function(zustand){ return zustand.includes("strip3")}
	},

	{
		name:"procontroller1",
		vollname_en:"Nintendo Switch Pro Controller",
		vollname_de:"Nintendo Switch Pro Controller",
		kauftext_en:"I figure if I'm going to get into console gaming, why not go all out right?",
		kauftext_de:"Wenn ich 'n richtiger Konsolegamer sein will, sollte ich das richtiges Zubehör kaufen.  Und viele Energiegetränke.",
		img:function(zustand){ return "procontroller1" },
		erfordernis:function(zustand){ return zustand.includes("switch")}
	},

	{
		name:"procontroller2",
		vollname_en:"Nintendo Switch Pro Controller",
		vollname_de:"Nintendo Switch Pro Controller",
		kauftext_en:"It was too annoying deciding who should get the good controller.  Thankfully this is a solvable problem.",
		kauftext_de:"Es hat uns beide generft, der einzige gute Controller teilen zu müssen.  Zum Glück hat dieses Problem eine Lösung!",
		img:function(zustand){ return "procontroller2" },
		erfordernis:function(zustand){ return zustand.includes("procontroller1")}
	},

	{
		name:"switch",
		vollname_en:"Nintendo Switch",
		vollname_de:"Nintendo Switch",
		kauftext_en:"I want to feel up-to-date, a person integrated into and engaged with modern society and culture.  For that one simply needs a Nintendo Switch.",
		kauftext_de:"Ich will mich aktuell fühlen. Ohne eine Switch zu haben, kann man das einfach nicht schaffen.",
		img:function(zustand){ return "switch" },
		erfordernis:function(zustand){ return zustand.includes("fernseher")&&zustand.includes("strip1")}
	},

	{
		name:"fernseher",
		vollname_en:"TV",
		vollname_de:"Fernseher",
		kauftext_en:"Modern TVs are so stylish.  No buttons at all!  Now, just to remember where the remote's hidden itself...",
		kauftext_de:"Moderne Fernseher sind so chic!  Gar keine Knöpfe mehr.  Aber wo hat die verdammte Fernbedienung sich versteckt?",
		img:function(zustand){ return "fernseher" },
		erfordernis:function(zustand){ return zustand.includes("fernsehertisch")}
	},

	{
		name:"handy",
		vollname_en:"Samsung Galaxy S8",
		vollname_de:"Samsung Galaxy S8",
		kauftext_en:"I have a cover for the front, a shell for the back.  Sometimes when I'm at home I take off the shell just to appreciate how light it is.",
		kauftext_de:"Es hat ein Displayschutz vorne und hinten eine Hülle.  Es hat natürlich schon Sprënge in den ungeschützten vorderen Ecken bekommen.",
		img:function(zustand){ if (zustand.includes("strip1")) {return "handy_s1"; }else {return "handy_s0";} },
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"eckig",
		vollname_en:"Juul E-Cigarette Device Starter Kit",
		vollname_de:"Juul USB aufladbare elektronische Zigarette",
		kauftext_en:"When I relapse, I still find myslf before I go to bed placing the cigarette packet vertically at the corner of the table.",
		kauftext_de:"Wenn ich einen Rückfall bekommen, lege ich mich immer noch Abends die Zigarettenpackung vertikal auf'm Tisch.",
		img:function(zustand){ return "eckig" },
		erfordernis:function(zustand){ return zustand.includes("strip3")}
	},

	{
		name:"roomba",
		vollname_en:"Roomba",
		vollname_de:"Roomba",
		kauftext_en:"Says in the manual one should be careful of cables/etc. on the floor.",
		kauftext_de:"Sagt im Handbuch dass man soll vorsichtig mit Stromkabeln auf dem Boden usw sein.",
		img:function(zustand){ if (zustand.includes("strip2")) {return "roomba_s2"; } else {return "roomba_s0";} },
		erfordernis:function(zustand){ return zustand.includes("bett") && (zustand.includes("strip2") || (!zustand.includes("rpi") ) ) }
	},

	{
		name:"strip3",
		vollname_en:"Power strip",
		vollname_de:"Steckdosenleiste",
		kauftext_en:"I haven't seen a garland in years, but here's a beautiful daisy chain.",
		kauftext_de:"Man kann fürwahr nie genug Steckdosenleisten haben!",
		img:function(zustand){ return "strip3" },
		erfordernis:function(zustand){ return zustand.includes("alexa")&&zustand.includes("roomba")&&zustand.includes("rpi")}
	},

	{
		name:"strip2",
		vollname_en:"Power strip",
		vollname_de:"Steckdosenleiste",
		kauftext_en:"There's something so natural about having a power strip nestled snugly up along the side of a couch, don't you think?",
		kauftext_de:"Es scheint meinen Augen so kompositionmäßig korrekt eine Steckdosenleiste knapp am Rüsche eines Sofas zu sehen.",
		img:function(zustand){ return "strip2" },
		erfordernis:function(zustand){ return zustand.includes("router") && zustand.includes("sofa")}
	},

	{
		name:"strip1",
		vollname_en:"Power strip",
		vollname_de:"Steckdosenleiste",
		kauftext_en:"A bed without the possibility of a tangle of cables nearby cannot call itself a bed.",
		kauftext_de:"Ein bett ohne die Gelegenheit eines Kabel-Gewirrs daneben ist kein Bett.",
		img:function(zustand){ return "strip1" },
		erfordernis:function(zustand){ return zustand.includes("fernseher") && zustand.includes("handy") }
	},

	{
		name:"rpi",
		vollname_en:"Raspberry Pi",
		vollname_de:"Raspberry Pi",
		kauftext_en:"Now I can combine two of my favourite hobbies: watching TV and piracy.",
		kauftext_de:"Mit diesem R-Pi kann ich zwei meiner Hobbys zusammenfügen: Fernsehen und Urheberrechtsverletzung.",
		img:function(zustand){ if (zustand.includes("strip2")) {return "rpi_s2"; } else {return "rpi_s0";} },
		erfordernis:function(zustand){ return zustand.includes("router")}
	},

	{
		name:"router",
		vollname_en:"WIFI Router",
		vollname_de:"W-Lan Router",
		kauftext_en:"If only people had status lights as detailed as routers.",
		kauftext_de:"Wenn nur Leute so detaillierte LED-Beluchtung wie dieses Gerät hätten...",
		img:function(zustand){ return "router" },
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"Bett",
		vollname_en:"Bed",
		vollname_de:"Bett",
		kauftext_en:"Except for beds, everything is an exercise in vainity.",
		kauftext_de:"Alles ist vergeblich, außer einem Bett.",
		img:function(zustand){ return "bett" },
		erfordernis:function(zustand){ return true}
	},

	{
		name:"schrank",
		vollname_en:"Shelves",
		vollname_de:"Schrank",
		kauftext_en:"I've been in this town long enough now that I'm giving myself the opportunity to start collecting and arranging books again.",
		kauftext_de:"Ich bin in dieser Stadt so lang geblieben, dass ich mich die Genehmigung geben mögen, Bücher kaufen und anordnen zu können.",
		img:function(zustand){ return "schrank" },
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"vorhaenge",
		vollname_en:"Curtains",
		vollname_de:"Vorhänge",
		kauftext_en:"I tire of the outside world intruding on my dreams.",
		kauftext_de:"Ich bin der Außenwelt müd. Ich will nur in der Dunkelheit schlafen.",
		img:function(zustand){ 
			if (zustand.includes("tagsüber")) {
				return "vorhaenge";
			} else { 
				if (zustand.includes("alexa") ) 
				{
					return "vorhaenge_zu_alexa";
				} 
				else {
					return "vorhaenge_zu";
				} 
			} 
		},
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"alexa",
		vollname_en:"Amazon Echo",
		vollname_de:"Amazon Echo",
		kauftext_en:"Alexa, play a lonely song.",
		kauftext_de:"Alexa, bitte spiel mir was Trauriges.",
		img:function(zustand){ return "alexa" },
		erfordernis:function(zustand){ return zustand.includes("strip2")}
	},

	{
		name:"fernsehertisch",
		vollname_en:"",
		vollname_de:"",
		kauftext_en:"A table, but also a promise and pact to myself.",
		kauftext_de:"Ein Tisch.  Aber nicht nur ein Tisch.  Auch ist es mir ein Versprechen, ein Pakt.",
		img:function(zustand){ return "fernsehertisch" },
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"couchtisch",
		vollname_en:"Coffee table",
		vollname_de:"Couchtisch",
		kauftext_en:"The perfect table for getting in the way of your legs.",
		kauftext_de:"Der perfekte Tisch, wenn dir Perfektion aus die Unmöglichkeit besteht, die Beine auszustrecken.",
		img:function(zustand){ return "couchtisch" },
		erfordernis:function(zustand){ return zustand.includes("sofa")}
	},

	{
		name:"sofa",
		vollname_en:"Sofa",
		vollname_de:"Sofa",
		kauftext_en:"I can already feel the sofa and the bed jealously vying for my attention.",
		kauftext_de:"Ich kann es schon spürden: das Sofa und das Bett konkurrieren um meine Bewusstlosigkeit.",
		img:function(zustand){ return "sofa" },
		erfordernis:function(zustand){ return zustand.includes("bett")}
	},

	{
		name:"anlage",
		vollname_en:"Intercom Repair",
		vollname_de:"Intercom Repair",
		kauftext_en:"",
		kauftext_de:"",
		img:function(zustand){ return "anlage" },
		erfordernis:function(zustand){ return zustand.includes("Bett")}
	},

	{
		name:"rauchmelder",
		vollname_en:"",
		vollname_de:"",
		kauftext_en:"",
		kauftext_de:"",
		img:function(zustand){ return "rauchmelder" },
		erfordernis:function(zustand){ return zustand.includes("Bett")}
	},

	{
		name:"sterne",
		vollname_en:"Glow in The Dark Stars and Moon",
		vollname_de:"Leuchtende Sterne Set",
		kauftext_en:`The packing says "Realistic No Dots No Squares Set".  I guess a lot of people have been burned by low-quality glow in the dark stars.  It's nice to see that the producer seems proud of the quality of their glow-in-the-dark stars.`,
		kauftext_de:`Die Packung sagt: "Realistisch.  Keine Punkte oder Quadrate".  Irgendwie ein gutes Verkaufsargument.  Ich bin jedenfalls überzeugt, dass der Producer stolz auf seine Waren ist!`,
		img:function(zustand){ return "sterne" },
		erfordernis:function(zustand){ return zustand.includes("strip3")&&zustand.includes("vorhaenge")}
	},
]
var root="hintergrund"

