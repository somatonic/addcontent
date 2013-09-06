tinymce.create('tinymce.plugins.AddContent', {

init : function(ed, url) {
	ed.addCommand('mceAddContent', function() {
		tinyMCE.activeEditor.dom.add(tinyMCE.activeEditor.getBody(), 'p', {}, 'Text ...');
	});

	// Register example button
	ed.addButton('addcontent', {
		title : 'Add content at the end',
		cmd : 'mceAddContent',
		image : url + '/img/addcontent.png'
	});
}
});

// Register plugin with a short name
tinymce.PluginManager.add('addcontent', tinymce.plugins.AddContent);