/**
 * Created by chotoxautinh on 6/4/17.
 */
const odd = [
    {
        key: '1',
        pin: 1,
        name: 'SYS_3.3V',
        wPi: null
    }, {
        key: '3',
        pin: 3,
        name: 'I2C0_SDA',
        wPi: 8
    }, {
        key: '5',
        pin: 5,
        name: 'I2C0_SCL',
        wPi: 9
    }, {
        key: '7',
        pin: 7,
        name: 'GPIOG11',
        wPi: 7
    }, {
        key: '9',
        pin: 9,
        name: 'GND',
        wPi: null
    }, {
        key: '11',
        pin: 11,
        name: 'UART2_TX/GPIOA0',
        wPi: 0
    }, {
        key: '13',
        pin: 13,
        name: 'UART2_RTS/GPIOA2',
        wPi: 2
    }, {
        key: '15',
        pin: 15,
        name: 'UART2_RTS/GPIOA3',
        wPi: 3
    }, {
        key: '17',
        pin: 17,
        name: 'SYS_3.3V',
        wPi: null
    }, {
        key: '19',
        pin: 19,
        name: 'SPI0_MOSI/GPIOC0',
        wPi: 12
    }, {
        key: '21',
        pin: 21,
        name: 'SPI0_MISO/GPIOC1',
        wPi: 13
    }, {
        key: '23',
        pin: 23,
        name: 'SPI0_CLK/GPIOC2',
        wPi: 14
    }, {
        key: '25',
        pin: 25,
        name: 'GND',
        wPi: null
    }, {
        key: '27',
        pin: 27,
        name: 'I2C1_SDA/GPIOA19/PCM0_CLK/I2S0_BCK',
        wPi: 30
    }, {
        key: '29',
        pin: 29,
        name: 'GPIOA20/PCM0_DOUT/I2S0_SDOUT',
        wPi: 21
    }, {
        key: '31',
        pin: 31,
        name: 'GPIOA21/PCM0_DIN/I2S0_SDIN',
        wPi: 22
    }, {
        key: '33',
        pin: 33,
        name: 'GPIOA8',
        wPi: 23
    }, {
        key: '35',
        pin: 35,
        name: 'UART3_CTS/SPI1_MISO/GPIOA16',
        wPi: 24
    }, {
        key: '37',
        pin: 37,
        name: 'GPIOA9',
        wPi: 25
    }, {
        key: '39',
        pin: 39,
        name: 'GND',
        wPi: null
    }, {
        key: '41',
        pin: 41,
        name: 'GND',
        wPi: null
    }, {
        key: '43',
        pin: 43,
        name: 'UART_TXD0/GPIOA4',
        wPi: 32
    }
];

const even = [
    {
        key: '2',
        pin: 2,
        name: 'VDD_5V',
        wPi: null
    },
    {
        key: '4',
        pin: 4,
        name: 'VDD_5V',
        wPi: null
    },
    {
        key: '6',
        pin: 6,
        name: 'GND',
        wPi: null
    },
    {
        key: '8',
        pin: 8,
        name: 'UART1_TX/GPIOG6',
        wPi: 15
    },
    {
        key: '10',
        pin: 10,
        name: 'UART1_TX/GPIOG7',
        wPi: 16
    },
    {
        key: '12',
        pin: 12,
        name: 'PWM1/GPIOA6',
        wPi: 1
    }, {
        key: '14',
        pin: 14,
        name: 'GND',
        wPi: null
    }, {
        key: '16',
        pin: 16,
        name: 'UART1_RTS/GPIOG8',
        wPi: 4
    },
    {
        key: '18',
        pin: 18,
        name: 'UART1_RTS/GPIOG9',
        wPi: 5
    },
    {
        key: '20',
        pin: 20,
        name: 'GND',
        wPi: null
    }, {
        key: '22',
        pin: 22,
        name: 'UART2_RX/GPIOA1',
        wPi: 6
    }, {
        key: '24',
        pin: 24,
        name: 'SPI0_CS/GPIOC3',
        wPi: 10
    }, {
        key: '26',
        pin: 26,
        name: 'SPDIF-OUT/GPIOA17',
        wPi: 11
    },
    {
        key: '28',
        pin: 28,
        name: 'I2C1_SCL/GPIOA18/PCM0_SYNC/I2S0_LRCK',
        wPi: 31
    },
    {
        key: '30',
        pin: 30,
        name: 'GND',
        wPi: null
    },
    {
        key: '32',
        pin: 32,
        name: 'GPIOA7',
        wPi: 26
    },
    {
        key: '34',
        pin: 34,
        name: 'GND',
        wPi: null
    },
    {
        key: '36',
        pin: 36,
        name: 'UART3_TX/SPI1_CS/GPIOA13',
        wPi: 27
    },
    {
        key: '38',
        pin: 38,
        name: 'UART3_RTS/SPI1_MOSI/GPIOA15',
        wPi: 28
    },
    {
        key: '40',
        pin: 40,
        name: 'UART3_RTS/SPI1_MOSI/GPIOA14',
        wPi: 29
    }, {
        key: '42',
        pin: 42,
        name: 'VCC',
        wPi: null
    }, {
        key: '44',
        pin: 44,
        name: 'UART_RXD0/GPIOA5/PWM0',
        wPi: 33
    }
];

const value = {
    LOW: 0,
    HIGH: 1024
};

module.exports = {
    even, odd, value
}