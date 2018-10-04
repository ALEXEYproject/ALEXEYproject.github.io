$(function () {
	var goods = $(document.order.title);

	$(document).on('click', '[data-action="order"]', function (e) {
		e.preventDefault();

		var set = goods.val(),
			value = $(this).closest('[data-name]').data('name');

		goods.val('Заявка с сайта по услуге: ' + value);
	});
});