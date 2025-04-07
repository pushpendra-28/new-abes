const http=require('http');
const axios=require('axios');
const port=3000;
const server=http.createServer(async(req,res)=>{
    console.log('new request received');
    res.writeHead(200,{'content-type':'application/text/html'});
    // const response=await fetch("https://dummyjson.com/products");
    // const data=await response.json();
    const response=await axios.get("https://dummyjson.com/product");
    const productsdata=response.data;//(axios is faster than fetch,u have not change manually in json file,it automatically change it)
    // const jdata=JSON.parse(data);   
    let frontdata=`<html><head></head><body>` 
    productsdata.forEach((product)=>{
        frontdata+=`<div><img src="${product.thumbnail}"></div>`
    })
    frontdata+=`</body></html>`
    res.end(frontdata);
});
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});