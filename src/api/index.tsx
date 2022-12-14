import axios from 'axios'

const Url ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      },
      headers: {
        'X-RapidAPI-Key': '7951c0165cmshfe290aec2eb1024p16c87ajsne9691aa54bb4',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
  
export const getPlacesData= async()=>{

try{
const {data:{data}}= await axios.get(Url, options)
return data
}catch (error){
    console.log(error)
}
}