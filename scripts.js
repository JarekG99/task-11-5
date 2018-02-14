
function Button(text) {
	this.text = text || 'Hello';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button class="btn btn-info">');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		$('body').append(this.$element);
	}
}
var btn1 = new Button('Akuku!');
var btn2 = new Button();
btn1.create();
btn2.create();
