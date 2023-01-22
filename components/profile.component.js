
let modal;

export function muestraPerfil() {
  

  // set the modal menu element
  const $targetEl = document.getElementById("modalEl");
  const stats_pokemon = document.getElementById("stats_pokemon");
  const types_pokemon = document.getElementById("types_pokemon");

  const name_pokemon = document.getElementById("name_pokemon");
  const imagenPokemon = document.getElementById("imagenPokemon");
  name_pokemon.innerText = '';
  types_pokemon.innerText = '';
  imagenPokemon.innerHTML = '';

  stats_pokemon.innerHTML = `
    <div class="profile_view">
    
<div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form class="space-y-6" action="#">
    <h5 class="text-xl font-medium text-gray-900 dark:text-white">Contact me</h5>
    <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">My email</label>
        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="alexis.mplt@outlook.es" value="alexis.mplt@outlook.es" required>
    </div>
    <div>
        <label for="cellphone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">My cellphone</label>
        <input type="cellphone" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="55 2763 1295" value="55 2763 1295" required>
    </div>
    <div>
    <label for="web" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">My web</label>
    <input type="text" name="web" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="https://iamangelmp.web.app/" value="https://iamangelmp.web.app/" required>
  </div>
    <div class="flex items-start">
        <div class="flex items-start">
            <!-- espacio inicia izquierda -->
          
        </div>
        
    </div>
    <button type="submit" onclick="message()" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">send me a message</button>
    <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
        
    </div>
</form>
</div>


<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <span class="sr-only">Open dropdown</span>
            <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"></path></svg>
        </button>
        <!-- Dropdown menu -->
        <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2" aria-labelledby="dropdownButton">
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
            </li>
            <li>
                <a href="#" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
            </li>
            </ul>
        </div>
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://scontent.fmex26-1.fna.fbcdn.net/v/t39.30808-6/312592153_3223175451326722_2384374045033473530_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFwruUfHX439Ma5IVpvKzPPFTr-KBByuzkVOv4oEHK7OYE373SVJJrpPms-Y_GjjpF6dh5RKXj5YsQkF19Bb08P&_nc_ohc=o_KyD7HXCsYAX9B3HuE&_nc_ht=scontent.fmex26-1.fna&oh=00_AfBrmvrWGd2qyHjzVIChMMj25vGzEPYDCkrpC4e4t-dvEg&oe=63D1D397" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Angel Marquez</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Backend Developer</span>
        <div class="flex mt-4 space-x-3 md:mt-6">
        <a href="https://github.com/iamangelmp" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i class="fa-brands fa-github"></i> Git Hub</a>
        <a href="https://www.linkedin.com/in/imangelmp/" type="button" class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><i class="fa-brands fa-linkedin"></i> Linkedin</a>

        </div>
    </div>
</div>


    </div>
    `;

  // options with default values
  const options = {
    placement: "bottom-right",
    backdrop: "dynamic",
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
    onHide: () => {
      console.log("modal is hidden");
    },
    onShow: () => {
      console.log("modal is shown");
    },
    onToggle: () => {
      console.log("modal has been toggled");
    },
  };

  modal = new Modal($targetEl, options);
  modal.show();
}

function message() {
  window.location.href =
    "https://api.whatsapp.com/send?phone=5527631295&text=Hi%20!";
}
