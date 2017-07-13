(function(){
	// Variables
	var lista = document.getElementById("lista"), 
	tareaInput = document.getElementById("tareaInput"),
	btnNuevaTarea = document.getElementById("btn-agregar");

	//funciones
	var agregarTarea = function (){
		var tarea = tareaInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if(tarea === ""){
			tareaInput.setAttribute("placeholder", "Agrega una tarea valida");
			tareaInput.className ="error";
			return false;
		}
		//Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		
		//Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		
		//Aregamos el enlace a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);

		//Agregamos su evento
		nuevaTarea.addEventListener("click", eliminarTarea);

		//Agregamos nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		//Se limpia el campo de tarea
		tareaInput.value = "";	
	};

	var comprobarInput = function(){
		tareaInput.className = "";
		tareaInput.setAttribute("placeholder", "Agregar tarea");
	};
	
	var eliminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	//Eventos
	//Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
	
	//Comprobar Input
	tareaInput.addEventListener("click", comprobarInput);

	//Borrando elementos de la lista
	for (var i = 0; i<lista.children.length; i++) {
		lista.children[i].addEventListener("click", eliminarTarea);
	};
}());