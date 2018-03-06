



function initMap(){
	var place = {lat: -36.869921, lng: 174.766977};
	var map = new google.maps.Map(document.getElementById('map'), {
  		zoom: 6,
  		center: place
	});

	// Heat Map Data starts(Couldn't use actual data unless paid)
	var heatMapData = [

		// auckland
		{location: new google.maps.LatLng(-36.8602221,174.7159666), weight: 5},
		{location: new google.maps.LatLng(-36.8602221,174.7159666), weight: 4},
				   new google.maps.LatLng(-36.8602221,174.7159666),
		{location: new google.maps.LatLng(-36.8602221,174.7159666), weight: 0.5},
				   new google.maps.LatLng(-36.8602221,174.7159666),
		{location: new google.maps.LatLng(-36.8602221,174.7159666), weight: 4},
		{location: new google.maps.LatLng(-36.8602221,174.7159666), weight: 5},

		// wellington
		{location: new google.maps.LatLng(-41.292465, 174.776760), weight: 5},
		{location: new google.maps.LatLng(-41.292465, 174.776760), weight: 4},
				   new google.maps.LatLng(-41.292465, 174.776760),
		{location: new google.maps.LatLng(-41.292465, 174.776760), weight: 0.5},
				   new google.maps.LatLng(-41.292465, 174.776760),
		{location: new google.maps.LatLng(-41.292465, 174.776760), weight: 4},
		{location: new google.maps.LatLng(-41.292465, 174.776760), weight: 5},

		// christchurch
		{location: new google.maps.LatLng(-43.523713, 172.639875), weight: 10},
		{location: new google.maps.LatLng(-43.523713, 172.639875), weight: 4},
				   new google.maps.LatLng(-43.523713, 172.639875),
		{location: new google.maps.LatLng(-43.523713, 172.639875), weight: 0.5},
				   new google.maps.LatLng(-43.523713, 172.639875),
		{location: new google.maps.LatLng(-43.523713, 172.639875), weight: 4},
		{location: new google.maps.LatLng(-43.523713, 172.639875), weight: 5},		

		// ashburton
		{location: new google.maps.LatLng(-43.910235, 171.738388), weight: 0.5},
				   new google.maps.LatLng(-43.910235, 171.738848),
		{location: new google.maps.LatLng(-43.910235, 171.738343), weight: 3},
		{location: new google.maps.LatLng(-43.910235, 171.738641), weight: 5},
		{location: new google.maps.LatLng(-43.910235, 171.738639), weight: 4},
				   new google.maps.LatLng(-43.910235, 171.738537),
		{location: new google.maps.LatLng(-43.910235, 171.738635), weight: 0.5},

		// invercargill
		{location: new google.maps.LatLng(-46.4309941,168.307447), weight: 5},
		{location: new google.maps.LatLng(-46.4309941,168.307445), weight: 4},
				   new google.maps.LatLng(-46.4309941,168.307443),
		{location: new google.maps.LatLng(-46.4309941,168.307441), weight: 0.5},
				   new google.maps.LatLng(-46.4309941,168.307439),
		{location: new google.maps.LatLng(-46.4309941,168.307437), weight: 4},
		{location: new google.maps.LatLng(-46.4309941,168.307435), weight: 5}
	];
	// Heat Map Data ends

	var nz = new google.maps.LatLng(-41.162459,176.9314557);
	map = new google.maps.Map(document.getElementById('map'), {
		center: nz,
		zoom: 6
	});

	var heatmap = new google.maps.visualization.HeatmapLayer({
		data: heatMapData
	});
	heatmap.setMap(map);


	// Location for each place starts
	var auck = [
	    new google.maps.LatLng(-36.8602221,174.7159666)
	]; 
	var aucklatlngbounds = new google.maps.LatLngBounds();

	for (var i = 0; i < auck.length; i++) {
	    aucklatlngbounds.extend(auck[i]);
	}

	var wgtn = [
	    new google.maps.LatLng(-41.292465, 174.776760)
	]; 
	var wgtnlatlngbounds = new google.maps.LatLngBounds();

	for (var i = 0; i < wgtn.length; i++) {
	    wgtnlatlngbounds.extend(wgtn[i]);
	}

	var chch = [
	    new google.maps.LatLng(-43.523713, 172.639875)
	]; 
	var chchlatlngbounds = new google.maps.LatLngBounds();

	for (var i = 0; i < chch.length; i++) {
	    chchlatlngbounds.extend(chch[i]);
	}

	var ashb = [
	    new google.maps.LatLng(-43.910235, 171.738388)
	]; 
	var ashblatlngbounds = new google.maps.LatLngBounds();

	for (var i = 0; i < ashb.length; i++) {
	    ashblatlngbounds.extend(ashb[i]);
	}

	var inv = [
	    new google.maps.LatLng(-46.4309941,168.307447)
	]; 
	var invlatlngbounds = new google.maps.LatLngBounds();

	for (var i = 0; i < inv.length; i++) {
	    invlatlngbounds.extend(inv[i]);
	}
	// Auto zoom for each place ends

	//  Weather API
	(function(dataLocation){
		var auckland = document.getElementById('changetype-auckland');
		var wellington = document.getElementById('changetype-wellington');
		var christchurch = document.getElementById('changetype-christchurch');
		var ashburton = document.getElementById('changetype-ashburton');
		var invercargill = document.getElementById('changetype-invercargill')

		var api = 'https://services.metservice.com/weather-widget/widget?params=white|medium|portrait|days-3|modern&loc=';
		var places = [
			'auckland',
			'wellington',
			'christchurch',
			'ashburton',
			'invercargill'
		];
		var type = '&type=urban&domain=';
		var url = api + places[i] + type;

		// JQuery click events for the weather API
		$(auckland).click(function() {
			if (true) {
				i.setAttribute("src", api + places[i] + type + dataLocation.location.hostname);			
				map.fitBounds(aucklatlngbounds);
				map.setZoom(7);
			};
		});

		$(wellington).click(function() {
			if (true) {
				i.setAttribute("src", api + places[1] + type + dataLocation.location.hostname);
				map.fitBounds(wgtnlatlngbounds);
				map.setZoom(8);
			};
		})

		$(christchurch).click(function() {
			if (true) {
				i.setAttribute("src", api + places[2] + type + dataLocation.location.hostname);
				map.fitBounds(chchlatlngbounds);
				map.setZoom(7);
			};
		})

		$(ashburton).click(function() {
			if (true) {
				i.setAttribute("src", api + places[3] + type + dataLocation.location.hostname);
				map.fitBounds(ashblatlngbounds);
				map.setZoom(8);
			};
		})

		$(invercargill).click(function() {
			if (true) {
				i.setAttribute("src", api + places[4] + type + dataLocation.location.hostname);
				map.fitBounds(invlatlngbounds);
				map.setZoom(9);
			};
		})

		// styling of the weather API
		var i = dataLocation.createElement("iframe");
			i.setAttribute("src", api + places[i] + type + dataLocation.location.hostname);
			i.style.width = "100%";
			i.style.height = "237px";
			i.style.border = "0";
			i.style.margin = '20px 0 0 0';
			i.setAttribute("allowtransparency", "true");
			i.setAttribute("id", "widget-iframe");
			dataLocation.getElementById("metservice-widget").appendChild(i);
	})(document);

};

