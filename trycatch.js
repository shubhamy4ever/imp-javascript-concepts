const a=21;
try{
    a=22;
}catch(err){
    console.log(err);
}finally{
    console.log(`error a=${a}`);
}