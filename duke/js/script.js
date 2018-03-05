$(function() {

	var pokeapiUrl = 'http://pokeapi.salestock.net/api/v2/generation/1';
	var pokemonByName = 'http://pokeapi.salestock.net/api/v2/pokemon/';

	$.getJSON(pokeapiUrl).done(function(data) {
		
		console.log(data);

		$.each(data.pokemon_species, function(index, pokemon) {

			var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
			var link = $('<a>').attr('id', pokemon.name).attr('href', '#').append($('<p>').text(name));
			var par = $('<p>').append(link);
			
			link.click(function(event) {
				$.getJSON(pokemonByName + pokemon.name).done(function(details) {
					console.log(details);
					var pokemonContainer = $('#information');
					pokemonContainer.empty();
					pokemonContainer.append('<h3>' + name + '</h3>');
					pokemonContainer.append('<img src="' + details.sprites.front_default + '">');
					pokemonContainer.append('<img src="' + details.sprites.back_default + '">');
					pokemonContainer.append('<h4>' + 'ID: ' + details.id + '</h4>');
					
					pokemonContainer.append('<h4>' + 'Type: ' + details.types[0].type.name + '</h4>') 
					if (details.types[1]) {
						pokemonContainer.append('<h4>' + '/ ' + details.types[1].type.name + '</h4>')
					}
					
					pokemonContainer.append('<h4>' + 'Height: ' + details.height + ' Weight: ' + details.weight + '</h4>')
					pokemonContainer.append('<h4>' + 'Ability: ' + details.abilities[0].ability.name + '</h4>')
				});
				event.preventDefault();
			});

			par.appendTo('#list');
		});

	}).fail(function() {
		console.log('Request to Pokeapi Failed.');
	}).always(function() {
		console.log('Successfully Requested to Pokeapi.');
	});	
});