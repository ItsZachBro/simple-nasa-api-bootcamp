document.querySelector('button').addEventListener('click', postPic);

 let iframe = document.querySelector("iframe")
 let image = document.querySelector("img")
 let dateBttn = document.querySelector("button")

 console.log(data)

 function postPic(){
   let selection = document.querySelector('input').value;
   const url = `https://api.nasa.gov/planetary/apod?date=${selection}&api_key=ypnrMLEt52eavWuI2B2fden5yZWbSA9krUbMc0UH&date`;
   fetch(url)
     .then(res => res.json())
     .then(data => {
       console.log(data);
       document.querySelector('h2').innerText = data.title;
       document.querySelector('h3').innerText = data.explanation;
       document.querySelector('img').src = data.url;
       fetch(url)
     .then(res => res.json())
     .then(data => {
       if (data.media_type === "image") {
        document.querySelector('img').src = data.url
        image.classList.remove('hidden')
        iframe.classList.add('hidden')
        
       } else if (data.media_type === "video") {
        document.querySelector('iframe').src = data.url
        image.classList.add('hidden')
        iframe.classList.remove('hidden')
         //iframe.style.display = 'block';
       }
     })

     })
     .catch(error => {
       console.log('Failed to get the NASA Picture of the Day.');
     })
 }

 


