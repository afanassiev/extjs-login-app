Ext.define('LoginApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'LoginApp.view.login.LoginController',
    'Ext.form.Panel'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Login Window',
  closable: false,
  autoShow: true,

  items: {
    xtype: 'form',
    reference: 'form',
    items: [{
      xtype: 'textfield',
      name: 'username',
      fieldLabel: 'Username',
      allowBlank: false
    }, {
      xtype: 'textfield',
      reference: 'password',
      inputType: 'password',
      fieldLabel: 'Password',
      allowBlank: false
    }, {
      xtype: 'displayfield',
      hideEmptyLabel: false,
      value: 'Please enter your password'
    }
  ],
  buttons: [{
    text: 'Login',
    formBind: true,
    listeners: {
      click: 'onLoginClick'
    }
  }]
}
})