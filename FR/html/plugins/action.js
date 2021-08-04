

// function ActionEvent(sceneName) {
	// console.log(sceneName)
	 // gtag('event', 'eventAAA', { 
	 // 'event_category' : 'bbb',
	 // 'event_label' : 'ccc'
	 // });
	 
	// krpano = document.getElementById('pano1');
	// krpano.call("loadscene(" + sceneName + ", null, MERGE, BLEND(1));");
// }

// function ActionEventB(eventName) {
	// console.log(eventName)
	// gtag('event', eventName, { 
	 // 'event_category' : eventName,
	 // 'event_label' : eventName
	 // });
// }

var list = ['poster1','poster2','poster3'];
function AddItem(items){
	
	let array = items.split(',');
	list = [];
	for(var i = 0; i < array.length; i++){
		list.push(array[i])
	}
	
	console.log(list);
}

function getCurItem(curIndex)
{
	var krpano = document.getElementById('pano1');
	krpano.call("set(curLayerName," + list[parseInt(curIndex)] + ");");
}

function log(val){
	console.log(val);
}