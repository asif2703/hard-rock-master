const singSearch = document.getElementById('sing-search');
const lyricSearch = document.getElementById('lyric-search');
singSearch.addEventListener('click',function(){
    fetch('https://api.lyrics.ovh/suggest/user')
.then(res => res.json())
.then(data => {
   data = data.slice(0,10);
   function displayLyrics(list){
       for (let i = 0; i < 10; i++) {
           const title = list.data[i].title;
           lyricName[i].innerText = getLyrics
           
       }
   }
   
    

}  



