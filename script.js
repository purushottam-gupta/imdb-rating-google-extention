var i = document.getElementById('search')
var released = document.getElementById('released')
var r = document.getElementById('rating')
var votes = document.getElementById('votes')
var rated = document.getElementById('rated')
var btn = document.getElementById('btn')
i.addEventListener('keypress', async (e) => {
    if (e.code == 'Enter') {
        try {
            const v = i.value;
            var getSelectedValue = document.querySelector('input[name="r"]:checked');
            if (getSelectedValue != null) {
                var res = await fetch(`https://www.omdbapi.com/?t=${v}&type=${getSelectedValue.value}&apikey=856a0fc4`)
            } else {
                var res = await fetch(`https://www.omdbapi.com/?t=${v}&apikey=856a0fc4`)
            }
            var data = await res.json();
            if(!data.Error && data.imdbRating!=="N/A"){
            r.innerHTML = data.imdbRating+"/10";
            votes.innerHTML = data.imdbVotes + " users";
            rated.innerHTML = data.Rated;
            released.innerHTML= data.Released;
            } else {
                r.innerHTML = "Not Found!";
                votes.innerHTML = "Not Found!";
                rated.innerHTML = "Not Found!";
                released.innerHTML= "Not Found!";
            }
        } catch (err) {
            console.log(err);
        }
    }
}, true);

