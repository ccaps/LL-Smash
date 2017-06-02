document.addEventListener('DOMContentLoaded', function(){
	var stage_data = {};
	
	$('#stage-modal').on('show.bs.modal', function (event) {
	  var div = $(event.relatedTarget) // Element that triggered the modal
	  var stage_id = div.data('stage-id') // Extract info from data-* attributes
	  var stage_name = div.children('.stage-name').text()
	  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
	  var modal = $(this)
	  modal.find('.modal-title').text(stage_name)
	});			
}, false);	