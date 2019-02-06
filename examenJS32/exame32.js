function gal_ingl (){

	r_ingles1 = prompt('dog en gallego se escribe :');

	if (r_ingles1 == "can") {

		alert("Moi ben");

	}

	else if (r_ingles1 != "can"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles2 = prompt('cat en gallego se escribe :');

	if (r_ingles2 == "gato") {

		alert("Moi ben");

	}

	else if (r_ingles2 != "gato"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles3 = prompt('house en gallego se escribe :');

	if (r_ingles3 == "casa") {

		alert("Moi ben");

	}

	else if (r_ingles3 != "casa"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles4 = prompt('table en gallego se escribe :');

	if (r_ingles4 == "mesa") {

		alert("Moi ben");

	}

	else if (r_ingles4 != "mesa"){

		alert("NOON ,esa non e a resposta correcta");

	}



	r_ingles5 = prompt('chair en gallego se escribe :');

	if (r_ingles5 == "cadeira") {

		alert("Moi ben");

	}

	else if (r_ingles5 != "cadeira"){

		alert("NOON ,esa non e a resposta correcta");

	}

	respuesta = prompt("queres xogar outra vez?");

	if (respuesta == "Si") {

		alert("Vale, encantad@");
		gal_ingl();


	}

	else if (respuesta == "No"){

		alert("Vale , adios 👋👋");

	}

}



function ingl_gal (){

	r_ingles1 = prompt('can en inglés se escribe :');

	if (r_ingles1 == "dog") {

		alert("Moi ben");

	}

	else if (r_ingles1 != "dog"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles2 = prompt('gato en inglés se escribe :');

	if (r_ingles2 == "cat") {

		alert("Moi ben");

	}

	else if (r_ingles2 != "cat"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles3 = prompt('casa en inglés se escribe :');

	if (r_ingles3 == "house") {

		alert("Moi ben");

	}

	else if (r_ingles3 != "house"){

		alert("NOON ,esa non e a resposta correcta");

	}

	r_ingles4 = prompt('mesa en inglés se escribe :');

	if (r_ingles4 == "table") {

		alert("Moi ben");

	}

	else if (r_ingles4 != "table"){

		alert("NOON ,esa non e a resposta correcta");

	}



	r_ingles5 = prompt('cadeira en inglés se escribe :');

	if (r_ingles5 == "chair") {

		alert("Moi ben");

	}

	else if (r_ingles5 != "chair"){

		alert("NOON ,esa non e a resposta correcta");

	}


	if (respuesta == "Si") {

		alert("Vale, encantad@");
		ingl_gal();


	}

	else if (respuesta == "No"){

		alert("Vale , adios 👋👋");

	}


}


function salud(){

	var nome =prompt("Como te chamas?");
	alert("Saludos "+nome);
}