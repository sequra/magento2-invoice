<?php
/**
 * Copyright © 2017 SeQura Engineering. All rights reserved.
 */

namespace Sequra\Invoice\Model\Ui;

use Magento\Checkout\Model\ConfigProviderInterface;

//@todo: Implement toknization as option

/**
 * Class ConfigProvider
 */
final class ConfigProvider implements ConfigProviderInterface
{
    const CODE = 'sequra_invoice';

    /**
     * Retrieve assoc array of checkout configuration
     *
     * @return array
     */
    public function getConfig()
    {
        return [
            'payment' => [
                self::CODE => [
                    'useStoredCard' => [
                        '1' => __('Yes'),
                        '0' => __('No')
                    ]
                ]
            ]
        ];
    }
}
