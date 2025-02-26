
async function fetch_data(){
    const poke_name = document.getElementById('name');
    const poke_id = document.getElementById('id');
    const pokey_height = document.getElementById('height');
    const pokey_weight = document.getElementById("weight");
    const pokeimg = document.getElementById("image");
    const seartch = document.getElementById("pokemon_name").value.toLowerCase();
    const respone = await fetch(`https://pokeapi.co/api/v2/pokemon/${seartch}`);
    const card = document.getElementById('data');

    try{
        if(!respone.ok){
            throw new Error("could not fetch data");
        }

        const data = await respone.json();
        const front_img = data.sprites.front_default;

        poke_name.textContent = `name: ${data.name}`;
        poke_id.textContent = `id: ${data.id}`;
        pokey_height.textContent = `heigth: ${data.height} inch`;
        pokey_weight.textContent = `weight: ${data.weight} g`;

        pokeimg.src = front_img;
        pokeimg.style.display = "block"; 
        card.style.display = "block";
        card.style.height = "35rem";  
    }   

    catch(error){
        poke_name.textContent = "plz enter pokemon name.";
        pokeimg.style.display = "none"; 
        card.style.display = "block"; 
        card.style.height = "5rem"; 

        poke_id.textContent = "";
        pokey_height.textContent = "";
        pokey_weight.textContent = "";
    }

}
