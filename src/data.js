const api_url = "https://reqres.in/api/users?page=1";
const api_url2 = "https://reqres.in/api/users?page=2";


export const fetchData = async () => {
 
   const response = await fetch(api_url);
   const data = await response.json();
   const response2 = await fetch(api_url2);
   const data2 = await response2.json();
   return [...data.data,...data2.data];
   
 };
