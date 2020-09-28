Ext.define('LoginApp.model.Todo', {
  extend: 'LoginApp.model.Base',

  fields: [
    { name: 'id' },
    { name: 'text' },
    { name: 'completed', type: 'boolean', defaultValue: false }
  ]
});