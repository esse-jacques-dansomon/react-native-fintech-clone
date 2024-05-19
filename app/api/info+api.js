import {ExpoRequest, ExpoResponse} from 'expo-router/server';

const API_KEY = process.env.CRYPTO_API_KEY;

export async function GET(request: ExpoRequest) {
    // const ids = request.expoUrl.searchParams.get('ids');
    // const ids = [1,1027,825,1839,5426,3408,52,11419,74,2010,5994,5805,1958,6636,1975,1831,6535,3890,2,8916,3957,4943,7083,1321,5690];
    //
    // const response = await fetch(
    //   `https://pro-api.coinmarketcap.com/v2/cryptocurrency/info?id=${ids}`,
    //   {
    //     headers: {
    //       'X-CMC_PRO_API_KEY': API_KEY,
    //     },
    //   }
    // );
    //
    // const res = await response.json();
    // return ExpoResponse.json(res.data);
    return ExpoResponse.json(data2);
}

const data2 = {
    "1": {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "category": "coin",
        "description": "Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,700,412. The last known price of Bitcoin is 66,899.25501633 USD and is down -0.19 over the last 24 hours. It is currently trading on 11047 active market(s) with $16,671,695,568.14 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
        "slug": "bitcoin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
        "subreddit": "bitcoin",
        "notice": "",
        "tags": ["mineable", "pow", "sha-256", "store-of-value", "state-channel", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "binance-labs-portfolio", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "dcg-portfolio", "dragonfly-capital-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "framework-ventures-portfolio", "galaxy-digital-portfolio", "huobi-capital-portfolio", "alameda-research-portfolio", "a16z-portfolio", "1confirmation-portfolio", "winklevoss-capital-portfolio", "usv-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "multicoin-capital-portfolio", "paradigm-portfolio", "bitcoin-ecosystem", "ftx-bankruptcy-estate"],
        "tag-names": ["Mineable", "PoW", "SHA-256", "Store Of Value", "State Channel", "Coinbase Ventures Portfolio", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Binance Labs Portfolio", "Blockchain Capital Portfolio", "BoostVC Portfolio", "CMS Holdings Portfolio", "DCG Portfolio", "DragonFly Capital Portfolio", "Electric Capital Portfolio", "Fabric Ventures Portfolio", "Framework Ventures Portfolio", "Galaxy Digital Portfolio", "Huobi Capital Portfolio", "Alameda Research Portfolio", "a16z Portfolio", "1Confirmation Portfolio", "Winklevoss Capital Portfolio", "USV Portfolio", "Placeholder Ventures Portfolio", "Pantera Capital Portfolio", "Multicoin Capital Portfolio", "Paradigm Portfolio", "Bitcoin Ecosystem", "FTX Bankruptcy Estate "],
        "tag-groups": ["OTHERS", "ALGORITHM", "ALGORITHM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://bitcoin.org/"],
            "twitter": [],
            "message_board": ["https://bitcointalk.org"],
            "chat": [],
            "facebook": [],
            "explorer": ["https://blockchain.info/", "https://live.blockcypher.com/btc/", "https://blockchair.com/bitcoin", "https://explorer.viabtc.com/btc", "https://www.oklink.com/btc"],
            "reddit": ["https://reddit.com/r/bitcoin"],
            "technical_doc": ["https://bitcoin.org/bitcoin.pdf"],
            "source_code": ["https://github.com/bitcoin/bitcoin"],
            "announcement": []
        },
        "platform": null,
        "date_added": "2010-07-13T00:00:00.000Z",
        "twitter_username": "",
        "is_hidden": 0,
        "date_launched": "2010-07-13T00:00:00.000Z",
        "contract_address": [],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "2": {
        "id": 2,
        "name": "Litecoin",
        "symbol": "LTC",
        "category": "coin",
        "description": "Litecoin (LTC) is a cryptocurrency . Users are able to generate LTC through the process of mining. Litecoin has a current supply of 84,000,000 with 74,547,493.6075049 in circulation. The last known price of Litecoin is 82.70317754 USD and is down -1.52 over the last 24 hours. It is currently trading on 1182 active market(s) with $231,695,567.53 traded over the last 24 hours. More information can be found at https://litecoin.org/.",
        "slug": "litecoin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
        "subreddit": "litecoin",
        "notice": "",
        "tags": ["mineable", "pow", "scrypt", "medium-of-exchange"],
        "tag-names": ["Mineable", "PoW", "Scrypt", "Medium of Exchange"],
        "tag-groups": ["OTHERS", "ALGORITHM", "ALGORITHM", "INDUSTRY"],
        "urls": {
            "website": ["https://litecoin.org/"],
            "twitter": ["https://twitter.com/litecoin"],
            "message_board": ["https://litecointalk.io/", "https://litecoin-foundation.org/"],
            "chat": ["https://telegram.me/litecoin"],
            "facebook": [],
            "explorer": ["https://blockchair.com/litecoin", "https://chainz.cryptoid.info/ltc/", "http://explorer.litecoin.net/chain/Litecoin", "https://bscscan.com/token/0x4338665cbb7b2485a8855a139b75d5e34ab0db94"],
            "reddit": ["https://reddit.com/r/litecoin"],
            "technical_doc": [],
            "source_code": ["https://github.com/litecoin-project/litecoin"],
            "announcement": ["https://bitcointalk.org/index.php?topic=47417.0"]
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94"
        },
        "date_added": "2013-04-28T00:00:00.000Z",
        "twitter_username": "litecoin",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0xecb56cf772b5c9a6907fb7d32387da2fcbfb63b4",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "0x13e93721dc992b3e14333dbdb48c0e7ec55431c3",
            "platform": {
                "name": "Hoo Smart Chain",
                "coin": {"id": "15165", "name": "Hoo Smart Chain", "symbol": "HSC", "slug": "hoo-smart-chain"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "52": {
        "id": 52,
        "name": "XRP",
        "symbol": "XRP",
        "category": "coin",
        "description": "XRP (XRP) is a cryptocurrency . XRP has a current supply of 99,987,612,649 with 55,288,951,055 in circulation. The last known price of XRP is 0.51429879 USD and is down -1.51 over the last 24 hours. It is currently trading on 1316 active market(s) with $496,408,168.68 traded over the last 24 hours. More information can be found at https://xrpl.org/.",
        "slug": "xrp",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
        "subreddit": "ripple",
        "notice": "",
        "tags": ["medium-of-exchange", "enterprise-solutions", "arrington-xrp-capital-portfolio", "galaxy-digital-portfolio", "a16z-portfolio", "pantera-capital-portfolio", "ftx-bankruptcy-estate"],
        "tag-names": ["Medium of Exchange", "Enterprise Solutions", "Arrington XRP Capital Portfolio", "Galaxy Digital Portfolio", "a16z Portfolio", "Pantera Capital Portfolio", "FTX Bankruptcy Estate "],
        "tag-groups": ["INDUSTRY", "INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://xrpl.org/"],
            "twitter": ["https://twitter.com/Ripple"],
            "message_board": ["http://www.xrpchat.com/"],
            "chat": [],
            "facebook": [],
            "explorer": ["https://livenet.xrpl.org/", "https://bithomp.com/explorer/", "https://xrpscan.com/", "https://blockchair.com/ripple", "https://bscscan.com/token/0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"],
            "reddit": ["https://reddit.com/r/ripple"],
            "technical_doc": ["https://ripple.com/files/ripple_consensus_whitepaper.pdf"],
            "source_code": ["https://github.com/ripple/rippled"],
            "announcement": []
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe"
        },
        "date_added": "2013-08-04T00:00:00.000Z",
        "twitter_username": "Ripple",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x1d2f0da169ceb9fc7b3144628db156f3f6c60dbe",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0x9eaefb09fe4aabfbe6b1ca316a3c36afc83a393f",
            "platform": {"name": "Klaytn", "coin": {"id": "4256", "name": "Klaytn", "symbol": "KLAY", "slug": "klaytn"}}
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "74": {
        "id": 74,
        "name": "Dogecoin",
        "symbol": "DOGE",
        "category": "coin",
        "description": "Dogecoin (DOGE) is a cryptocurrency . Users are able to generate DOGE through the process of mining. Dogecoin has a current supply of 144,355,186,383.7052. The last known price of Dogecoin is 0.14999511 USD and is down -2.40 over the last 24 hours. It is currently trading on 967 active market(s) with $778,065,945.73 traded over the last 24 hours. More information can be found at http://dogecoin.com/.",
        "slug": "dogecoin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
        "subreddit": "dogecoin",
        "notice": "",
        "tags": ["mineable", "pow", "scrypt", "medium-of-exchange", "memes", "payments", "doggone-doggerel", "bnb-chain", "ftx-bankruptcy-estate"],
        "tag-names": ["Mineable", "PoW", "Scrypt", "Medium of Exchange", "Memes", "Payments", "Doggone Doggerel", "BNB Chain", "FTX Bankruptcy Estate "],
        "tag-groups": ["OTHERS", "ALGORITHM", "ALGORITHM", "INDUSTRY", "INDUSTRY", "INDUSTRY", "CATEGORY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["http://dogecoin.com/"],
            "twitter": ["https://twitter.com/dogecoin"],
            "message_board": [],
            "chat": ["http://webchat.freenode.net/?nick=Shibe..&channels=%23dogecoin&prompt=1"],
            "facebook": [],
            "explorer": ["https://blockchair.com/dogecoin", "http://dogechain.info/chain/Dogecoin", "https://www.oklink.com/doge", "https://explorer.viabtc.com/doge", "https://bscscan.com/token/0xba2ae424d960c26247dd6c32edc70b295c744c43"],
            "reddit": ["https://reddit.com/r/dogecoin"],
            "technical_doc": ["https://github.com/dogecoin/dogecoin/blob/master/README.md"],
            "source_code": ["https://github.com/dogecoin/dogecoin"],
            "announcement": ["https://bitcointalk.org/index.php?topic=361813.0"]
        },
        "platform": null,
        "date_added": "2013-12-15T00:00:00.000Z",
        "twitter_username": "dogecoin",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0xba2ae424d960c26247dd6c32edc70b295c744c43",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    }, "825": {
        "id": 825,
        "name": "Tether USDt",
        "symbol": "USDT",
        "category": "token",
        "description": "Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 114,086,550,454.3862 with 111,434,916,579.7948 in circulation. The last known price of Tether USDt is 1.00009797 USD and is down -0.03 over the last 24 hours. It is currently trading on 85860 active market(s) with $36,319,210,339.34 traded over the last 24 hours. More information can be found at https://tether.to.",
        "slug": "tether",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
        "subreddit": "",
        "notice": "",
        "tags": ["stablecoin", "asset-backed-stablecoin", "avalanche-ecosystem", "solana-ecosystem", "arbitrum-ecosytem", "moonriver-ecosystem", "injective-ecosystem", "bnb-chain", "usd-stablecoin", "optimism-ecosystem", "fiat-stablecoin"],
        "tag-names": ["Stablecoin", "Asset-Backed Stablecoin", "Avalanche Ecosystem", "Solana Ecosystem", "Arbitrum Ecosystem", "Moonriver Ecosystem", "Injective Ecosystem", "BNB Chain", "USD Stablecoin", "Optimism Ecosystem", "Fiat Stablecoin"],
        "tag-groups": ["CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://tether.to"],
            "twitter": ["https://twitter.com/tether_to"],
            "message_board": [],
            "chat": ["https://t.me/OfficialTether"],
            "facebook": [],
            "explorer": ["https://www.omniexplorer.info/asset/31", "https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7", "https://algoexplorer.io/asset/312769", "https://tronscan.org/#/token20/TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t", "https://bscscan.com/token/0x55d398326f99059ff775485246999027b3197955"],
            "reddit": [],
            "technical_doc": ["https://tether.to/wp-content/uploads/2016/06/TetherWhitePaper.pdf"],
            "source_code": [],
            "announcement": ["https://tether.to/en/news"]
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "date_added": "2015-02-25T00:00:00.000Z",
        "twitter_username": "tether_to",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0x381b31409e4d220919b2cff012ed94d70135a59e",
            "platform": {
                "name": "Viction",
                "coin": {"id": "2570", "name": "Viction", "symbol": "VIC", "slug": "viction"}
            }
        }, {
            "contract_address": "0x55d398326f99059ff775485246999027b3197955",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "312769",
            "platform": {
                "name": "Algorand",
                "coin": {"id": "4030", "name": "Algorand", "symbol": "ALGO", "slug": "algorand"}
            }
        }, {
            "contract_address": "0xa71edc38d189767582c38a3145b5873052c3e47a",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "0x4ECaBa5870353805a9F068101A40E0f32ed605C6",
            "platform": {
                "name": "Gnosis Chain",
                "coin": {"id": "1659", "name": "Gnosis", "symbol": "GNO", "slug": "gnosis-gno"}
            }
        }, {
            "contract_address": "terra1ce06wkrdm4vl6t0hvc0g86rsy27pu8yadg3dva",
            "platform": {
                "name": "Terra Classic",
                "coin": {"id": "4172", "name": "Terra Classic", "symbol": "LUNC", "slug": "terra-luna"}
            }
        }, {
            "contract_address": "G5WWWzzVsWRyzGf32xojbnfp7gXbWrgqJT8RcVWEfLmC",
            "platform": {"name": "Waves", "coin": {"id": "1274", "name": "Waves", "symbol": "WAVES", "slug": "waves"}}
        }, {
            "contract_address": "0x049d68029688eabf473097a2fc38ef61633a3c7a",
            "platform": {"name": "Fantom", "coin": {"id": "3513", "name": "Fantom", "symbol": "FTM", "slug": "fantom"}}
        }, {
            "contract_address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0xcee8faf64bb97a73bb51e115aa89c17ffa8dd167",
            "platform": {"name": "Klaytn", "coin": {"id": "4256", "name": "Klaytn", "symbol": "KLAY", "slug": "klaytn"}}
        }, {
            "contract_address": "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0x382bb369d343125bfb2117af9c149795c6c65c50",
            "platform": {
                "name": "OKExChain",
                "coin": {"id": "8267", "name": "OKT Chain", "symbol": "OKT", "slug": "okt"}
            }
        }, {
            "contract_address": "0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e",
            "platform": {"name": "Celo", "coin": {"id": "5567", "name": "Celo", "symbol": "CELO", "slug": "celo"}}
        }, {
            "contract_address": "0xBc2F884680c95A02cea099dA2F524b366d9028Ba",
            "platform": {
                "name": "Bitcoin Cash",
                "coin": {"id": "1831", "name": "Bitcoin Cash", "symbol": "BCH", "slug": "bitcoin-cash"}
            }
        }, {
            "contract_address": "0xfe97e85d13abd9c1c33384e796f10b73905637ce",
            "platform": {
                "name": "Conflux",
                "coin": {"id": "7334", "name": "Conflux", "symbol": "CFX", "slug": "conflux-network"}
            }
        }, {
            "contract_address": "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",
            "platform": {
                "name": "Optimism",
                "coin": {"id": "11840", "name": "Optimism", "symbol": "OP", "slug": "optimism-ethereum"}
            }
        }, {
            "contract_address": "0x0039f574ee5cc39bdd162e9a88e3eb1f111baf48",
            "platform": {
                "name": "KCC",
                "coin": {"id": "2087", "name": "KuCoin Token", "symbol": "KCS", "slug": "kucoin-token"}
            }
        }, {
            "contract_address": "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
            "platform": {"name": "Tron20", "coin": {"id": "1958", "name": "TRON", "symbol": "TRX", "slug": "tron"}}
        }, {
            "contract_address": "0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f",
            "platform": {
                "name": "Harmony",
                "coin": {"id": "3945", "name": "Harmony", "symbol": "ONE", "slug": "harmony"}
            }
        }, {
            "contract_address": "zil1sxx29cshups269ahh5qjffyr58mxjv9ft78jqy",
            "platform": {
                "name": "Zilliqa",
                "coin": {"id": "2469", "name": "Zilliqa", "symbol": "ZIL", "slug": "zilliqa"}
            }
        }, {
            "contract_address": "0xefaeee334f0fd1712f9a8cc375f427d9cdd40d73",
            "platform": {
                "name": "Moonbeam",
                "coin": {"id": "6836", "name": "Moonbeam", "symbol": "GLMR", "slug": "moonbeam"}
            }
        }, {
            "contract_address": "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
            "platform": {
                "name": "Arbitrum",
                "coin": {"id": "11841", "name": "Arbitrum", "symbol": "ARB", "slug": "arbitrum"}
            }
        }, {
            "contract_address": "0x551a5dcac57c66aa010940c2dcff5da9c53aa53b",
            "platform": {
                "name": "KardiaChain",
                "coin": {"id": "5453", "name": "KardiaChain", "symbol": "KAI", "slug": "kardiachain"}
            }
        }, {
            "contract_address": "0xe936caa7f6d9f5c9e907111fcaf7c351c184cda7",
            "platform": {
                "name": "Moonriver",
                "coin": {"id": "9285", "name": "Moonriver", "symbol": "MOVR", "slug": "moonriver"}
            }
        }, {
            "contract_address": "KT1XnTn74bUtxHfDtBmm2bGZAQfhPbvKWR8o",
            "platform": {"name": "Tezos", "coin": {"id": "2011", "name": "Tezos", "symbol": "XTZ", "slug": "tezos"}}
        }, {
            "contract_address": "0x6fbcdc1169b5130c59e72e51ed68a84841c98cd1",
            "platform": {"name": "IoTex", "coin": {"id": "2777", "name": "IoTeX", "symbol": "IOTX", "slug": "iotex"}}
        }, {
            "contract_address": "dac17f958d2ee523a2206206994597c13d831ec7.factory.bridge.near",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0xEf213441a85DF4d7acBdAe0Cf78004E1e486BB96",
            "platform": {
                "name": "RSK RBTC",
                "coin": {"id": "3626", "name": "Rootstock Smart Bitcoin", "symbol": "RBTC", "slug": "rsk-smart-bitcoin"}
            }
        }, {
            "contract_address": "0x975Ed13fa16857E83e7C493C7741D556eaaD4A3f",
            "platform": {"name": "Telos", "coin": {"id": "4660", "name": "Telos", "symbol": "TLOS", "slug": "telos"}}
        }, {
            "contract_address": "0x01445c31581c354b7338ac35693ab2001b50b9ae",
            "platform": {"name": "Velas", "coin": {"id": "4747", "name": "Velas", "symbol": "VLX", "slug": "velas"}}
        }, {
            "contract_address": "0x66e428c3f67a68878562e79A0234c1F83c208770",
            "platform": {"name": "Cronos", "coin": {"id": "3635", "name": "Cronos", "symbol": "CRO", "slug": "cronos"}}
        }, {
            "contract_address": "0x5DE1677344D3Cb0D7D465c10b72A8f60699C062d",
            "platform": {
                "name": "Boba Network",
                "coin": {"id": "14556", "name": "Boba Network", "symbol": "BOBA", "slug": "boba-network"}
            }
        }, {
            "contract_address": "0x9636d3294e45823ec924c8d89dd1f1dffcf044e6",
            "platform": {
                "name": "Fusion Network",
                "coin": {"id": "2530", "name": "Fusion", "symbol": "FSN", "slug": "fusion"}
            }
        }, {
            "contract_address": "ibc/4ABBEF4C8926DDDB320AE5188CFD63267ABBCEFC0583E4AE05D6E5AA2401DDAB",
            "platform": {
                "name": "Osmosis",
                "coin": {"id": "12220", "name": "Osmosis", "symbol": "OSMO", "slug": "osmosis"}
            }
        }, {
            "contract_address": "0xD16bAbe52980554520F6Da505dF4d1b124c815a7",
            "platform": {
                "name": "Hoo Smart Chain",
                "coin": {"id": "15165", "name": "Hoo Smart Chain", "symbol": "HSC", "slug": "hoo-smart-chain"}
            }
        }, {
            "contract_address": "0xdc19a122e268128b5ee20366299fc7b5b199c8e3",
            "platform": {
                "name": "Oasis Network",
                "coin": {"id": "7653", "name": "Oasis", "symbol": "ROSE", "slug": "oasis-network"}
            }
        }, {
            "contract_address": "secret18wpjn83dayu4meu6wnn29khfkwdxs7kyrz9c8f",
            "platform": {"name": "Secret", "coin": {"id": "5604", "name": "Secret", "symbol": "SCRT", "slug": "secret"}}
        }, {
            "contract_address": "0x4988a896b1227218e4a686fde5eabdcabd91571f",
            "platform": {
                "name": "Aurora",
                "coin": {"id": "14803", "name": "Aurora", "symbol": "AURORA", "slug": "aurora-near"}
            }
        }, {
            "contract_address": "0xbb06dca3ae6887fabf931640f67cab3e3a16f4dc",
            "platform": {
                "name": "Metis Andromeda",
                "coin": {"id": "9640", "name": "Metis", "symbol": "METIS", "slug": "metisdao"}
            }
        }, {
            "contract_address": "0x5fa41671c48e3c951afc30816947126ccc8c162e",
            "platform": {
                "name": "Meter",
                "coin": {"id": "5919", "name": "Meter Governance", "symbol": "MTRG", "slug": "meter-governance"}
            }
        }, {
            "contract_address": "0xfadbbf8ce7d5b7041be672561bba99f79c532e10",
            "platform": {
                "name": "Fuse",
                "coin": {"id": "5634", "name": "Fuse", "symbol": "FUSE", "slug": "fuse-network"}
            }
        }, {
            "contract_address": "0x922D641a426DcFFaeF11680e5358F34d97d112E1",
            "platform": {
                "name": "Syscoin",
                "coin": {"id": "541", "name": "Syscoin", "symbol": "SYS", "slug": "syscoin"}
            }
        }, {
            "contract_address": "0x3795c36e7d12a8c252a20c5a7b455f7c57b60283",
            "platform": {
                "name": "Milkomeda",
                "coin": {"id": "2010", "name": "Cardano", "symbol": "ADA", "slug": "cardano"}
            }
        }, {
            "contract_address": "0xE3F5a90F9cb311505cd691a46596599aA1A0AD7D",
            "platform": {
                "name": "Bitgert",
                "coin": {"id": "11079", "name": "Bitgert", "symbol": "BRISE", "slug": "bitrise-token"}
            }
        }, {
            "contract_address": "0x3795C36e7D12A8c252A20C5a7B455f7c57b60283",
            "platform": {"name": "Astar", "coin": {"id": "12885", "name": "Astar", "symbol": "ASTR", "slug": "astar"}}
        }, {
            "contract_address": "0:a519f99bb5d6d51ef958ed24d337ad75a1c770885dcd42d51d6663f9fcdacfb2",
            "platform": {
                "name": "Everscale",
                "coin": {"id": "7505", "name": "Everscale", "symbol": "EVER", "slug": "everscale"}
            }
        }, {
            "contract_address": "0x79F1520268A20c879EF44d169A4E3812D223C6de",
            "platform": {
                "name": "Cube network",
                "coin": {"id": "20519", "name": "Cube Network", "symbol": "CUBE", "slug": "cube-network"}
            }
        }, {
            "contract_address": "0x4f3C8E20942461e2c3Bdd8311AC57B0c222f2b82",
            "platform": {
                "name": "ThunderCore",
                "coin": {"id": "3930", "name": "ThunderCore", "symbol": "TT", "slug": "thundercore"}
            }
        }, {
            "contract_address": "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
            "platform": {
                "name": "Dogechain(EVM)",
                "coin": {"id": "74", "name": "Dogecoin", "symbol": "DOGE", "slug": "dogecoin"}
            }
        }, {
            "contract_address": "0xd567b3d7b8fe3c79a1ad8da978812cfc4fa05e75",
            "platform": {"name": "Canto", "coin": {"id": "21516", "name": "CANTO", "symbol": "CANTO", "slug": "canto"}}
        }, {
            "contract_address": "0x2ad7868ca212135c6119fd7ad1ce51cfc5702892",
            "platform": {
                "name": "EthereumPoW",
                "coin": {"id": "21296", "name": "EthereumPoW", "symbol": "ETHW", "slug": "ethereum-pow"}
            }
        }, {
            "contract_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDT",
            "platform": {"name": "Aptos", "coin": {"id": "21794", "name": "Aptos", "symbol": "APT", "slug": "aptos"}}
        }, {
            "contract_address": "0xd4b5f10d61916bd6e0860144a91ac658de8a1437",
            "platform": {
                "name": "XDC Network",
                "coin": {"id": "2634", "name": "XDC Network", "symbol": "XDC", "slug": "xdc-network"}
            }
        }, {
            "contract_address": "0x73e84bfd35c3f1537a72180d1481e1eabf64b70b",
            "platform": {
                "name": "Redlight Chain",
                "coin": {"id": "21505", "name": "Redlight Chain", "symbol": "REDLC", "slug": "redlight-chain"}
            }
        }, {
            "contract_address": "EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs",
            "platform": {"name": "TON", "coin": {"id": "11419", "name": "Toncoin", "symbol": "TON", "slug": "toncoin"}}
        }, {
            "contract_address": "0xc060006111016b8a020ad5b33834984a437aaa7d3c74c18e09a95d48aceab08c::coin::COIN",
            "platform": {"name": "Sui Network", "coin": {"id": "20947", "name": "Sui", "symbol": "SUI", "slug": "sui"}}
        }, {
            "contract_address": "peggy0xdac17f958d2ee523a2206206994597c13d831ec7",
            "platform": {
                "name": "Injective",
                "coin": {"id": "7226", "name": "Injective", "symbol": "INJ", "slug": "injective"}
            }
        }, {
            "contract_address": "0x900101d06A7426441Ae63e9AB3B9b0F63Be145F1",
            "platform": {"name": "Core", "coin": {"id": "23254", "name": "Core", "symbol": "CORE", "slug": "core-dao"}}
        }, {
            "contract_address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
            "platform": {
                "name": "Polygon zkEVM",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0xfa9343c3897324496a05fc75abed6bac29f8a40f",
            "platform": {"name": "EOS EVM", "coin": {"id": "1765", "name": "EOS", "symbol": "EOS", "slug": "eos"}}
        }, {
            "contract_address": "0x0cb6f5a34ad42ec934882a05265a7d5f59b51a2f",
            "platform": {
                "name": "PulseChain",
                "coin": {"id": "11145", "name": "Pulsechain", "symbol": "PLS", "slug": "pulsechain"}
            }
        }, {
            "contract_address": "0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8",
            "platform": {
                "name": "Starknet",
                "coin": {"id": "22691", "name": "Starknet", "symbol": "STRK", "slug": "starknet-token"}
            }
        }, {
            "contract_address": "0x201eba5cc46d216ce6dc03f6a759e8e766e956ae",
            "platform": {"name": "Mantle", "coin": {"id": "27075", "name": "Mantle", "symbol": "MNT", "slug": "mantle"}}
        }, {
            "contract_address": "0x5f0155d08ef4aae2b500aefb64a3419da8bb611a",
            "platform": {
                "name": "Neon EVM",
                "coin": {"id": "23015", "name": "Neon EVM", "symbol": "NEON", "slug": "neon"}
            }
        }, {
            "contract_address": "0xf417f5a458ec102b90352f697d6e2ac3a3d2851f",
            "platform": {
                "name": "Manta Pacific",
                "coin": {"id": "13631", "name": "Manta Network", "symbol": "MANTA", "slug": "manta-network"}
            }
        }, {
            "contract_address": "0x1e4a5963abfd975d8c9021ce480b42188849d41d",
            "platform": {"name": "X Layer", "coin": {"id": "3897", "name": "OKB", "symbol": "OKB", "slug": "okb"}}
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    }, "1027": {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "category": "coin",
        "description": "Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,124,343.1764601. The last known price of Ethereum is 3,079.42633338 USD and is down -1.33 over the last 24 hours. It is currently trading on 8949 active market(s) with $8,239,783,445.90 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.",
        "slug": "ethereum",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
        "subreddit": "ethereum",
        "notice": "",
        "tags": ["pos", "smart-contracts", "ethereum-ecosystem", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "binance-labs-portfolio", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "dcg-portfolio", "dragonfly-capital-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "framework-ventures-portfolio", "hashkey-capital-portfolio", "kenetic-capital-portfolio", "huobi-capital-portfolio", "alameda-research-portfolio", "a16z-portfolio", "1confirmation-portfolio", "winklevoss-capital-portfolio", "usv-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "multicoin-capital-portfolio", "paradigm-portfolio", "injective-ecosystem", "layer-1", "ftx-bankruptcy-estate"],
        "tag-names": ["PoS", "Smart Contracts", "Ethereum Ecosystem", "Coinbase Ventures Portfolio", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Binance Labs Portfolio", "Blockchain Capital Portfolio", "BoostVC Portfolio", "CMS Holdings Portfolio", "DCG Portfolio", "DragonFly Capital Portfolio", "Electric Capital Portfolio", "Fabric Ventures Portfolio", "Framework Ventures Portfolio", "Hashkey Capital Portfolio", "Kenetic Capital Portfolio", "Huobi Capital Portfolio", "Alameda Research Portfolio", "a16z Portfolio", "1Confirmation Portfolio", "Winklevoss Capital Portfolio", "USV Portfolio", "Placeholder Ventures Portfolio", "Pantera Capital Portfolio", "Multicoin Capital Portfolio", "Paradigm Portfolio", "Injective Ecosystem", "Layer 1", "FTX Bankruptcy Estate "],
        "tag-groups": ["ALGORITHM", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://www.ethereum.org/", "https://en.wikipedia.org/wiki/Ethereum"],
            "twitter": ["https://twitter.com/ethereum"],
            "message_board": ["https://forum.ethereum.org/", "https://ethresear.ch/"],
            "chat": ["https://gitter.im/orgs/ethereum/rooms"],
            "facebook": [],
            "explorer": ["https://etherscan.io/", "https://www.oklink.com/eth", "https://blockchair.com/ethereum", "https://bscscan.com/token/0x2170ed0880ac9a755fd29b2688956bd959f933f8", "https://nearblocks.io/token/aurora"],
            "reddit": ["https://reddit.com/r/ethereum"],
            "technical_doc": ["https://github.com/ethereum/wiki/wiki/White-Paper"],
            "source_code": ["https://github.com/ethereum/go-ethereum"],
            "announcement": ["https://bitcointalk.org/index.php?topic=428589.0"]
        },
        "platform": null,
        "date_added": "2015-08-07T00:00:00.000Z",
        "twitter_username": "ethereum",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0x2eaa73bd0db20c64f53febea7b5f5e5bccc7fb8b",
            "platform": {
                "name": "Viction",
                "coin": {"id": "2570", "name": "Viction", "symbol": "VIC", "slug": "viction"}
            }
        }, {
            "contract_address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x64ff637fb478863b7468bc97d30a5bf3a428a1fd",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "0x34d21b1e550d73cee41151c77f3c73359527a396",
            "platform": {"name": "Klaytn", "coin": {"id": "4256", "name": "Klaytn", "symbol": "KLAY", "slug": "klaytn"}}
        }, {
            "contract_address": "0xf20d962a6c8f70c731bd838a3a388d7d48fa6e15",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "KT19at7rQUvyjxnZ2fBv7D9zc8rkyG7gAoU8",
            "platform": {"name": "Tezos", "coin": {"id": "2011", "name": "Tezos", "symbol": "XTZ", "slug": "tezos"}}
        }, {
            "contract_address": "0x0200070000000000000000000000000000000000000000000000000000000000",
            "platform": {"name": "Sora", "coin": {"id": "5802", "name": "SORA", "symbol": "XOR", "slug": "sora"}}
        }, {
            "contract_address": "aurora",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0x1D931Bf8656d795E50eF6D639562C5bD8Ac2B78f",
            "platform": {
                "name": "RSK RBTC",
                "coin": {"id": "3626", "name": "Rootstock Smart Bitcoin", "symbol": "RBTC", "slug": "rsk-smart-bitcoin"}
            }
        }, {
            "contract_address": "0x85219708c49aa701871ad330a94ea0f41dff24ca",
            "platform": {"name": "Velas", "coin": {"id": "4747", "name": "Velas", "symbol": "VLX", "slug": "velas"}}
        }, {
            "contract_address": "ibc/EA1D43981D5C9A1C4AAEA9C23BB1D4FA126BA9BC7020A25E0AE4AA841EA25DC5",
            "platform": {
                "name": "Osmosis",
                "coin": {"id": "12220", "name": "Osmosis", "symbol": "OSMO", "slug": "osmosis"}
            }
        }, {
            "contract_address": "0x34a9c05b638020a07bb153bf624c8763bf8b4a86",
            "platform": {
                "name": "EthereumPoW",
                "coin": {"id": "21296", "name": "EthereumPoW", "symbol": "ETHW", "slug": "ethereum-pow"}
            }
        }, {
            "contract_address": "0x49d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7",
            "platform": {
                "name": "Starknet",
                "coin": {"id": "22691", "name": "Starknet", "symbol": "STRK", "slug": "starknet-token"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    }, "1321": {
        "id": 1321,
        "name": "Ethereum Classic",
        "symbol": "ETC",
        "category": "coin",
        "description": "Ethereum Classic (ETC) is a cryptocurrency launched in 2015. Users are able to generate ETC through the process of mining. Ethereum Classic has a current supply of 210,700,000 with 147,128,543.77089262 in circulation. The last known price of Ethereum Classic is 27.82872888 USD and is down -3.08 over the last 24 hours. It is currently trading on 528 active market(s) with $160,168,732.18 traded over the last 24 hours. More information can be found at https://ethereumclassic.org/.",
        "slug": "ethereum-classic",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png",
        "subreddit": "EthereumClassic",
        "notice": "",
        "tags": ["mineable", "pow", "ethash", "platform", "smart-contracts", "dcg-portfolio"],
        "tag-names": ["Mineable", "PoW", "Ethash", "Platform", "Smart Contracts", "DCG Portfolio"],
        "tag-groups": ["OTHERS", "ALGORITHM", "ALGORITHM", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://ethereumclassic.org/"],
            "twitter": ["https://twitter.com/eth_classic"],
            "message_board": ["https://ethereumclassic.org/news"],
            "chat": ["https://twitter.com/etc_network", "https://ethereumclassic.org/discord", "https://telegram.me/ethclassic", "https://t.me/ETCnetwork"],
            "facebook": [],
            "explorer": ["https://etc.blockscout.com", "https://etc.tokenview.io/", "https://blockchair.com/ethereum-classic"],
            "reddit": ["https://reddit.com/r/EthereumClassic"],
            "technical_doc": ["https://ethereumclassic.org/knowledge/foundation"],
            "source_code": ["https://github.com/ethereumclassic/ethereumclassic.github.io"],
            "announcement": ["https://ethereumclassic.org/blog/2016-08-13-declaration-of-independence"]
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e"
        },
        "date_added": "2016-07-24T00:00:00.000Z",
        "twitter_username": "eth_classic",
        "is_hidden": 0,
        "date_launched": "2015-07-30T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "0x3d6545b08693dae087e957cb1180ee38b9e3c25e",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0x1953cab0E5bFa6D4a9BaD6E05fD46C1CC6527a5a",
            "platform": {
                "name": "Ethereum Classic",
                "coin": {"id": "1321", "name": "Ethereum Classic", "symbol": "ETC", "slug": "ethereum-classic"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": ["PoW", "Ethash", "Platform", "Store Of Value", "Smart Contracts", "Ethereum Ecosystem", "DCG Portfolio", "Web3", "Layer 1"],
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "1831": {
        "id": 1831,
        "name": "Bitcoin Cash",
        "symbol": "BCH",
        "category": "coin",
        "description": "Bitcoin Cash (BCH) is a cryptocurrency . Users are able to generate BCH through the process of mining. Bitcoin Cash has a current supply of 19,707,806.25. The last known price of Bitcoin Cash is 484.18220922 USD and is up 1.26 over the last 24 hours. It is currently trading on 885 active market(s) with $393,678,307.03 traded over the last 24 hours. More information can be found at http://bch.info.",
        "slug": "bitcoin-cash",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
        "subreddit": "Bitcoincash",
        "notice": "",
        "tags": ["mineable", "pow", "sha-256", "marketplace", "medium-of-exchange", "store-of-value", "enterprise-solutions", "payments", "bitcoin-ecosystem", "layer-1"],
        "tag-names": ["Mineable", "PoW", "SHA-256", "Marketplace", "Medium of Exchange", "Store Of Value", "Enterprise Solutions", "Payments", "Bitcoin Ecosystem", "Layer 1"],
        "tag-groups": ["OTHERS", "ALGORITHM", "ALGORITHM", "INDUSTRY", "INDUSTRY", "CATEGORY", "INDUSTRY", "INDUSTRY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["http://bch.info"],
            "twitter": [],
            "message_board": [],
            "chat": [],
            "facebook": [],
            "explorer": ["https://explorer.bitcoin.com/bch", "https://blockchair.com/bitcoin-cash", "https://bch.tokenview.com/en", "https://www.oklink.com/bch", "https://bscscan.com/token/0x8ff795a6f4d97e7887c79bea79aba5cc76444adf"],
            "reddit": ["https://reddit.com/r/Bitcoincash"],
            "technical_doc": [],
            "source_code": ["https://gitlab.com/bitcoin-cash-node/"],
            "announcement": ["https://bitcointalk.org/index.php?topic=2040221.0"]
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf"
        },
        "date_added": "2017-07-23T00:00:00.000Z",
        "twitter_username": "",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x8fF795a6F4D97E7887C79beA79aba5cc76444aDf",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0xef3cebd77e0c52cb6f60875d9306397b5caca375",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "1839": {
        "id": 1839,
        "name": "BNB",
        "symbol": "BNB",
        "category": "coin",
        "description": "BNB (BNB) is a cryptocurrency . BNB has a current supply of 147,586,322.58244815. The last known price of BNB is 578.73370232 USD and is up 0.25 over the last 24 hours. It is currently trading on 2162 active market(s) with $1,314,365,148.74 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.",
        "slug": "bnb",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
        "subreddit": "bnbchainofficial",
        "notice": "",
        "tags": ["marketplace", "centralized-exchange", "payments", "smart-contracts", "alameda-research-portfolio", "multicoin-capital-portfolio", "bnb-chain", "layer-1", "sec-security-token", "alleged-sec-securities", "celsius-bankruptcy-estate"],
        "tag-names": ["Marketplace", "Centralized Exchange (CEX) Token", "Payments", "Smart Contracts", "Alameda Research Portfolio", "Multicoin Capital Portfolio", "BNB Chain", "Layer 1", "SEC Security Token", "Alleged SEC Securities", "Celsius Bankruptcy Estate"],
        "tag-groups": ["INDUSTRY", "CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://bnbchain.org/en"],
            "twitter": ["https://twitter.com/bnbchain"],
            "message_board": [],
            "chat": ["https://t.me/BNBchaincommunity", "https://t.me/bnbchain"],
            "facebook": [],
            "explorer": ["https://explorer.bnbchain.org/", "https://bsctrace.com/", "https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c", "https://www.oklink.com/bsc"],
            "reddit": ["https://reddit.com/r/bnbchainofficial"],
            "technical_doc": [],
            "source_code": ["https://github.com/bnb-chain"],
            "announcement": []
        },
        "platform": null,
        "date_added": "2017-07-25T00:00:00.000Z",
        "twitter_username": "bnbchain",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "1958": {
        "id": 1958,
        "name": "TRON",
        "symbol": "TRX",
        "category": "coin",
        "description": "TRON (TRX) is a cryptocurrency . TRON has a current supply of 87,442,787,879.27919 with 87,442,749,478.36386 in circulation. The last known price of TRON is 0.12073587 USD and is down -2.30 over the last 24 hours. It is currently trading on 973 active market(s) with $216,852,864.84 traded over the last 24 hours. More information can be found at https://trondao.org/.",
        "slug": "tron",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
        "subreddit": "Tronix",
        "notice": "Let's Learn About [\"TRON\"](https://coinmarketcap.com/earn/project/tron) on the Learn & Earn Page!",
        "tags": ["media", "payments", "tron-ecosystem", "layer-1", "dwf-labs-portfolio", "sec-security-token", "alleged-sec-securities"],
        "tag-names": ["Media", "Payments", "TRON Ecosystem", "Layer 1", "DWF Labs Portfolio", "SEC Security Token", "Alleged SEC Securities"],
        "tag-groups": ["INDUSTRY", "INDUSTRY", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://trondao.org/", "https://tron.network/"],
            "twitter": ["https://twitter.com/trondao"],
            "message_board": ["https://medium.com/@Tronfoundation"],
            "chat": ["http://t.me/tronnetworkEN"],
            "facebook": ["https://www.facebook.com/trondaoofficial"],
            "explorer": ["https://tronscan.org/#/", "https://www.oklink.com/trx", "https://etherscan.io/token/0x50327c6c5a14dcade707abad2e27eb517df87ab5"],
            "reddit": ["https://reddit.com/r/Tronix"],
            "technical_doc": ["https://developers.tron.network/docs"],
            "source_code": ["https://github.com/tronprotocol/java-tron"],
            "announcement": []
        },
        "platform": null,
        "date_added": "2017-09-13T00:00:00.000Z",
        "twitter_username": "trondao",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x50327c6c5a14dcade707abad2e27eb517df87ab5",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0xCE7de646e7208a4Ef112cb6ed5038FA6cC6b12e3",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0",
            "platform": {"name": "Tron20", "coin": {"id": "1958", "name": "TRON", "symbol": "TRX", "slug": "tron"}}
        }],
        "self_reported_circulating_supply": 71659659264,
        "self_reported_tags": ["DPoS", "Platform", "DeFi", "Smart Contracts", "Staking", "DAO", "TRON Ecosystem", "Governance", "Web3", "Layer 1"],
        "self_reported_market_cap": 8647384782.419218,
        "infinite_supply": true
    }, "1975": {
        "id": 1975,
        "name": "Chainlink",
        "symbol": "LINK",
        "category": "token",
        "description": "Chainlink (LINK) is a cryptocurrency and operates on the Ethereum platform. Chainlink has a current supply of 1,000,000,000 with 587,099,970.4527867 in circulation. The last known price of Chainlink is 16.40142189 USD and is up 0.91 over the last 24 hours. It is currently trading on 1754 active market(s) with $494,384,189.58 traded over the last 24 hours. More information can be found at https://chain.link/.",
        "slug": "chainlink",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
        "subreddit": "chainlink",
        "notice": "",
        "tags": ["platform", "defi", "oracles", "smart-contracts", "substrate", "polkadot", "polkadot-ecosystem", "avalanche-ecosystem", "solana-ecosystem", "framework-ventures-portfolio", "polygon-ecosystem", "fantom-ecosystem", "cardano-ecosystem", "web3", "near-protocol-ecosystem", "arbitrum-ecosytem", "cardano", "injective-ecosystem", "optimism-ecosystem", "real-world-assets", "celsius-bankruptcy-estate"],
        "tag-names": ["Platform", "DeFi", "Oracles", "Smart Contracts", "Substrate", "Polkadot", "Polkadot Ecosystem", "Avalanche Ecosystem", "Solana Ecosystem", "Framework Ventures Portfolio", "Polygon Ecosystem", "Fantom Ecosystem", "Cardano Ecosystem", "Web3", "Near Protocol Ecosystem", "Arbitrum Ecosystem", "Cardano", "Injective Ecosystem", "Optimism Ecosystem", "Real World Assets", "Celsius Bankruptcy Estate"],
        "tag-groups": ["CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "INDUSTRY", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://chain.link/", "https://smartcontract.com/"],
            "twitter": ["https://twitter.com/chainlink"],
            "message_board": ["https://medium.com/chainlink", "https://blog.chain.link/"],
            "chat": ["https://t.me/chainlinkofficial"],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0x514910771af9ca656af840dff83e8264ecf986ca", "https://bscscan.com/token/0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd", "https://explorer.solana.com/address/CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG", "https://blockscout.com/xdai/mainnet/tokens/0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2/token-transfers", "https://ftmscan.com/token/0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8"],
            "reddit": ["https://reddit.com/r/chainlink"],
            "technical_doc": ["https://chain.link/whitepaper"],
            "source_code": ["https://github.com/smartcontractkit/chainlink"],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x514910771af9ca656af840dff83e8264ecf986ca"
        },
        "date_added": "2017-09-20T00:00:00.000Z",
        "twitter_username": "chainlink",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x514910771af9ca656af840dff83e8264ecf986ca",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x9e004545c59d359f6b7bfb06a26390b087717b42",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "0xE2e73A1c69ecF83F464EFCE6A5be353a37cA09b2",
            "platform": {
                "name": "Gnosis Chain",
                "coin": {"id": "1659", "name": "Gnosis", "symbol": "GNO", "slug": "gnosis-gno"}
            }
        }, {
            "contract_address": "terra12dfv3f0e6m22z6cnhfn3nxk2en3z3zeqy6ctym",
            "platform": {
                "name": "Terra Classic",
                "coin": {"id": "4172", "name": "Terra Classic", "symbol": "LUNC", "slug": "terra-luna"}
            }
        }, {
            "contract_address": "0xb3654dc3D10Ea7645f8319668E8F54d2574FBdC8",
            "platform": {"name": "Fantom", "coin": {"id": "3513", "name": "Fantom", "symbol": "FTM", "slug": "fantom"}}
        }, {
            "contract_address": "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0x5947bb275c521040051d82396192181b413227a3",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0x350a791bfc2c21f9ed5d10980dad2e2638ffa7f6",
            "platform": {
                "name": "Optimism",
                "coin": {"id": "11840", "name": "Optimism", "symbol": "OP", "slug": "optimism-ethereum"}
            }
        }, {
            "contract_address": "0xf97f4df75117a78c1A5a0DBb814Af92458539FB4",
            "platform": {
                "name": "Arbitrum",
                "coin": {"id": "11841", "name": "Arbitrum", "symbol": "ARB", "slug": "arbitrum"}
            }
        }, {
            "contract_address": "0x008484148dcf23d1b48908393e7a00d5fdc3bf81029a73eeca62a15ebfb1205a",
            "platform": {"name": "Sora", "coin": {"id": "5802", "name": "SORA", "symbol": "XOR", "slug": "sora"}}
        }, {
            "contract_address": "514910771af9ca656af840dff83e8264ecf986ca.factory.bridge.near",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0x294cde734a863dcf65417992424405bccf3973e7",
            "platform": {
                "name": "Hoo Smart Chain",
                "coin": {"id": "15165", "name": "Hoo Smart Chain", "symbol": "HSC", "slug": "hoo-smart-chain"}
            }
        }, {
            "contract_address": "0xf390830df829cf22c53c8840554b98eafc5dcbc2",
            "platform": {
                "name": "Milkomeda",
                "coin": {"id": "2010", "name": "Cardano", "symbol": "ADA", "slug": "cardano"}
            }
        }, {
            "contract_address": "0x68Ca48cA2626c415A89756471D4ADe2CC9034008",
            "platform": {"name": "Energi", "coin": {"id": "3218", "name": "Energi", "symbol": "NRG", "slug": "energi"}}
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "2010": {
        "id": 2010,
        "name": "Cardano",
        "symbol": "ADA",
        "category": "coin",
        "description": "Cardano (ADA) is a cryptocurrency launched in 2017. Cardano has a current supply of 36,883,631,806.182 with 35,680,140,171.401 in circulation. The last known price of Cardano is 0.47253857 USD and is down -1.46 over the last 24 hours. It is currently trading on 1171 active market(s) with $228,751,018.59 traded over the last 24 hours. More information can be found at https://www.cardano.org.",
        "slug": "cardano",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
        "subreddit": "cardano",
        "notice": "",
        "tags": ["dpos", "pos", "platform", "research", "smart-contracts", "staking", "cardano-ecosystem", "cardano", "layer-1", "sec-security-token", "alleged-sec-securities"],
        "tag-names": ["DPoS", "PoS", "Platform", "Research", "Smart Contracts", "Staking", "Cardano Ecosystem", "Cardano", "Layer 1", "SEC Security Token", "Alleged SEC Securities"],
        "tag-groups": ["ALGORITHM", "ALGORITHM", "CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://www.cardano.org"],
            "twitter": ["https://twitter.com/cardano"],
            "message_board": ["https://medium.com/feed/cardanorss", "https://forum.cardano.org/"],
            "chat": ["https://t.me/Cardano"],
            "facebook": [],
            "explorer": ["https://explorer.cardano.org", "https://cardanoscan.io/", "https://blockchair.com/cardano", "https://bscscan.com/token/0x3ee2200efb3400fabb9aacf31297cbdd1d435d47"],
            "reddit": ["https://reddit.com/r/cardano"],
            "technical_doc": ["https://docs.cardano.org/en/latest/"],
            "source_code": ["https://cardanoupdates.com/"],
            "announcement": ["https://t.me/CardanoAnnouncements"]
        },
        "platform": null,
        "date_added": "2017-10-01T00:00:00.000Z",
        "twitter_username": "cardano",
        "is_hidden": 0,
        "date_launched": "2017-09-01T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "0x3ee2200efb3400fabb9aacf31297cbdd1d435d47",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "lovelace",
            "platform": {
                "name": "Cardano",
                "coin": {"id": "2010", "name": "Cardano", "symbol": "ADA", "slug": "cardano"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": ["Communications & Social Media"],
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "3408": {
        "id": 3408,
        "name": "USDC",
        "symbol": "USDC",
        "category": "token",
        "description": "USDC (USDC) is a cryptocurrency and operates on the Ethereum platform. USDC has a current supply of 33,488,913,223.174755. The last known price of USDC is 1.00000932 USD and is up 0.01 over the last 24 hours. It is currently trading on 19219 active market(s) with $3,327,487,196.62 traded over the last 24 hours. More information can be found at https://www.centre.io/usdc.",
        "slug": "usd-coin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
        "subreddit": "",
        "notice": "",
        "tags": ["medium-of-exchange", "stablecoin", "asset-backed-stablecoin", "coinbase-ventures-portfolio", "hedera-hashgraph-ecosystem", "fantom-ecosystem", "arbitrum-ecosytem", "moonriver-ecosystem", "bnb-chain", "usd-stablecoin", "optimism-ecosystem", "fiat-stablecoin"],
        "tag-names": ["Medium of Exchange", "Stablecoin", "Asset-Backed Stablecoin", "Coinbase Ventures Portfolio", "Hedera Hashgraph Ecosystem", "Fantom Ecosystem", "Arbitrum Ecosystem", "Moonriver Ecosystem", "BNB Chain", "USD Stablecoin", "Optimism Ecosystem", "Fiat Stablecoin"],
        "tag-groups": ["INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://www.centre.io/usdc"],
            "twitter": ["https://twitter.com/circle"],
            "message_board": ["https://medium.com/centre-blog"],
            "chat": [],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", "https://explorer.solana.com/address/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "https://tronscan.org/#/token20/TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8", "https://bscscan.com/token/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d", "https://ftmscan.com/token/0x04068DA6C83AFCFA0e13ba15A6696662335D5B75"],
            "reddit": [],
            "technical_doc": ["https://f.hubspotusercontent30.net/hubfs/9304636/PDF/centre-whitepaper.pdf"],
            "source_code": ["https://github.com/centrehq/centre-tokens"],
            "announcement": ["https://blog.circle.com/2018/09/26/introducing-usd-coin/"]
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
        },
        "date_added": "2018-10-08T00:00:00.000Z",
        "twitter_username": "circle",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0xcca4e6302510d555b654b3eab9c0fcb223bcfdf0",
            "platform": {
                "name": "Viction",
                "coin": {"id": "2570", "name": "Viction", "symbol": "VIC", "slug": "viction"}
            }
        }, {
            "contract_address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "31566704",
            "platform": {
                "name": "Algorand",
                "coin": {"id": "4030", "name": "Algorand", "symbol": "ALGO", "slug": "algorand"}
            }
        }, {
            "contract_address": "0xDDAfbb505ad214D7b80b1f830fcCc89B60fb7A83",
            "platform": {
                "name": "Gnosis Chain",
                "coin": {"id": "1659", "name": "Gnosis", "symbol": "GNO", "slug": "gnosis-gno"}
            }
        }, {
            "contract_address": "0x52a9cea01c4cbdd669883e41758b8eb8e8e2b34b",
            "platform": {
                "name": "Wanchain",
                "coin": {"id": "2606", "name": "Wanchain", "symbol": "WAN", "slug": "wanchain"}
            }
        }, {
            "contract_address": "terra1pvel56a2hs93yd429pzv9zp5aptcjg5ulhkz7w",
            "platform": {
                "name": "Terra Classic",
                "coin": {"id": "4172", "name": "Terra Classic", "symbol": "LUNC", "slug": "terra-luna"}
            }
        }, {
            "contract_address": "6XtHjpXbs9RRJP2Sr9GUyVqzACcby9TkThHXnjVC5CDJ",
            "platform": {"name": "Waves", "coin": {"id": "1274", "name": "Waves", "symbol": "WAVES", "slug": "waves"}}
        }, {
            "contract_address": "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
            "platform": {"name": "Fantom", "coin": {"id": "3513", "name": "Fantom", "symbol": "FTM", "slug": "fantom"}}
        }, {
            "contract_address": "0x3c499c542cEF5E3811e1192ce70d8cC03d5c3359",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0xc946daf81b08146b1c7a8da2a851ddf2b3eaaf85",
            "platform": {
                "name": "OKExChain",
                "coin": {"id": "8267", "name": "OKT Chain", "symbol": "OKT", "slug": "okt"}
            }
        }, {
            "contract_address": "0xcebA9300f2b948710d2653dD7B07f33A8B32118C",
            "platform": {"name": "Celo", "coin": {"id": "5567", "name": "Celo", "symbol": "CELO", "slug": "celo"}}
        }, {
            "contract_address": "USDC-c76f1f",
            "platform": {
                "name": "Elrond",
                "coin": {"id": "6892", "name": "MultiversX", "symbol": "EGLD", "slug": "multiversx-egld"}
            }
        }, {
            "contract_address": "0xBcbd9990dcEC6a64741ea27BeC0cA8ff6B91Bc26",
            "platform": {
                "name": "Bitcoin Cash",
                "coin": {"id": "1831", "name": "Bitcoin Cash", "symbol": "BCH", "slug": "bitcoin-cash"}
            }
        }, {
            "contract_address": "0x6963efed0ab40f6c3d7bda44a05dcf1437c44372",
            "platform": {
                "name": "Conflux",
                "coin": {"id": "7334", "name": "Conflux", "symbol": "CFX", "slug": "conflux-network"}
            }
        }, {
            "contract_address": "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
            "platform": {
                "name": "Optimism",
                "coin": {"id": "11840", "name": "Optimism", "symbol": "OP", "slug": "optimism-ethereum"}
            }
        }, {
            "contract_address": "0x980a5afef3d17ad98635f6c5aebcbaeded3c3430",
            "platform": {
                "name": "KCC",
                "coin": {"id": "2087", "name": "KuCoin Token", "symbol": "KCS", "slug": "kucoin-token"}
            }
        }, {
            "contract_address": "TEkxiTehnzSmSe2XqrBj4w32RUN966rdz8",
            "platform": {"name": "Tron20", "coin": {"id": "1958", "name": "TRON", "symbol": "TRX", "slug": "tron"}}
        }, {
            "contract_address": "0x985458e523db3d53125813ed68c274899e9dfab4",
            "platform": {
                "name": "Harmony",
                "coin": {"id": "3945", "name": "Harmony", "symbol": "ONE", "slug": "harmony"}
            }
        }, {
            "contract_address": "0x818ec0a7fe18ff94269904fced6ae3dae6d6dc0b",
            "platform": {
                "name": "Moonbeam",
                "coin": {"id": "6836", "name": "Moonbeam", "symbol": "GLMR", "slug": "moonbeam"}
            }
        }, {
            "contract_address": "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
            "platform": {
                "name": "Arbitrum",
                "coin": {"id": "11841", "name": "Arbitrum", "symbol": "ARB", "slug": "arbitrum"}
            }
        }, {
            "contract_address": "0x765277eebeca2e31912c9946eae1021199b39c61",
            "platform": {
                "name": "KardiaChain",
                "coin": {"id": "5453", "name": "KardiaChain", "symbol": "KAI", "slug": "kardiachain"}
            }
        }, {
            "contract_address": "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
            "platform": {
                "name": "Moonriver",
                "coin": {"id": "9285", "name": "Moonriver", "symbol": "MOVR", "slug": "moonriver"}
            }
        }, {
            "contract_address": "0x3b2bf2b523f54c4e454f08aa286d03115aff326c",
            "platform": {"name": "IoTex", "coin": {"id": "2777", "name": "IoTeX", "symbol": "IOTX", "slug": "iotex"}}
        }, {
            "contract_address": "a0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.factory.bridge.near",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0x8D97Cea50351Fb4329d591682b148D43a0C3611b",
            "platform": {"name": "Telos", "coin": {"id": "4660", "name": "Telos", "symbol": "TLOS", "slug": "telos"}}
        }, {
            "contract_address": "0xe2c120f188ebd5389f71cf4d9c16d05b62a58993",
            "platform": {"name": "Velas", "coin": {"id": "4747", "name": "Velas", "symbol": "VLX", "slug": "velas"}}
        }, {
            "contract_address": "0x0b7007c13325c48911f73a2dad5fa5dcbf808adc",
            "platform": {"name": "Ronin", "coin": {"id": "14101", "name": "Ronin", "symbol": "RON", "slug": "ronin"}}
        }, {
            "contract_address": "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
            "platform": {"name": "Cronos", "coin": {"id": "3635", "name": "Cronos", "symbol": "CRO", "slug": "cronos"}}
        }, {
            "contract_address": "0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc",
            "platform": {
                "name": "Boba Network",
                "coin": {"id": "14556", "name": "Boba Network", "symbol": "BOBA", "slug": "boba-network"}
            }
        }, {
            "contract_address": "0xfa9343c3897324496a05fc75abed6bac29f8a40f",
            "platform": {"name": "Kava", "coin": {"id": "4846", "name": "Kava", "symbol": "KAVA", "slug": "kava"}}
        }, {
            "contract_address": "ibc/498A0751C798A0D9A389AA3691123DADA57DAA4FE165D5C75894505B876BA6E4",
            "platform": {
                "name": "Osmosis",
                "coin": {"id": "12220", "name": "Osmosis", "symbol": "OSMO", "slug": "osmosis"}
            }
        }, {
            "contract_address": "0.0.456858",
            "platform": {
                "name": "Hedera Hashgraph",
                "coin": {"id": "4642", "name": "Hedera", "symbol": "HBAR", "slug": "hedera"}
            }
        }, {
            "contract_address": "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
            "platform": {
                "name": "Oasis Network",
                "coin": {"id": "7653", "name": "Oasis", "symbol": "ROSE", "slug": "oasis-network"}
            }
        }, {
            "contract_address": "secret1h6z05y90gwm4sqxzhz4pkyp36cna9xtp7q0urv",
            "platform": {"name": "Secret", "coin": {"id": "5604", "name": "Secret", "symbol": "SCRT", "slug": "secret"}}
        }, {
            "contract_address": "0xb12bfca5a55806aaf64e99521918a4bf0fc40802",
            "platform": {
                "name": "Aurora",
                "coin": {"id": "14803", "name": "Aurora", "symbol": "AURORA", "slug": "aurora-near"}
            }
        }, {
            "contract_address": "0xea32a96608495e54156ae48931a7c20f0dcc1a21",
            "platform": {
                "name": "Metis Andromeda",
                "coin": {"id": "9640", "name": "Metis", "symbol": "METIS", "slug": "metisdao"}
            }
        }, {
            "contract_address": "0xd86e243fc0007e6226b07c9a50c9d70d78299eb5",
            "platform": {
                "name": "Meter",
                "coin": {"id": "5919", "name": "Meter Governance", "symbol": "MTRG", "slug": "meter-governance"}
            }
        }, {
            "contract_address": "0x620fd5fa44be6af63715ef4e65ddfa0387ad13f5",
            "platform": {
                "name": "Fuse",
                "coin": {"id": "5634", "name": "Fuse", "symbol": "FUSE", "slug": "fuse-network"}
            }
        }, {
            "contract_address": "0xA06be0F5950781cE28D965E5EFc6996e88a8C141",
            "platform": {
                "name": "Elastos",
                "coin": {"id": "2492", "name": "Elastos", "symbol": "ELA", "slug": "elastos"}
            }
        }, {
            "contract_address": "0x2bF9b864cdc97b08B6D79ad4663e71B8aB65c45c",
            "platform": {
                "name": "Syscoin",
                "coin": {"id": "541", "name": "Syscoin", "symbol": "SYS", "slug": "syscoin"}
            }
        }, {
            "contract_address": "0x3ad9dfe640e1a9cc1d9b0948620820d975c3803a",
            "platform": {
                "name": "Avalanche DFK",
                "coin": {"id": "12319", "name": "DeFi Kingdoms", "symbol": "JEWEL", "slug": "defi-kingdoms"}
            }
        }, {
            "contract_address": "0xB44a9B6905aF7c801311e8F4E76932ee959c663C",
            "platform": {
                "name": "Milkomeda",
                "coin": {"id": "2010", "name": "Cardano", "symbol": "ADA", "slug": "cardano"}
            }
        }, {
            "contract_address": "0xe46910336479F254723710D57e7b683F3315b22B",
            "platform": {"name": "Evmos", "coin": {"id": "19899", "name": "Evmos", "symbol": "EVMOS", "slug": "evmos"}}
        }, {
            "contract_address": "0x765277EebeCA2e31912C9946eAe1021199B39C61",
            "platform": {
                "name": "Bitgert",
                "coin": {"id": "11079", "name": "Bitgert", "symbol": "BRISE", "slug": "bitrise-token"}
            }
        }, {
            "contract_address": "0x6a2d262D56735DbA19Dd70682B39F6bE9a931D98",
            "platform": {"name": "Astar", "coin": {"id": "12885", "name": "Astar", "symbol": "ASTR", "slug": "astar"}}
        }, {
            "contract_address": "0:c37b3fafca5bf7d3704b081fde7df54f298736ee059bf6d32fac25f5e6085bf6",
            "platform": {
                "name": "Everscale",
                "coin": {"id": "7505", "name": "Everscale", "symbol": "EVER", "slug": "everscale"}
            }
        }, {
            "contract_address": "0x22e89898A04eaf43379BeB70bf4E38b1faf8A31e",
            "platform": {
                "name": "ThunderCore",
                "coin": {"id": "3930", "name": "ThunderCore", "symbol": "TT", "slug": "thundercore"}
            }
        }, {
            "contract_address": "0x4200000000000000000000000000000000000100",
            "platform": {
                "name": "Tomb Chain",
                "coin": {"id": "11495", "name": "Tomb", "symbol": "TOMB", "slug": "tomb"}
            }
        }, {
            "contract_address": "0x765277eebeca2e31912c9946eae1021199b39c61",
            "platform": {
                "name": "Dogechain(EVM)",
                "coin": {"id": "74", "name": "Dogecoin", "symbol": "DOGE", "slug": "dogecoin"}
            }
        }, {
            "contract_address": "0x80b5a32E4F032B2a058b4F29EC95EEfEEB87aDcd",
            "platform": {"name": "Canto", "coin": {"id": "21516", "name": "CANTO", "symbol": "CANTO", "slug": "canto"}}
        }, {
            "contract_address": "0x25de68ef588cb0c2c8f3537861e828ae699cd0db",
            "platform": {
                "name": "EthereumPoW",
                "coin": {"id": "21296", "name": "EthereumPoW", "symbol": "ETHW", "slug": "ethereum-pow"}
            }
        }, {
            "contract_address": "0xf22bede237a07e121b56d91a491eb7bcdfd1f5907926a9e58338f964a01b17fa::asset::USDC",
            "platform": {"name": "Aptos", "coin": {"id": "21794", "name": "Aptos", "symbol": "APT", "slug": "aptos"}}
        }, {
            "contract_address": "0xe3f5a90f9cb311505cd691a46596599aa1a0ad7d",
            "platform": {"name": "Wemix", "coin": {"id": "7548", "name": "WEMIX", "symbol": "WEMIX", "slug": "wemix"}}
        }, {
            "contract_address": "0xe2aa35c2039bd0ff196a6ef99523cc0d3972ae3e",
            "platform": {
                "name": "SX Network",
                "coin": {"id": "8377", "name": "SX Network", "symbol": "SX", "slug": "sportx"}
            }
        }, {
            "contract_address": "0x186181e225dc1ad85a4a94164232bd261e351c33",
            "platform": {
                "name": "Godwoken",
                "coin": {"id": "4948", "name": "Nervos Network", "symbol": "CKB", "slug": "nervos-network"}
            }
        }, {
            "contract_address": "0xffd7510ca0a3279c7a5f50018a26c21d5bc1dbcf",
            "platform": {"name": "Energi", "coin": {"id": "3218", "name": "Energi", "symbol": "NRG", "slug": "energi"}}
        }, {
            "contract_address": "0x5d4b302506645c37ff133b98c4b50a5ae14841659738d6d733d59d0d217a93bf::coin::COIN",
            "platform": {"name": "Sui Network", "coin": {"id": "20947", "name": "Sui", "symbol": "SUI", "slug": "sui"}}
        }, {
            "contract_address": "peggy0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
            "platform": {
                "name": "Injective",
                "coin": {"id": "7226", "name": "Injective", "symbol": "INJ", "slug": "injective"}
            }
        }, {
            "contract_address": "0xa4151B2B3e269645181dCcF2D426cE75fcbDeca9",
            "platform": {"name": "Core", "coin": {"id": "23254", "name": "Core", "symbol": "CORE", "slug": "core-dao"}}
        }, {
            "contract_address": "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",
            "platform": {
                "name": "zkSync Era",
                "coin": {"id": "24091", "name": "zkSync", "symbol": "TBD", "slug": "zksync"}
            }
        }, {
            "contract_address": "0xa8ce8aee21bc2a48a5ef670afcc9274c7bbbc035",
            "platform": {
                "name": "Polygon zkEVM",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0x15d38573d2feeb82e7ad5187ab8c1d52810b1f07",
            "platform": {
                "name": "PulseChain",
                "coin": {"id": "11145", "name": "Pulsechain", "symbol": "PLS", "slug": "pulsechain"}
            }
        }, {
            "contract_address": "0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8",
            "platform": {
                "name": "Starknet",
                "coin": {"id": "22691", "name": "Starknet", "symbol": "STRK", "slug": "starknet-token"}
            }
        }, {
            "contract_address": "0x09bc4e0d864854c6afb6eb9a9cdf58ac190d0df9",
            "platform": {"name": "Mantle", "coin": {"id": "27075", "name": "Mantle", "symbol": "MNT", "slug": "mantle"}}
        }, {
            "contract_address": "0xea6b04272f9f62f997f666f07d3a974134f7ffb9",
            "platform": {
                "name": "Neon EVM",
                "coin": {"id": "23015", "name": "Neon EVM", "symbol": "NEON", "slug": "neon"}
            }
        }, {
            "contract_address": "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
            "platform": {"name": "Base", "coin": {"id": "27716", "name": "Base", "symbol": "TBA", "slug": "base"}}
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "3890": {
        "id": 3890,
        "name": "Polygon",
        "symbol": "MATIC",
        "category": "coin",
        "description": "Polygon (MATIC) is a cryptocurrency . Polygon has a current supply of 10,000,000,000 with 9,906,957,544.769285 in circulation. The last known price of Polygon is 0.68907755 USD and is down -3.37 over the last 24 hours. It is currently trading on 1381 active market(s) with $185,938,265.04 traded over the last 24 hours. More information can be found at https://polygon.technology/.",
        "slug": "polygon",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
        "subreddit": "0xPolygon",
        "notice": "The upgrade from MATIC to [POL](https://coinmarketcap.com/currencies/polygon-ecosystem-token/) has been initiated on Ethereum's mainnet. For more information, please refer to this [article](https://polygon.technology/blog/polygon-2-0-implementation-officially-begins-the-first-set-of-pips-polygon-improvement-proposals-released) and [post](https://twitter.com/0xPolygonLabs/status/1717134336104038580?s=20).",
        "tags": ["pos", "platform", "enterprise-solutions", "zero-knowledge-proofs", "scaling", "state-channel", "coinbase-ventures-portfolio", "layer-2", "binance-launchpad", "binance-labs-portfolio", "polygon-ecosystem", "moonriver-ecosystem", "injective-ecosystem", "ftx-bankruptcy-estate", "sec-security-token", "alleged-sec-securities", "modular-blockchain", "standard-crypto-portfolio"],
        "tag-names": ["PoS", "Platform", "Enterprise Solutions", "Zero Knowledge Proofs", "Scaling", "State Channel", "Coinbase Ventures Portfolio", "Layer 2", "Binance Launchpad", "Binance Labs Portfolio", "Polygon Ecosystem", "Moonriver Ecosystem", "Injective Ecosystem", "FTX Bankruptcy Estate ", "SEC Security Token", "Alleged SEC Securities", "Modular Blockchain", "Standard Crypto Portfolio"],
        "tag-groups": ["ALGORITHM", "CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://polygon.technology/"],
            "twitter": ["https://twitter.com/0xPolygon"],
            "message_board": ["https://blog.polygon.technology/"],
            "chat": ["https://t.me/polygonofficial", "https://open.kakao.com/o/gUpfOhmb"],
            "facebook": [],
            "explorer": ["https://polygonscan.com/", "https://www.oklink.com/polygon", "https://etherscan.io/token/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0", "https://explorer.solana.com/address/C7NNPWuZCNjZBfW5p6JvGsR8pUdsRpEdP1ZAhnoDwj7h"],
            "reddit": ["https://reddit.com/r/0xPolygon"],
            "technical_doc": ["https://github.com/maticnetwork/whitepaper/"],
            "source_code": ["https://github.com/maticnetwork/contracts"],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0"
        },
        "date_added": "2019-04-28T00:00:00.000Z",
        "twitter_username": "0xPolygon",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0xcc42724c6683b7e57334c4e856f4c9965ed682bd",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "C7NNPWuZCNjZBfW5p6JvGsR8pUdsRpEdP1ZAhnoDwj7h",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x0000000000000000000000000000000000001010",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0x3405a1bd46b85c5c029483fbecf2f3e611026e45",
            "platform": {
                "name": "Moonbeam",
                "coin": {"id": "6836", "name": "Moonbeam", "symbol": "GLMR", "slug": "moonbeam"}
            }
        }, {
            "contract_address": "0xa2036f0538221a77a3937f1379699f44945018d0",
            "platform": {
                "name": "Polygon zkEVM",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "3957": {
        "id": 3957,
        "name": "UNUS SED LEO",
        "symbol": "LEO",
        "category": "token",
        "description": "UNUS SED LEO (LEO) is a cryptocurrency and operates on the Ethereum platform. UNUS SED LEO has a current supply of 985,239,504 with 926,403,555.9 in circulation. The last known price of UNUS SED LEO is 5.91366427 USD and is up 0.26 over the last 24 hours. It is currently trading on 46 active market(s) with $1,000,985.03 traded over the last 24 hours. More information can be found at https://www.bitfinex.com/.",
        "slug": "unus-sed-leo",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
        "subreddit": "bitfinex",
        "notice": "",
        "tags": ["marketplace", "centralized-exchange", "discount-token", "payments", "kenetic-capital-portfolio", "alameda-research-portfolio"],
        "tag-names": ["Marketplace", "Centralized Exchange (CEX) Token", "Discount Token", "Payments", "Kenetic Capital Portfolio", "Alameda Research Portfolio"],
        "tag-groups": ["INDUSTRY", "CATEGORY", "CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://www.bitfinex.com/"],
            "twitter": ["https://twitter.com/bitfinex"],
            "message_board": [],
            "chat": ["https://t.me/bfxtelegram"],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3", "https://www.oklink.com/cn/eth/token/0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3", "https://eospark.com/account/bitfinexleo1", "https://eosflare.io/account/bitfinexleo1", "https://blockchair.com/ethereum/erc-20/token/0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"],
            "reddit": ["https://reddit.com/r/bitfinex"],
            "technical_doc": ["https://www.bitfinex.com/wp-2019-05.pdf"],
            "source_code": [],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3"
        },
        "date_added": "2019-05-21T00:00:00.000Z",
        "twitter_username": "bitfinex",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x2af5d2ad76741191d15dfe7bf6ac92d4bd912ca3",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "4943": {
        "id": 4943,
        "name": "Dai",
        "symbol": "DAI",
        "category": "token",
        "description": "Dai (DAI) is a cryptocurrency and operates on the Ethereum platform. Dai has a current supply of 5,347,888,595.7464075. The last known price of Dai is 1.0000627 USD and is up 0.00 over the last 24 hours. It is currently trading on 3228 active market(s) with $546,098,818.01 traded over the last 24 hours. More information can be found at https://makerdao.com/.",
        "slug": "multi-collateral-dai",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
        "subreddit": "",
        "notice": "For details on the upgrade from Single-Collateral Dai (Sai) to Multi-Collateral Dai (Dai), please click [here](https://blog.makerdao.com/single-collateral-dai-to-multi-collateral-dai-upgrade-timeline-and-actions/)",
        "tags": ["defi", "stablecoin", "asset-backed-stablecoin", "ethereum-ecosystem", "avalanche-ecosystem", "polygon-ecosystem", "fantom-ecosystem", "arbitrum-ecosytem", "harmony-ecosystem", "moonriver-ecosystem", "bnb-chain", "usd-stablecoin", "optimism-ecosystem"],
        "tag-names": ["DeFi", "Stablecoin", "Asset-Backed Stablecoin", "Ethereum Ecosystem", "Avalanche Ecosystem", "Polygon Ecosystem", "Fantom Ecosystem", "Arbitrum Ecosystem", "Harmony Ecosystem", "Moonriver Ecosystem", "BNB Chain", "USD Stablecoin", "Optimism Ecosystem"],
        "tag-groups": ["CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "PLATFORM"],
        "urls": {
            "website": ["https://makerdao.com/"],
            "twitter": ["https://twitter.com/MakerDAO"],
            "message_board": [],
            "chat": [],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0x6b175474e89094c44da98b954eedeac495271d0f", "https://polygonscan.com/token/0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063", "https://bscscan.com/token/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3", "https://blockscout.com/xdai/mainnet/tokens/0x44fA8E6f47987339850636F88629646662444217/token-transfers", "https://ftmscan.com/token/0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E"],
            "reddit": [],
            "technical_doc": [],
            "source_code": [],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x6b175474e89094c44da98b954eedeac495271d0f"
        },
        "date_added": "2019-11-22T00:00:00.000Z",
        "twitter_username": "MakerDAO",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x6b175474e89094c44da98b954eedeac495271d0f",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x44fA8E6f47987339850636F88629646662444217",
            "platform": {
                "name": "Gnosis Chain",
                "coin": {"id": "1659", "name": "Gnosis", "symbol": "GNO", "slug": "gnosis-gno"}
            }
        }, {
            "contract_address": "terra1zmclyfepfmqvfqflu8r3lv6f75trmg05z7xq95",
            "platform": {
                "name": "Terra Classic",
                "coin": {"id": "4172", "name": "Terra Classic", "symbol": "LUNC", "slug": "terra-luna"}
            }
        }, {
            "contract_address": "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
            "platform": {"name": "Fantom", "coin": {"id": "3513", "name": "Fantom", "symbol": "FTM", "slug": "fantom"}}
        }, {
            "contract_address": "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0x5c74070fdea071359b86082bd9f9b3deaafbe32b",
            "platform": {"name": "Klaytn", "coin": {"id": "4256", "name": "Klaytn", "symbol": "KLAY", "slug": "klaytn"}}
        }, {
            "contract_address": "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",
            "platform": {
                "name": "Optimism",
                "coin": {"id": "11840", "name": "Optimism", "symbol": "OP", "slug": "optimism-ethereum"}
            }
        }, {
            "contract_address": "0xef977d2f931c1978db5f6747666fa1eacb0d0339",
            "platform": {
                "name": "Harmony",
                "coin": {"id": "3945", "name": "Harmony", "symbol": "ONE", "slug": "harmony"}
            }
        }, {
            "contract_address": "0x765277eebeca2e31912c9946eae1021199b39c61",
            "platform": {
                "name": "Moonbeam",
                "coin": {"id": "6836", "name": "Moonbeam", "symbol": "GLMR", "slug": "moonbeam"}
            }
        }, {
            "contract_address": "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
            "platform": {
                "name": "Arbitrum",
                "coin": {"id": "11841", "name": "Arbitrum", "symbol": "ARB", "slug": "arbitrum"}
            }
        }, {
            "contract_address": "0x80a16016cc4a2e6a2caca8a4a498b1699ff0f844",
            "platform": {
                "name": "Moonriver",
                "coin": {"id": "9285", "name": "Moonriver", "symbol": "MOVR", "slug": "moonriver"}
            }
        }, {
            "contract_address": "0x0200060000000000000000000000000000000000000000000000000000000000",
            "platform": {"name": "Sora", "coin": {"id": "5802", "name": "SORA", "symbol": "XOR", "slug": "sora"}}
        }, {
            "contract_address": "6b175474e89094c44da98b954eedeac495271d0f.factory.bridge.near",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0xf2001b145b43032aaf5ee2884e456ccd805f677d",
            "platform": {"name": "Cronos", "coin": {"id": "3635", "name": "Cronos", "symbol": "CRO", "slug": "cronos"}}
        }, {
            "contract_address": "0xf74195Bb8a5cf652411867c5C2C5b8C2a402be35",
            "platform": {
                "name": "Boba Network",
                "coin": {"id": "14556", "name": "Boba Network", "symbol": "BOBA", "slug": "boba-network"}
            }
        }, {
            "contract_address": "ibc/0CD3A0285E1341859B5E86B6AB7682F023D03E97607CCC1DC95706411D866DF7",
            "platform": {
                "name": "Osmosis",
                "coin": {"id": "12220", "name": "Osmosis", "symbol": "OSMO", "slug": "osmosis"}
            }
        }, {
            "contract_address": "0xe3520349f477a5f6eb06107066048508498a291b",
            "platform": {
                "name": "Aurora",
                "coin": {"id": "14803", "name": "Aurora", "symbol": "AURORA", "slug": "aurora-near"}
            }
        }, {
            "contract_address": "0x4651b38e7ec14bb3db731369bfe5b08f2466bd0a",
            "platform": {
                "name": "Metis Andromeda",
                "coin": {"id": "9640", "name": "Metis", "symbol": "METIS", "slug": "metisdao"}
            }
        }, {
            "contract_address": "0xfA9343C3897324496A05fC75abeD6bAC29f8A40f",
            "platform": {
                "name": "Bitgert",
                "coin": {"id": "11079", "name": "Bitgert", "symbol": "BRISE", "slug": "bitrise-token"}
            }
        }, {
            "contract_address": "0:eb2ccad2020d9af9cec137d3146dde067039965c13a27d97293c931dae22b2b9",
            "platform": {
                "name": "Everscale",
                "coin": {"id": "7505", "name": "Everscale", "symbol": "EVER", "slug": "everscale"}
            }
        }, {
            "contract_address": "0x0ee5893f434017d8881750101ea2f7c49c0eb503",
            "platform": {"name": "Energi", "coin": {"id": "3218", "name": "Energi", "symbol": "NRG", "slug": "energi"}}
        }, {
            "contract_address": "EQDo_ZJyQ_YqBzBwbVpMmhbhIddKtRP99HugZJ14aFscxi7B",
            "platform": {"name": "TON", "coin": {"id": "11419", "name": "Toncoin", "symbol": "TON", "slug": "toncoin"}}
        }, {
            "contract_address": "0xefd766ccb38eaf1dfd701853bfce31359239f305",
            "platform": {
                "name": "PulseChain",
                "coin": {"id": "11145", "name": "Pulsechain", "symbol": "PLS", "slug": "pulsechain"}
            }
        }, {
            "contract_address": "0xda114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3",
            "platform": {
                "name": "Starknet",
                "coin": {"id": "22691", "name": "Starknet", "symbol": "STRK", "slug": "starknet-token"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    }, "5426": {
        "id": 5426,
        "name": "Solana",
        "symbol": "SOL",
        "category": "coin",
        "description": "Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 576,325,604.7112857 with 448,915,190.11432743 in circulation. The last known price of Solana is 168.85707564 USD and is down -2.95 over the last 24 hours. It is currently trading on 660 active market(s) with $2,193,740,032.77 traded over the last 24 hours. More information can be found at https://solana.com.",
        "slug": "solana",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
        "subreddit": "solana",
        "notice": "",
        "tags": ["pos", "platform", "solana-ecosystem", "cms-holdings-portfolio", "kenetic-capital-portfolio", "alameda-research-portfolio", "multicoin-capital-portfolio", "okx-ventures-portfolio", "layer-1", "ftx-bankruptcy-estate", "sec-security-token", "alleged-sec-securities", "cmc-crypto-awards-2024"],
        "tag-names": ["PoS", "Platform", "Solana Ecosystem", "CMS Holdings Portfolio", "Kenetic Capital Portfolio", "Alameda Research Portfolio", "Multicoin Capital Portfolio", "OKX Ventures Portfolio", "Layer 1", "FTX Bankruptcy Estate ", "SEC Security Token", "Alleged SEC Securities", "CMC Crypto Awards 2024"],
        "tag-groups": ["ALGORITHM", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://solana.com"],
            "twitter": ["https://twitter.com/solana"],
            "message_board": ["https://solana.com/news", "https://forums.solana.com"],
            "chat": ["https://solana.com/discord", "https://t.me/solana"],
            "facebook": [],
            "explorer": ["https://explorer.solana.com", "https://solana.fm/", "https://solscan.io/", "https://solanabeach.io", "https://www.oklink.com/sol"],
            "reddit": ["https://reddit.com/r/solana"],
            "technical_doc": ["https://solana.com/solana-whitepaper.pdf"],
            "source_code": ["https://github.com/solana-labs"],
            "announcement": []
        },
        "platform": null,
        "date_added": "2020-04-10T00:00:00.000Z",
        "twitter_username": "solana",
        "is_hidden": 0,
        "date_launched": "2020-03-16T00:00:00.000Z",
        "contract_address": [],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": true
    }, "5690": {
        "id": 5690,
        "name": "Render",
        "symbol": "RNDR",
        "category": "token",
        "description": "Render (RNDR) is a cryptocurrency launched in 2019and operates on the Ethereum platform. Render has a current supply of 532,070,163.81646013 with 388,643,223.5364601 in circulation. The last known price of Render is 10.2502291 USD and is up 2.44 over the last 24 hours. It is currently trading on 393 active market(s) with $274,782,577.49 traded over the last 24 hours. More information can be found at https://rendernetwork.com/.",
        "slug": "render",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png",
        "subreddit": "RenderNetwork/",
        "notice": "",
        "tags": ["art", "media", "vr-ar", "ai-big-data", "distributed-computing", "collectibles-nfts", "scaling", "video", "ethereum-ecosystem", "solana-ecosystem", "metaverse", "alameda-research-portfolio", "multicoin-capital-portfolio", "polygon-ecosystem", "web3", "generative-ai", "depin"],
        "tag-names": ["Art", "Media", "VR/AR", "AI & Big Data", "Distributed Computing", "Collectibles & NFTs", "Scaling", "Video", "Ethereum Ecosystem", "Solana Ecosystem", "Metaverse", "Alameda Research Portfolio", "Multicoin Capital Portfolio", "Polygon Ecosystem", "Web3", "Generative AI", "DePIN"],
        "tag-groups": ["INDUSTRY", "INDUSTRY", "INDUSTRY", "INDUSTRY", "INDUSTRY", "CATEGORY", "CATEGORY", "INDUSTRY", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "INDUSTRY", "CATEGORY", "INDUSTRY"],
        "urls": {
            "website": ["https://rendernetwork.com/"],
            "twitter": ["https://twitter.com/rendernetwork"],
            "message_board": ["https://rendernetwork.medium.com/"],
            "chat": ["https://t.me/rendernetwork", "https://discord.com/invite/rendernetwork"],
            "facebook": ["https://www.facebook.com/rendernetwork"],
            "explorer": ["https://etherscan.io/token/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24", "https://www.oklink.com/cn/eth/token/0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24", "https://explorer.solana.com/address/rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof"],
            "reddit": ["https://reddit.com/r/RenderNetwork/"],
            "technical_doc": ["https://know.rendernetwork.com/"],
            "source_code": [],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24"
        },
        "date_added": "2020-06-11T00:00:00.000Z",
        "twitter_username": "rendernetwork",
        "is_hidden": 0,
        "date_launched": "2019-06-15T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "0x6de037ef9ad2725eb40118bb1702ebb27e4aeb24",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x61299774020dA444Af134c82fa83E3810b309991",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "5805": {
        "id": 5805,
        "name": "Avalanche",
        "symbol": "AVAX",
        "category": "coin",
        "description": "Avalanche (AVAX) is a cryptocurrency launched in 2020. Avalanche has a current supply of 441,466,738.49559695 with 382,777,098.49559695 in circulation. The last known price of Avalanche is 36.25108419 USD and is down -2.73 over the last 24 hours. It is currently trading on 721 active market(s) with $289,305,574.74 traded over the last 24 hours. More information can be found at https://avax.network/.",
        "slug": "avalanche",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
        "subreddit": "Avax",
        "notice": "",
        "tags": ["defi", "smart-contracts", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "avalanche-ecosystem", "cms-holdings-portfolio", "dragonfly-capital-portfolio", "moonriver-ecosystem", "injective-ecosystem", "real-world-assets", "layer-1"],
        "tag-names": ["DeFi", "Smart Contracts", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Avalanche Ecosystem", "CMS Holdings Portfolio", "DragonFly Capital Portfolio", "Moonriver Ecosystem", "Injective Ecosystem", "Real World Assets", "Layer 1"],
        "tag-groups": ["CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://avax.network/", "https://www.avalabs.org/"],
            "twitter": ["https://twitter.com/Avax"],
            "message_board": ["https://medium.com/avalancheavax", "https://forum.avax.network"],
            "chat": ["https://t.me/avalancheavax", "https://chat.avax.network"],
            "facebook": ["https://www.facebook.com/avalancheavax"],
            "explorer": ["https://snowtrace.io/", "https://avascan.info/blockchain/x/asset/FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z", "https://explorer.avax.network/", "https://www.oklink.com/avax"],
            "reddit": ["https://reddit.com/r/Avax"],
            "technical_doc": ["https://www.avalabs.org/whitepapers"],
            "source_code": ["https://github.com/ava-labs/avalanchego"],
            "announcement": []
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x1ce0c2827e2ef14d5c4f29a091d735a204794041"
        },
        "date_added": "2020-07-13T00:00:00.000Z",
        "twitter_username": "Avax",
        "is_hidden": 0,
        "date_launched": "2020-09-21T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "0x1ce0c2827e2ef14d5c4f29a091d735a204794041",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0xcd8fe44a29db9159db36f96570d7a4d91986f528",
            "platform": {"name": "Klaytn", "coin": {"id": "4256", "name": "Klaytn", "symbol": "KLAY", "slug": "klaytn"}}
        }, {
            "contract_address": "0x4792c1ecb969b036eb51330c63bd27899a13d84e",
            "platform": {
                "name": "Moonbeam",
                "coin": {"id": "6836", "name": "Moonbeam", "symbol": "GLMR", "slug": "moonbeam"}
            }
        }, {
            "contract_address": "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",
            "platform": {
                "name": "Avalanche X-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0x6a5279e99ca7786fb13f827fc1fb4f61684933d6",
            "platform": {
                "name": "zkSync Era",
                "coin": {"id": "24091", "name": "zkSync", "symbol": "TBD", "slug": "zksync"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": ["PoS", "Art", "Government", "Health", "Platform", "Sports", "Enterprise Solutions", "Gaming", "Identity", "Interoperability", "Music", "Payments", "Scaling", "Smart Contracts", "Staking", "Polychain Capital Portfolio", "Avalanche Ecosystem", "CMS Holdings Portfolio", "DragonFly Capital Portfolio"],
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "5994": {
        "id": 5994,
        "name": "Shiba Inu",
        "symbol": "SHIB",
        "category": "token",
        "description": "Shiba Inu (SHIB) is a cryptocurrency and operates on the Ethereum platform. Shiba Inu has a current supply of 589,520,021,245,477.4 with 589,271,900,216,828 in circulation. The last known price of Shiba Inu is 0.00002405 USD and is down -2.75 over the last 24 hours. It is currently trading on 807 active market(s) with $339,881,711.78 traded over the last 24 hours. More information can be found at https://shibatoken.com/.",
        "slug": "shiba-inu",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
        "subreddit": "SHIBArmy",
        "notice": "",
        "tags": ["memes", "ethereum-ecosystem", "doggone-doggerel"],
        "tag-names": ["Memes", "Ethereum Ecosystem", "Doggone Doggerel"],
        "tag-groups": ["INDUSTRY", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://shibatoken.com/"],
            "twitter": ["https://twitter.com/shibtoken"],
            "message_board": ["https://medium.com/@allhailtheshiba/all-hail-the-shiba-an-experiment-in-decentralization-87e3792e92f2"],
            "chat": ["https://discord.com/invite/shibatoken", "https://t.me/ShibaInu_Dogecoinkiller"],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce", "https://solscan.io/token/CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z", "https://bscscan.com/token/0xb1547683DA678f2e1F003A780143EC10Af8a832B", "https://finder.terra.money/mainnet/address/terra1huku2lecfjhq9d00k5a8dh73gw7dwe6vvuf2dd"],
            "reddit": ["https://reddit.com/r/SHIBArmy"],
            "technical_doc": ["https://github.com/shytoshikusama/woofwoofpaper/raw/main/SHIBA_INU_WOOF_WOOF.pdf"],
            "source_code": [],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce"
        },
        "date_added": "2020-08-01T00:00:00.000Z",
        "twitter_username": "shibtoken",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "6535": {
        "id": 6535,
        "name": "NEAR Protocol",
        "symbol": "NEAR",
        "category": "coin",
        "description": "NEAR Protocol (NEAR) is a cryptocurrency launched in 2020. NEAR Protocol has a current supply of 1,191,427,256 with 1,077,238,158 in circulation. The last known price of NEAR Protocol is 7.71894152 USD and is down -3.49 over the last 24 hours. It is currently trading on 407 active market(s) with $317,308,090.09 traded over the last 24 hours. More information can be found at https://near.org/.",
        "slug": "near-protocol",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png",
        "subreddit": "",
        "notice": "",
        "tags": ["platform", "ai-big-data", "staking", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "arrington-xrp-capital-portfolio", "coinfund-portfolio", "electric-capital-portfolio", "fabric-ventures-portfolio", "kenetic-capital-portfolio", "near-protocol-ecosystem", "cross-chain", "injective-ecosystem", "circle-ventures-portfolio", "layer-1", "sec-security-token", "alleged-sec-securities", "account-abstraction", "data-availability"],
        "tag-names": ["Platform", "AI & Big Data", "Staking", "Coinbase Ventures Portfolio", "Three Arrows Capital Portfolio", "Arrington XRP Capital Portfolio", "Coinfund Portfolio", "Electric Capital Portfolio", "Fabric Ventures Portfolio", "Kenetic Capital Portfolio", "Near Protocol Ecosystem", "Cross-Chain", "Injective Ecosystem", "Circle Ventures Portfolio", "Layer 1", "SEC Security Token", "Alleged SEC Securities", "Account Abstraction", "Data Availability"],
        "tag-groups": ["CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "CATEGORY", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY"],
        "urls": {
            "website": ["https://near.org/"],
            "twitter": ["https://twitter.com/NEARProtocol"],
            "message_board": ["https://near.org/blog/", "https://medium.com/nearprotocol"],
            "chat": ["https://t.me/cryptonear", "https://near.org/wechat/"],
            "facebook": [],
            "explorer": ["https://nearblocks.io/", "https://getblock.io/explorers/near/"],
            "reddit": [],
            "technical_doc": ["https://near.org/papers/the-official-near-white-paper"],
            "source_code": ["https://github.com/near"],
            "announcement": []
        },
        "platform": null,
        "date_added": "2020-08-11T00:00:00.000Z",
        "twitter_username": "NEARProtocol",
        "is_hidden": 0,
        "date_launched": "2020-10-14T00:00:00.000Z",
        "contract_address": [],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "6636": {
        "id": 6636,
        "name": "Polkadot",
        "symbol": "DOT",
        "category": "coin",
        "description": "Polkadot (DOT) is a cryptocurrency . Polkadot has a current supply of 1,437,953,431.368154. The last known price of Polkadot is 7.021714 USD and is down -1.51 over the last 24 hours. It is currently trading on 760 active market(s) with $121,665,376.85 traded over the last 24 hours. More information can be found at https://polkadot.network/.",
        "slug": "polkadot-new",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
        "subreddit": "Polkadot",
        "notice": "",
        "tags": ["substrate", "polkadot", "binance-chain", "polkadot-ecosystem", "three-arrows-capital-portfolio", "polychain-capital-portfolio", "arrington-xrp-capital-portfolio", "blockchain-capital-portfolio", "boostvc-portfolio", "cms-holdings-portfolio", "coinfund-portfolio", "fabric-ventures-portfolio", "fenbushi-capital-portfolio", "hashkey-capital-portfolio", "kenetic-capital-portfolio", "1confirmation-portfolio", "placeholder-ventures-portfolio", "pantera-capital-portfolio", "exnetwork-capital-portfolio", "web3", "spartan-group", "injective-ecosystem", "bnb-chain", "layer-1"],
        "tag-names": ["Substrate", "Polkadot", "Binance Chain", "Polkadot Ecosystem", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Arrington XRP Capital Portfolio", "Blockchain Capital Portfolio", "BoostVC Portfolio", "CMS Holdings Portfolio", "Coinfund Portfolio", "Fabric Ventures Portfolio", "Fenbushi Capital Portfolio", "Hashkey Capital Portfolio", "Kenetic Capital Portfolio", "1Confirmation Portfolio", "Placeholder Ventures Portfolio", "Pantera Capital Portfolio", "Exnetwork Capital Portfolio", "Web3", "Spartan Group", "Injective Ecosystem", "BNB Chain", "Layer 1"],
        "tag-groups": ["CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "INDUSTRY", "CATEGORY", "PLATFORM", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://polkadot.network/", "https://wiki.polkadot.network/"],
            "twitter": ["https://twitter.com/Polkadot"],
            "message_board": ["https://forum.polkadot.network/", "https://medium.com/polkadot-network"],
            "chat": ["https://polkadot-discord.w3f.tools/", "https://t.me/PolkadotOfficial", "https://t.me/PolkadotAnnouncements", "https://support.polkadot.network/"],
            "facebook": [],
            "explorer": ["https://polkadot.subscan.io/", "https://polkadot.statescan.io/", "https://3xpl.com/polkadot", "https://blockchair.com/polkadot", "https://polkadot.js.org/apps/#/explorer"],
            "reddit": ["https://reddit.com/r/Polkadot"],
            "technical_doc": ["https://polkadot.network/whitepaper/"],
            "source_code": ["https://github.com/paritytech/polkadot-sdk"],
            "announcement": []
        },
        "platform": {
            "id": "1839",
            "name": "BNB",
            "slug": "bnb",
            "symbol": "BNB",
            "token_address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402"
        },
        "date_added": "2020-08-19T00:00:00.000Z",
        "twitter_username": "Polkadot",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "0xa2c49cee16a5e5bdefde931107dc1fae9f7773e3",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "ibc/3FF92D26B407FD61AE95D975712A7C319CDE28DE4D80BDC9978D935932B991D7",
            "platform": {
                "name": "Osmosis",
                "coin": {"id": "12220", "name": "Osmosis", "symbol": "OSMO", "slug": "osmosis"}
            }
        }],
        "self_reported_circulating_supply": 1446649642.7317371,
        "self_reported_tags": ["PoS", "Platform", "Enterprise Solutions", "Distributed Computing", "Interoperability", "Scaling", "Sharding", "Smart Contracts", "Staking", "DApp", "Substrate", "Polkadot", "Polkadot Ecosystem", "Three Arrows Capital Portfolio", "Polychain Capital Portfolio", "Software", "Layer 2", "Governance", "Arrington XRP Capital Portfolio", "Blockchain Capital Portfolio", "BoostVC Portfolio", "CMS Holdings Portfolio", "Coinfund Portfolio", "Fabric Ventures Portfolio", "Fenbushi Capital Portfolio", "Hashkey Capital Portfolio", "Kenetic Capital Portfolio", "1Confirmation Portfolio", "Placeholder Ventures Portfolio", "Pantera Capital Portfolio", "Exnetwork Capital Portfolio", "Web3", "Cross-Chain", "Spartan Group", "Opensource", "Layer 1"],
        "self_reported_market_cap": 10108260897.887838,
        "infinite_supply": true
    }, "7083": {
        "id": 7083,
        "name": "Uniswap",
        "symbol": "UNI",
        "category": "token",
        "description": "Uniswap (UNI) is a cryptocurrency launched in 2020and operates on the Ethereum platform. Uniswap has a current supply of 1,000,000,000 with 598,930,294.71 in circulation. The last known price of Uniswap is 7.73043107 USD and is up 0.48 over the last 24 hours. It is currently trading on 1015 active market(s) with $213,466,974.56 traded over the last 24 hours. More information can be found at https://uniswap.org/blog/uni/.",
        "slug": "uniswap",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
        "subreddit": "Uniswap",
        "notice": "",
        "tags": ["decentralized-exchange-dex-token", "defi", "dao", "yield-farming", "amm", "coinbase-ventures-portfolio", "three-arrows-capital-portfolio", "governance", "blockchain-capital-portfolio", "defiance-capital-portfolio", "alameda-research-portfolio", "a16z-portfolio", "pantera-capital-portfolio", "parafi-capital", "paradigm-portfolio", "arbitrum-ecosytem", "injective-ecosystem", "optimism-ecosystem", "cmc-crypto-awards-2024"],
        "tag-names": ["Decentralized Exchange (DEX) Token", "DeFi", "DAO", "Yield Farming", "AMM", "Coinbase Ventures Portfolio", "Three Arrows Capital Portfolio", "Governance", "Blockchain Capital Portfolio", "DeFiance Capital Portfolio", "Alameda Research Portfolio", "a16z Portfolio", "Pantera Capital Portfolio", "ParaFi Capital", "Paradigm Portfolio", "Arbitrum Ecosystem", "Injective Ecosystem", "Optimism Ecosystem", "CMC Crypto Awards 2024"],
        "tag-groups": ["CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM", "PLATFORM", "PLATFORM", "CATEGORY"],
        "urls": {
            "website": ["https://uniswap.org/blog/uni/", "https://uniswap.org/"],
            "twitter": ["https://twitter.com/Uniswap"],
            "message_board": ["https://uniswap.org/blog/"],
            "chat": ["https://discord.gg/FCfyBSbCU5"],
            "facebook": [],
            "explorer": ["https://etherscan.io/token/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984", "https://nearblocks.io/token/1f9840a85d5af5bf1d1762f925bdaddc4201f984.factory.bridge.near", "https://bscscan.com/token/0xbf5140a22578168fd562dccf235e5d43a02ce9b1", "https://hecoinfo.com/token/0x22c54ce8321a4015740ee1109d9cbc25815c46e6", "https://blockscout.com/xdai/mainnet/tokens/0x4537e328bf7e4efa29d05caea260d7fe26af9d74/token-transfers"],
            "reddit": ["https://reddit.com/r/Uniswap"],
            "technical_doc": [],
            "source_code": [],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
        },
        "date_added": "2020-09-17T00:00:00.000Z",
        "twitter_username": "Uniswap",
        "is_hidden": 0,
        "date_launched": "2020-09-17T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0xbf5140a22578168fd562dccf235e5d43a02ce9b1",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36",
            "platform": {"name": "Solana", "coin": {"id": "5426", "name": "Solana", "symbol": "SOL", "slug": "solana"}}
        }, {
            "contract_address": "0x22c54ce8321a4015740ee1109d9cbc25815c46e6",
            "platform": {
                "name": "HECO",
                "coin": {"id": "2502", "name": "Huobi Token", "symbol": "HT", "slug": "htx-token"}
            }
        }, {
            "contract_address": "0x4537e328bf7e4efa29d05caea260d7fe26af9d74",
            "platform": {
                "name": "Gnosis Chain",
                "coin": {"id": "1659", "name": "Gnosis", "symbol": "GNO", "slug": "gnosis-gno"}
            }
        }, {
            "contract_address": "terra1wyxkuy5jq545fn7xfn3enpvs5zg9f9dghf6gxf",
            "platform": {
                "name": "Terra Classic",
                "coin": {"id": "4172", "name": "Terra Classic", "symbol": "LUNC", "slug": "terra-luna"}
            }
        }, {
            "contract_address": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
            "platform": {
                "name": "Polygon",
                "coin": {"id": "3890", "name": "Polygon", "symbol": "MATIC", "slug": "polygon"}
            }
        }, {
            "contract_address": "0x8eBAf22B6F053dFFeaf46f4Dd9eFA95D89ba8580",
            "platform": {
                "name": "Avalanche C-Chain",
                "coin": {"id": "5805", "name": "Avalanche", "symbol": "AVAX", "slug": "avalanche"}
            }
        }, {
            "contract_address": "0xFa7F8980b0f1E64A2062791cc3b0871572f1F7f0",
            "platform": {
                "name": "Arbitrum",
                "coin": {"id": "11841", "name": "Arbitrum", "symbol": "ARB", "slug": "arbitrum"}
            }
        }, {
            "contract_address": "0x009be848df92a400da2f217256c88d1a9b1a0304f9b3e90991a67418e1d3b08c",
            "platform": {"name": "Sora", "coin": {"id": "5802", "name": "SORA", "symbol": "XOR", "slug": "sora"}}
        }, {
            "contract_address": "1f9840a85d5af5bf1d1762f925bdaddc4201f984.factory.bridge.near",
            "platform": {
                "name": "Near",
                "coin": {"id": "6535", "name": "NEAR Protocol", "symbol": "NEAR", "slug": "near-protocol"}
            }
        }, {
            "contract_address": "0x1fc14e78612edc54e36506c4a11a1a3be4fe48af",
            "platform": {
                "name": "Hoo Smart Chain",
                "coin": {"id": "15165", "name": "Hoo Smart Chain", "symbol": "HSC", "slug": "hoo-smart-chain"}
            }
        }],
        "self_reported_circulating_supply": null,
        "self_reported_tags": null,
        "self_reported_market_cap": null,
        "infinite_supply": false
    }, "8916": {
        "id": 8916,
        "name": "Internet Computer",
        "symbol": "ICP",
        "category": "token",
        "description": "Internet Computer (ICP) is a cryptocurrency launched in 2021and operates on the ICP platform. Internet Computer has a current supply of 518,842,940.69261855 with 464,071,904.50474226 in circulation. The last known price of Internet Computer is 12.8712563 USD and is down -3.30 over the last 24 hours. It is currently trading on 242 active market(s) with $97,805,023.95 traded over the last 24 hours. More information can be found at https://internetcomputer.org/.",
        "slug": "internet-computer",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png",
        "subreddit": "dfinity",
        "notice": "",
        "tags": ["platform", "distributed-computing", "collectibles-nfts", "defi", "privacy", "interoperability", "smart-contracts", "dao", "wallet", "storage", "polychain-capital-portfolio", "governance", "launchpad", "lending-borowing", "metaverse", "electric-capital-portfolio", "fenbushi-capital-portfolio", "hashkey-capital-portfolio", "a16z-portfolio", "multicoin-capital-portfolio", "exnetwork-capital-portfolio", "web3", "internet-computer-ecosystem", "bitcoin-ecosystem", "real-world-assets", "layer-1", "sec-security-token", "alleged-sec-securities", "depin"],
        "tag-names": ["Platform", "Distributed Computing", "Collectibles & NFTs", "DeFi", "Privacy", "Interoperability", "Smart Contracts", "DAO", "Wallet", "Storage", "Polychain Capital Portfolio", "Governance", "Launchpad", "Lending & Borrowing", "Metaverse", "Electric Capital Portfolio", "Fenbushi Capital Portfolio", "Hashkey Capital Portfolio", "a16z Portfolio", "Multicoin Capital Portfolio", "Exnetwork Capital Portfolio", "Web3", "Internet Computer Ecosystem", "Bitcoin Ecosystem", "Real World Assets", "Layer 1", "SEC Security Token", "Alleged SEC Securities", "DePIN"],
        "tag-groups": ["CATEGORY", "INDUSTRY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "INDUSTRY", "PLATFORM", "PLATFORM", "CATEGORY", "CATEGORY", "CATEGORY", "CATEGORY", "INDUSTRY"],
        "urls": {
            "website": ["https://internetcomputer.org/", "https://dfinity.org"],
            "twitter": ["https://twitter.com/dfinity"],
            "message_board": ["https://forum.dfinity.org", "https://medium.com/dfinity"],
            "chat": ["https://discord.gg/JJWatWr4qG", "https://t.me/+3AgG4S9KYHQzYjc1"],
            "facebook": [],
            "explorer": ["https://dashboard.internetcomputer.org/", "https://www.icpexplorer.org/#/", "https://icscan.io/"],
            "reddit": ["https://reddit.com/r/dfinity"],
            "technical_doc": ["https://internetcomputer.org/whitepaper.pdf"],
            "source_code": ["https://github.com/dfinity/ic"],
            "announcement": []
        },
        "platform": {
            "id": "8916",
            "name": "Internet Computer",
            "slug": "internet-computer",
            "symbol": "ICP",
            "token_address": "ryjl3-tyaaa-aaaaa-aaaba-cai"
        },
        "date_added": "2021-03-23T00:00:00.000Z",
        "twitter_username": "dfinity",
        "is_hidden": 0,
        "date_launched": "2021-05-10T00:00:00.000Z",
        "contract_address": [{
            "contract_address": "ryjl3-tyaaa-aaaaa-aaaba-cai",
            "platform": {
                "name": "ICP",
                "coin": {"id": "8916", "name": "Internet Computer", "symbol": "ICP", "slug": "internet-computer"}
            }
        }],
        "self_reported_circulating_supply": 464071904.50474226,
        "self_reported_tags": ["Platform", "AI & Big Data", "Gaming", "Smart Contracts", "Polychain Capital Portfolio", "Metaverse", "Electric Capital Portfolio", "Fenbushi Capital Portfolio", "Hashkey Capital Portfolio", "a16z Portfolio", "Multicoin Capital Portfolio", "Play To Earn", "Web3"],
        "self_reported_market_cap": 5944003357.346012,
        "infinite_supply": true
    }, "11419": {
        "id": 11419,
        "name": "Toncoin",
        "symbol": "TON",
        "category": "coin",
        "description": "Toncoin (TON) is a cryptocurrency . Toncoin has a current supply of 5,106,759,554.807245 with 3,474,473,387.3577485 in circulation. The last known price of Toncoin is 6.42187815 USD and is down -0.21 over the last 24 hours. It is currently trading on 331 active market(s) with $169,364,258.99 traded over the last 24 hours. More information can be found at https://ton.org/.",
        "slug": "toncoin",
        "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/11419.png",
        "subreddit": "",
        "notice": "",
        "tags": ["pos", "layer-1", "ftx-bankruptcy-estate", "dwf-labs-portfolio", "toncoin-ecosystem"],
        "tag-names": ["PoS", "Layer 1", "FTX Bankruptcy Estate ", "DWF Labs Portfolio", "Toncoin Ecosystem"],
        "tag-groups": ["ALGORITHM", "CATEGORY", "CATEGORY", "CATEGORY", "PLATFORM"],
        "urls": {
            "website": ["https://ton.org/"],
            "twitter": ["https://twitter.com/ton_blockchain"],
            "message_board": [],
            "chat": ["https://t.me/tonblockchain"],
            "facebook": [],
            "explorer": ["https://tonscan.org/", "https://ton.app/explorers", "https://tonviewer.com/", "https://etherscan.io/token/0x582d872a1b094fc48f5de31d3b73f2d9be47def1"],
            "reddit": [],
            "technical_doc": ["https://ton.org/whitepaper.pdf"],
            "source_code": ["https://github.com/ton-blockchain"],
            "announcement": []
        },
        "platform": {
            "id": "1027",
            "name": "Ethereum",
            "slug": "ethereum",
            "symbol": "ETH",
            "token_address": "0x582d872a1b094fc48f5de31d3b73f2d9be47def1"
        },
        "date_added": "2021-08-26T13:40:22.000Z",
        "twitter_username": "ton_blockchain",
        "is_hidden": 0,
        "date_launched": null,
        "contract_address": [{
            "contract_address": "0x582d872a1b094fc48f5de31d3b73f2d9be47def1",
            "platform": {
                "name": "Ethereum",
                "coin": {"id": "1027", "name": "Ethereum", "symbol": "ETH", "slug": "ethereum"}
            }
        }, {
            "contract_address": "0x76a797a59ba2c17726896976b7b3747bfd1d220f",
            "platform": {
                "name": "BNB Smart Chain (BEP20)",
                "coin": {"id": "1839", "name": "BNB", "symbol": "BNB", "slug": "bnb"}
            }
        }, {
            "contract_address": "EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c",
            "platform": {"name": "TON", "coin": {"id": "11419", "name": "Toncoin", "symbol": "TON", "slug": "toncoin"}}
        }],
        "self_reported_circulating_supply": 3414166606,
        "self_reported_tags": null,
        "self_reported_market_cap": 21779817663.372486,
        "infinite_supply": true
    }
}
const data = {
    '1': {
        id: 1,
        name: 'Bitcoin',
        symbol: 'BTC',
        category: 'coin',
        description:
            'Bitcoin (BTC) is a cryptocurrency launched in 2010. Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 19,645,193. The last known price of Bitcoin is 66,750.48093803 USD and is up 2.35 over the last 24 hours. It is currently trading on 10848 active market(s) with $75,693,606,050.91 traded over the last 24 hours. More information can be found at https://bitcoin.org/.',
        slug: 'bitcoin',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1.png',
        subreddit: 'bitcoin',
        notice: '',
        tags: [],
        'tag-names': [],
        'tag-groups': [],
        urls: {},
        platform: null,
        date_added: '2010-07-13T00:00:00.000Z',
        twitter_username: '',
        is_hidden: 0,
        date_launched: '2010-07-13T00:00:00.000Z',
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: false,
    },
    '825': {
        id: 825,
        name: 'Tether USDt',
        symbol: 'USDT',
        category: 'token',
        description:
            'Tether USDt (USDT) is a cryptocurrency and operates on the Ethereum platform. Tether USDt has a current supply of 103,800,078,701.87814 with 100,044,694,548.97124 in circulation. The last known price of Tether USDt is 1.00048841 USD and is down -0.01 over the last 24 hours. It is currently trading on 76924 active market(s) with $138,946,065,853.46 traded over the last 24 hours. More information can be found at https://tether.to.',
        slug: 'tether',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
        subreddit: '',
        notice: '',
        tags: [
            'payments',
            'stablecoin',
            'asset-backed-stablecoin',
            'avalanche-ecosystem',
            'solana-ecosystem',
            'arbitrum-ecosytem',
            'moonriver-ecosystem',
            'injective-ecosystem',
            'bnb-chain',
            'usd-stablecoin',
            'optimism-ecosystem',
        ],
        'tag-names': [
            'Payments',
            'Stablecoin',
            'Asset-Backed Stablecoin',
            'Avalanche Ecosystem',
            'Solana Ecosystem',
            'Arbitrum Ecosystem',
            'Moonriver Ecosystem',
            'Injective Ecosystem',
            'BNB Chain',
            'USD Stablecoin',
            'Optimism Ecosystem',
        ],
        'tag-groups': [
            'INDUSTRY',
            'CATEGORY',
            'CATEGORY',
            'PLATFORM',
            'PLATFORM',
            'PLATFORM',
            'PLATFORM',
            'PLATFORM',
            'PLATFORM',
            'CATEGORY',
            'PLATFORM',
        ],
        urls: {},
        platform: {
            id: '1027',
            name: 'Ethereum',
            slug: 'ethereum',
            symbol: 'ETH',
            token_address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        },
        date_added: '2015-02-25T00:00:00.000Z',
        twitter_username: 'tether_to',
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
    '1027': {
        id: 1027,
        name: 'Ethereum',
        symbol: 'ETH',
        category: 'coin',
        description:
            'Ethereum (ETH) is a cryptocurrency . Ethereum has a current supply of 120,127,131.78995213. The last known price of Ethereum is 3,698.38075861 USD and is up 4.89 over the last 24 hours. It is currently trading on 8497 active market(s) with $31,574,788,707.07 traded over the last 24 hours. More information can be found at https://www.ethereum.org/.',
        slug: 'ethereum',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png',
        subreddit: 'ethereum',
        notice: '',
        tags: [],
        'tag-names': [],
        'tag-groups': [],
        urls: {},
        platform: null,
        date_added: '2015-08-07T00:00:00.000Z',
        twitter_username: 'ethereum',
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
    '1839': {
        id: 1839,
        name: 'BNB',
        symbol: 'BNB',
        category: 'coin',
        description:
            'BNB (BNB) is a cryptocurrency . BNB has a current supply of 149,541,397.38261488. The last known price of BNB is 419.66183716 USD and is down -0.67 over the last 24 hours. It is currently trading on 2081 active market(s) with $2,547,806,853.73 traded over the last 24 hours. More information can be found at https://bnbchain.org/en.',
        slug: 'bnb',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png',
        subreddit: 'bnbchainofficial',
        notice: '',
        tags: [],
        'tag-names': [],
        'tag-groups': [],
        urls: {
            website: ['https://bnbchain.org/en'],
            twitter: ['https://twitter.com/bnbchain'],
            message_board: [],
            chat: ['https://t.me/BNBchaincommunity', 'https://t.me/bnbchain'],
            facebook: [],
            explorer: [
                'https://explorer.bnbchain.org/',
                'https://bsctrace.com/',
                'https://bscscan.com/token/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
                'https://www.oklink.com/bsc',
            ],
            reddit: ['https://reddit.com/r/bnbchainofficial'],
            technical_doc: [],
            source_code: ['https://github.com/bnb-chain'],
            announcement: [],
        },
        platform: null,
        date_added: '2017-07-25T00:00:00.000Z',
        twitter_username: 'bnbchain',
        is_hidden: 0,
        date_launched: null,
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: false,
    },
    '5426': {
        id: 5426,
        name: 'Solana',
        symbol: 'SOL',
        category: 'coin',
        description:
            'Solana (SOL) is a cryptocurrency launched in 2020. Solana has a current supply of 571,041,563.3089167 with 442,315,505.4744836 in circulation. The last known price of Solana is 130.62033647 USD and is down -1.43 over the last 24 hours. It is currently trading on 631 active market(s) with $4,914,597,503.56 traded over the last 24 hours. More information can be found at https://solana.com.',
        slug: 'solana',
        logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png',
        subreddit: 'solana',
        notice: '',
        tags: [],
        'tag-names': [],
        'tag-groups': [],
        urls: {},
        platform: null,
        date_added: '2020-04-10T00:00:00.000Z',
        twitter_username: 'solana',
        is_hidden: 0,
        date_launched: '2020-03-16T00:00:00.000Z',
        contract_address: [],
        self_reported_circulating_supply: null,
        self_reported_tags: null,
        self_reported_market_cap: null,
        infinite_supply: true,
    },
};
