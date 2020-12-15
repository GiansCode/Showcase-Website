const servers = [
	["mc.hypixel.net", "25565"],
	["us.mineplex.com", "25565"]
];

$(document).ready(function( ) {
	$(".select .sort").click(function( ) {
		if($(this).attr("data-sort").length === 0) {
			$(".col-md-4[data-sort]").show( );
		} else {
			$(".col-md-4[data-sort]").hide( );
			$(".col-md-4[data-sort='" + $(this).attr("data-sort") + "']").show( );
		}
	});
	
	getOnlinePlayers(servers, 0, 0);
});

function getOnlinePlayers(servers, index, players) {
	$.get("https://mcapi.us/server/status?ip=" + servers[index][0] + "&port=" + servers[index][1], function(data) {
		players = players + data.players.now;
		
		if(index === servers.length - 1) $(".players-online").text( players.toLocaleString( ) );
		else getOnlinePlayers(servers, index + 1, players);
	});
}