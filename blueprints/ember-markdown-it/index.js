/*jshint node:true*/
module.exports = {
  afterInstall: function() {
    return this.addBowerPackageToProject('markdown-it');
  }
};
