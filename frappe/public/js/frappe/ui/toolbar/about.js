frappe.provide('frappe.ui.misc');
frappe.ui.misc.about = function() {
	if(!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({title: __('IHM Central Services')});

		$(d.body).html(repl("<div>\
		<p>"+__("Helpdesk, asset and remote server management platform")+"</p>  \
		<p><i class='fa fa-globe fa-fw'></i>\
			Website: <a href='/' target='_blank'>IHM Central Services</a></p>\
		<hr>\
		<p class='text-muted'>&copy; Institute for Health Measurement Southern Africa.</p> \
		</div>", frappe.app));

		frappe.ui.misc.about_dialog = d;

		frappe.ui.misc.about_dialog.on_page_show = function() {
			if(!frappe.versions) {
				frappe.call({
					method: "frappe.utils.change_log.get_versions",
					callback: function(r) {
						// show_versions(r.message);
						console.log('loading ...')
					}
				})
			} else {
				show_versions(frappe.versions);
			}
		};

		var show_versions = function(versions) {
			var $wrap = $("#about-app-versions").empty();
			$.each(Object.keys(versions).sort(), function(i, key) {
				var v = versions[key];
				if(v.branch) {
					console.log('loading ...')
					// var text = $.format('<p><b>{0}:</b> v{1} ({2})<br></p>',
					// 	[v.title, v.branch_version || v.version, v.branch])
				} else {
					console.log('loading ...')
					// var text = $.format('<p><b>{0}:</b> v{1}<br></p>',
					// 	[v.title, v.version])
				}
				$('loading').appendTo($wrap);
			});

			frappe.versions = versions;
		}

	}

	frappe.ui.misc.about_dialog.show();

}
