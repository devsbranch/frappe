frappe.provide('frappe.ui.misc');
frappe.ui.misc.about = function() {
	if(!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({title: __('Central Services ZM')});

		$(d.body).html(repl("<div>\
		<p>"+__("HelpDesk, Asset tracker and Remote management Platform")+"</p>  \
		<p><i class='fa fa-globe fa-fw'></i>\
			Website: <a href='https://ihmafrica.org/' target='_blank'>#</a></p>\
		<p class='text-muted'>&copy; IHM Southern Africa</p> \
		</div>", frappe.app));

		frappe.ui.misc.about_dialog = d;

		// frappe.ui.misc.about_dialog.on_page_show = function() {
		// 	if(!frappe.versions) {
		// 		frappe.call({
		// 			method: "frappe.utils.change_log.get_versions",
		// 			callback: function(r) {
		// 				show_versions(r.message);
		// 			}
		// 		})
		// 	} else {
		// 		show_versions(frappe.versions);
		// 	}
		// };

		// var show_versions = function(versions) {
		// 	var $wrap = $("#about-app-versions").empty();
		// 	$.each(Object.keys(versions).sort(), function(i, key) {
		// 		var v = versions[key];
		// 		if(v.branch) {
		// 			var text = $.format('<p><b>{0}:</b> v{1} ({2})<br></p>',
		// 				[v.title, v.branch_version || v.version, v.branch])
		// 		} else {
		// 			var text = $.format('<p><b>{0}:</b> v{1}<br></p>',
		// 				[v.title, v.version])
		// 		}
		// 		$(text).appendTo($wrap);
		// 	});

		// 	frappe.versions = versions;
		// }

	}

	// frappe.ui.misc.about_dialog.show();

}
