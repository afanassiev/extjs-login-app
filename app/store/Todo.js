Ext.define('LoginApp.store.Todo', {
  extend: 'Ext.data.Store',
  alias: 'store.todo',
  model: 'LoginApp.model.Todo',

  listeners: {
    update: function () { },
    datachanged: function () { }
  }
});
