$.fn.pagination&&($.fn.pagination.defaults.beforePageText="Strana",$.fn.pagination.defaults.afterPageText="z {pages}",$.fn.pagination.defaults.displayMsg="Zobrazuji {from} do {to} z {total} polo\u017eky");$.fn.datagrid&&($.fn.datagrid.defaults.loadMsg="Zpracov\u00e1n\u00ed, \u010dekejte pros\u00edm ...");$.fn.treegrid&&$.fn.datagrid&&($.fn.treegrid.defaults.loadMsg=$.fn.datagrid.defaults.loadMsg);$.messager&&($.messager.defaults.ok="Ok",$.messager.defaults.cancel="Zru\u0161it");$.map("validatebox textbox passwordbox filebox searchbox combo combobox combogrid combotree datebox datetimebox numberbox spinner numberspinner timespinner datetimespinner".split(" "),function(a){$.fn[a]&&($.fn[a].defaults.missingMessage="Toto pole je vy\u017eadov\u00e1no.")});$.fn.validatebox&&($.fn.validatebox.defaults.rules.email.message="Zadejte pros\u00edm platnou e-mailovou adresu.",$.fn.validatebox.defaults.rules.url.message="Zadejte pros\u00edm platnou adresu URL.",$.fn.validatebox.defaults.rules.length.message="Pros\u00edm, zadejte hodnotu mezi {0} a {1}.");$.fn.calendar&&($.fn.calendar.defaults.weeks="SMTWTFS".split(""),$.fn.calendar.defaults.months="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "));$.fn.datebox&&($.fn.datebox.defaults.currentText="Dnes",$.fn.datebox.defaults.closeText="Zav\u0159\u00edt",$.fn.datebox.defaults.okText="Ok");$.fn.datetimebox&&$.fn.datebox&&$.extend($.fn.datetimebox.defaults,{currentText:$.fn.datebox.defaults.currentText,closeText:$.fn.datebox.defaults.closeText,okText:$.fn.datebox.defaults.okText});