async function getFromServer() {
    console.log(944);
    const result = await fetch("https://randomuser.me/api/");
    console.log(953);
  }
  
  async function getFromServer2() {
    console.log(955);
    const result = await fetch("https://randomuser.me/api/");
    console.log(933);
  }
  
  console.log(8888);
  getFromServer2();
  getFromServer();
  console.log(1111);
  