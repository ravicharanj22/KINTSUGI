{
    "name": "algoridge",
        "version": "1.0.0",
            "lockfileVersion": 1,
                "requires": true,
                    "dependencies": {
        "@ethereumjs/common": {
            "version": "2.6.0",
                "resolved": "https://registry.npmjs.org/@ethereumjs/common/-/common-2.6.0.tgz",
                    "integrity": "sha512-Cq2qS0FTu6O2VU1sgg+WyU9Ps0M6j/BEMHN+hRaECXCV/r0aI78u4N6p52QW/BDVhwWZpCdrvG8X7NJdzlpNUA==",
                        "requires": {
                "crc-32": "^1.2.0",
                    "ethereumjs-util": "^7.1.3"
            }
        },
        "@ethereumjs/tx": {
            "version": "3.4.0",
                "resolved": "https://registry.npmjs.org/@ethereumjs/tx/-/tx-3.4.0.tgz",
                    "integrity": "sha512-WWUwg1PdjHKZZxPPo274ZuPsJCWV3SqATrEKQP1n2DrVYVP1aZIYpo/mFaA0BDoE0tIQmBeimRCEA0Lgil+yYw==",
                        "requires": {
                "@ethereumjs/common": "^2.6.0",
                    "ethereumjs-util": "^7.1.3"
            }
        },
        "@ethersproject/abi": {
            "version": "5.0.7",
                "resolved": "https://registry.npmjs.org/@ethersproject/abi/-/abi-5.0.7.tgz",
                    "integrity": "sha512-Cqktk+hSIckwP/W8O47Eef60VwmoSC/L3lY0+dIBhQPCNn9E4V7rwmm2aFrNRRDJfFlGuZ1khkQUOc3oBX+niw==",
                        "requires": {
                "@ethersproject/address": "^5.0.4",
                    "@ethersproject/bignumber": "^5.0.7",
                        "@ethersproject/bytes": "^5.0.4",
                            "@ethersproject/constants": "^5.0.4",
                                "@ethersproject/hash": "^5.0.4",
                                    "@ethersproject/keccak256": "^5.0.3",
                                        "@ethersproject/logger": "^5.0.5",
                                            "@ethersproject/properties": "^5.0.3",
                                                "@ethersproject/strings": "^5.0.4"
            }
        },
        "@ethersproject/abstract-provider": {
            "version": "5.5.1",
                "resolved": "https://registry.npmjs.org/@ethersproject/abstract-provider/-/abstract-provider-5.5.1.tgz",
                    "integrity": "sha512-m+MA/ful6eKbxpr99xUYeRvLkfnlqzrF8SZ46d/xFB1A7ZVknYc/sXJG0RcufF52Qn2jeFj1hhcoQ7IXjNKUqg==",
                        "requires": {
                "@ethersproject/bignumber": "^5.5.0",
                    "@ethersproject/bytes": "^5.5.0",
                        "@ethersproject/logger": "^5.5.0",
                            "@ethersproject/networks": "^5.5.0",
                                "@ethersproject/properties": "^5.5.0",
                                    "@ethersproject/transactions": "^5.5.0",
                                        "@ethersproject/web": "^5.5.0"
            }
        },
        "@ethersproject/abstract-signer": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/abstract-signer/-/abstract-signer-5.5.0.tgz",
                    "integrity": "sha512-lj//7r250MXVLKI7sVarXAbZXbv9P50lgmJQGr2/is82EwEb8r7HrxsmMqAjTsztMYy7ohrIhGMIml+Gx4D3mA==",
                        "requires": {
                "@ethersproject/abstract-provider": "^5.5.0",
                    "@ethersproject/bignumber": "^5.5.0",
                        "@ethersproject/bytes": "^5.5.0",
                            "@ethersproject/logger": "^5.5.0",
                                "@ethersproject/properties": "^5.5.0"
            }
        },
        "@ethersproject/address": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/address/-/address-5.5.0.tgz",
                    "integrity": "sha512-l4Nj0eWlTUh6ro5IbPTgbpT4wRbdH5l8CQf7icF7sb/SI3Nhd9Y9HzhonTSTi6CefI0necIw7LJqQPopPLZyWw==",
                        "requires": {
                "@ethersproject/bignumber": "^5.5.0",
                    "@ethersproject/bytes": "^5.5.0",
                        "@ethersproject/keccak256": "^5.5.0",
                            "@ethersproject/logger": "^5.5.0",
                                "@ethersproject/rlp": "^5.5.0"
            }
        },
        "@ethersproject/base64": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/base64/-/base64-5.5.0.tgz",
                    "integrity": "sha512-tdayUKhU1ljrlHzEWbStXazDpsx4eg1dBXUSI6+mHlYklOXoXF6lZvw8tnD6oVaWfnMxAgRSKROg3cVKtCcppA==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0"
            }
        },
        "@ethersproject/bignumber": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/bignumber/-/bignumber-5.5.0.tgz",
                    "integrity": "sha512-6Xytlwvy6Rn3U3gKEc1vP7nR92frHkv6wtVr95LFR3jREXiCPzdWxKQ1cx4JGQBXxcguAwjA8murlYN2TSiEbg==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0",
                    "@ethersproject/logger": "^5.5.0",
                        "bn.js": "^4.11.9"
            }
        },
        "@ethersproject/bytes": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/bytes/-/bytes-5.5.0.tgz",
                    "integrity": "sha512-ABvc7BHWhZU9PNM/tANm/Qx4ostPGadAuQzWTr3doklZOhDlmcBqclrQe/ZXUIj3K8wC28oYeuRa+A37tX9kog==",
                        "requires": {
                "@ethersproject/logger": "^5.5.0"
            }
        },
        "@ethersproject/constants": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/constants/-/constants-5.5.0.tgz",
                    "integrity": "sha512-2MsRRVChkvMWR+GyMGY4N1sAX9Mt3J9KykCsgUFd/1mwS0UH1qw+Bv9k1UJb3X3YJYFco9H20pjSlOIfCG5HYQ==",
                        "requires": {
                "@ethersproject/bignumber": "^5.5.0"
            }
        },
        "@ethersproject/hash": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/hash/-/hash-5.5.0.tgz",
                    "integrity": "sha512-dnGVpK1WtBjmnp3mUT0PlU2MpapnwWI0PibldQEq1408tQBAbZpPidkWoVVuNMOl/lISO3+4hXZWCL3YV7qzfg==",
                        "requires": {
                "@ethersproject/abstract-signer": "^5.5.0",
                    "@ethersproject/address": "^5.5.0",
                        "@ethersproject/bignumber": "^5.5.0",
                            "@ethersproject/bytes": "^5.5.0",
                                "@ethersproject/keccak256": "^5.5.0",
                                    "@ethersproject/logger": "^5.5.0",
                                        "@ethersproject/properties": "^5.5.0",
                                            "@ethersproject/strings": "^5.5.0"
            }
        },
        "@ethersproject/keccak256": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/keccak256/-/keccak256-5.5.0.tgz",
                    "integrity": "sha512-5VoFCTjo2rYbBe1l2f4mccaRFN/4VQEYFwwn04aJV2h7qf4ZvI2wFxUE1XOX+snbwCLRzIeikOqtAoPwMza9kg==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0",
                    "js-sha3": "0.8.0"
            }
        },
        "@ethersproject/logger": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/logger/-/logger-5.5.0.tgz",
                    "integrity": "sha512-rIY/6WPm7T8n3qS2vuHTUBPdXHl+rGxWxW5okDfo9J4Z0+gRRZT0msvUdIJkE4/HS29GUMziwGaaKO2bWONBrg=="
        },
        "@ethersproject/networks": {
            "version": "5.5.2",
                "resolved": "https://registry.npmjs.org/@ethersproject/networks/-/networks-5.5.2.tgz",
                    "integrity": "sha512-NEqPxbGBfy6O3x4ZTISb90SjEDkWYDUbEeIFhJly0F7sZjoQMnj5KYzMSkMkLKZ+1fGpx00EDpHQCy6PrDupkQ==",
                        "requires": {
                "@ethersproject/logger": "^5.5.0"
            }
        },
        "@ethersproject/properties": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/properties/-/properties-5.5.0.tgz",
                    "integrity": "sha512-l3zRQg3JkD8EL3CPjNK5g7kMx4qSwiR60/uk5IVjd3oq1MZR5qUg40CNOoEJoX5wc3DyY5bt9EbMk86C7x0DNA==",
                        "requires": {
                "@ethersproject/logger": "^5.5.0"
            }
        },
        "@ethersproject/rlp": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/rlp/-/rlp-5.5.0.tgz",
                    "integrity": "sha512-hLv8XaQ8PTI9g2RHoQGf/WSxBfTB/NudRacbzdxmst5VHAqd1sMibWG7SENzT5Dj3yZ3kJYx+WiRYEcQTAkcYA==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0",
                    "@ethersproject/logger": "^5.5.0"
            }
        },
        "@ethersproject/signing-key": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/signing-key/-/signing-key-5.5.0.tgz",
                    "integrity": "sha512-5VmseH7qjtNmDdZBswavhotYbWB0bOwKIlOTSlX14rKn5c11QmJwGt4GHeo7NrL/Ycl7uo9AHvEqs5xZgFBTng==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0",
                    "@ethersproject/logger": "^5.5.0",
                        "@ethersproject/properties": "^5.5.0",
                            "bn.js": "^4.11.9",
                                "elliptic": "6.5.4",
                                    "hash.js": "1.1.7"
            }
        },
        "@ethersproject/strings": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/strings/-/strings-5.5.0.tgz",
                    "integrity": "sha512-9fy3TtF5LrX/wTrBaT8FGE6TDJyVjOvXynXJz5MT5azq+E6D92zuKNx7i29sWW2FjVOaWjAsiZ1ZWznuduTIIQ==",
                        "requires": {
                "@ethersproject/bytes": "^5.5.0",
                    "@ethersproject/constants": "^5.5.0",
                        "@ethersproject/logger": "^5.5.0"
            }
        },
        "@ethersproject/transactions": {
            "version": "5.5.0",
                "resolved": "https://registry.npmjs.org/@ethersproject/transactions/-/transactions-5.5.0.tgz",
                    "integrity": "sha512-9RZYSKX26KfzEd/1eqvv8pLauCKzDTub0Ko4LfIgaERvRuwyaNV78mJs7cpIgZaDl6RJui4o49lHwwCM0526zA==",
                        "requires": {
                "@ethersproject/address": "^5.5.0",
                    "@ethersproject/bignumber": "^5.5.0",
                        "@ethersproject/bytes": "^5.5.0",
                            "@ethersproject/constants": "^5.5.0",
                                "@ethersproject/keccak256": "^5.5.0",
                                    "@ethersproject/logger": "^5.5.0",
                                        "@ethersproject/properties": "^5.5.0",
                                            "@ethersproject/rlp": "^5.5.0",
                                                "@ethersproject/signing-key": "^5.5.0"
            }
        },
        "@ethersproject/web": {
            "version": "5.5.1",
                "resolved": "https://registry.npmjs.org/@ethersproject/web/-/web-5.5.1.tgz",
                    "integrity": "sha512-olvLvc1CB12sREc1ROPSHTdFCdvMh0J5GSJYiQg2D0hdD4QmJDy8QYDb1CvoqD/bF1c++aeKv2sR5uduuG9dQg==",
                        "requires": {
                "@ethersproject/base64": "^5.5.0",
                    "@ethersproject/bytes": "^5.5.0",
                        "@ethersproject/logger": "^5.5.0",
                            "@ethersproject/properties": "^5.5.0",
                                "@ethersproject/strings": "^5.5.0"
            }
        },
        "@sindresorhus/is": {
            "version": "0.14.0",
                "resolved": "https://registry.npmjs.org/@sindresorhus/is/-/is-0.14.0.tgz",
                    "integrity": "sha512-9NET910DNaIPngYnLLPeg+Ogzqsi9uM4mSboU5y6p8S5DzMTVEsJZrawi+BoDNUVBa2DhJqQYUFvMDfgU062LQ=="
        },
        "@szmarczak/http-timer": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/@szmarczak/http-timer/-/http-timer-1.1.2.tgz",
                    "integrity": "sha512-XIB2XbzHTN6ieIjfIMV9hlVcfPU26s2vafYWQcZHWXHOxiaRZYEDKEwdl129Zyg50+foYV2jCgtrqSA6qNuNSA==",
                        "requires": {
                "defer-to-connect": "^1.0.1"
            }
        },
        "@types/bn.js": {
            "version": "4.11.6",
                "resolved": "https://registry.npmjs.org/@types/bn.js/-/bn.js-4.11.6.tgz",
                    "integrity": "sha512-pqr857jrp2kPuO9uRjZ3PwnJTjoQy+fcdxvBTvHm6dkmEL9q+hDD/2j/0ELOBPtPnS8LjCX0gI9nbl8lVkadpg==",
                        "requires": {
                "@types/node": "*"
            }
        },
        "@types/node": {
            "version": "12.20.41",
                "resolved": "https://registry.npmjs.org/@types/node/-/node-12.20.41.tgz",
                    "integrity": "sha512-f6xOqucbDirG7LOzedpvzjP3UTmHttRou3Mosx3vL9wr9AIQGhcPgVnqa8ihpZYnxyM1rxeNCvTyukPKZtq10Q=="
        },
        "@types/pbkdf2": {
            "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/@types/pbkdf2/-/pbkdf2-3.1.0.tgz",
                    "integrity": "sha512-Cf63Rv7jCQ0LaL8tNXmEyqTHuIJxRdlS5vMh1mj5voN4+QFhVZnlZruezqpWYDiJ8UTzhP0VmeLXCmBk66YrMQ==",
                        "requires": {
                "@types/node": "*"
            }
        },
        "@types/secp256k1": {
            "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/@types/secp256k1/-/secp256k1-4.0.3.tgz",
                    "integrity": "sha512-Da66lEIFeIz9ltsdMZcpQvmrmmoqrfju8pm1BH8WbYjZSwUgCwXLb9C+9XYogwBITnbsSaMdVPb2ekf7TV+03w==",
                        "requires": {
                "@types/node": "*"
            }
        },
        "accepts": {
            "version": "1.3.7",
                "resolved": "https://registry.npmjs.org/accepts/-/accepts-1.3.7.tgz",
                    "integrity": "sha512-Il80Qs2WjYlJIBNzNkK6KYqlVMTbZLXgHx2oT0pU/fjRHyEp+PEfEPY0R3WCwAGVOtauxh1hOxNgIf5bv7dQpA==",
                        "requires": {
                "mime-types": "~2.1.24",
                    "negotiator": "0.6.2"
            }
        },
        "ajv": {
            "version": "6.12.6",
                "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
                    "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
                        "requires": {
                "fast-deep-equal": "^3.1.1",
                    "fast-json-stable-stringify": "^2.0.0",
                        "json-schema-traverse": "^0.4.1",
                            "uri-js": "^4.2.2"
            }
        },
        "algo-msgpack-with-bigint": {
            "version": "2.1.1",
                "resolved": "https://registry.npmjs.org/algo-msgpack-with-bigint/-/algo-msgpack-with-bigint-2.1.1.tgz",
                    "integrity": "sha512-F1tGh056XczEaEAqu7s+hlZUDWwOBT70Eq0lfMpBP2YguSQVyxRbprLq5rELXKQOyOaixTWYhMeMQMzP0U5FoQ=="
        },
        "algosdk": {
            "version": "1.12.0",
                "resolved": "https://registry.npmjs.org/algosdk/-/algosdk-1.12.0.tgz",
                    "integrity": "sha512-Iqek0AwcCeXLywVg4E8gWWjmuPZ10P7PUmpZrlR71FSNyEtX4Ie+UgrNHWhkYnhyykRU5mjtvD4Hrb2eOepsGA==",
                        "requires": {
                "algo-msgpack-with-bigint": "^2.1.1",
                    "buffer": "^6.0.2",
                        "hi-base32": "^0.5.1",
                            "js-sha256": "^0.9.0",
                                "js-sha3": "^0.8.0",
                                    "js-sha512": "^0.8.0",
                                        "json-bigint": "^1.0.0",
                                            "superagent": "^6.1.0",
                                                "tweetnacl": "^1.0.3",
                                                    "url-parse": "^1.5.1"
            }
        },
        "array-flatten": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/array-flatten/-/array-flatten-1.1.1.tgz",
                    "integrity": "sha1-ml9pkFGx5wczKPKgCJaLZOopVdI="
        },
        "asn1": {
            "version": "0.2.6",
                "resolved": "https://registry.npmjs.org/asn1/-/asn1-0.2.6.tgz",
                    "integrity": "sha512-ix/FxPn0MDjeyJ7i/yoHGFt/EX6LyNbxSEhPPXODPL+KB0VPk86UYfL0lMdy+KCnv+fmvIzySwaK5COwqVbWTQ==",
                        "requires": {
                "safer-buffer": "~2.1.0"
            }
        },
        "asn1.js": {
            "version": "5.4.1",
                "resolved": "https://registry.npmjs.org/asn1.js/-/asn1.js-5.4.1.tgz",
                    "integrity": "sha512-+I//4cYPccV8LdmBLiX8CYvf9Sp3vQsrqu2QNXRcrbiWvcx/UdlFiqUJJzxRQxgsZmvhXhn4cSKeSmoFjVdupA==",
                        "requires": {
                "bn.js": "^4.0.0",
                    "inherits": "^2.0.1",
                        "minimalistic-assert": "^1.0.0",
                            "safer-buffer": "^2.1.0"
            }
        },
        "assert-plus": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/assert-plus/-/assert-plus-1.0.0.tgz",
                    "integrity": "sha1-8S4PPF13sLHN2RRpQuTpbB5N1SU="
        },
        "async-limiter": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/async-limiter/-/async-limiter-1.0.1.tgz",
                    "integrity": "sha512-csOlWGAcRFJaI6m+F2WKdnMKr4HhdhFVBk0H/QbJFMCr+uO2kwohwXQPxw/9OCxp05r5ghVBFSyioixx3gfkNQ=="
        },
        "asynckit": {
            "version": "0.4.0",
                "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
                    "integrity": "sha1-x57Zf380y48robyXkLzDZkdLS3k="
        },
        "available-typed-arrays": {
            "version": "1.0.5",
                "resolved": "https://registry.npmjs.org/available-typed-arrays/-/available-typed-arrays-1.0.5.tgz",
                    "integrity": "sha512-DMD0KiN46eipeziST1LPP/STfDU0sufISXmjSgvVsoU2tqxctQeASejWcfNtxYKqETM1UxQ8sp2OrSBWpHY6sw=="
        },
        "aws-sign2": {
            "version": "0.7.0",
                "resolved": "https://registry.npmjs.org/aws-sign2/-/aws-sign2-0.7.0.tgz",
                    "integrity": "sha1-tG6JCTSpWR8tL2+G1+ap8bP+dqg="
        },
        "aws4": {
            "version": "1.11.0",
                "resolved": "https://registry.npmjs.org/aws4/-/aws4-1.11.0.tgz",
                    "integrity": "sha512-xh1Rl34h6Fi1DC2WWKfxUTVqRsNnr6LsKz2+hfwDxQJWmrx8+c7ylaqBMcHfl1U1r2dsifOvKX3LQuLNZ+XSvA=="
        },
        "base-x": {
            "version": "3.0.9",
                "resolved": "https://registry.npmjs.org/base-x/-/base-x-3.0.9.tgz",
                    "integrity": "sha512-H7JU6iBHTal1gp56aKoaa//YUxEaAOUiydvrV/pILqIHXTtqxSkATOnDA2u+jZ/61sD+L/412+7kzXRtWukhpQ==",
                        "requires": {
                "safe-buffer": "^5.0.1"
            }
        },
        "base64-js": {
            "version": "1.5.1",
                "resolved": "https://registry.npmjs.org/base64-js/-/base64-js-1.5.1.tgz",
                    "integrity": "sha512-AKpaYlHn8t4SVbOHCy+b5+KKgvR4vrsD8vbvrbiQJps7fKDTkjkDry6ji0rUJjC0kzbNePLwzxq8iypo41qeWA=="
        },
        "bcrypt-pbkdf": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/bcrypt-pbkdf/-/bcrypt-pbkdf-1.0.2.tgz",
                    "integrity": "sha1-pDAdOJtqQ/m2f/PKEaP2Y342Dp4=",
                        "requires": {
                "tweetnacl": "^0.14.3"
            },
            "dependencies": {
                "tweetnacl": {
                    "version": "0.14.5",
                        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
                            "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
                }
            }
        },
        "bignumber.js": {
            "version": "9.0.2",
                "resolved": "https://registry.npmjs.org/bignumber.js/-/bignumber.js-9.0.2.tgz",
                    "integrity": "sha512-GAcQvbpsM0pUb0zw1EI0KhQEZ+lRwR5fYaAp3vPOYuP7aDvGy6cVN6XHLauvF8SOga2y0dcLcjt3iQDTSEliyw=="
        },
        "blakejs": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/blakejs/-/blakejs-1.1.1.tgz",
                    "integrity": "sha512-bLG6PHOCZJKNshTjGRBvET0vTciwQE6zFKOKKXPDJfwFBd4Ac0yBfPZqcGvGJap50l7ktvlpFqc2jGVaUgbJgg=="
        },
        "bluebird": {
            "version": "3.7.2",
                "resolved": "https://registry.npmjs.org/bluebird/-/bluebird-3.7.2.tgz",
                    "integrity": "sha512-XpNj6GDQzdfW+r2Wnn7xiSAd7TM3jzkxGXBGTtWKuSXv1xUV+azxAm8jdWZN06QTQk+2N2XB9jRDkvbmQmcRtg=="
        },
        "bn.js": {
            "version": "4.12.0",
                "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.12.0.tgz",
                    "integrity": "sha512-c98Bf3tPniI+scsdk237ku1Dc3ujXQTSgyiPUDEOe7tRkhrqridvh8klBv0HCEso1OLOYcHuCv/cS6DNxKH+ZA=="
        },
        "body-parser": {
            "version": "1.19.1",
                "resolved": "https://registry.npmjs.org/body-parser/-/body-parser-1.19.1.tgz",
                    "integrity": "sha512-8ljfQi5eBk8EJfECMrgqNGWPEY5jWP+1IzkzkGdFFEwFQZZyaZ21UqdaHktgiMlH0xLHqIFtE/u2OYE5dOtViA==",
                        "requires": {
                "bytes": "3.1.1",
                    "content-type": "~1.0.4",
                        "debug": "2.6.9",
                            "depd": "~1.1.2",
                                "http-errors": "1.8.1",
                                    "iconv-lite": "0.4.24",
                                        "on-finished": "~2.3.0",
                                            "qs": "6.9.6",
                                                "raw-body": "2.4.2",
                                                    "type-is": "~1.6.18"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                                "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                },
                "qs": {
                    "version": "6.9.6",
                        "resolved": "https://registry.npmjs.org/qs/-/qs-6.9.6.tgz",
                            "integrity": "sha512-TIRk4aqYLNoJUbd+g2lEdz5kLWIuTMRagAXxl78Q0RiVjAOugHmeKNGdd3cwo/ktpf9aL9epCfFqWDEKysUlLQ=="
                }
            }
        },
        "brorand": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/brorand/-/brorand-1.1.0.tgz",
                    "integrity": "sha1-EsJe/kCkXjwyPrhnWgoM5XsiNx8="
        },
        "browserify-aes": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/browserify-aes/-/browserify-aes-1.2.0.tgz",
                    "integrity": "sha512-+7CHXqGuspUn/Sl5aO7Ea0xWGAtETPXNSAjHo48JfLdPWcMng33Xe4znFvQweqc/uzk5zSOI3H52CYnjCfb5hA==",
                        "requires": {
                "buffer-xor": "^1.0.3",
                    "cipher-base": "^1.0.0",
                        "create-hash": "^1.1.0",
                            "evp_bytestokey": "^1.0.3",
                                "inherits": "^2.0.1",
                                    "safe-buffer": "^5.0.1"
            }
        },
        "browserify-cipher": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/browserify-cipher/-/browserify-cipher-1.0.1.tgz",
                    "integrity": "sha512-sPhkz0ARKbf4rRQt2hTpAHqn47X3llLkUGn+xEJzLjwY8LRs2p0v7ljvI5EyoRO/mexrNunNECisZs+gw2zz1w==",
                        "requires": {
                "browserify-aes": "^1.0.4",
                    "browserify-des": "^1.0.0",
                        "evp_bytestokey": "^1.0.0"
            }
        },
        "browserify-des": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/browserify-des/-/browserify-des-1.0.2.tgz",
                    "integrity": "sha512-BioO1xf3hFwz4kc6iBhI3ieDFompMhrMlnDFC4/0/vd5MokpuAc3R+LYbwTA9A5Yc9pq9UYPqffKpW2ObuwX5A==",
                        "requires": {
                "cipher-base": "^1.0.1",
                    "des.js": "^1.0.0",
                        "inherits": "^2.0.1",
                            "safe-buffer": "^5.1.2"
            }
        },
        "browserify-rsa": {
            "version": "4.1.0",
                "resolved": "https://registry.npmjs.org/browserify-rsa/-/browserify-rsa-4.1.0.tgz",
                    "integrity": "sha512-AdEER0Hkspgno2aR97SAf6vi0y0k8NuOpGnVH3O99rcA5Q6sh8QxcngtHuJ6uXwnfAXNM4Gn1Gb7/MV1+Ymbog==",
                        "requires": {
                "bn.js": "^5.0.0",
                    "randombytes": "^2.0.1"
            },
            "dependencies": {
                "bn.js": {
                    "version": "5.2.0",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.2.0.tgz",
                            "integrity": "sha512-D7iWRBvnZE8ecXiLj/9wbxH7Tk79fAh8IHaTNq1RWRixsS02W+5qS+iE9yq6RYl0asXx5tw0bLhmT5pIfbSquw=="
                }
            }
        },
        "browserify-sign": {
            "version": "4.2.1",
                "resolved": "https://registry.npmjs.org/browserify-sign/-/browserify-sign-4.2.1.tgz",
                    "integrity": "sha512-/vrA5fguVAKKAVTNJjgSm1tRQDHUU6DbwO9IROu/0WAzC8PKhucDSh18J0RMvVeHAn5puMd+QHC2erPRNf8lmg==",
                        "requires": {
                "bn.js": "^5.1.1",
                    "browserify-rsa": "^4.0.1",
                        "create-hash": "^1.2.0",
                            "create-hmac": "^1.1.7",
                                "elliptic": "^6.5.3",
                                    "inherits": "^2.0.4",
                                        "parse-asn1": "^5.1.5",
                                            "readable-stream": "^3.6.0",
                                                "safe-buffer": "^5.2.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "5.2.0",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.2.0.tgz",
                            "integrity": "sha512-D7iWRBvnZE8ecXiLj/9wbxH7Tk79fAh8IHaTNq1RWRixsS02W+5qS+iE9yq6RYl0asXx5tw0bLhmT5pIfbSquw=="
                }
            }
        },
        "bs58": {
            "version": "4.0.1",
                "resolved": "https://registry.npmjs.org/bs58/-/bs58-4.0.1.tgz",
                    "integrity": "sha1-vhYedsNU9veIrkBx9j806MTwpCo=",
                        "requires": {
                "base-x": "^3.0.2"
            }
        },
        "bs58check": {
            "version": "2.1.2",
                "resolved": "https://registry.npmjs.org/bs58check/-/bs58check-2.1.2.tgz",
                    "integrity": "sha512-0TS1jicxdU09dwJMNZtVAfzPi6Q6QeN0pM1Fkzrjn+XYHvzMKPU3pHVpva+769iNVSfIYWf7LJ6WR+BuuMf8cA==",
                        "requires": {
                "bs58": "^4.0.0",
                    "create-hash": "^1.1.0",
                        "safe-buffer": "^5.1.2"
            }
        },
        "buffer": {
            "version": "6.0.3",
                "resolved": "https://registry.npmjs.org/buffer/-/buffer-6.0.3.tgz",
                    "integrity": "sha512-FTiCpNxtwiZZHEZbcbTIcZjERVICn9yq/pDFkTl95/AxzD1naBctN7YO68riM/gLSDY7sdrMby8hofADYuuqOA==",
                        "requires": {
                "base64-js": "^1.3.1",
                    "ieee754": "^1.2.1"
            }
        },
        "buffer-to-arraybuffer": {
            "version": "0.0.5",
                "resolved": "https://registry.npmjs.org/buffer-to-arraybuffer/-/buffer-to-arraybuffer-0.0.5.tgz",
                    "integrity": "sha1-YGSkD6dutDxyOrqe+PbhIW0QURo="
        },
        "buffer-xor": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/buffer-xor/-/buffer-xor-1.0.3.tgz",
                    "integrity": "sha1-JuYe0UIvtw3ULm42cp7VHYVf6Nk="
        },
        "bufferutil": {
            "version": "4.0.6",
                "resolved": "https://registry.npmjs.org/bufferutil/-/bufferutil-4.0.6.tgz",
                    "integrity": "sha512-jduaYOYtnio4aIAyc6UbvPCVcgq7nYpVnucyxr6eCYg/Woad9Hf/oxxBRDnGGjPfjUm6j5O/uBWhIu4iLebFaw==",
                        "requires": {
                "node-gyp-build": "^4.3.0"
            }
        },
        "bytes": {
            "version": "3.1.1",
                "resolved": "https://registry.npmjs.org/bytes/-/bytes-3.1.1.tgz",
                    "integrity": "sha512-dWe4nWO/ruEOY7HkUJ5gFt1DCFV9zPRoJr8pV0/ASQermOZjtq8jMjOprC0Kd10GLN+l7xaUPvxzJFWtxGu8Fg=="
        },
        "cacheable-request": {
            "version": "6.1.0",
                "resolved": "https://registry.npmjs.org/cacheable-request/-/cacheable-request-6.1.0.tgz",
                    "integrity": "sha512-Oj3cAGPCqOZX7Rz64Uny2GYAZNliQSqfbePrgAQ1wKAihYmCUnraBtJtKcGR4xz7wF+LoJC+ssFZvv5BgF9Igg==",
                        "requires": {
                "clone-response": "^1.0.2",
                    "get-stream": "^5.1.0",
                        "http-cache-semantics": "^4.0.0",
                            "keyv": "^3.0.0",
                                "lowercase-keys": "^2.0.0",
                                    "normalize-url": "^4.1.0",
                                        "responselike": "^1.0.2"
            },
            "dependencies": {
                "get-stream": {
                    "version": "5.2.0",
                        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-5.2.0.tgz",
                            "integrity": "sha512-nBF+F1rAZVCu/p7rjzgA+Yb4lfYXrpl7a6VmJrU8wF9I1CKvP/QwPNZHnOlwbTkY6dvtFIzFMSyQXbLoTQPRpA==",
                                "requires": {
                        "pump": "^3.0.0"
                    }
                },
                "lowercase-keys": {
                    "version": "2.0.0",
                        "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-2.0.0.tgz",
                            "integrity": "sha512-tqNXrS78oMOE73NMxK4EMLQsQowWf8jKooH9g7xPavRT706R6bkQJ6DY2Te7QukaZsulxa30wQ7bk0pm4XiHmA=="
                }
            }
        },
        "call-bind": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.2.tgz",
                    "integrity": "sha512-7O+FbCihrB5WGbFYesctwmTKae6rOiIzmz1icreWJ+0aA7LJfuqhEso2T9ncpcFtzMQtzXf2QGGueWJGTYsqrA==",
                        "requires": {
                "function-bind": "^1.1.1",
                    "get-intrinsic": "^1.0.2"
            }
        },
        "caseless": {
            "version": "0.12.0",
                "resolved": "https://registry.npmjs.org/caseless/-/caseless-0.12.0.tgz",
                    "integrity": "sha1-G2gcIf+EAzyCZUMJBolCDRhxUdw="
        },
        "chownr": {
            "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/chownr/-/chownr-1.1.4.tgz",
                    "integrity": "sha512-jJ0bqzaylmJtVnNgzTeSOs8DPavpbYgEr/b0YL8/2GO3xJEhInFmhKMUnEJQjZumK7KXGFhUy89PrsJWlakBVg=="
        },
        "cids": {
            "version": "0.7.5",
                "resolved": "https://registry.npmjs.org/cids/-/cids-0.7.5.tgz",
                    "integrity": "sha512-zT7mPeghoWAu+ppn8+BS1tQ5qGmbMfB4AregnQjA/qHY3GC1m1ptI9GkWNlgeu38r7CuRdXB47uY2XgAYt6QVA==",
                        "requires": {
                "buffer": "^5.5.0",
                    "class-is": "^1.1.0",
                        "multibase": "~0.6.0",
                            "multicodec": "^1.0.0",
                                "multihashes": "~0.4.15"
            },
            "dependencies": {
                "buffer": {
                    "version": "5.7.1",
                        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
                            "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
                                "requires": {
                        "base64-js": "^1.3.1",
                            "ieee754": "^1.1.13"
                    }
                },
                "multicodec": {
                    "version": "1.0.4",
                        "resolved": "https://registry.npmjs.org/multicodec/-/multicodec-1.0.4.tgz",
                            "integrity": "sha512-NDd7FeS3QamVtbgfvu5h7fd1IlbaC4EQ0/pgU4zqE2vdHCmBGsUa0TiM8/TdSeG6BMPC92OOCf8F1ocE/Wkrrg==",
                                "requires": {
                        "buffer": "^5.6.0",
                            "varint": "^5.0.0"
                    }
                }
            }
        },
        "cipher-base": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/cipher-base/-/cipher-base-1.0.4.tgz",
                    "integrity": "sha512-Kkht5ye6ZGmwv40uUDZztayT2ThLQGfnj/T71N/XzeZeo3nf8foyW7zGTsPYkEya3m5f3cAypH+qe7YOrM1U2Q==",
                        "requires": {
                "inherits": "^2.0.1",
                    "safe-buffer": "^5.0.1"
            }
        },
        "class-is": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/class-is/-/class-is-1.1.0.tgz",
                    "integrity": "sha512-rhjH9AG1fvabIDoGRVH587413LPjTZgmDF9fOFCbFJQV4yuocX1mHxxvXI4g3cGwbVY9wAYIoKlg1N79frJKQw=="
        },
        "clone-response": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/clone-response/-/clone-response-1.0.2.tgz",
                    "integrity": "sha1-0dyXOSAxTfZ/vrlCI7TuNQI56Ws=",
                        "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "combined-stream": {
            "version": "1.0.8",
                "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
                    "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
                        "requires": {
                "delayed-stream": "~1.0.0"
            }
        },
        "component-emitter": {
            "version": "1.3.0",
                "resolved": "https://registry.npmjs.org/component-emitter/-/component-emitter-1.3.0.tgz",
                    "integrity": "sha512-Rd3se6QB+sO1TwqZjscQrurpEPIfO0/yYnSin6Q/rD3mOutHvUrCAhJub3r90uNb+SESBuE0QYoB90YdfatsRg=="
        },
        "content-disposition": {
            "version": "0.5.4",
                "resolved": "https://registry.npmjs.org/content-disposition/-/content-disposition-0.5.4.tgz",
                    "integrity": "sha512-FveZTNuGw04cxlAiWbzi6zTAL/lhehaWbTtgluJh4/E95DqMwTmha3KZN1aAWA8cFIhHzMZUvLevkw5Rqk+tSQ==",
                        "requires": {
                "safe-buffer": "5.2.1"
            }
        },
        "content-hash": {
            "version": "2.5.2",
                "resolved": "https://registry.npmjs.org/content-hash/-/content-hash-2.5.2.tgz",
                    "integrity": "sha512-FvIQKy0S1JaWV10sMsA7TRx8bpU+pqPkhbsfvOJAdjRXvYxEckAwQWGwtRjiaJfh+E0DvcWUGqcdjwMGFjsSdw==",
                        "requires": {
                "cids": "^0.7.1",
                    "multicodec": "^0.5.5",
                        "multihashes": "^0.4.15"
            }
        },
        "content-type": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/content-type/-/content-type-1.0.4.tgz",
                    "integrity": "sha512-hIP3EEPs8tB9AT1L+NUqtwOAps4mk2Zob89MWXMHjHWg9milF/j4osnnQLXBCBFBk/tvIG/tUc9mOUJiPBhPXA=="
        },
        "cookie": {
            "version": "0.4.1",
                "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.4.1.tgz",
                    "integrity": "sha512-ZwrFkGJxUR3EIoXtO+yVE69Eb7KlixbaeAWfBQB9vVsNn/o+Yw69gBWSSDK825hQNdN+wF8zELf3dFNl/kxkUA=="
        },
        "cookie-signature": {
            "version": "1.0.6",
                "resolved": "https://registry.npmjs.org/cookie-signature/-/cookie-signature-1.0.6.tgz",
                    "integrity": "sha1-4wOogrNCzD7oylE6eZmXNNqzriw="
        },
        "cookiejar": {
            "version": "2.1.3",
                "resolved": "https://registry.npmjs.org/cookiejar/-/cookiejar-2.1.3.tgz",
                    "integrity": "sha512-JxbCBUdrfr6AQjOXrxoTvAMJO4HBTUIlBzslcJPAz+/KT8yk53fXun51u+RenNYvad/+Vc2DIz5o9UxlCDymFQ=="
        },
        "core-util-is": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/core-util-is/-/core-util-is-1.0.2.tgz",
                    "integrity": "sha1-tf1UIgqivFq1eqtxQMlAdUUDwac="
        },
        "cors": {
            "version": "2.8.5",
                "resolved": "https://registry.npmjs.org/cors/-/cors-2.8.5.tgz",
                    "integrity": "sha512-KIHbLJqu73RGr/hnbrO9uBeixNGuvSQjul/jdFvS/KFSIH1hWVd1ng7zOHx+YrEfInLG7q4n6GHQ9cDtxv/P6g==",
                        "requires": {
                "object-assign": "^4",
                    "vary": "^1"
            }
        },
        "crc-32": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/crc-32/-/crc-32-1.2.0.tgz",
                    "integrity": "sha512-1uBwHxF+Y/4yF5G48fwnKq6QsIXheor3ZLPT80yGBV1oEUwpPojlEhQbWKVw1VwcTQyMGHK1/XMmTjmlsmTTGA==",
                        "requires": {
                "exit-on-epipe": "~1.0.1",
                    "printj": "~1.1.0"
            }
        },
        "create-ecdh": {
            "version": "4.0.4",
                "resolved": "https://registry.npmjs.org/create-ecdh/-/create-ecdh-4.0.4.tgz",
                    "integrity": "sha512-mf+TCx8wWc9VpuxfP2ht0iSISLZnt0JgWlrOKZiNqyUZWnjIaCIVNQArMHnCZKfEYRg6IM7A+NeJoN8gf/Ws0A==",
                        "requires": {
                "bn.js": "^4.1.0",
                    "elliptic": "^6.5.3"
            }
        },
        "create-hash": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/create-hash/-/create-hash-1.2.0.tgz",
                    "integrity": "sha512-z00bCGNHDG8mHAkP7CtT1qVu+bFQUPjYq/4Iv3C3kWjTFV10zIjfSoeqXo9Asws8gwSHDGj/hl2u4OGIjapeCg==",
                        "requires": {
                "cipher-base": "^1.0.1",
                    "inherits": "^2.0.1",
                        "md5.js": "^1.3.4",
                            "ripemd160": "^2.0.1",
                                "sha.js": "^2.4.0"
            }
        },
        "create-hmac": {
            "version": "1.1.7",
                "resolved": "https://registry.npmjs.org/create-hmac/-/create-hmac-1.1.7.tgz",
                    "integrity": "sha512-MJG9liiZ+ogc4TzUwuvbER1JRdgvUFSB5+VR/g5h82fGaIRWMWddtKBHi7/sVhfjQZ6SehlyhvQYrcYkaUIpLg==",
                        "requires": {
                "cipher-base": "^1.0.3",
                    "create-hash": "^1.1.0",
                        "inherits": "^2.0.1",
                            "ripemd160": "^2.0.0",
                                "safe-buffer": "^5.0.1",
                                    "sha.js": "^2.4.8"
            }
        },
        "crypto-browserify": {
            "version": "3.12.0",
                "resolved": "https://registry.npmjs.org/crypto-browserify/-/crypto-browserify-3.12.0.tgz",
                    "integrity": "sha512-fz4spIh+znjO2VjL+IdhEpRJ3YN6sMzITSBijk6FK2UvTqruSQW+/cCZTSNsMiZNvUeq0CqurF+dAbyiGOY6Wg==",
                        "requires": {
                "browserify-cipher": "^1.0.0",
                    "browserify-sign": "^4.0.0",
                        "create-ecdh": "^4.0.0",
                            "create-hash": "^1.1.0",
                                "create-hmac": "^1.1.0",
                                    "diffie-hellman": "^5.0.0",
                                        "inherits": "^2.0.1",
                                            "pbkdf2": "^3.0.3",
                                                "public-encrypt": "^4.0.0",
                                                    "randombytes": "^2.0.0",
                                                        "randomfill": "^1.0.3"
            }
        },
        "d": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/d/-/d-1.0.1.tgz",
                    "integrity": "sha512-m62ShEObQ39CfralilEQRjH6oAMtNCV1xJyEx5LpRYUVN+EviphDgUc/F3hnYbADmkiNs67Y+3ylmlG7Lnu+FA==",
                        "requires": {
                "es5-ext": "^0.10.50",
                    "type": "^1.0.1"
            }
        },
        "dashdash": {
            "version": "1.14.1",
                "resolved": "https://registry.npmjs.org/dashdash/-/dashdash-1.14.1.tgz",
                    "integrity": "sha1-hTz6D3y+L+1d4gMmuN1YEDX24vA=",
                        "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "debug": {
            "version": "4.3.3",
                "resolved": "https://registry.npmjs.org/debug/-/debug-4.3.3.tgz",
                    "integrity": "sha512-/zxw5+vh1Tfv+4Qn7a5nsbcJKPaSvCDhojn6FEl9vupwK2VCSDtEiEtqr8DFtzYFOdz63LBkxec7DYuc2jon6Q==",
                        "requires": {
                "ms": "2.1.2"
            }
        },
        "decode-uri-component": {
            "version": "0.2.0",
                "resolved": "https://registry.npmjs.org/decode-uri-component/-/decode-uri-component-0.2.0.tgz",
                    "integrity": "sha1-6zkTMzRYd1y4TNGh+uBiEGu4dUU="
        },
        "decompress-response": {
            "version": "3.3.0",
                "resolved": "https://registry.npmjs.org/decompress-response/-/decompress-response-3.3.0.tgz",
                    "integrity": "sha1-gKTdMjdIOEv6JICDYirt7Jgq3/M=",
                        "requires": {
                "mimic-response": "^1.0.0"
            }
        },
        "defer-to-connect": {
            "version": "1.1.3",
                "resolved": "https://registry.npmjs.org/defer-to-connect/-/defer-to-connect-1.1.3.tgz",
                    "integrity": "sha512-0ISdNousHvZT2EiFlZeZAHBUvSxmKswVCEf8hW7KWgG4a8MVEu/3Vb6uWYozkjylyCxe0JBIiRB1jV45S70WVQ=="
        },
        "define-properties": {
            "version": "1.1.3",
                "resolved": "https://registry.npmjs.org/define-properties/-/define-properties-1.1.3.tgz",
                    "integrity": "sha512-3MqfYKj2lLzdMSf8ZIZE/V+Zuy+BgD6f164e8K2w7dgnpKArBDerGYpM46IYYcjnkdPNMjPk9A6VFB8+3SKlXQ==",
                        "requires": {
                "object-keys": "^1.0.12"
            }
        },
        "delayed-stream": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
                    "integrity": "sha1-3zrhmayt+31ECqrgsp4icrJOxhk="
        },
        "depd": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/depd/-/depd-1.1.2.tgz",
                    "integrity": "sha1-m81S4UwJd2PnSbJ0xDRu0uVgtak="
        },
        "des.js": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/des.js/-/des.js-1.0.1.tgz",
                    "integrity": "sha512-Q0I4pfFrv2VPd34/vfLrFOoRmlYj3OV50i7fskps1jZWK1kApMWWT9G6RRUeYedLcBDIhnSDaUvJMb3AhUlaEA==",
                        "requires": {
                "inherits": "^2.0.1",
                    "minimalistic-assert": "^1.0.0"
            }
        },
        "destroy": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/destroy/-/destroy-1.0.4.tgz",
                    "integrity": "sha1-l4hXRCxEdJ5CBmE+N5RiBYJqvYA="
        },
        "diffie-hellman": {
            "version": "5.0.3",
                "resolved": "https://registry.npmjs.org/diffie-hellman/-/diffie-hellman-5.0.3.tgz",
                    "integrity": "sha512-kqag/Nl+f3GwyK25fhUMYj81BUOrZ9IuJsjIcDE5icNM9FJHAVm3VcUDxdLPoQtTuUylWm6ZIknYJwwaPxsUzg==",
                        "requires": {
                "bn.js": "^4.1.0",
                    "miller-rabin": "^4.0.0",
                        "randombytes": "^2.0.0"
            }
        },
        "dom-walk": {
            "version": "0.1.2",
                "resolved": "https://registry.npmjs.org/dom-walk/-/dom-walk-0.1.2.tgz",
                    "integrity": "sha512-6QvTW9mrGeIegrFXdtQi9pk7O/nSK6lSdXW2eqUspN5LWD7UTji2Fqw5V2YLjBpHEoU9Xl/eUWNpDeZvoyOv2w=="
        },
        "duplexer3": {
            "version": "0.1.4",
                "resolved": "https://registry.npmjs.org/duplexer3/-/duplexer3-0.1.4.tgz",
                    "integrity": "sha1-7gHdHKwO08vH/b6jfcCo8c4ALOI="
        },
        "ecc-jsbn": {
            "version": "0.1.2",
                "resolved": "https://registry.npmjs.org/ecc-jsbn/-/ecc-jsbn-0.1.2.tgz",
                    "integrity": "sha1-OoOpBOVDUyh4dMVkt1SThoSamMk=",
                        "requires": {
                "jsbn": "~0.1.0",
                    "safer-buffer": "^2.1.0"
            }
        },
        "ee-first": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/ee-first/-/ee-first-1.1.1.tgz",
                    "integrity": "sha1-WQxhFWsK4vTwJVcyoViyZrxWsh0="
        },
        "elliptic": {
            "version": "6.5.4",
                "resolved": "https://registry.npmjs.org/elliptic/-/elliptic-6.5.4.tgz",
                    "integrity": "sha512-iLhC6ULemrljPZb+QutR5TQGB+pdW6KGD5RSegS+8sorOZT+rdQFbsQFJgvN3eRqNALqJer4oQ16YvJHlU8hzQ==",
                        "requires": {
                "bn.js": "^4.11.9",
                    "brorand": "^1.1.0",
                        "hash.js": "^1.0.0",
                            "hmac-drbg": "^1.0.1",
                                "inherits": "^2.0.4",
                                    "minimalistic-assert": "^1.0.1",
                                        "minimalistic-crypto-utils": "^1.0.1"
            }
        },
        "encodeurl": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/encodeurl/-/encodeurl-1.0.2.tgz",
                    "integrity": "sha1-rT/0yG7C0CkyL1oCw6mmBslbP1k="
        },
        "end-of-stream": {
            "version": "1.4.4",
                "resolved": "https://registry.npmjs.org/end-of-stream/-/end-of-stream-1.4.4.tgz",
                    "integrity": "sha512-+uw1inIHVPQoaVuHzRyXd21icM+cnt4CzD5rW+NC1wjOUSTOs+Te7FOv7AhN7vS9x/oIyhLP5PR1H+phQAHu5Q==",
                        "requires": {
                "once": "^1.4.0"
            }
        },
        "es-abstract": {
            "version": "1.19.1",
                "resolved": "https://registry.npmjs.org/es-abstract/-/es-abstract-1.19.1.tgz",
                    "integrity": "sha512-2vJ6tjA/UfqLm2MPs7jxVybLoB8i1t1Jd9R3kISld20sIxPcTbLuggQOUxeWeAvIUkduv/CfMjuh4WmiXr2v9w==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "es-to-primitive": "^1.2.1",
                        "function-bind": "^1.1.1",
                            "get-intrinsic": "^1.1.1",
                                "get-symbol-description": "^1.0.0",
                                    "has": "^1.0.3",
                                        "has-symbols": "^1.0.2",
                                            "internal-slot": "^1.0.3",
                                                "is-callable": "^1.2.4",
                                                    "is-negative-zero": "^2.0.1",
                                                        "is-regex": "^1.1.4",
                                                            "is-shared-array-buffer": "^1.0.1",
                                                                "is-string": "^1.0.7",
                                                                    "is-weakref": "^1.0.1",
                                                                        "object-inspect": "^1.11.0",
                                                                            "object-keys": "^1.1.1",
                                                                                "object.assign": "^4.1.2",
                                                                                    "string.prototype.trimend": "^1.0.4",
                                                                                        "string.prototype.trimstart": "^1.0.4",
                                                                                            "unbox-primitive": "^1.0.1"
            }
        },
        "es-to-primitive": {
            "version": "1.2.1",
                "resolved": "https://registry.npmjs.org/es-to-primitive/-/es-to-primitive-1.2.1.tgz",
                    "integrity": "sha512-QCOllgZJtaUo9miYBcLChTUaHNjJF3PYs1VidD7AwiEj1kYxKeQTctLAezAOH5ZKRH0g2IgPn6KwB4IT8iRpvA==",
                        "requires": {
                "is-callable": "^1.1.4",
                    "is-date-object": "^1.0.1",
                        "is-symbol": "^1.0.2"
            }
        },
        "es5-ext": {
            "version": "0.10.53",
                "resolved": "https://registry.npmjs.org/es5-ext/-/es5-ext-0.10.53.tgz",
                    "integrity": "sha512-Xs2Stw6NiNHWypzRTY1MtaG/uJlwCk8kH81920ma8mvN8Xq1gsfhZvpkImLQArw8AHnv8MT2I45J3c0R8slE+Q==",
                        "requires": {
                "es6-iterator": "~2.0.3",
                    "es6-symbol": "~3.1.3",
                        "next-tick": "~1.0.0"
            }
        },
        "es6-iterator": {
            "version": "2.0.3",
                "resolved": "https://registry.npmjs.org/es6-iterator/-/es6-iterator-2.0.3.tgz",
                    "integrity": "sha1-p96IkUGgWpSwhUQDstCg+/qY87c=",
                        "requires": {
                "d": "1",
                    "es5-ext": "^0.10.35",
                        "es6-symbol": "^3.1.1"
            }
        },
        "es6-symbol": {
            "version": "3.1.3",
                "resolved": "https://registry.npmjs.org/es6-symbol/-/es6-symbol-3.1.3.tgz",
                    "integrity": "sha512-NJ6Yn3FuDinBaBRWl/q5X/s4koRHBrgKAu+yGI6JCBeiu3qrcbJhwT2GeR/EXVfylRk8dpQVJoLEFhK+Mu31NA==",
                        "requires": {
                "d": "^1.0.1",
                    "ext": "^1.1.2"
            }
        },
        "escape-html": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/escape-html/-/escape-html-1.0.3.tgz",
                    "integrity": "sha1-Aljq5NPQwJdN4cFpGI7wBR0dGYg="
        },
        "etag": {
            "version": "1.8.1",
                "resolved": "https://registry.npmjs.org/etag/-/etag-1.8.1.tgz",
                    "integrity": "sha1-Qa4u62XvpiJorr/qg6x9eSmbCIc="
        },
        "eth-ens-namehash": {
            "version": "2.0.8",
                "resolved": "https://registry.npmjs.org/eth-ens-namehash/-/eth-ens-namehash-2.0.8.tgz",
                    "integrity": "sha1-IprEbsqG1S4MmR58sq74P/D2i88=",
                        "requires": {
                "idna-uts46-hx": "^2.3.1",
                    "js-sha3": "^0.5.7"
            },
            "dependencies": {
                "js-sha3": {
                    "version": "0.5.7",
                        "resolved": "https://registry.npmjs.org/js-sha3/-/js-sha3-0.5.7.tgz",
                            "integrity": "sha1-DU/9gALVMzqrr0oj7tL2N0yfKOc="
                }
            }
        },
        "eth-lib": {
            "version": "0.1.29",
                "resolved": "https://registry.npmjs.org/eth-lib/-/eth-lib-0.1.29.tgz",
                    "integrity": "sha512-bfttrr3/7gG4E02HoWTDUcDDslN003OlOoBxk9virpAZQ1ja/jDgwkWB8QfJF7ojuEowrqy+lzp9VcJG7/k5bQ==",
                        "requires": {
                "bn.js": "^4.11.6",
                    "elliptic": "^6.4.0",
                        "nano-json-stream-parser": "^0.1.2",
                            "servify": "^0.1.12",
                                "ws": "^3.0.0",
                                    "xhr-request-promise": "^0.1.2"
            }
        },
        "ethereum-bloom-filters": {
            "version": "1.0.10",
                "resolved": "https://registry.npmjs.org/ethereum-bloom-filters/-/ethereum-bloom-filters-1.0.10.tgz",
                    "integrity": "sha512-rxJ5OFN3RwjQxDcFP2Z5+Q9ho4eIdEmSc2ht0fCu8Se9nbXjZ7/031uXoUYJ87KHCOdVeiUuwSnoS7hmYAGVHA==",
                        "requires": {
                "js-sha3": "^0.8.0"
            }
        },
        "ethereum-cryptography": {
            "version": "0.1.3",
                "resolved": "https://registry.npmjs.org/ethereum-cryptography/-/ethereum-cryptography-0.1.3.tgz",
                    "integrity": "sha512-w8/4x1SGGzc+tO97TASLja6SLd3fRIK2tLVcV2Gx4IB21hE19atll5Cq9o3d0ZmAYC/8aw0ipieTSiekAea4SQ==",
                        "requires": {
                "@types/pbkdf2": "^3.0.0",
                    "@types/secp256k1": "^4.0.1",
                        "blakejs": "^1.1.0",
                            "browserify-aes": "^1.2.0",
                                "bs58check": "^2.1.2",
                                    "create-hash": "^1.2.0",
                                        "create-hmac": "^1.1.7",
                                            "hash.js": "^1.1.7",
                                                "keccak": "^3.0.0",
                                                    "pbkdf2": "^3.0.17",
                                                        "randombytes": "^2.1.0",
                                                            "safe-buffer": "^5.1.2",
                                                                "scrypt-js": "^3.0.0",
                                                                    "secp256k1": "^4.0.1",
                                                                        "setimmediate": "^1.0.5"
            }
        },
        "ethereumjs-util": {
            "version": "7.1.3",
                "resolved": "https://registry.npmjs.org/ethereumjs-util/-/ethereumjs-util-7.1.3.tgz",
                    "integrity": "sha512-y+82tEbyASO0K0X1/SRhbJJoAlfcvq8JbrG4a5cjrOks7HS/36efU/0j2flxCPOUM++HFahk33kr/ZxyC4vNuw==",
                        "requires": {
                "@types/bn.js": "^5.1.0",
                    "bn.js": "^5.1.2",
                        "create-hash": "^1.1.2",
                            "ethereum-cryptography": "^0.1.3",
                                "rlp": "^2.2.4"
            },
            "dependencies": {
                "@types/bn.js": {
                    "version": "5.1.0",
                        "resolved": "https://registry.npmjs.org/@types/bn.js/-/bn.js-5.1.0.tgz",
                            "integrity": "sha512-QSSVYj7pYFN49kW77o2s9xTCwZ8F2xLbjLLSEVh8D2F4JUhZtPAGOFLTD+ffqksBx/u4cE/KImFjyhqCjn/LIA==",
                                "requires": {
                        "@types/node": "*"
                    }
                },
                "bn.js": {
                    "version": "5.2.0",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.2.0.tgz",
                            "integrity": "sha512-D7iWRBvnZE8ecXiLj/9wbxH7Tk79fAh8IHaTNq1RWRixsS02W+5qS+iE9yq6RYl0asXx5tw0bLhmT5pIfbSquw=="
                }
            }
        },
        "ethjs-unit": {
            "version": "0.1.6",
                "resolved": "https://registry.npmjs.org/ethjs-unit/-/ethjs-unit-0.1.6.tgz",
                    "integrity": "sha1-xmWSHkduh7ziqdWIpv4EBbLEFpk=",
                        "requires": {
                "bn.js": "4.11.6",
                    "number-to-bn": "1.7.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.6",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.6.tgz",
                            "integrity": "sha1-UzRK2xRhehP26N0s4okF0cC6MhU="
                }
            }
        },
        "eventemitter3": {
            "version": "4.0.4",
                "resolved": "https://registry.npmjs.org/eventemitter3/-/eventemitter3-4.0.4.tgz",
                    "integrity": "sha512-rlaVLnVxtxvoyLsQQFBx53YmXHDxRIzzTLbdfxqi4yocpSjAxXwkU0cScM5JgSKMqEhrZpnvQ2D9gjylR0AimQ=="
        },
        "evp_bytestokey": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/evp_bytestokey/-/evp_bytestokey-1.0.3.tgz",
                    "integrity": "sha512-/f2Go4TognH/KvCISP7OUsHn85hT9nUkxxA9BEWxFn+Oj9o8ZNLm/40hdlgSLyuOimsrTKLUMEorQexp/aPQeA==",
                        "requires": {
                "md5.js": "^1.3.4",
                    "safe-buffer": "^5.1.1"
            }
        },
        "exit-on-epipe": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/exit-on-epipe/-/exit-on-epipe-1.0.1.tgz",
                    "integrity": "sha512-h2z5mrROTxce56S+pnvAV890uu7ls7f1kEvVGJbw1OlFH3/mlJ5bkXu0KRyW94v37zzHPiUd55iLn3DA7TjWpw=="
        },
        "express": {
            "version": "4.17.2",
                "resolved": "https://registry.npmjs.org/express/-/express-4.17.2.tgz",
                    "integrity": "sha512-oxlxJxcQlYwqPWKVJJtvQiwHgosH/LrLSPA+H4UxpyvSS6jC5aH+5MoHFM+KABgTOt0APue4w66Ha8jCUo9QGg==",
                        "requires": {
                "accepts": "~1.3.7",
                    "array-flatten": "1.1.1",
                        "body-parser": "1.19.1",
                            "content-disposition": "0.5.4",
                                "content-type": "~1.0.4",
                                    "cookie": "0.4.1",
                                        "cookie-signature": "1.0.6",
                                            "debug": "2.6.9",
                                                "depd": "~1.1.2",
                                                    "encodeurl": "~1.0.2",
                                                        "escape-html": "~1.0.3",
                                                            "etag": "~1.8.1",
                                                                "finalhandler": "~1.1.2",
                                                                    "fresh": "0.5.2",
                                                                        "merge-descriptors": "1.0.1",
                                                                            "methods": "~1.1.2",
                                                                                "on-finished": "~2.3.0",
                                                                                    "parseurl": "~1.3.3",
                                                                                        "path-to-regexp": "0.1.7",
                                                                                            "proxy-addr": "~2.0.7",
                                                                                                "qs": "6.9.6",
                                                                                                    "range-parser": "~1.2.1",
                                                                                                        "safe-buffer": "5.2.1",
                                                                                                            "send": "0.17.2",
                                                                                                                "serve-static": "1.14.2",
                                                                                                                    "setprototypeof": "1.2.0",
                                                                                                                        "statuses": "~1.5.0",
                                                                                                                            "type-is": "~1.6.18",
                                                                                                                                "utils-merge": "1.0.1",
                                                                                                                                    "vary": "~1.1.2"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                                "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                },
                "qs": {
                    "version": "6.9.6",
                        "resolved": "https://registry.npmjs.org/qs/-/qs-6.9.6.tgz",
                            "integrity": "sha512-TIRk4aqYLNoJUbd+g2lEdz5kLWIuTMRagAXxl78Q0RiVjAOugHmeKNGdd3cwo/ktpf9aL9epCfFqWDEKysUlLQ=="
                }
            }
        },
        "ext": {
            "version": "1.6.0",
                "resolved": "https://registry.npmjs.org/ext/-/ext-1.6.0.tgz",
                    "integrity": "sha512-sdBImtzkq2HpkdRLtlLWDa6w4DX22ijZLKx8BMPUuKe1c5lbN6xwQDQCxSfxBQnHZ13ls/FH0MQZx/q/gr6FQg==",
                        "requires": {
                "type": "^2.5.0"
            },
            "dependencies": {
                "type": {
                    "version": "2.5.0",
                        "resolved": "https://registry.npmjs.org/type/-/type-2.5.0.tgz",
                            "integrity": "sha512-180WMDQaIMm3+7hGXWf12GtdniDEy7nYcyFMKJn/eZz/6tSLXrUN9V0wKSbMjej0I1WHWbpREDEKHtqPQa9NNw=="
                }
            }
        },
        "extend": {
            "version": "3.0.2",
                "resolved": "https://registry.npmjs.org/extend/-/extend-3.0.2.tgz",
                    "integrity": "sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g=="
        },
        "extsprintf": {
            "version": "1.3.0",
                "resolved": "https://registry.npmjs.org/extsprintf/-/extsprintf-1.3.0.tgz",
                    "integrity": "sha1-lpGEQOMEGnpBT4xS48V06zw+HgU="
        },
        "fast-deep-equal": {
            "version": "3.1.3",
                "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
                    "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q=="
        },
        "fast-json-stable-stringify": {
            "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
                    "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw=="
        },
        "fast-safe-stringify": {
            "version": "2.1.1",
                "resolved": "https://registry.npmjs.org/fast-safe-stringify/-/fast-safe-stringify-2.1.1.tgz",
                    "integrity": "sha512-W+KJc2dmILlPplD/H4K9l9LcAHAfPtP6BY84uVLXQ6Evcz9Lcg33Y2z1IVblT6xdY54PXYVHEv+0Wpq8Io6zkA=="
        },
        "finalhandler": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/finalhandler/-/finalhandler-1.1.2.tgz",
                    "integrity": "sha512-aAWcW57uxVNrQZqFXjITpW3sIUQmHGG3qSb9mUah9MgMC4NeWhNOlNjXEYq3HjRAvL6arUviZGGJsBg6z0zsWA==",
                        "requires": {
                "debug": "2.6.9",
                    "encodeurl": "~1.0.2",
                        "escape-html": "~1.0.3",
                            "on-finished": "~2.3.0",
                                "parseurl": "~1.3.3",
                                    "statuses": "~1.5.0",
                                        "unpipe": "~1.0.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                                "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "foreach": {
            "version": "2.0.5",
                "resolved": "https://registry.npmjs.org/foreach/-/foreach-2.0.5.tgz",
                    "integrity": "sha1-C+4AUBiusmDQo6865ljdATbsG5k="
        },
        "forever-agent": {
            "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/forever-agent/-/forever-agent-0.6.1.tgz",
                    "integrity": "sha1-+8cfDEGt6zf5bFd60e1C2P2sypE="
        },
        "form-data": {
            "version": "3.0.1",
                "resolved": "https://registry.npmjs.org/form-data/-/form-data-3.0.1.tgz",
                    "integrity": "sha512-RHkBKtLWUVwd7SqRIvCZMEvAMoGUp0XU+seQiZejj0COz3RI3hWP4sCv3gZWWLjJTd7rGwcsF5eKZGii0r/hbg==",
                        "requires": {
                "asynckit": "^0.4.0",
                    "combined-stream": "^1.0.8",
                        "mime-types": "^2.1.12"
            }
        },
        "formidable": {
            "version": "1.2.6",
                "resolved": "https://registry.npmjs.org/formidable/-/formidable-1.2.6.tgz",
                    "integrity": "sha512-KcpbcpuLNOwrEjnbpMC0gS+X8ciDoZE1kkqzat4a8vrprf+s9pKNQ/QIwWfbfs4ltgmFl3MD177SNTkve3BwGQ=="
        },
        "forwarded": {
            "version": "0.2.0",
                "resolved": "https://registry.npmjs.org/forwarded/-/forwarded-0.2.0.tgz",
                    "integrity": "sha512-buRG0fpBtRHSTCOASe6hD258tEubFoRLb4ZNA6NxMVHNw2gOcwHo9wyablzMzOA5z9xA9L1KNjk/Nt6MT9aYow=="
        },
        "fresh": {
            "version": "0.5.2",
                "resolved": "https://registry.npmjs.org/fresh/-/fresh-0.5.2.tgz",
                    "integrity": "sha1-PYyt2Q2XZWn6g1qx+OSyOhBWBac="
        },
        "fs-extra": {
            "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/fs-extra/-/fs-extra-4.0.3.tgz",
                    "integrity": "sha512-q6rbdDd1o2mAnQreO7YADIxf/Whx4AHBiRf6d+/cVT8h44ss+lHgxf1FemcqDnQt9X3ct4McHr+JMGlYSsK7Cg==",
                        "requires": {
                "graceful-fs": "^4.1.2",
                    "jsonfile": "^4.0.0",
                        "universalify": "^0.1.0"
            }
        },
        "fs-minipass": {
            "version": "1.2.7",
                "resolved": "https://registry.npmjs.org/fs-minipass/-/fs-minipass-1.2.7.tgz",
                    "integrity": "sha512-GWSSJGFy4e9GUeCcbIkED+bgAoFyj7XF1mV8rma3QW4NIqX9Kyx79N/PF61H5udOV3aY1IaMLs6pGbH71nlCTA==",
                        "requires": {
                "minipass": "^2.6.0"
            }
        },
        "function-bind": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.1.tgz",
                    "integrity": "sha512-yIovAzMX49sF8Yl58fSCWJ5svSLuaibPxXQJFLmBObTuCr0Mf1KiPopGM9NiFjiYBCbfaa2Fh6breQ6ANVTI0A=="
        },
        "get-intrinsic": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.1.1.tgz",
                    "integrity": "sha512-kWZrnVM42QCiEA2Ig1bG8zjoIMOgxWwYCEeNdwY6Tv/cOSeGpcoX4pXHfKUxNKVoArnrEr2e9srnAxxGIraS9Q==",
                        "requires": {
                "function-bind": "^1.1.1",
                    "has": "^1.0.3",
                        "has-symbols": "^1.0.1"
            }
        },
        "get-stream": {
            "version": "4.1.0",
                "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-4.1.0.tgz",
                    "integrity": "sha512-GMat4EJ5161kIy2HevLlr4luNjBgvmj413KaQA7jt4V8B4RDsfpHk7WQ9GVqfYyyx8OS/L66Kox+rJRNklLK7w==",
                        "requires": {
                "pump": "^3.0.0"
            }
        },
        "get-symbol-description": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/get-symbol-description/-/get-symbol-description-1.0.0.tgz",
                    "integrity": "sha512-2EmdH1YvIQiZpltCNgkuiUnyukzxM/R6NDJX31Ke3BG1Nq5b0S2PhX59UKi9vZpPDQVdqn+1IcaAwnzTT5vCjw==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "get-intrinsic": "^1.1.1"
            }
        },
        "getpass": {
            "version": "0.1.7",
                "resolved": "https://registry.npmjs.org/getpass/-/getpass-0.1.7.tgz",
                    "integrity": "sha1-Xv+OPmhNVprkyysSgmBOi6YhSfo=",
                        "requires": {
                "assert-plus": "^1.0.0"
            }
        },
        "global": {
            "version": "4.4.0",
                "resolved": "https://registry.npmjs.org/global/-/global-4.4.0.tgz",
                    "integrity": "sha512-wv/LAoHdRE3BeTGz53FAamhGlPLhlssK45usmGFThIi4XqnBmjKQ16u+RNbP7WvigRZDxUsM0J3gcQ5yicaL0w==",
                        "requires": {
                "min-document": "^2.19.0",
                    "process": "^0.11.10"
            }
        },
        "got": {
            "version": "9.6.0",
                "resolved": "https://registry.npmjs.org/got/-/got-9.6.0.tgz",
                    "integrity": "sha512-R7eWptXuGYxwijs0eV+v3o6+XH1IqVK8dJOEecQfTmkncw9AV4dcw/Dhxi8MdlqPthxxpZyizMzyg8RTmEsG+Q==",
                        "requires": {
                "@sindresorhus/is": "^0.14.0",
                    "@szmarczak/http-timer": "^1.1.2",
                        "cacheable-request": "^6.0.0",
                            "decompress-response": "^3.3.0",
                                "duplexer3": "^0.1.4",
                                    "get-stream": "^4.1.0",
                                        "lowercase-keys": "^1.0.1",
                                            "mimic-response": "^1.0.1",
                                                "p-cancelable": "^1.0.0",
                                                    "to-readable-stream": "^1.0.0",
                                                        "url-parse-lax": "^3.0.0"
            }
        },
        "graceful-fs": {
            "version": "4.2.9",
                "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.9.tgz",
                    "integrity": "sha512-NtNxqUcXgpW2iMrfqSfR73Glt39K+BLwWsPs94yR63v45T0Wbej7eRmL5cWfwEgqXnmjQp3zaJTshdRW/qC2ZQ=="
        },
        "har-schema": {
            "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/har-schema/-/har-schema-2.0.0.tgz",
                    "integrity": "sha1-qUwiJOvKwEeCoNkDVSHyRzW37JI="
        },
        "har-validator": {
            "version": "5.1.5",
                "resolved": "https://registry.npmjs.org/har-validator/-/har-validator-5.1.5.tgz",
                    "integrity": "sha512-nmT2T0lljbxdQZfspsno9hgrG3Uir6Ks5afism62poxqBM6sDnMEuPmzTq8XN0OEwqKLLdh1jQI3qyE66Nzb3w==",
                        "requires": {
                "ajv": "^6.12.3",
                    "har-schema": "^2.0.0"
            }
        },
        "has": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/has/-/has-1.0.3.tgz",
                    "integrity": "sha512-f2dvO0VU6Oej7RkWJGrehjbzMAjFp5/VKPp5tTpWIV4JHHZK1/BxbFRtf/siA2SWTe09caDmVtYYzWEIbBS4zw==",
                        "requires": {
                "function-bind": "^1.1.1"
            }
        },
        "has-bigints": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/has-bigints/-/has-bigints-1.0.1.tgz",
                    "integrity": "sha512-LSBS2LjbNBTf6287JEbEzvJgftkF5qFkmCo9hDRpAzKhUOlJ+hx8dd4USs00SgsUNwc4617J9ki5YtEClM2ffA=="
        },
        "has-symbol-support-x": {
            "version": "1.4.2",
                "resolved": "https://registry.npmjs.org/has-symbol-support-x/-/has-symbol-support-x-1.4.2.tgz",
                    "integrity": "sha512-3ToOva++HaW+eCpgqZrCfN51IPB+7bJNVT6CUATzueB5Heb8o6Nam0V3HG5dlDvZU1Gn5QLcbahiKw/XVk5JJw=="
        },
        "has-symbols": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.0.2.tgz",
                    "integrity": "sha512-chXa79rL/UC2KlX17jo3vRGz0azaWEx5tGqZg5pO3NUyEJVB17dMruQlzCCOfUvElghKcm5194+BCRvi2Rv/Gw=="
        },
        "has-to-string-tag-x": {
            "version": "1.4.1",
                "resolved": "https://registry.npmjs.org/has-to-string-tag-x/-/has-to-string-tag-x-1.4.1.tgz",
                    "integrity": "sha512-vdbKfmw+3LoOYVr+mtxHaX5a96+0f3DljYd8JOqvOLsf5mw2Otda2qCDT9qRqLAhrjyQ0h7ual5nOiASpsGNFw==",
                        "requires": {
                "has-symbol-support-x": "^1.4.1"
            }
        },
        "has-tostringtag": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/has-tostringtag/-/has-tostringtag-1.0.0.tgz",
                    "integrity": "sha512-kFjcSNhnlGV1kyoGk7OXKSawH5JOb/LzUc5w9B02hOTO0dfFRjbHQKvg1d6cf3HbeUmtU9VbbV3qzZ2Teh97WQ==",
                        "requires": {
                "has-symbols": "^1.0.2"
            }
        },
        "hash-base": {
            "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/hash-base/-/hash-base-3.1.0.tgz",
                    "integrity": "sha512-1nmYp/rhMDiE7AYkDw+lLwlAzz0AntGIe51F3RfFfEqyQ3feY2eI/NcwC6umIQVOASPMsWJLJScWKSSvzL9IVA==",
                        "requires": {
                "inherits": "^2.0.4",
                    "readable-stream": "^3.6.0",
                        "safe-buffer": "^5.2.0"
            }
        },
        "hash.js": {
            "version": "1.1.7",
                "resolved": "https://registry.npmjs.org/hash.js/-/hash.js-1.1.7.tgz",
                    "integrity": "sha512-taOaskGt4z4SOANNseOviYDvjEJinIkRgmp7LbKP2YTTmVxWBl87s/uzK9r+44BclBSp2X7K1hqeNfz9JbBeXA==",
                        "requires": {
                "inherits": "^2.0.3",
                    "minimalistic-assert": "^1.0.1"
            }
        },
        "hi-base32": {
            "version": "0.5.1",
                "resolved": "https://registry.npmjs.org/hi-base32/-/hi-base32-0.5.1.tgz",
                    "integrity": "sha512-EmBBpvdYh/4XxsnUybsPag6VikPYnN30td+vQk+GI3qpahVEG9+gTkG0aXVxTjBqQ5T6ijbWIu77O+C5WFWsnA=="
        },
        "hmac-drbg": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/hmac-drbg/-/hmac-drbg-1.0.1.tgz",
                    "integrity": "sha1-0nRXAQJabHdabFRXk+1QL8DGSaE=",
                        "requires": {
                "hash.js": "^1.0.3",
                    "minimalistic-assert": "^1.0.0",
                        "minimalistic-crypto-utils": "^1.0.1"
            }
        },
        "http-cache-semantics": {
            "version": "4.1.0",
                "resolved": "https://registry.npmjs.org/http-cache-semantics/-/http-cache-semantics-4.1.0.tgz",
                    "integrity": "sha512-carPklcUh7ROWRK7Cv27RPtdhYhUsela/ue5/jKzjegVvXDqM2ILE9Q2BGn9JZJh1g87cp56su/FgQSzcWS8cQ=="
        },
        "http-errors": {
            "version": "1.8.1",
                "resolved": "https://registry.npmjs.org/http-errors/-/http-errors-1.8.1.tgz",
                    "integrity": "sha512-Kpk9Sm7NmI+RHhnj6OIWDI1d6fIoFAtFt9RLaTMRlg/8w49juAStsrBgp0Dp4OdxdVbRIeKhtCUvoi/RuAhO4g==",
                        "requires": {
                "depd": "~1.1.2",
                    "inherits": "2.0.4",
                        "setprototypeof": "1.2.0",
                            "statuses": ">= 1.5.0 < 2",
                                "toidentifier": "1.0.1"
            }
        },
        "http-https": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/http-https/-/http-https-1.0.0.tgz",
                    "integrity": "sha1-L5CN1fHbQGjAWM1ubUzjkskTOJs="
        },
        "http-signature": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/http-signature/-/http-signature-1.2.0.tgz",
                    "integrity": "sha1-muzZJRFHcvPZW2WmCruPfBj7rOE=",
                        "requires": {
                "assert-plus": "^1.0.0",
                    "jsprim": "^1.2.2",
                        "sshpk": "^1.7.0"
            }
        },
        "iconv-lite": {
            "version": "0.4.24",
                "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.4.24.tgz",
                    "integrity": "sha512-v3MXnZAcvnywkTUEZomIActle7RXXeedOR31wwl7VlyoXO4Qi9arvSenNQWne1TcRwhCL1HwLI21bEqdpj8/rA==",
                        "requires": {
                "safer-buffer": ">= 2.1.2 < 3"
            }
        },
        "idna-uts46-hx": {
            "version": "2.3.1",
                "resolved": "https://registry.npmjs.org/idna-uts46-hx/-/idna-uts46-hx-2.3.1.tgz",
                    "integrity": "sha512-PWoF9Keq6laYdIRwwCdhTPl60xRqAloYNMQLiyUnG42VjT53oW07BXIRM+NK7eQjzXjAk2gUvX9caRxlnF9TAA==",
                        "requires": {
                "punycode": "2.1.0"
            },
            "dependencies": {
                "punycode": {
                    "version": "2.1.0",
                        "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.0.tgz",
                            "integrity": "sha1-X4Y+3Im5bbCQdLrXlHvwkFbKTn0="
                }
            }
        },
        "ieee754": {
            "version": "1.2.1",
                "resolved": "https://registry.npmjs.org/ieee754/-/ieee754-1.2.1.tgz",
                    "integrity": "sha512-dcyqhDvX1C46lXZcVqCpK+FtMRQVdIMN6/Df5js2zouUsqG7I6sFxitIC+7KYK29KdXOLHdu9zL4sFnoVQnqaA=="
        },
        "inherits": {
            "version": "2.0.4",
                "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
                    "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ=="
        },
        "internal-slot": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/internal-slot/-/internal-slot-1.0.3.tgz",
                    "integrity": "sha512-O0DB1JC/sPyZl7cIo78n5dR7eUSwwpYPiXRhTzNxZVAMUuB8vlnRFyLxdrVToks6XPLVnFfbzaVd5WLjhgg+vA==",
                        "requires": {
                "get-intrinsic": "^1.1.0",
                    "has": "^1.0.3",
                        "side-channel": "^1.0.4"
            }
        },
        "ipaddr.js": {
            "version": "1.9.1",
                "resolved": "https://registry.npmjs.org/ipaddr.js/-/ipaddr.js-1.9.1.tgz",
                    "integrity": "sha512-0KI/607xoxSToH7GjN1FfSbLoU0+btTicjsQSWQlh/hZykN8KpmMf7uYwPW3R+akZ6R/w18ZlXSHBYXiYUPO3g=="
        },
        "is-arguments": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/is-arguments/-/is-arguments-1.1.1.tgz",
                    "integrity": "sha512-8Q7EARjzEnKpt/PCD7e1cgUS0a6X8u5tdSiMqXhojOdoV9TsMsiO+9VLC5vAmO8N7/GmXn7yjR8qnA6bVAEzfA==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "has-tostringtag": "^1.0.0"
            }
        },
        "is-bigint": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/is-bigint/-/is-bigint-1.0.4.tgz",
                    "integrity": "sha512-zB9CruMamjym81i2JZ3UMn54PKGsQzsJeo6xvN3HJJ4CAsQNB6iRutp2To77OfCNuoxspsIhzaPoO1zyCEhFOg==",
                        "requires": {
                "has-bigints": "^1.0.1"
            }
        },
        "is-boolean-object": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/is-boolean-object/-/is-boolean-object-1.1.2.tgz",
                    "integrity": "sha512-gDYaKHJmnj4aWxyj6YHyXVpdQawtVLHU5cb+eztPGczf6cjuTdwve5ZIEfgXqH4e57An1D1AKf8CZ3kYrQRqYA==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "has-tostringtag": "^1.0.0"
            }
        },
        "is-callable": {
            "version": "1.2.4",
                "resolved": "https://registry.npmjs.org/is-callable/-/is-callable-1.2.4.tgz",
                    "integrity": "sha512-nsuwtxZfMX67Oryl9LCQ+upnC0Z0BgpwntpS89m1H/TLF0zNfzfLMV/9Wa/6MZsj0acpEjAO0KF1xT6ZdLl95w=="
        },
        "is-date-object": {
            "version": "1.0.5",
                "resolved": "https://registry.npmjs.org/is-date-object/-/is-date-object-1.0.5.tgz",
                    "integrity": "sha512-9YQaSxsAiSwcvS33MBk3wTCVnWK+HhF8VZR2jRxehM16QcVOdHqPn4VPHmRK4lSr38n9JriurInLcP90xsYNfQ==",
                        "requires": {
                "has-tostringtag": "^1.0.0"
            }
        },
        "is-function": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/is-function/-/is-function-1.0.2.tgz",
                    "integrity": "sha512-lw7DUp0aWXYg+CBCN+JKkcE0Q2RayZnSvnZBlwgxHBQhqt5pZNVy4Ri7H9GmmXkdu7LUthszM+Tor1u/2iBcpQ=="
        },
        "is-generator-function": {
            "version": "1.0.10",
                "resolved": "https://registry.npmjs.org/is-generator-function/-/is-generator-function-1.0.10.tgz",
                    "integrity": "sha512-jsEjy9l3yiXEQ+PsXdmBwEPcOxaXWLspKdplFUVI9vq1iZgIekeC0L167qeu86czQaxed3q/Uzuw0swL0irL8A==",
                        "requires": {
                "has-tostringtag": "^1.0.0"
            }
        },
        "is-hex-prefixed": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/is-hex-prefixed/-/is-hex-prefixed-1.0.0.tgz",
                    "integrity": "sha1-fY035q135dEnFIkTxXPggtd39VQ="
        },
        "is-negative-zero": {
            "version": "2.0.2",
                "resolved": "https://registry.npmjs.org/is-negative-zero/-/is-negative-zero-2.0.2.tgz",
                    "integrity": "sha512-dqJvarLawXsFbNDeJW7zAz8ItJ9cd28YufuuFzh0G8pNHjJMnY08Dv7sYX2uF5UpQOwieAeOExEYAWWfu7ZZUA=="
        },
        "is-number-object": {
            "version": "1.0.6",
                "resolved": "https://registry.npmjs.org/is-number-object/-/is-number-object-1.0.6.tgz",
                    "integrity": "sha512-bEVOqiRcvo3zO1+G2lVMy+gkkEm9Yh7cDMRusKKu5ZJKPUYSJwICTKZrNKHA2EbSP0Tu0+6B/emsYNHZyn6K8g==",
                        "requires": {
                "has-tostringtag": "^1.0.0"
            }
        },
        "is-object": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/is-object/-/is-object-1.0.2.tgz",
                    "integrity": "sha512-2rRIahhZr2UWb45fIOuvZGpFtz0TyOZLf32KxBbSoUCeZR495zCKlWUKKUByk3geS2eAs7ZAABt0Y/Rx0GiQGA=="
        },
        "is-plain-obj": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/is-plain-obj/-/is-plain-obj-1.1.0.tgz",
                    "integrity": "sha1-caUMhCnfync8kqOQpKA7OfzVHT4="
        },
        "is-regex": {
            "version": "1.1.4",
                "resolved": "https://registry.npmjs.org/is-regex/-/is-regex-1.1.4.tgz",
                    "integrity": "sha512-kvRdxDsxZjhzUX07ZnLydzS1TU/TJlTUHHY4YLL87e37oUA49DfkLqgy+VjFocowy29cKvcSiu+kIv728jTTVg==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "has-tostringtag": "^1.0.0"
            }
        },
        "is-retry-allowed": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/is-retry-allowed/-/is-retry-allowed-1.2.0.tgz",
                    "integrity": "sha512-RUbUeKwvm3XG2VYamhJL1xFktgjvPzL0Hq8C+6yrWIswDy3BIXGqCxhxkc30N9jqK311gVU137K8Ei55/zVJRg=="
        },
        "is-shared-array-buffer": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/is-shared-array-buffer/-/is-shared-array-buffer-1.0.1.tgz",
                    "integrity": "sha512-IU0NmyknYZN0rChcKhRO1X8LYz5Isj/Fsqh8NJOSf+N/hCOTwy29F32Ik7a+QszE63IdvmwdTPDd6cZ5pg4cwA=="
        },
        "is-stream": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/is-stream/-/is-stream-1.1.0.tgz",
                    "integrity": "sha1-EtSj3U5o4Lec6428hBc66A2RykQ="
        },
        "is-string": {
            "version": "1.0.7",
                "resolved": "https://registry.npmjs.org/is-string/-/is-string-1.0.7.tgz",
                    "integrity": "sha512-tE2UXzivje6ofPW7l23cjDOMa09gb7xlAqG6jG5ej6uPV32TlWP3NKPigtaGeHNu9fohccRYvIiZMfOOnOYUtg==",
                        "requires": {
                "has-tostringtag": "^1.0.0"
            }
        },
        "is-symbol": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/is-symbol/-/is-symbol-1.0.4.tgz",
                    "integrity": "sha512-C/CPBqKWnvdcxqIARxyOh4v1UUEOCHpgDa0WYgpKDFMszcrPcffg5uhwSgPCLD2WWxmq6isisz87tzT01tuGhg==",
                        "requires": {
                "has-symbols": "^1.0.2"
            }
        },
        "is-typed-array": {
            "version": "1.1.8",
                "resolved": "https://registry.npmjs.org/is-typed-array/-/is-typed-array-1.1.8.tgz",
                    "integrity": "sha512-HqH41TNZq2fgtGT8WHVFVJhBVGuY3AnP3Q36K8JKXUxSxRgk/d+7NjmwG2vo2mYmXK8UYZKu0qH8bVP5gEisjA==",
                        "requires": {
                "available-typed-arrays": "^1.0.5",
                    "call-bind": "^1.0.2",
                        "es-abstract": "^1.18.5",
                            "foreach": "^2.0.5",
                                "has-tostringtag": "^1.0.0"
            }
        },
        "is-typedarray": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/is-typedarray/-/is-typedarray-1.0.0.tgz",
                    "integrity": "sha1-5HnICFjfDBsR3dppQPlgEfzaSpo="
        },
        "is-weakref": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/is-weakref/-/is-weakref-1.0.2.tgz",
                    "integrity": "sha512-qctsuLZmIQ0+vSSMfoVvyFe2+GSEvnmZ2ezTup1SBse9+twCCeial6EEi3Nc2KFcf6+qz2FBPnjXsk8xhKSaPQ==",
                        "requires": {
                "call-bind": "^1.0.2"
            }
        },
        "isstream": {
            "version": "0.1.2",
                "resolved": "https://registry.npmjs.org/isstream/-/isstream-0.1.2.tgz",
                    "integrity": "sha1-R+Y/evVa+m+S4VAOaQ64uFKcCZo="
        },
        "isurl": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/isurl/-/isurl-1.0.0.tgz",
                    "integrity": "sha512-1P/yWsxPlDtn7QeRD+ULKQPaIaN6yF368GZ2vDfv0AL0NwpStafjWCDDdn0k8wgFMWpVAqG7oJhxHnlud42i9w==",
                        "requires": {
                "has-to-string-tag-x": "^1.2.0",
                    "is-object": "^1.0.1"
            }
        },
        "js-sha256": {
            "version": "0.9.0",
                "resolved": "https://registry.npmjs.org/js-sha256/-/js-sha256-0.9.0.tgz",
                    "integrity": "sha512-sga3MHh9sgQN2+pJ9VYZ+1LPwXOxuBJBA5nrR5/ofPfuiJBE2hnjsaN8se8JznOmGLN2p49Pe5U/ttafcs/apA=="
        },
        "js-sha3": {
            "version": "0.8.0",
                "resolved": "https://registry.npmjs.org/js-sha3/-/js-sha3-0.8.0.tgz",
                    "integrity": "sha512-gF1cRrHhIzNfToc802P800N8PpXS+evLLXfsVpowqmAFR9uwbi89WvXg2QspOmXL8QL86J4T1EpFu+yUkwJY3Q=="
        },
        "js-sha512": {
            "version": "0.8.0",
                "resolved": "https://registry.npmjs.org/js-sha512/-/js-sha512-0.8.0.tgz",
                    "integrity": "sha512-PWsmefG6Jkodqt+ePTvBZCSMFgN7Clckjd0O7su3I0+BW2QWUTJNzjktHsztGLhncP2h8mcF9V9Y2Ha59pAViQ=="
        },
        "jsbn": {
            "version": "0.1.1",
                "resolved": "https://registry.npmjs.org/jsbn/-/jsbn-0.1.1.tgz",
                    "integrity": "sha1-peZUwuWi3rXyAdls77yoDA7y9RM="
        },
        "json-bigint": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/json-bigint/-/json-bigint-1.0.0.tgz",
                    "integrity": "sha512-SiPv/8VpZuWbvLSMtTDU8hEfrZWg/mH/nV/b4o0CYbSxu1UIQPLdwKOCIyLQX+VIPO5vrLX3i8qtqFyhdPSUSQ==",
                        "requires": {
                "bignumber.js": "^9.0.0"
            }
        },
        "json-buffer": {
            "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.0.tgz",
                    "integrity": "sha1-Wx85evx11ne96Lz8Dkfh+aPZqJg="
        },
        "json-schema": {
            "version": "0.4.0",
                "resolved": "https://registry.npmjs.org/json-schema/-/json-schema-0.4.0.tgz",
                    "integrity": "sha512-es94M3nTIfsEPisRafak+HDLfHXnKBhV3vU5eqPcS3flIWqcxJWgXHXiey3YrpaNsanY5ei1VoYEbOzijuq9BA=="
        },
        "json-schema-traverse": {
            "version": "0.4.1",
                "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
                    "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg=="
        },
        "json-stringify-safe": {
            "version": "5.0.1",
                "resolved": "https://registry.npmjs.org/json-stringify-safe/-/json-stringify-safe-5.0.1.tgz",
                    "integrity": "sha1-Epai1Y/UXxmg9s4B1lcB4sc1tus="
        },
        "jsonfile": {
            "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/jsonfile/-/jsonfile-4.0.0.tgz",
                    "integrity": "sha1-h3Gq4HmbZAdrdmQPygWPnBDjPss=",
                        "requires": {
                "graceful-fs": "^4.1.6"
            }
        },
        "jsprim": {
            "version": "1.4.2",
                "resolved": "https://registry.npmjs.org/jsprim/-/jsprim-1.4.2.tgz",
                    "integrity": "sha512-P2bSOMAc/ciLz6DzgjVlGJP9+BrJWu5UDGK70C2iweC5QBIeFf0ZXRvGjEj2uYgrY2MkAAhsSWHDWlFtEroZWw==",
                        "requires": {
                "assert-plus": "1.0.0",
                    "extsprintf": "1.3.0",
                        "json-schema": "0.4.0",
                            "verror": "1.10.0"
            }
        },
        "keccak": {
            "version": "3.0.2",
                "resolved": "https://registry.npmjs.org/keccak/-/keccak-3.0.2.tgz",
                    "integrity": "sha512-PyKKjkH53wDMLGrvmRGSNWgmSxZOUqbnXwKL9tmgbFYA1iAYqW21kfR7mZXV0MlESiefxQQE9X9fTa3X+2MPDQ==",
                        "requires": {
                "node-addon-api": "^2.0.0",
                    "node-gyp-build": "^4.2.0",
                        "readable-stream": "^3.6.0"
            }
        },
        "keyv": {
            "version": "3.1.0",
                "resolved": "https://registry.npmjs.org/keyv/-/keyv-3.1.0.tgz",
                    "integrity": "sha512-9ykJ/46SN/9KPM/sichzQ7OvXyGDYKGTaDlKMGCAlg2UK8KRy4jb0d8sFc+0Tt0YYnThq8X2RZgCg74RPxgcVA==",
                        "requires": {
                "json-buffer": "3.0.0"
            }
        },
        "lowercase-keys": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/lowercase-keys/-/lowercase-keys-1.0.1.tgz",
                    "integrity": "sha512-G2Lj61tXDnVFFOi8VZds+SoQjtQC3dgokKdDG2mTm1tx4m50NUHBOZSBwQQHyy0V12A0JTG4icfZQH+xPyh8VA=="
        },
        "lru-cache": {
            "version": "6.0.0",
                "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-6.0.0.tgz",
                    "integrity": "sha512-Jo6dJ04CmSjuznwJSS3pUeWmd/H0ffTlkXXgwZi+eq1UCmqQwCh+eLsYOYCwY991i2Fah4h1BEMCx4qThGbsiA==",
                        "requires": {
                "yallist": "^4.0.0"
            }
        },
        "md5.js": {
            "version": "1.3.5",
                "resolved": "https://registry.npmjs.org/md5.js/-/md5.js-1.3.5.tgz",
                    "integrity": "sha512-xitP+WxNPcTTOgnTJcrhM0xvdPepipPSf3I8EIpGKeFLjt3PlJLIDG3u8EX53ZIubkb+5U2+3rELYpEhHhzdkg==",
                        "requires": {
                "hash-base": "^3.0.0",
                    "inherits": "^2.0.1",
                        "safe-buffer": "^5.1.2"
            }
        },
        "media-typer": {
            "version": "0.3.0",
                "resolved": "https://registry.npmjs.org/media-typer/-/media-typer-0.3.0.tgz",
                    "integrity": "sha1-hxDXrwqmJvj/+hzgAWhUUmMlV0g="
        },
        "merge-descriptors": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/merge-descriptors/-/merge-descriptors-1.0.1.tgz",
                    "integrity": "sha1-sAqqVW3YtEVoFQ7J0blT8/kMu2E="
        },
        "methods": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/methods/-/methods-1.1.2.tgz",
                    "integrity": "sha1-VSmk1nZUE07cxSZmVoNbD4Ua/O4="
        },
        "miller-rabin": {
            "version": "4.0.1",
                "resolved": "https://registry.npmjs.org/miller-rabin/-/miller-rabin-4.0.1.tgz",
                    "integrity": "sha512-115fLhvZVqWwHPbClyntxEVfVDfl9DLLTuJvq3g2O/Oxi8AiNouAHvDSzHS0viUJc+V5vm3eq91Xwqn9dp4jRA==",
                        "requires": {
                "bn.js": "^4.0.0",
                    "brorand": "^1.0.1"
            }
        },
        "mime": {
            "version": "2.6.0",
                "resolved": "https://registry.npmjs.org/mime/-/mime-2.6.0.tgz",
                    "integrity": "sha512-USPkMeET31rOMiarsBNIHZKLGgvKc/LrjofAnBlOttf5ajRvqiRA8QsenbcooctK6d6Ts6aqZXBA+XbkKthiQg=="
        },
        "mime-db": {
            "version": "1.51.0",
                "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.51.0.tgz",
                    "integrity": "sha512-5y8A56jg7XVQx2mbv1lu49NR4dokRnhZYTtL+KGfaa27uq4pSTXkwQkFJl4pkRMyNFz/EtYDSkiiEHx3F7UN6g=="
        },
        "mime-types": {
            "version": "2.1.34",
                "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.34.tgz",
                    "integrity": "sha512-6cP692WwGIs9XXdOO4++N+7qjqv0rqxxVvJ3VHPh/Sc9mVZcQP+ZGhkKiTvWMQRr2tbHkJP/Yn7Y0npb3ZBs4A==",
                        "requires": {
                "mime-db": "1.51.0"
            }
        },
        "mimic-response": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/mimic-response/-/mimic-response-1.0.1.tgz",
                    "integrity": "sha512-j5EctnkH7amfV/q5Hgmoal1g2QHFJRraOtmx0JpIqkxhBhI/lJSl1nMpQ45hVarwNETOoWEimndZ4QK0RHxuxQ=="
        },
        "min-document": {
            "version": "2.19.0",
                "resolved": "https://registry.npmjs.org/min-document/-/min-document-2.19.0.tgz",
                    "integrity": "sha1-e9KC4/WELtKVu3SM3Z8f+iyCRoU=",
                        "requires": {
                "dom-walk": "^0.1.0"
            }
        },
        "minimalistic-assert": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/minimalistic-assert/-/minimalistic-assert-1.0.1.tgz",
                    "integrity": "sha512-UtJcAD4yEaGtjPezWuO9wC4nwUnVH/8/Im3yEHQP4b67cXlD/Qr9hdITCU1xDbSEXg2XKNaP8jsReV7vQd00/A=="
        },
        "minimalistic-crypto-utils": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/minimalistic-crypto-utils/-/minimalistic-crypto-utils-1.0.1.tgz",
                    "integrity": "sha1-9sAMHAsIIkblxNmd+4x8CDsrWCo="
        },
        "minimist": {
            "version": "1.2.5",
                "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.5.tgz",
                    "integrity": "sha512-FM9nNUYrRBAELZQT3xeZQ7fmMOBg6nWNmJKTcgsJeaLstP/UODVpGsr5OhXhhXg6f+qtJ8uiZ+PUxkDWcgIXLw=="
        },
        "minipass": {
            "version": "2.9.0",
                "resolved": "https://registry.npmjs.org/minipass/-/minipass-2.9.0.tgz",
                    "integrity": "sha512-wxfUjg9WebH+CUDX/CdbRlh5SmfZiy/hpkxaRI16Y9W56Pa75sWgd/rvFilSgrauD9NyFymP/+JFV3KwzIsJeg==",
                        "requires": {
                "safe-buffer": "^5.1.2",
                    "yallist": "^3.0.0"
            },
            "dependencies": {
                "yallist": {
                    "version": "3.1.1",
                        "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
                }
            }
        },
        "minizlib": {
            "version": "1.3.3",
                "resolved": "https://registry.npmjs.org/minizlib/-/minizlib-1.3.3.tgz",
                    "integrity": "sha512-6ZYMOEnmVsdCeTJVE0W9ZD+pVnE8h9Hma/iOwwRDsdQoePpoX56/8B6z3P9VNwppJuBKNRuFDRNRqRWexT9G9Q==",
                        "requires": {
                "minipass": "^2.9.0"
            }
        },
        "mkdirp": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-1.0.4.tgz",
                    "integrity": "sha512-vVqVZQyf3WLx2Shd0qJ9xuvqgAyKPLAiqITEtqW0oIUjzo3PePDd6fW9iFz30ef7Ysp/oiWqbhszeGWW2T6Gzw=="
        },
        "mkdirp-promise": {
            "version": "5.0.1",
                "resolved": "https://registry.npmjs.org/mkdirp-promise/-/mkdirp-promise-5.0.1.tgz",
                    "integrity": "sha1-6bj2jlUsaKnBcTuEiD96HdA5uKE=",
                        "requires": {
                "mkdirp": "*"
            }
        },
        "mock-fs": {
            "version": "4.14.0",
                "resolved": "https://registry.npmjs.org/mock-fs/-/mock-fs-4.14.0.tgz",
                    "integrity": "sha512-qYvlv/exQ4+svI3UOvPUpLDF0OMX5euvUH0Ny4N5QyRyhNdgAgUrVH3iUINSzEPLvx0kbo/Bp28GJKIqvE7URw=="
        },
        "ms": {
            "version": "2.1.2",
                "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.2.tgz",
                    "integrity": "sha512-sGkPx+VjMtmA6MX27oA4FBFELFCZZ4S4XqeGOXCv68tT+jb3vk/RyaKWP0PTKyWtmLSM0b+adUTEvbs1PEaH2w=="
        },
        "multibase": {
            "version": "0.6.1",
                "resolved": "https://registry.npmjs.org/multibase/-/multibase-0.6.1.tgz",
                    "integrity": "sha512-pFfAwyTjbbQgNc3G7D48JkJxWtoJoBMaR4xQUOuB8RnCgRqaYmWNFeJTTvrJ2w51bjLq2zTby6Rqj9TQ9elSUw==",
                        "requires": {
                "base-x": "^3.0.8",
                    "buffer": "^5.5.0"
            },
            "dependencies": {
                "buffer": {
                    "version": "5.7.1",
                        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
                            "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
                                "requires": {
                        "base64-js": "^1.3.1",
                            "ieee754": "^1.1.13"
                    }
                }
            }
        },
        "multicodec": {
            "version": "0.5.7",
                "resolved": "https://registry.npmjs.org/multicodec/-/multicodec-0.5.7.tgz",
                    "integrity": "sha512-PscoRxm3f+88fAtELwUnZxGDkduE2HD9Q6GHUOywQLjOGT/HAdhjLDYNZ1e7VR0s0TP0EwZ16LNUTFpoBGivOA==",
                        "requires": {
                "varint": "^5.0.0"
            }
        },
        "multihashes": {
            "version": "0.4.21",
                "resolved": "https://registry.npmjs.org/multihashes/-/multihashes-0.4.21.tgz",
                    "integrity": "sha512-uVSvmeCWf36pU2nB4/1kzYZjsXD9vofZKpgudqkceYY5g2aZZXJ5r9lxuzoRLl1OAp28XljXsEJ/X/85ZsKmKw==",
                        "requires": {
                "buffer": "^5.5.0",
                    "multibase": "^0.7.0",
                        "varint": "^5.0.0"
            },
            "dependencies": {
                "buffer": {
                    "version": "5.7.1",
                        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
                            "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
                                "requires": {
                        "base64-js": "^1.3.1",
                            "ieee754": "^1.1.13"
                    }
                },
                "multibase": {
                    "version": "0.7.0",
                        "resolved": "https://registry.npmjs.org/multibase/-/multibase-0.7.0.tgz",
                            "integrity": "sha512-TW8q03O0f6PNFTQDvh3xxH03c8CjGaaYrjkl9UQPG6rz53TQzzxJVCIWVjzcbN/Q5Y53Zd0IBQBMVktVgNx4Fg==",
                                "requires": {
                        "base-x": "^3.0.8",
                            "buffer": "^5.5.0"
                    }
                }
            }
        },
        "nano-json-stream-parser": {
            "version": "0.1.2",
                "resolved": "https://registry.npmjs.org/nano-json-stream-parser/-/nano-json-stream-parser-0.1.2.tgz",
                    "integrity": "sha1-DMj20OK2IrR5xA1JnEbWS3Vcb18="
        },
        "negotiator": {
            "version": "0.6.2",
                "resolved": "https://registry.npmjs.org/negotiator/-/negotiator-0.6.2.tgz",
                    "integrity": "sha512-hZXc7K2e+PgeI1eDBe/10Ard4ekbfrrqG8Ep+8Jmf4JID2bNg7NvCPOZN+kfF574pFQI7mum2AUqDidoKqcTOw=="
        },
        "next-tick": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/next-tick/-/next-tick-1.0.0.tgz",
                    "integrity": "sha1-yobR/ogoFpsBICCOPchCS524NCw="
        },
        "node-addon-api": {
            "version": "2.0.2",
                "resolved": "https://registry.npmjs.org/node-addon-api/-/node-addon-api-2.0.2.tgz",
                    "integrity": "sha512-Ntyt4AIXyaLIuMHF6IOoTakB3K+RWxwtsHNRxllEoA6vPwP9o4866g6YWDLUdnucilZhmkxiHwHr11gAENw+QA=="
        },
        "node-gyp-build": {
            "version": "4.3.0",
                "resolved": "https://registry.npmjs.org/node-gyp-build/-/node-gyp-build-4.3.0.tgz",
                    "integrity": "sha512-iWjXZvmboq0ja1pUGULQBexmxq8CV4xBhX7VDOTbL7ZR4FOowwY/VOtRxBN/yKxmdGoIp4j5ysNT4u3S2pDQ3Q=="
        },
        "normalize-url": {
            "version": "4.5.1",
                "resolved": "https://registry.npmjs.org/normalize-url/-/normalize-url-4.5.1.tgz",
                    "integrity": "sha512-9UZCFRHQdNrfTpGg8+1INIg93B6zE0aXMVFkw1WFwvO4SlZywU6aLg5Of0Ap/PgcbSw4LNxvMWXMeugwMCX0AA=="
        },
        "number-to-bn": {
            "version": "1.7.0",
                "resolved": "https://registry.npmjs.org/number-to-bn/-/number-to-bn-1.7.0.tgz",
                    "integrity": "sha1-uzYjWS9+X54AMLGXe9QaDFP+HqA=",
                        "requires": {
                "bn.js": "4.11.6",
                    "strip-hex-prefix": "1.0.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "4.11.6",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-4.11.6.tgz",
                            "integrity": "sha1-UzRK2xRhehP26N0s4okF0cC6MhU="
                }
            }
        },
        "oauth-sign": {
            "version": "0.9.0",
                "resolved": "https://registry.npmjs.org/oauth-sign/-/oauth-sign-0.9.0.tgz",
                    "integrity": "sha512-fexhUFFPTGV8ybAtSIGbV6gOkSv8UtRbDBnAyLQw4QPKkgNlsH2ByPGtMUqdWkos6YCRmAqViwgZrJc/mRDzZQ=="
        },
        "object-assign": {
            "version": "4.1.1",
                "resolved": "https://registry.npmjs.org/object-assign/-/object-assign-4.1.1.tgz",
                    "integrity": "sha1-IQmtx5ZYh8/AXLvUQsrIv7s2CGM="
        },
        "object-inspect": {
            "version": "1.12.0",
                "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.12.0.tgz",
                    "integrity": "sha512-Ho2z80bVIvJloH+YzRmpZVQe87+qASmBUKZDWgx9cu+KDrX2ZDH/3tMy+gXbZETVGs2M8YdxObOh7XAtim9Y0g=="
        },
        "object-keys": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/object-keys/-/object-keys-1.1.1.tgz",
                    "integrity": "sha512-NuAESUOUMrlIXOfHKzD6bpPu3tYt3xvjNdRIQ+FeT0lNb4K8WR70CaDxhuNguS2XG+GjkyMwOzsN5ZktImfhLA=="
        },
        "object.assign": {
            "version": "4.1.2",
                "resolved": "https://registry.npmjs.org/object.assign/-/object.assign-4.1.2.tgz",
                    "integrity": "sha512-ixT2L5THXsApyiUPYKmW+2EHpXXe5Ii3M+f4e+aJFAHao5amFRW6J0OO6c/LU8Be47utCx2GL89hxGB6XSmKuQ==",
                        "requires": {
                "call-bind": "^1.0.0",
                    "define-properties": "^1.1.3",
                        "has-symbols": "^1.0.1",
                            "object-keys": "^1.1.1"
            }
        },
        "oboe": {
            "version": "2.1.5",
                "resolved": "https://registry.npmjs.org/oboe/-/oboe-2.1.5.tgz",
                    "integrity": "sha1-VVQoTFQ6ImbXo48X4HOCH73jk80=",
                        "requires": {
                "http-https": "^1.0.0"
            }
        },
        "on-finished": {
            "version": "2.3.0",
                "resolved": "https://registry.npmjs.org/on-finished/-/on-finished-2.3.0.tgz",
                    "integrity": "sha1-IPEzZIGwg811M3mSoWlxqi2QaUc=",
                        "requires": {
                "ee-first": "1.1.1"
            }
        },
        "once": {
            "version": "1.4.0",
                "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
                    "integrity": "sha1-WDsap3WWHUsROsF9nFC6753Xa9E=",
                        "requires": {
                "wrappy": "1"
            }
        },
        "p-cancelable": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-1.1.0.tgz",
                    "integrity": "sha512-s73XxOZ4zpt1edZYZzvhqFa6uvQc1vwUa0K0BdtIZgQMAJj9IbebH+JkgKZc9h+B05PKHLOTl4ajG1BmNrVZlw=="
        },
        "p-finally": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/p-finally/-/p-finally-1.0.0.tgz",
                    "integrity": "sha1-P7z7FbiZpEEjs0ttzBi3JDNqLK4="
        },
        "p-timeout": {
            "version": "1.2.1",
                "resolved": "https://registry.npmjs.org/p-timeout/-/p-timeout-1.2.1.tgz",
                    "integrity": "sha1-XrOzU7f86Z8QGhA4iAuwVOu+o4Y=",
                        "requires": {
                "p-finally": "^1.0.0"
            }
        },
        "parse-asn1": {
            "version": "5.1.6",
                "resolved": "https://registry.npmjs.org/parse-asn1/-/parse-asn1-5.1.6.tgz",
                    "integrity": "sha512-RnZRo1EPU6JBnra2vGHj0yhp6ebyjBZpmUCLHWiFhxlzvBCCpAuZ7elsBp1PVAbQN0/04VD/19rfzlBSwLstMw==",
                        "requires": {
                "asn1.js": "^5.2.0",
                    "browserify-aes": "^1.0.0",
                        "evp_bytestokey": "^1.0.0",
                            "pbkdf2": "^3.0.3",
                                "safe-buffer": "^5.1.1"
            }
        },
        "parse-headers": {
            "version": "2.0.4",
                "resolved": "https://registry.npmjs.org/parse-headers/-/parse-headers-2.0.4.tgz",
                    "integrity": "sha512-psZ9iZoCNFLrgRjZ1d8mn0h9WRqJwFxM9q3x7iUjN/YT2OksthDJ5TiPCu2F38kS4zutqfW+YdVVkBZZx3/1aw=="
        },
        "parseurl": {
            "version": "1.3.3",
                "resolved": "https://registry.npmjs.org/parseurl/-/parseurl-1.3.3.tgz",
                    "integrity": "sha512-CiyeOxFT/JZyN5m0z9PfXw4SCBJ6Sygz1Dpl0wqjlhDEGGBP1GnsUVEL0p63hoG1fcj3fHynXi9NYO4nWOL+qQ=="
        },
        "path-to-regexp": {
            "version": "0.1.7",
                "resolved": "https://registry.npmjs.org/path-to-regexp/-/path-to-regexp-0.1.7.tgz",
                    "integrity": "sha1-32BBeABfUi8V60SQ5yR6G/qmf4w="
        },
        "pbkdf2": {
            "version": "3.1.2",
                "resolved": "https://registry.npmjs.org/pbkdf2/-/pbkdf2-3.1.2.tgz",
                    "integrity": "sha512-iuh7L6jA7JEGu2WxDwtQP1ddOpaJNC4KlDEFfdQajSGgGPNi4OyDc2R7QnbY2bR9QjBVGwgvTdNJZoE7RaxUMA==",
                        "requires": {
                "create-hash": "^1.1.2",
                    "create-hmac": "^1.1.4",
                        "ripemd160": "^2.0.1",
                            "safe-buffer": "^5.0.1",
                                "sha.js": "^2.4.8"
            }
        },
        "performance-now": {
            "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/performance-now/-/performance-now-2.1.0.tgz",
                    "integrity": "sha1-Ywn04OX6kT7BxpMHrjZLSzd8nns="
        },
        "prepend-http": {
            "version": "2.0.0",
                "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-2.0.0.tgz",
                    "integrity": "sha1-6SQ0v6XqjBn0HN/UAddBo8gZ2Jc="
        },
        "printj": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/printj/-/printj-1.1.2.tgz",
                    "integrity": "sha512-zA2SmoLaxZyArQTOPj5LXecR+RagfPSU5Kw1qP+jkWeNlrq+eJZyY2oS68SU1Z/7/myXM4lo9716laOFAVStCQ=="
        },
        "process": {
            "version": "0.11.10",
                "resolved": "https://registry.npmjs.org/process/-/process-0.11.10.tgz",
                    "integrity": "sha1-czIwDoQBYb2j5podHZGn1LwW8YI="
        },
        "proxy-addr": {
            "version": "2.0.7",
                "resolved": "https://registry.npmjs.org/proxy-addr/-/proxy-addr-2.0.7.tgz",
                    "integrity": "sha512-llQsMLSUDUPT44jdrU/O37qlnifitDP+ZwrmmZcoSKyLKvtZxpyV0n2/bD/N4tBAAZ/gJEdZU7KMraoK1+XYAg==",
                        "requires": {
                "forwarded": "0.2.0",
                    "ipaddr.js": "1.9.1"
            }
        },
        "psl": {
            "version": "1.8.0",
                "resolved": "https://registry.npmjs.org/psl/-/psl-1.8.0.tgz",
                    "integrity": "sha512-RIdOzyoavK+hA18OGGWDqUTsCLhtA7IcZ/6NCs4fFJaHBDab+pDDmDIByWFRQJq2Cd7r1OoQxBGKOaztq+hjIQ=="
        },
        "public-encrypt": {
            "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/public-encrypt/-/public-encrypt-4.0.3.tgz",
                    "integrity": "sha512-zVpa8oKZSz5bTMTFClc1fQOnyyEzpl5ozpi1B5YcvBrdohMjH2rfsBtyXcuNuwjsDIXmBYlF2N5FlJYhR29t8Q==",
                        "requires": {
                "bn.js": "^4.1.0",
                    "browserify-rsa": "^4.0.0",
                        "create-hash": "^1.1.0",
                            "parse-asn1": "^5.0.0",
                                "randombytes": "^2.0.1",
                                    "safe-buffer": "^5.1.2"
            }
        },
        "pump": {
            "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/pump/-/pump-3.0.0.tgz",
                    "integrity": "sha512-LwZy+p3SFs1Pytd/jYct4wpv49HiYCqd9Rlc5ZVdk0V+8Yzv6jR5Blk3TRmPL1ft69TxP0IMZGJ+WPFU2BFhww==",
                        "requires": {
                "end-of-stream": "^1.1.0",
                    "once": "^1.3.1"
            }
        },
        "punycode": {
            "version": "2.1.1",
                "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.1.1.tgz",
                    "integrity": "sha512-XRsRjdf+j5ml+y/6GKHPZbrF/8p2Yga0JPtdqTIY2Xe5ohJPD9saDJJLPvp9+NSBprVvevdXZybnj2cv8OEd0A=="
        },
        "qs": {
            "version": "6.10.2",
                "resolved": "https://registry.npmjs.org/qs/-/qs-6.10.2.tgz",
                    "integrity": "sha512-mSIdjzqznWgfd4pMii7sHtaYF8rx8861hBO80SraY5GT0XQibWZWJSid0avzHGkDIZLImux2S5mXO0Hfct2QCw==",
                        "requires": {
                "side-channel": "^1.0.4"
            }
        },
        "query-string": {
            "version": "5.1.1",
                "resolved": "https://registry.npmjs.org/query-string/-/query-string-5.1.1.tgz",
                    "integrity": "sha512-gjWOsm2SoGlgLEdAGt7a6slVOk9mGiXmPFMqrEhLQ68rhQuBnpfs3+EmlvqKyxnCo9/PPlF+9MtY02S1aFg+Jw==",
                        "requires": {
                "decode-uri-component": "^0.2.0",
                    "object-assign": "^4.1.0",
                        "strict-uri-encode": "^1.0.0"
            }
        },
        "querystringify": {
            "version": "2.2.0",
                "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
                    "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ=="
        },
        "randombytes": {
            "version": "2.1.0",
                "resolved": "https://registry.npmjs.org/randombytes/-/randombytes-2.1.0.tgz",
                    "integrity": "sha512-vYl3iOX+4CKUWuxGi9Ukhie6fsqXqS9FE2Zaic4tNFD2N2QQaXOMFbuKK4QmDHC0JO6B1Zp41J0LpT0oR68amQ==",
                        "requires": {
                "safe-buffer": "^5.1.0"
            }
        },
        "randomfill": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/randomfill/-/randomfill-1.0.4.tgz",
                    "integrity": "sha512-87lcbR8+MhcWcUiQ+9e+Rwx8MyR2P7qnt15ynUlbm3TU/fjbgz4GsvfSUDTemtCCtVCqb4ZcEFlyPNTh9bBTLw==",
                        "requires": {
                "randombytes": "^2.0.5",
                    "safe-buffer": "^5.1.0"
            }
        },
        "range-parser": {
            "version": "1.2.1",
                "resolved": "https://registry.npmjs.org/range-parser/-/range-parser-1.2.1.tgz",
                    "integrity": "sha512-Hrgsx+orqoygnmhFbKaHE6c296J+HTAQXoxEF6gNupROmmGJRoyzfG3ccAveqCBrwr/2yxQ5BVd/GTl5agOwSg=="
        },
        "raw-body": {
            "version": "2.4.2",
                "resolved": "https://registry.npmjs.org/raw-body/-/raw-body-2.4.2.tgz",
                    "integrity": "sha512-RPMAFUJP19WIet/99ngh6Iv8fzAbqum4Li7AD6DtGaW2RpMB/11xDoalPiJMTbu6I3hkbMVkATvZrqb9EEqeeQ==",
                        "requires": {
                "bytes": "3.1.1",
                    "http-errors": "1.8.1",
                        "iconv-lite": "0.4.24",
                            "unpipe": "1.0.0"
            }
        },
        "readable-stream": {
            "version": "3.6.0",
                "resolved": "https://registry.npmjs.org/readable-stream/-/readable-stream-3.6.0.tgz",
                    "integrity": "sha512-BViHy7LKeTz4oNnkcLJ+lVSL6vpiFeX6/d3oSH8zCW7UxP2onchk+vTGB143xuFjHS3deTgkKoXXymXqymiIdA==",
                        "requires": {
                "inherits": "^2.0.3",
                    "string_decoder": "^1.1.1",
                        "util-deprecate": "^1.0.1"
            }
        },
        "request": {
            "version": "2.88.2",
                "resolved": "https://registry.npmjs.org/request/-/request-2.88.2.tgz",
                    "integrity": "sha512-MsvtOrfG9ZcrOwAW+Qi+F6HbD0CWXEh9ou77uOb7FM2WPhwT7smM833PzanhJLsgXjN89Ir6V2PczXNnMpwKhw==",
                        "requires": {
                "aws-sign2": "~0.7.0",
                    "aws4": "^1.8.0",
                        "caseless": "~0.12.0",
                            "combined-stream": "~1.0.6",
                                "extend": "~3.0.2",
                                    "forever-agent": "~0.6.1",
                                        "form-data": "~2.3.2",
                                            "har-validator": "~5.1.3",
                                                "http-signature": "~1.2.0",
                                                    "is-typedarray": "~1.0.0",
                                                        "isstream": "~0.1.2",
                                                            "json-stringify-safe": "~5.0.1",
                                                                "mime-types": "~2.1.19",
                                                                    "oauth-sign": "~0.9.0",
                                                                        "performance-now": "^2.1.0",
                                                                            "qs": "~6.5.2",
                                                                                "safe-buffer": "^5.1.2",
                                                                                    "tough-cookie": "~2.5.0",
                                                                                        "tunnel-agent": "^0.6.0",
                                                                                            "uuid": "^3.3.2"
            },
            "dependencies": {
                "form-data": {
                    "version": "2.3.3",
                        "resolved": "https://registry.npmjs.org/form-data/-/form-data-2.3.3.tgz",
                            "integrity": "sha512-1lLKB2Mu3aGP1Q/2eCOx0fNbRMe7XdwktwOruhfqqd0rIJWwN4Dh+E3hrPSlDCXnSR7UtZ1N38rVXm+6+MEhJQ==",
                                "requires": {
                        "asynckit": "^0.4.0",
                            "combined-stream": "^1.0.6",
                                "mime-types": "^2.1.12"
                    }
                },
                "qs": {
                    "version": "6.5.3",
                        "resolved": "https://registry.npmjs.org/qs/-/qs-6.5.3.tgz",
                            "integrity": "sha512-qxXIEh4pCGfHICj1mAJQ2/2XVZkjCDTcEgfoSQxc/fYivUZxTkk7L3bDBJSoNrEzXI17oUO5Dp07ktqE5KzczA=="
                }
            }
        },
        "requires-port": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
                    "integrity": "sha1-kl0mAdOaxIXgkc8NpcbmlNw9yv8="
        },
        "responselike": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/responselike/-/responselike-1.0.2.tgz",
                    "integrity": "sha1-kYcg7ztjHFZCvgaPFa3lpG9Loec=",
                        "requires": {
                "lowercase-keys": "^1.0.0"
            }
        },
        "ripemd160": {
            "version": "2.0.2",
                "resolved": "https://registry.npmjs.org/ripemd160/-/ripemd160-2.0.2.tgz",
                    "integrity": "sha512-ii4iagi25WusVoiC4B4lq7pbXfAp3D9v5CwfkY33vffw2+pkDjY1D8GaN7spsxvCSx8dkPqOZCEZyfxcmJG2IA==",
                        "requires": {
                "hash-base": "^3.0.0",
                    "inherits": "^2.0.1"
            }
        },
        "rlp": {
            "version": "2.2.7",
                "resolved": "https://registry.npmjs.org/rlp/-/rlp-2.2.7.tgz",
                    "integrity": "sha512-d5gdPmgQ0Z+AklL2NVXr/IoSjNZFfTVvQWzL/AM2AOcSzYP2xjlb0AC8YyCLc41MSNf6P6QVtjgPdmVtzb+4lQ==",
                        "requires": {
                "bn.js": "^5.2.0"
            },
            "dependencies": {
                "bn.js": {
                    "version": "5.2.0",
                        "resolved": "https://registry.npmjs.org/bn.js/-/bn.js-5.2.0.tgz",
                            "integrity": "sha512-D7iWRBvnZE8ecXiLj/9wbxH7Tk79fAh8IHaTNq1RWRixsS02W+5qS+iE9yq6RYl0asXx5tw0bLhmT5pIfbSquw=="
                }
            }
        },
        "safe-buffer": {
            "version": "5.2.1",
                "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.2.1.tgz",
                    "integrity": "sha512-rp3So07KcdmmKbGvgaNxQSJr7bGVSVk5S9Eq1F+ppbRo70+YeaDxkw5Dd8NPN+GD6bjnYm2VuPuCXmpuYvmCXQ=="
        },
        "safer-buffer": {
            "version": "2.1.2",
                "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
                    "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg=="
        },
        "scrypt-js": {
            "version": "3.0.1",
                "resolved": "https://registry.npmjs.org/scrypt-js/-/scrypt-js-3.0.1.tgz",
                    "integrity": "sha512-cdwTTnqPu0Hyvf5in5asVdZocVDTNRmR7XEcJuIzMjJeSHybHl7vpB66AzwTaIg6CLSbtjcxc8fqcySfnTkccA=="
        },
        "secp256k1": {
            "version": "4.0.3",
                "resolved": "https://registry.npmjs.org/secp256k1/-/secp256k1-4.0.3.tgz",
                    "integrity": "sha512-NLZVf+ROMxwtEj3Xa562qgv2BK5e2WNmXPiOdVIPLgs6lyTzMvBq0aWTYMI5XCP9jZMVKOcqZLw/Wc4vDkuxhA==",
                        "requires": {
                "elliptic": "^6.5.4",
                    "node-addon-api": "^2.0.0",
                        "node-gyp-build": "^4.2.0"
            }
        },
        "semver": {
            "version": "7.3.5",
                "resolved": "https://registry.npmjs.org/semver/-/semver-7.3.5.tgz",
                    "integrity": "sha512-PoeGJYh8HK4BTO/a9Tf6ZG3veo/A7ZVsYrSA6J8ny9nb3B1VrpkuN+z9OE5wfE5p6H4LchYZsegiQgbJD94ZFQ==",
                        "requires": {
                "lru-cache": "^6.0.0"
            }
        },
        "send": {
            "version": "0.17.2",
                "resolved": "https://registry.npmjs.org/send/-/send-0.17.2.tgz",
                    "integrity": "sha512-UJYB6wFSJE3G00nEivR5rgWp8c2xXvJ3OPWPhmuteU0IKj8nKbG3DrjiOmLwpnHGYWAVwA69zmTm++YG0Hmwww==",
                        "requires": {
                "debug": "2.6.9",
                    "depd": "~1.1.2",
                        "destroy": "~1.0.4",
                            "encodeurl": "~1.0.2",
                                "escape-html": "~1.0.3",
                                    "etag": "~1.8.1",
                                        "fresh": "0.5.2",
                                            "http-errors": "1.8.1",
                                                "mime": "1.6.0",
                                                    "ms": "2.1.3",
                                                        "on-finished": "~2.3.0",
                                                            "range-parser": "~1.2.1",
                                                                "statuses": "~1.5.0"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                                "requires": {
                        "ms": "2.0.0"
                    },
                    "dependencies": {
                        "ms": {
                            "version": "2.0.0",
                                "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                                    "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                        }
                    }
                },
                "mime": {
                    "version": "1.6.0",
                        "resolved": "https://registry.npmjs.org/mime/-/mime-1.6.0.tgz",
                            "integrity": "sha512-x0Vn8spI+wuJ1O6S7gnbaQg8Pxh4NNHb7KSINmEWKiPE4RKOplvijn+NkmYmmRgP68mc70j2EbeTFRsrswaQeg=="
                },
                "ms": {
                    "version": "2.1.3",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
                            "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA=="
                }
            }
        },
        "serve-static": {
            "version": "1.14.2",
                "resolved": "https://registry.npmjs.org/serve-static/-/serve-static-1.14.2.tgz",
                    "integrity": "sha512-+TMNA9AFxUEGuC0z2mevogSnn9MXKb4fa7ngeRMJaaGv8vTwnIEkKi+QGvPt33HSnf8pRS+WGM0EbMtCJLKMBQ==",
                        "requires": {
                "encodeurl": "~1.0.2",
                    "escape-html": "~1.0.3",
                        "parseurl": "~1.3.3",
                            "send": "0.17.2"
            }
        },
        "servify": {
            "version": "0.1.12",
                "resolved": "https://registry.npmjs.org/servify/-/servify-0.1.12.tgz",
                    "integrity": "sha512-/xE6GvsKKqyo1BAY+KxOWXcLpPsUUyji7Qg3bVD7hh1eRze5bR1uYiuDA/k3Gof1s9BTzQZEJK8sNcNGFIzeWw==",
                        "requires": {
                "body-parser": "^1.16.0",
                    "cors": "^2.8.1",
                        "express": "^4.14.0",
                            "request": "^2.79.0",
                                "xhr": "^2.3.3"
            }
        },
        "setimmediate": {
            "version": "1.0.5",
                "resolved": "https://registry.npmjs.org/setimmediate/-/setimmediate-1.0.5.tgz",
                    "integrity": "sha1-KQy7Iy4waULX1+qbg3Mqt4VvgoU="
        },
        "setprototypeof": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/setprototypeof/-/setprototypeof-1.2.0.tgz",
                    "integrity": "sha512-E5LDX7Wrp85Kil5bhZv46j8jOeboKq5JMmYM3gVGdGH8xFpPWXUMsNrlODCrkoxMEeNi/XZIwuRvY4XNwYMJpw=="
        },
        "sha.js": {
            "version": "2.4.11",
                "resolved": "https://registry.npmjs.org/sha.js/-/sha.js-2.4.11.tgz",
                    "integrity": "sha512-QMEp5B7cftE7APOjk5Y6xgrbWu+WkLVQwk8JNjZ8nKRciZaByEW6MubieAiToS7+dwvrjGhH8jRXz3MVd0AYqQ==",
                        "requires": {
                "inherits": "^2.0.1",
                    "safe-buffer": "^5.0.1"
            }
        },
        "side-channel": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.0.4.tgz",
                    "integrity": "sha512-q5XPytqFEIKHkGdiMIrY10mvLRvnQh42/+GoBlFW3b2LXLE2xxJpZFdm94we0BaoV3RwJyGqg5wS7epxTv0Zvw==",
                        "requires": {
                "call-bind": "^1.0.0",
                    "get-intrinsic": "^1.0.2",
                        "object-inspect": "^1.9.0"
            }
        },
        "simple-concat": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/simple-concat/-/simple-concat-1.0.1.tgz",
                    "integrity": "sha512-cSFtAPtRhljv69IK0hTVZQ+OfE9nePi/rtJmw5UjHeVyVroEqJXP1sFztKUy1qU+xvz3u/sfYJLa947b7nAN2Q=="
        },
        "simple-get": {
            "version": "2.8.1",
                "resolved": "https://registry.npmjs.org/simple-get/-/simple-get-2.8.1.tgz",
                    "integrity": "sha512-lSSHRSw3mQNUGPAYRqo7xy9dhKmxFXIjLjp4KHpf99GEH2VH7C3AM+Qfx6du6jhfUi6Vm7XnbEVEf7Wb6N8jRw==",
                        "requires": {
                "decompress-response": "^3.3.0",
                    "once": "^1.3.1",
                        "simple-concat": "^1.0.0"
            }
        },
        "sshpk": {
            "version": "1.17.0",
                "resolved": "https://registry.npmjs.org/sshpk/-/sshpk-1.17.0.tgz",
                    "integrity": "sha512-/9HIEs1ZXGhSPE8X6Ccm7Nam1z8KcoCqPdI7ecm1N33EzAetWahvQWVqLZtaZQ+IDKX4IyA2o0gBzqIMkAagHQ==",
                        "requires": {
                "asn1": "~0.2.3",
                    "assert-plus": "^1.0.0",
                        "bcrypt-pbkdf": "^1.0.0",
                            "dashdash": "^1.12.0",
                                "ecc-jsbn": "~0.1.1",
                                    "getpass": "^0.1.1",
                                        "jsbn": "~0.1.0",
                                            "safer-buffer": "^2.0.2",
                                                "tweetnacl": "~0.14.0"
            },
            "dependencies": {
                "tweetnacl": {
                    "version": "0.14.5",
                        "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-0.14.5.tgz",
                            "integrity": "sha1-WuaBd/GS1EViadEIr6k/+HQ/T2Q="
                }
            }
        },
        "statuses": {
            "version": "1.5.0",
                "resolved": "https://registry.npmjs.org/statuses/-/statuses-1.5.0.tgz",
                    "integrity": "sha1-Fhx9rBd2Wf2YEfQ3cfqZOBR4Yow="
        },
        "strict-uri-encode": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/strict-uri-encode/-/strict-uri-encode-1.1.0.tgz",
                    "integrity": "sha1-J5siXfHVgrH1TmWt3UNS4Y+qBxM="
        },
        "string.prototype.trimend": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/string.prototype.trimend/-/string.prototype.trimend-1.0.4.tgz",
                    "integrity": "sha512-y9xCjw1P23Awk8EvTpcyL2NIr1j7wJ39f+k6lvRnSMz+mz9CGz9NYPelDk42kOz6+ql8xjfK8oYzy3jAP5QU5A==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "define-properties": "^1.1.3"
            }
        },
        "string.prototype.trimstart": {
            "version": "1.0.4",
                "resolved": "https://registry.npmjs.org/string.prototype.trimstart/-/string.prototype.trimstart-1.0.4.tgz",
                    "integrity": "sha512-jh6e984OBfvxS50tdY2nRZnoC5/mLFKOREQfw8t5yytkoUsJRNxvI/E39qu1sD0OtWI3OC0XgKSmcWwziwYuZw==",
                        "requires": {
                "call-bind": "^1.0.2",
                    "define-properties": "^1.1.3"
            }
        },
        "string_decoder": {
            "version": "1.3.0",
                "resolved": "https://registry.npmjs.org/string_decoder/-/string_decoder-1.3.0.tgz",
                    "integrity": "sha512-hkRX8U1WjJFd8LsDJ2yQ/wWWxaopEsABU1XfkM8A+j0+85JAGppt16cr1Whg6KIbb4okU6Mql6BOj+uup/wKeA==",
                        "requires": {
                "safe-buffer": "~5.2.0"
            }
        },
        "strip-hex-prefix": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/strip-hex-prefix/-/strip-hex-prefix-1.0.0.tgz",
                    "integrity": "sha1-DF8VX+8RUTczd96du1iNoFUA428=",
                        "requires": {
                "is-hex-prefixed": "1.0.0"
            }
        },
        "superagent": {
            "version": "6.1.0",
                "resolved": "https://registry.npmjs.org/superagent/-/superagent-6.1.0.tgz",
                    "integrity": "sha512-OUDHEssirmplo3F+1HWKUrUjvnQuA+nZI6i/JJBdXb5eq9IyEQwPyPpqND+SSsxf6TygpBEkUjISVRN4/VOpeg==",
                        "requires": {
                "component-emitter": "^1.3.0",
                    "cookiejar": "^2.1.2",
                        "debug": "^4.1.1",
                            "fast-safe-stringify": "^2.0.7",
                                "form-data": "^3.0.0",
                                    "formidable": "^1.2.2",
                                        "methods": "^1.1.2",
                                            "mime": "^2.4.6",
                                                "qs": "^6.9.4",
                                                    "readable-stream": "^3.6.0",
                                                        "semver": "^7.3.2"
            }
        },
        "swarm-js": {
            "version": "0.1.40",
                "resolved": "https://registry.npmjs.org/swarm-js/-/swarm-js-0.1.40.tgz",
                    "integrity": "sha512-yqiOCEoA4/IShXkY3WKwP5PvZhmoOOD8clsKA7EEcRILMkTEYHCQ21HDCAcVpmIxZq4LyZvWeRJ6quIyHk1caA==",
                        "requires": {
                "bluebird": "^3.5.0",
                    "buffer": "^5.0.5",
                        "eth-lib": "^0.1.26",
                            "fs-extra": "^4.0.2",
                                "got": "^7.1.0",
                                    "mime-types": "^2.1.16",
                                        "mkdirp-promise": "^5.0.1",
                                            "mock-fs": "^4.1.0",
                                                "setimmediate": "^1.0.5",
                                                    "tar": "^4.0.2",
                                                        "xhr-request": "^1.0.1"
            },
            "dependencies": {
                "buffer": {
                    "version": "5.7.1",
                        "resolved": "https://registry.npmjs.org/buffer/-/buffer-5.7.1.tgz",
                            "integrity": "sha512-EHcyIPBQ4BSGlvjB16k5KgAJ27CIsHY/2JBmCRReo48y9rQ3MaUzWX3KVlBa4U7MyX02HdVj0K7C3WaB3ju7FQ==",
                                "requires": {
                        "base64-js": "^1.3.1",
                            "ieee754": "^1.1.13"
                    }
                },
                "get-stream": {
                    "version": "3.0.0",
                        "resolved": "https://registry.npmjs.org/get-stream/-/get-stream-3.0.0.tgz",
                            "integrity": "sha1-jpQ9E1jcN1VQVOy+LtsFqhdO3hQ="
                },
                "got": {
                    "version": "7.1.0",
                        "resolved": "https://registry.npmjs.org/got/-/got-7.1.0.tgz",
                            "integrity": "sha512-Y5WMo7xKKq1muPsxD+KmrR8DH5auG7fBdDVueZwETwV6VytKyU9OX/ddpq2/1hp1vIPvVb4T81dKQz3BivkNLw==",
                                "requires": {
                        "decompress-response": "^3.2.0",
                            "duplexer3": "^0.1.4",
                                "get-stream": "^3.0.0",
                                    "is-plain-obj": "^1.1.0",
                                        "is-retry-allowed": "^1.0.0",
                                            "is-stream": "^1.0.0",
                                                "isurl": "^1.0.0-alpha5",
                                                    "lowercase-keys": "^1.0.0",
                                                        "p-cancelable": "^0.3.0",
                                                            "p-timeout": "^1.1.1",
                                                                "safe-buffer": "^5.0.1",
                                                                    "timed-out": "^4.0.0",
                                                                        "url-parse-lax": "^1.0.0",
                                                                            "url-to-options": "^1.0.1"
                    }
                },
                "p-cancelable": {
                    "version": "0.3.0",
                        "resolved": "https://registry.npmjs.org/p-cancelable/-/p-cancelable-0.3.0.tgz",
                            "integrity": "sha512-RVbZPLso8+jFeq1MfNvgXtCRED2raz/dKpacfTNxsx6pLEpEomM7gah6VeHSYV3+vo0OAi4MkArtQcWWXuQoyw=="
                },
                "prepend-http": {
                    "version": "1.0.4",
                        "resolved": "https://registry.npmjs.org/prepend-http/-/prepend-http-1.0.4.tgz",
                            "integrity": "sha1-1PRWKwzjaW5BrFLQ4ALlemNdxtw="
                },
                "url-parse-lax": {
                    "version": "1.0.0",
                        "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-1.0.0.tgz",
                            "integrity": "sha1-evjzA2Rem9eaJy56FKxovAYJ2nM=",
                                "requires": {
                        "prepend-http": "^1.0.1"
                    }
                }
            }
        },
        "tar": {
            "version": "4.4.19",
                "resolved": "https://registry.npmjs.org/tar/-/tar-4.4.19.tgz",
                    "integrity": "sha512-a20gEsvHnWe0ygBY8JbxoM4w3SJdhc7ZAuxkLqh+nvNQN2IOt0B5lLgM490X5Hl8FF0dl0tOf2ewFYAlIFgzVA==",
                        "requires": {
                "chownr": "^1.1.4",
                    "fs-minipass": "^1.2.7",
                        "minipass": "^2.9.0",
                            "minizlib": "^1.3.3",
                                "mkdirp": "^0.5.5",
                                    "safe-buffer": "^5.2.1",
                                        "yallist": "^3.1.1"
            },
            "dependencies": {
                "mkdirp": {
                    "version": "0.5.5",
                        "resolved": "https://registry.npmjs.org/mkdirp/-/mkdirp-0.5.5.tgz",
                            "integrity": "sha512-NKmAlESf6jMGym1++R0Ra7wvhV+wFW63FaSOFPwRahvea0gMUcGUhVeAg/0BC0wiv9ih5NYPB1Wn1UEI1/L+xQ==",
                                "requires": {
                        "minimist": "^1.2.5"
                    }
                },
                "yallist": {
                    "version": "3.1.1",
                        "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
                            "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g=="
                }
            }
        },
        "timed-out": {
            "version": "4.0.1",
                "resolved": "https://registry.npmjs.org/timed-out/-/timed-out-4.0.1.tgz",
                    "integrity": "sha1-8y6srFoXW+ol1/q1Zas+2HQe9W8="
        },
        "to-readable-stream": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/to-readable-stream/-/to-readable-stream-1.0.0.tgz",
                    "integrity": "sha512-Iq25XBt6zD5npPhlLVXGFN3/gyR2/qODcKNNyTMd4vbm39HUaOiAM4PMq0eMVC/Tkxz+Zjdsc55g9yyz+Yq00Q=="
        },
        "toidentifier": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/toidentifier/-/toidentifier-1.0.1.tgz",
                    "integrity": "sha512-o5sSPKEkg/DIQNmH43V0/uerLrpzVedkUh8tGNvaeXpfpuwjKenlSox/2O/BTlZUtEe+JG7s5YhEz608PlAHRA=="
        },
        "tough-cookie": {
            "version": "2.5.0",
                "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-2.5.0.tgz",
                    "integrity": "sha512-nlLsUzgm1kfLXSXfRZMc1KLAugd4hqJHDTvc2hDIwS3mZAfMEuMbc03SujMF+GEcpaX/qboeycw6iO8JwVv2+g==",
                        "requires": {
                "psl": "^1.1.28",
                    "punycode": "^2.1.1"
            }
        },
        "tunnel-agent": {
            "version": "0.6.0",
                "resolved": "https://registry.npmjs.org/tunnel-agent/-/tunnel-agent-0.6.0.tgz",
                    "integrity": "sha1-J6XeoGs2sEoKmWZ3SykIaPD8QP0=",
                        "requires": {
                "safe-buffer": "^5.0.1"
            }
        },
        "tweetnacl": {
            "version": "1.0.3",
                "resolved": "https://registry.npmjs.org/tweetnacl/-/tweetnacl-1.0.3.tgz",
                    "integrity": "sha512-6rt+RN7aOi1nGMyC4Xa5DdYiukl2UWCbcJft7YhxReBGQD7OAM8Pbxw6YMo4r2diNEA8FEmu32YOn9rhaiE5yw=="
        },
        "type": {
            "version": "1.2.0",
                "resolved": "https://registry.npmjs.org/type/-/type-1.2.0.tgz",
                    "integrity": "sha512-+5nt5AAniqsCnu2cEQQdpzCAh33kVx8n0VoFidKpB1dVVLAN/F+bgVOqOJqOnEnrhp222clB5p3vUlD+1QAnfg=="
        },
        "type-is": {
            "version": "1.6.18",
                "resolved": "https://registry.npmjs.org/type-is/-/type-is-1.6.18.tgz",
                    "integrity": "sha512-TkRKr9sUTxEH8MdfuCSP7VizJyzRNMjj2J2do2Jr3Kym598JVdEksuzPQCnlFPW4ky9Q+iA+ma9BGm06XQBy8g==",
                        "requires": {
                "media-typer": "0.3.0",
                    "mime-types": "~2.1.24"
            }
        },
        "typedarray-to-buffer": {
            "version": "3.1.5",
                "resolved": "https://registry.npmjs.org/typedarray-to-buffer/-/typedarray-to-buffer-3.1.5.tgz",
                    "integrity": "sha512-zdu8XMNEDepKKR+XYOXAVPtWui0ly0NtohUscw+UmaHiAWT8hrV1rr//H6V+0DvJ3OQ19S979M0laLfX8rm82Q==",
                        "requires": {
                "is-typedarray": "^1.0.0"
            }
        },
        "ultron": {
            "version": "1.1.1",
                "resolved": "https://registry.npmjs.org/ultron/-/ultron-1.1.1.tgz",
                    "integrity": "sha512-UIEXBNeYmKptWH6z8ZnqTeS8fV74zG0/eRU9VGkpzz+LIJNs8W/zM/L+7ctCkRrgbNnnR0xxw4bKOr0cW0N0Og=="
        },
        "unbox-primitive": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/unbox-primitive/-/unbox-primitive-1.0.1.tgz",
                    "integrity": "sha512-tZU/3NqK3dA5gpE1KtyiJUrEB0lxnGkMFHptJ7q6ewdZ8s12QrODwNbhIJStmJkd1QDXa1NRA8aF2A1zk/Ypyw==",
                        "requires": {
                "function-bind": "^1.1.1",
                    "has-bigints": "^1.0.1",
                        "has-symbols": "^1.0.2",
                            "which-boxed-primitive": "^1.0.2"
            }
        },
        "universalify": {
            "version": "0.1.2",
                "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.1.2.tgz",
                    "integrity": "sha512-rBJeI5CXAlmy1pV+617WB9J63U6XcazHHF2f2dbJix4XzpUF0RS3Zbj0FGIOCAva5P/d/GBOYaACQ1w+0azUkg=="
        },
        "unpipe": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/unpipe/-/unpipe-1.0.0.tgz",
                    "integrity": "sha1-sr9O6FFKrmFltIF4KdIbLvSZBOw="
        },
        "uri-js": {
            "version": "4.4.1",
                "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
                    "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
                        "requires": {
                "punycode": "^2.1.0"
            }
        },
        "url-parse": {
            "version": "1.5.4",
                "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.5.4.tgz",
                    "integrity": "sha512-ITeAByWWoqutFClc/lRZnFplgXgEZr3WJ6XngMM/N9DMIm4K8zXPCZ1Jdu0rERwO84w1WC5wkle2ubwTA4NTBg==",
                        "requires": {
                "querystringify": "^2.1.1",
                    "requires-port": "^1.0.0"
            }
        },
        "url-parse-lax": {
            "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/url-parse-lax/-/url-parse-lax-3.0.0.tgz",
                    "integrity": "sha1-FrXK/Afb42dsGxmZF3gj1lA6yww=",
                        "requires": {
                "prepend-http": "^2.0.0"
            }
        },
        "url-set-query": {
            "version": "1.0.0",
                "resolved": "https://registry.npmjs.org/url-set-query/-/url-set-query-1.0.0.tgz",
                    "integrity": "sha1-AW6M/Xwg7gXK/neV6JK9BwL6ozk="
        },
        "url-to-options": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/url-to-options/-/url-to-options-1.0.1.tgz",
                    "integrity": "sha1-FQWgOiiaSMvXpDTvuu7FBV9WM6k="
        },
        "utf-8-validate": {
            "version": "5.0.8",
                "resolved": "https://registry.npmjs.org/utf-8-validate/-/utf-8-validate-5.0.8.tgz",
                    "integrity": "sha512-k4dW/Qja1BYDl2qD4tOMB9PFVha/UJtxTc1cXYOe3WwA/2m0Yn4qB7wLMpJyLJ/7DR0XnTut3HsCSzDT4ZvKgA==",
                        "requires": {
                "node-gyp-build": "^4.3.0"
            }
        },
        "utf8": {
            "version": "3.0.0",
                "resolved": "https://registry.npmjs.org/utf8/-/utf8-3.0.0.tgz",
                    "integrity": "sha512-E8VjFIQ/TyQgp+TZfS6l8yp/xWppSAHzidGiRrqe4bK4XP9pTRyKFgGJpO3SN7zdX4DeomTrwaseCHovfpFcqQ=="
        },
        "util": {
            "version": "0.12.4",
                "resolved": "https://registry.npmjs.org/util/-/util-0.12.4.tgz",
                    "integrity": "sha512-bxZ9qtSlGUWSOy9Qa9Xgk11kSslpuZwaxCg4sNIDj6FLucDab2JxnHwyNTCpHMtK1MjoQiWQ6DiUMZYbSrO+Sw==",
                        "requires": {
                "inherits": "^2.0.3",
                    "is-arguments": "^1.0.4",
                        "is-generator-function": "^1.0.7",
                            "is-typed-array": "^1.1.3",
                                "safe-buffer": "^5.1.2",
                                    "which-typed-array": "^1.1.2"
            }
        },
        "util-deprecate": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
                    "integrity": "sha1-RQ1Nyfpw3nMnYvvS1KKJgUGaDM8="
        },
        "utils-merge": {
            "version": "1.0.1",
                "resolved": "https://registry.npmjs.org/utils-merge/-/utils-merge-1.0.1.tgz",
                    "integrity": "sha1-n5VxD1CiZ5R7LMwSR0HBAoQn5xM="
        },
        "uuid": {
            "version": "3.4.0",
                "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.4.0.tgz",
                    "integrity": "sha512-HjSDRw6gZE5JMggctHBcjVak08+KEVhSIiDzFnT9S9aegmp85S/bReBVTb4QTFaRNptJ9kuYaNhnbNEOkbKb/A=="
        },
        "varint": {
            "version": "5.0.2",
                "resolved": "https://registry.npmjs.org/varint/-/varint-5.0.2.tgz",
                    "integrity": "sha512-lKxKYG6H03yCZUpAGOPOsMcGxd1RHCu1iKvEHYDPmTyq2HueGhD73ssNBqqQWfvYs04G9iUFRvmAVLW20Jw6ow=="
        },
        "vary": {
            "version": "1.1.2",
                "resolved": "https://registry.npmjs.org/vary/-/vary-1.1.2.tgz",
                    "integrity": "sha1-IpnwLG3tMNSllhsLn3RSShj2NPw="
        },
        "verror": {
            "version": "1.10.0",
                "resolved": "https://registry.npmjs.org/verror/-/verror-1.10.0.tgz",
                    "integrity": "sha1-OhBcoXBTr1XW4nDB+CiGguGNpAA=",
                        "requires": {
                "assert-plus": "^1.0.0",
                    "core-util-is": "1.0.2",
                        "extsprintf": "^1.2.0"
            }
        },
        "web3": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3/-/web3-1.6.1.tgz",
                    "integrity": "sha512-c299lLiyb2/WOcxh7TinwvbATaMmrgNIeAzbLbmOKHI0LcwyfsB1eu2ReOIrfrCYDYRW2KAjYr7J7gHawqDNPQ==",
                        "requires": {
                "web3-bzz": "1.6.1",
                    "web3-core": "1.6.1",
                        "web3-eth": "1.6.1",
                            "web3-eth-personal": "1.6.1",
                                "web3-net": "1.6.1",
                                    "web3-shh": "1.6.1",
                                        "web3-utils": "1.6.1"
            }
        },
        "web3-bzz": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-bzz/-/web3-bzz-1.6.1.tgz",
                    "integrity": "sha512-JbnFNbRlwwHJZPtVuCxo7rC4U4OTg+mPsyhjgPQJJhS0a6Y54OgVWYk9UA/95HqbmTJwTtX329gJoSsseEfrng==",
                        "requires": {
                "@types/node": "^12.12.6",
                    "got": "9.6.0",
                        "swarm-js": "^0.1.40"
            }
        },
        "web3-core": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core/-/web3-core-1.6.1.tgz",
                    "integrity": "sha512-m+b7UfYvU5cQUAh6NRfxRzH/5B3to1AdEQi1HIQt570cDWlObOOmoO9tY6iJnI5w4acxIO19LqjDMqEJGBYyRQ==",
                        "requires": {
                "@types/bn.js": "^4.11.5",
                    "@types/node": "^12.12.6",
                        "bignumber.js": "^9.0.0",
                            "web3-core-helpers": "1.6.1",
                                "web3-core-method": "1.6.1",
                                    "web3-core-requestmanager": "1.6.1",
                                        "web3-utils": "1.6.1"
            }
        },
        "web3-core-helpers": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core-helpers/-/web3-core-helpers-1.6.1.tgz",
                    "integrity": "sha512-om2PZvK1uoWcgMq6JfcSx3241LEIVF6qi2JuHz2SLKiKEW5UsBUaVx0mNCmcZaiuYQCyOsLS3r33q5AdM+v8ng==",
                        "requires": {
                "web3-eth-iban": "1.6.1",
                    "web3-utils": "1.6.1"
            }
        },
        "web3-core-method": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core-method/-/web3-core-method-1.6.1.tgz",
                    "integrity": "sha512-szH5KyIWIaULQDBdDvevQUCHV9lsExJ/oV0ePqK+w015D2SdMPMuhii0WB+HCePaksWO+rr/GAypvV9g2T3N+w==",
                        "requires": {
                "@ethersproject/transactions": "^5.0.0-beta.135",
                    "web3-core-helpers": "1.6.1",
                        "web3-core-promievent": "1.6.1",
                            "web3-core-subscriptions": "1.6.1",
                                "web3-utils": "1.6.1"
            }
        },
        "web3-core-promievent": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core-promievent/-/web3-core-promievent-1.6.1.tgz",
                    "integrity": "sha512-byJ5s2MQxrWdXd27pWFmujfzsTZK4ik8rDgIV1RFDFc+rHZ2nZhq+VWk7t/Nkrj7EaVXncEgTdPEHc18nx+ocQ==",
                        "requires": {
                "eventemitter3": "4.0.4"
            }
        },
        "web3-core-requestmanager": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core-requestmanager/-/web3-core-requestmanager-1.6.1.tgz",
                    "integrity": "sha512-4y7etYEUtkfflyYVBfN1oJtCbVFNhNX1omlEYzezhTnPj3/dT7n+dhUXcqvIhx9iKA13unGfpFge80XNFfcB8A==",
                        "requires": {
                "util": "^0.12.0",
                    "web3-core-helpers": "1.6.1",
                        "web3-providers-http": "1.6.1",
                            "web3-providers-ipc": "1.6.1",
                                "web3-providers-ws": "1.6.1"
            }
        },
        "web3-core-subscriptions": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-core-subscriptions/-/web3-core-subscriptions-1.6.1.tgz",
                    "integrity": "sha512-WZwxsYttIojyGQ5RqxuQcKg0IJdDCFpUe4EncS3QKZwxPqWzGmgyLwE0rm7tP+Ux1waJn5CUaaoSCBxWGSun1g==",
                        "requires": {
                "eventemitter3": "4.0.4",
                    "web3-core-helpers": "1.6.1"
            }
        },
        "web3-eth": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth/-/web3-eth-1.6.1.tgz",
                    "integrity": "sha512-kOV1ZgCKypSo5BQyltRArS7ZC3bRpIKAxSgzl7pUFinUb/MxfbM9KGeNxUXoCfTSErcCQJaDjcS6bSre5EMKuQ==",
                        "requires": {
                "web3-core": "1.6.1",
                    "web3-core-helpers": "1.6.1",
                        "web3-core-method": "1.6.1",
                            "web3-core-subscriptions": "1.6.1",
                                "web3-eth-abi": "1.6.1",
                                    "web3-eth-accounts": "1.6.1",
                                        "web3-eth-contract": "1.6.1",
                                            "web3-eth-ens": "1.6.1",
                                                "web3-eth-iban": "1.6.1",
                                                    "web3-eth-personal": "1.6.1",
                                                        "web3-net": "1.6.1",
                                                            "web3-utils": "1.6.1"
            }
        },
        "web3-eth-abi": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-abi/-/web3-eth-abi-1.6.1.tgz",
                    "integrity": "sha512-svhYrAlXP9XQtV7poWKydwDJq2CaNLMtmKydNXoOBLcQec6yGMP+v20pgrxF2H6wyTK+Qy0E3/5ciPOqC/VuoQ==",
                        "requires": {
                "@ethersproject/abi": "5.0.7",
                    "web3-utils": "1.6.1"
            }
        },
        "web3-eth-accounts": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-accounts/-/web3-eth-accounts-1.6.1.tgz",
                    "integrity": "sha512-rGn3jwnuOKwaQRu4SiShz0YAQ87aVDBKs4HO43+XTCI1q1Y1jn3NOsG3BW9ZHaOckev4+zEyxze/Bsh2oEk24w==",
                        "requires": {
                "@ethereumjs/common": "^2.5.0",
                    "@ethereumjs/tx": "^3.3.2",
                        "crypto-browserify": "3.12.0",
                            "eth-lib": "0.2.8",
                                "ethereumjs-util": "^7.0.10",
                                    "scrypt-js": "^3.0.1",
                                        "uuid": "3.3.2",
                                            "web3-core": "1.6.1",
                                                "web3-core-helpers": "1.6.1",
                                                    "web3-core-method": "1.6.1",
                                                        "web3-utils": "1.6.1"
            },
            "dependencies": {
                "eth-lib": {
                    "version": "0.2.8",
                        "resolved": "https://registry.npmjs.org/eth-lib/-/eth-lib-0.2.8.tgz",
                            "integrity": "sha512-ArJ7x1WcWOlSpzdoTBX8vkwlkSQ85CjjifSZtV4co64vWxSV8geWfPI9x4SVYu3DSxnX4yWFVTtGL+j9DUFLNw==",
                                "requires": {
                        "bn.js": "^4.11.6",
                            "elliptic": "^6.4.0",
                                "xhr-request-promise": "^0.1.2"
                    }
                },
                "uuid": {
                    "version": "3.3.2",
                        "resolved": "https://registry.npmjs.org/uuid/-/uuid-3.3.2.tgz",
                            "integrity": "sha512-yXJmeNaw3DnnKAOKJE51sL/ZaYfWJRl1pK9dr19YFCu0ObS231AB1/LbqTKRAQ5kw8A90rA6fr4riOUpTZvQZA=="
                }
            }
        },
        "web3-eth-contract": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-contract/-/web3-eth-contract-1.6.1.tgz",
                    "integrity": "sha512-GXqTe3mF6kpbOAakiNc7wtJ120/gpuKMTZjuGFKeeY8aobRLfbfgKzM9IpyqVZV2v5RLuGXDuurVN2KPgtu3hQ==",
                        "requires": {
                "@types/bn.js": "^4.11.5",
                    "web3-core": "1.6.1",
                        "web3-core-helpers": "1.6.1",
                            "web3-core-method": "1.6.1",
                                "web3-core-promievent": "1.6.1",
                                    "web3-core-subscriptions": "1.6.1",
                                        "web3-eth-abi": "1.6.1",
                                            "web3-utils": "1.6.1"
            }
        },
        "web3-eth-ens": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-ens/-/web3-eth-ens-1.6.1.tgz",
                    "integrity": "sha512-ngprtbnoRgxg8s1wXt9nXpD3h1P+p7XnKXrp/8GdFI9uDmrbSQPRfzBw86jdZgOmy78hAnWmrHI6pBInmgi2qQ==",
                        "requires": {
                "content-hash": "^2.5.2",
                    "eth-ens-namehash": "2.0.8",
                        "web3-core": "1.6.1",
                            "web3-core-helpers": "1.6.1",
                                "web3-core-promievent": "1.6.1",
                                    "web3-eth-abi": "1.6.1",
                                        "web3-eth-contract": "1.6.1",
                                            "web3-utils": "1.6.1"
            }
        },
        "web3-eth-iban": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-iban/-/web3-eth-iban-1.6.1.tgz",
                    "integrity": "sha512-91H0jXZnWlOoXmc13O9NuQzcjThnWyAHyDn5Yf7u6mmKOhpJSGF/OHlkbpXt1Y4v2eJdEPaVFa+6i8aRyagE7Q==",
                        "requires": {
                "bn.js": "^4.11.9",
                    "web3-utils": "1.6.1"
            }
        },
        "web3-eth-personal": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-eth-personal/-/web3-eth-personal-1.6.1.tgz",
                    "integrity": "sha512-ItsC89Ln02+irzJjK6ALcLrMZfbVUCqVbmb/ieDKJ+eLW3pNkBNwoUzaydh92d5NzxNZgNxuQWVdlFyYX2hkEw==",
                        "requires": {
                "@types/node": "^12.12.6",
                    "web3-core": "1.6.1",
                        "web3-core-helpers": "1.6.1",
                            "web3-core-method": "1.6.1",
                                "web3-net": "1.6.1",
                                    "web3-utils": "1.6.1"
            }
        },
        "web3-net": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-net/-/web3-net-1.6.1.tgz",
                    "integrity": "sha512-gpnqKEIwfUHh5ik7wsQFlCje1DfcmGv+Sk7LCh1hCqn++HEDQxJ/mZCrMo11ZZpZHCH7c87imdxTg96GJnRxDw==",
                        "requires": {
                "web3-core": "1.6.1",
                    "web3-core-method": "1.6.1",
                        "web3-utils": "1.6.1"
            }
        },
        "web3-providers-http": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-providers-http/-/web3-providers-http-1.6.1.tgz",
                    "integrity": "sha512-xBoKOJxu10+kO3ikamXmBfrWZ/xpQOGy0ocdp7Y81B17En5TXELwlmMXt1UlIgWiyYDhjq4OwlH/VODYqHXy3A==",
                        "requires": {
                "web3-core-helpers": "1.6.1",
                    "xhr2-cookies": "1.1.0"
            }
        },
        "web3-providers-ipc": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-providers-ipc/-/web3-providers-ipc-1.6.1.tgz",
                    "integrity": "sha512-anyoIZlpMzwEQI4lwylTzDrHsVp20v0QUtSTp2B5jInBinmQtyCE7vnbX20jEQ4j5uPwfJabKNtoJsk6a3O4WQ==",
                        "requires": {
                "oboe": "2.1.5",
                    "web3-core-helpers": "1.6.1"
            }
        },
        "web3-providers-ws": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-providers-ws/-/web3-providers-ws-1.6.1.tgz",
                    "integrity": "sha512-FWMEFYb4rYFYRgSFBf/O1Ex4p/YKSlN+JydCtdlJwRimd89qm95CTfs4xGjCskwvXMjV2sarH+f1NPwJXicYpg==",
                        "requires": {
                "eventemitter3": "4.0.4",
                    "web3-core-helpers": "1.6.1",
                        "websocket": "^1.0.32"
            }
        },
        "web3-shh": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-shh/-/web3-shh-1.6.1.tgz",
                    "integrity": "sha512-oP00HbAtybLCGlLOZUYXOdeB9xq88k2l0TtStvKBtmFqRt+zVk5TxEeuOnVPRxNhcA2Un8RUw6FtvgZlWStu9A==",
                        "requires": {
                "web3-core": "1.6.1",
                    "web3-core-method": "1.6.1",
                        "web3-core-subscriptions": "1.6.1",
                            "web3-net": "1.6.1"
            }
        },
        "web3-utils": {
            "version": "1.6.1",
                "resolved": "https://registry.npmjs.org/web3-utils/-/web3-utils-1.6.1.tgz",
                    "integrity": "sha512-RidGKv5kOkcerI6jQqDFDoTllQQqV+rPhTzZHhmbqtFObbYpU93uc+yG1LHivRTQhA6llIx67iudc/vzisgO+w==",
                        "requires": {
                "bn.js": "^4.11.9",
                    "ethereum-bloom-filters": "^1.0.6",
                        "ethereumjs-util": "^7.1.0",
                            "ethjs-unit": "0.1.6",
                                "number-to-bn": "1.7.0",
                                    "randombytes": "^2.1.0",
                                        "utf8": "3.0.0"
            }
        },
        "websocket": {
            "version": "1.0.34",
                "resolved": "https://registry.npmjs.org/websocket/-/websocket-1.0.34.tgz",
                    "integrity": "sha512-PRDso2sGwF6kM75QykIesBijKSVceR6jL2G8NGYyq2XrItNC2P5/qL5XeR056GhA+Ly7JMFvJb9I312mJfmqnQ==",
                        "requires": {
                "bufferutil": "^4.0.1",
                    "debug": "^2.2.0",
                        "es5-ext": "^0.10.50",
                            "typedarray-to-buffer": "^3.1.5",
                                "utf-8-validate": "^5.0.2",
                                    "yaeti": "^0.0.6"
            },
            "dependencies": {
                "debug": {
                    "version": "2.6.9",
                        "resolved": "https://registry.npmjs.org/debug/-/debug-2.6.9.tgz",
                            "integrity": "sha512-bC7ElrdJaJnPbAP+1EotYvqZsb3ecl5wi6Bfi6BJTUcNowp6cvspg0jXznRTKDjm/E7AdgFBVeAPVMNcKGsHMA==",
                                "requires": {
                        "ms": "2.0.0"
                    }
                },
                "ms": {
                    "version": "2.0.0",
                        "resolved": "https://registry.npmjs.org/ms/-/ms-2.0.0.tgz",
                            "integrity": "sha1-VgiurfwAvmwpAd9fmGF4jeDVl8g="
                }
            }
        },
        "which-boxed-primitive": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/which-boxed-primitive/-/which-boxed-primitive-1.0.2.tgz",
                    "integrity": "sha512-bwZdv0AKLpplFY2KZRX6TvyuN7ojjr7lwkg6ml0roIy9YeuSr7JS372qlNW18UQYzgYK9ziGcerWqZOmEn9VNg==",
                        "requires": {
                "is-bigint": "^1.0.1",
                    "is-boolean-object": "^1.1.0",
                        "is-number-object": "^1.0.4",
                            "is-string": "^1.0.5",
                                "is-symbol": "^1.0.3"
            }
        },
        "which-typed-array": {
            "version": "1.1.7",
                "resolved": "https://registry.npmjs.org/which-typed-array/-/which-typed-array-1.1.7.tgz",
                    "integrity": "sha512-vjxaB4nfDqwKI0ws7wZpxIlde1XrLX5uB0ZjpfshgmapJMD7jJWhZI+yToJTqaFByF0eNBcYxbjmCzoRP7CfEw==",
                        "requires": {
                "available-typed-arrays": "^1.0.5",
                    "call-bind": "^1.0.2",
                        "es-abstract": "^1.18.5",
                            "foreach": "^2.0.5",
                                "has-tostringtag": "^1.0.0",
                                    "is-typed-array": "^1.1.7"
            }
        },
        "wrappy": {
            "version": "1.0.2",
                "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
                    "integrity": "sha1-tSQ9jz7BqjXxNkYFvA0QNuMKtp8="
        },
        "ws": {
            "version": "3.3.3",
                "resolved": "https://registry.npmjs.org/ws/-/ws-3.3.3.tgz",
                    "integrity": "sha512-nnWLa/NwZSt4KQJu51MYlCcSQ5g7INpOrOMt4XV8j4dqTXdmlUmSHQ8/oLC069ckre0fRsgfvsKwbTdtKLCDkA==",
                        "requires": {
                "async-limiter": "~1.0.0",
                    "safe-buffer": "~5.1.0",
                        "ultron": "~1.1.0"
            },
            "dependencies": {
                "safe-buffer": {
                    "version": "5.1.2",
                        "resolved": "https://registry.npmjs.org/safe-buffer/-/safe-buffer-5.1.2.tgz",
                            "integrity": "sha512-Gd2UZBJDkXlY7GbJxfsE8/nvKkUEU1G38c1siN6QP6a9PT9MmHB8GnpscSmMJSoF8LOIrt8ud/wPtojys4G6+g=="
                }
            }
        },
        "xhr": {
            "version": "2.6.0",
                "resolved": "https://registry.npmjs.org/xhr/-/xhr-2.6.0.tgz",
                    "integrity": "sha512-/eCGLb5rxjx5e3mF1A7s+pLlR6CGyqWN91fv1JgER5mVWg1MZmlhBvy9kjcsOdRk8RrIujotWyJamfyrp+WIcA==",
                        "requires": {
                "global": "~4.4.0",
                    "is-function": "^1.0.1",
                        "parse-headers": "^2.0.0",
                            "xtend": "^4.0.0"
            }
        },
        "xhr-request": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/xhr-request/-/xhr-request-1.1.0.tgz",
                    "integrity": "sha512-Y7qzEaR3FDtL3fP30k9wO/e+FBnBByZeybKOhASsGP30NIkRAAkKD/sCnLvgEfAIEC1rcmK7YG8f4oEnIrrWzA==",
                        "requires": {
                "buffer-to-arraybuffer": "^0.0.5",
                    "object-assign": "^4.1.1",
                        "query-string": "^5.0.1",
                            "simple-get": "^2.7.0",
                                "timed-out": "^4.0.1",
                                    "url-set-query": "^1.0.0",
                                        "xhr": "^2.0.4"
            }
        },
        "xhr-request-promise": {
            "version": "0.1.3",
                "resolved": "https://registry.npmjs.org/xhr-request-promise/-/xhr-request-promise-0.1.3.tgz",
                    "integrity": "sha512-YUBytBsuwgitWtdRzXDDkWAXzhdGB8bYm0sSzMPZT7Z2MBjMSTHFsyCT1yCRATY+XC69DUrQraRAEgcoCRaIPg==",
                        "requires": {
                "xhr-request": "^1.1.0"
            }
        },
        "xhr2-cookies": {
            "version": "1.1.0",
                "resolved": "https://registry.npmjs.org/xhr2-cookies/-/xhr2-cookies-1.1.0.tgz",
                    "integrity": "sha1-fXdEnQmZGX8VXLc7I99yUF7YnUg=",
                        "requires": {
                "cookiejar": "^2.1.1"
            }
        },
        "xtend": {
            "version": "4.0.2",
                "resolved": "https://registry.npmjs.org/xtend/-/xtend-4.0.2.tgz",
                    "integrity": "sha512-LKYU1iAXJXUgAXn9URjiu+MWhyUXHsvfp7mcuYm9dSUKK0/CjtrUwFAxD82/mCWbtLsGjFIad0wIsod4zrTAEQ=="
        },
        "yaeti": {
            "version": "0.0.6",
                "resolved": "https://registry.npmjs.org/yaeti/-/yaeti-0.0.6.tgz",
                    "integrity": "sha1-8m9ITXJoTPQr7ft2lwqhYI+/lXc="
        },
        "yallist": {
            "version": "4.0.0",
                "resolved": "https://registry.npmjs.org/yallist/-/yallist-4.0.0.tgz",
                    "integrity": "sha512-3wdGidZyq5PB084XLES5TpOSRA3wjXAlIWMhum2kRcv/41Sn2emQ0dycQW4uZXLejwKvg6EsvbdlVL+FYEct7A=="
        }
    }
}