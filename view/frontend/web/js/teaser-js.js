define([
    'jquery',
    'Magento_Catalog/js/price-utils'
], function ($, priceUtils) {
    'use strict';
    $.widget('invoice.teaser', {
        options: {
            max_amount: 400,
            css_price_selector: '.price',
            css_dest_selector: ''
        },

        _create: function () {
            //var decimalSymbol = priceUtils.globalPriceFormat.decimalSymbol;//@todo
            var decimalSymbol = ',';
            var self = this;
            var patt = new RegExp("[^\\" + decimalSymbol + "\\d]", 'g');
            var price = parseFloat(
                $(self.options.css_price_selector)
                    .text()
                    .replace(patt, '')
                    .replace(decimalSymbol, '.')
            );
            if (price < self.options.max_amount) {
                var invoiceTeaser = new SequraInvoiceTeaser(
                    {
                        container: '#' + self.element.attr('id'),
                        fee: 0//@todo
                    }
                );
                invoiceTeaser.draw();
            }
            if ($(self.options.css_dest_selector)) {
                $(self.options.css_dest_selector).after($('#' + self.element.attr('id')));
            }
        }
    });

    return $.invoice.teaser;
});