
var btn_ref = document.getElementById('initButton');
var btn_cros = document.getElementById('cros-btn');

//This is correct. ✔
btn_ref.addEventListener('click', showImages);
btn_cros.addEventListener('click', hideImages);

function hideImages(){
    var container_ref2 = document.getElementById("gallery_container");
    // container_ref2.innerText="";
    container_ref2.classList.add("d-none");
}

function imageClicked(event) {
    var img_prev_r = document.getElementById("img_preview");
    img_prev_r.classList.remove("d-none");
    //classList.add("class_name");
    
    var img_r = img_prev_r.children[0];

    // img_r.src = img_arr[3];
    img_r.src = event.target.src;
    // console.log();
    img_r.addEventListener('click',showImages);
}

function showImages() {
    var container_ref = document.getElementById("gallery_container");
    container_ref.classList.remove("d-none");
    container_ref.innerText = "";
    
    for(var i = 0; i < img_arr.length; i = i + 1) {
        var img_ref = document.createElement("img");
        img_ref.src = img_arr[i];
        img_ref.addEventListener('click', imageClicked);

        container_ref.appendChild(img_ref);
    }





    // Recommended ✔ (By 9 out of 10 developers).
    // container_ref.appendChild(img_ref);

    //Not recommended ❌
    // container_ref.innerText = "<img src='https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60' />";
}

var img_arr = [
    'https://images.unsplash.com/photo-1592192711577-aa829a269ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1575805774658-fdb9eeda71cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1620694563886-c3a80ec55f41?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1480044965905-02098d419e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1591608971362-f08b2a75731a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmlyZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1516233758813-a38d024919c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1574068468668-a05a11f871da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1570527140771-020891229bb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1612024782955-49fae79e42bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8N3x8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60',
    'https://images.unsplash.com/photo-1597132990170-ec6f7d86e731?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1573766428084-ea64c294f1e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1626826248416-a899c24f4e07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1614177308645-eb20c08f88d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
    'https://images.unsplash.com/photo-1619476266714-2a8b9f7731b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGJpcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
];
