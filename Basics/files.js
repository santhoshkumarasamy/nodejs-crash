// Importing fs package

const fs = require('fs');

// reading a file
//fs.readFile() : it is a asynchronous function, so the program won't be stopped until the file is read, the next line run after the call
/*fs.readFile('./docs/test.txt',(err,data)=>{
	if(err){
	console.log(err);
	return
	}
	console.log(data.toString())
});
*/
//console.log("the line next to readfile")


// WriteFile :  asynchronous

/*
fs.writeFile("./docs/test.txt","Hellsdo world",()=>{
console.log("File Written")
}
)

*/

// directories

// check whether the folder is exit or not


/*
if(!fs.existsSync('./assets')){

fs.mkdir("./assets",(err)=>{
if(err){
console.log(err);
return ;
}
console.log("dir created")
}
)
}
else{
console.log("folder exists and it will be deleted now")

// deleting a folder

fs.rmdir('./assets',(err)=>{

if(err){
console.log(err)
return
}
console.log("folder deleted") 
}

)}

*/


// delete files

if(fs.existsSync('./docs/deleteme.txt')){
  fs.unlink('./docs/deleteme.txt',(err)=>{
  if(err){
  console.log(err)
  return
  }
  console.log("file deleted")
  
  }
  )
}
else{
console.log('file not exists')
}




