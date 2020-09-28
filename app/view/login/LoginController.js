Ext.define('LoginApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

  onLoginClick: function() {
    localStorage.setItem('LoginAppLoggedIn', true);

    this.getView().destroy();

    Ext.create({
      xtype: 'app-main'
    })
  }
})