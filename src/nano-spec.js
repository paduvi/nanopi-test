/**
 * Created by chotoxautinh on 6/4/17.
 */
const odd = [
    {
        key: '1',
        pin: 1,
        name: 'SYS_3.3V',
        gpio: null
    }, {
        key: '3',
        pin: 3,
        name: 'I2C0_SDA',
        gpio: null
    }, {
        key: '5',
        pin: 5,
        name: 'I2C0_SCL',
        gpio: null
    }, {
        key: '7',
        pin: 7,
        name: 'GPIOG11',
        gpio: 203
    }, {
        key: '9',
        pin: 9,
        name: 'GND',
        gpio: null
    }, {
        key: '11',
        pin: 11,
        name: 'UART2_TX/GPIOA0',
        gpio: 0
    }, {
        key: '13',
        pin: 13,
        name: 'UART2_RTS/GPIOA2',
        gpio: 2
    }, {
        key: '15',
        pin: 15,
        name: 'UART2_RTS/GPIOA3',
        gpio: 3
    }, {
        key: '17',
        pin: 17,
        name: 'SYS_3.3V',
        gpio: null
    }, {
        key: '19',
        pin: 19,
        name: 'SPI0_MOSI/GPIOC0',
        gpio: 64
    }, {
        key: '21',
        pin: 21,
        name: 'SPI0_MISO/GPIOC1',
        gpio: 65
    }, {
        key: '23',
        pin: 23,
        name: 'SPI0_CLK/GPIOC2',
        gpio: 66
    }, {
        key: '25',
        pin: 25,
        name: 'GND',
        gpio: null
    }, {
        key: '27',
        pin: 27,
        name: 'I2C1_SDA/GPIOA19/PCM0_CLK/I2S0_BCK',
        gpio: 19
    }, {
        key: '29',
        pin: 29,
        name: 'GPIOA20/PCM0_DOUT/I2S0_SDOUT',
        gpio: 20
    }, {
        key: '31',
        pin: 31,
        name: 'GPIOA21/PCM0_DIN/I2S0_SDIN',
        gpio: 21
    }, {
        key: '33',
        pin: 33,
        name: 'GPIOA8',
        gpio: 8
    }, {
        key: '35',
        pin: 35,
        name: 'UART3_CTS/SPI1_MISO/GPIOA16',
        gpio: 16
    }, {
        key: '37',
        pin: 37,
        name: 'GPIOA9',
        gpio: 9
    }, {
        key: '39',
        pin: 39,
        name: 'GND',
        gpio: null
    }
];

const even = [
    {
        key: '2',
        pin: 2,
        name: 'VDD_5V',
        gpio: null
    },
    {
        key: '4',
        pin: 4,
        name: 'VDD_5V',
        gpio: null
    },
    {
        key: '6',
        pin: 6,
        name: 'GND',
        gpio: null
    },
    {
        key: '8',
        pin: 8,
        name: 'UART1_TX/GPIOG6',
        gpio: 198
    },
    {
        key: '10',
        pin: 10,
        name: 'UART1_TX/GPIOG7',
        gpio: 199
    },
    {
        key: '12',
        pin: 12,
        name: 'PWM1/GPIOA6',
        gpio: 6
    }, {
        key: '14',
        pin: 14,
        name: 'GND',
        gpio: null
    }, {
        key: '16',
        pin: 16,
        name: 'UART1_RTS/GPIOG8',
        gpio: 200
    },
    {
        key: '18',
        pin: 18,
        name: 'UART1_RTS/GPIOG9',
        gpio: 201
    },
    {
        key: '20',
        pin: 20,
        name: 'GND',
        gpio: null
    }, {
        key: '22',
        pin: 22,
        name: 'UART2_RX/GPIOA1',
        gpio: 1
    }, {
        key: '24',
        pin: 24,
        name: 'SPI0_CS/GPIOC3',
        gpio: 67
    }, {
        key: '26',
        pin: 26,
        name: 'SPDIF-OUT/GPIOA17',
        gpio: 17
    },
    {
        key: '28',
        pin: 28,
        name: 'I2C1_SCL/GPIOA18/PCM0_SYNC/I2S0_LRCK',
        gpio: 18
    },
    {
        key: '30',
        pin: 30,
        name: 'GND',
        gpio: null
    },
    {
        key: '32',
        pin: 32,
        name: 'GPIOA7',
        gpio: 7
    },
    {
        key: '34',
        pin: 34,
        name: 'GND',
        gpio: null
    },
    {
        key: '36',
        pin: 36,
        name: 'UART3_TX/SPI1_CS/GPIOA13',
        gpio: 13
    },
    {
        key: '38',
        pin: 38,
        name: 'UART3_RTS/SPI1_MOSI/GPIOA15',
        gpio: 15
    },
    {
        key: '40',
        pin: 40,
        name: 'UART3_RTS/SPI1_MOSI/GPIOA14',
        gpio: 14
    }
]

module.exports = {
    even, odd
}