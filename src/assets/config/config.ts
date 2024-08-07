type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://soderholm.sls.fi",
    projectNameDB: "soderholm",
    projectId: 7,
    backendBaseURL: "https://api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Till vänster ett svartvitt foto av en kvinna med kort, vågigt hår, en enkel mörk klänning och ett halssmycke. Till höger om henne en bakgrund som tonar ut i grönt.",
          URL: "assets/images/open-graph/kerstin-soderholm-og-1345x705.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: {
      1084: "1084_77105", 1699: "1699_77946", 1700: "1700_78162",
      1701: "1701_78326", 1702: "1702_78404", 1703: "1703_78486",
      1704: "1704_78634", 1705: "1705_78754", 1706: "1706_78908",
      1707: "1707_79024", 1708: "1708_79144", 1709: "1709_79356",
      1710: "1710_79428", 1711: "1711_79514", 1712: "1712_79620",
      1713: "1713_79722", 1714: "1714_79750", 1715: "1715_79828",
      1716: "1716_79976", 1717: "1717_80096", 1718: "1718_80294",
      1719: "1719_80348", 1720: "1720_80372", 1721: "1721_80400",
      1722: "1722_80468", 1723: "1723_80534", 1724: "1724_80542",
      1725: "1725_80574", 1726: "1726_80722", 1727: "1727_80760",
      1729: "1729_80764", 1731: "1731_80768", 1732: "1732_80772",
      1733: "1733_80778", 1734: "1734_80790", 1735: "1735_80840",
      1736: "1736_81008", 1737: "1737_81304", 1738: "1738_81334",
      1739: "1739_81348", 1740: "1740_81372", 1741: "1741_81390",
      1742: "1742_81414", 1743: "1743_81488", 1745: "1745_81624",
      1746: "1746_81628", 1747: "1747_81634", 1748: "1748_81692",
      1749: "1749_81726", 1750: "1750_81735", 1751: "1751_81921",
      1752: "1752_81940", 2559: "2559_84260", 378: "378_24876",
      379: "379_24826", 380: "380_24152", 381: "381_24900",
      382: "382_24262", 383: "383_24482", 384: "384_26616",
      385: "385_26618", 386: "386_26600", 387: "387_26606",
      388: "388_26608", 389: "389_24484", 390: "390_26614",
      391: "391_24488", 392: "392_26612", 393: "393_24490",
      394: "394_24492", 395: "395_24480", 396: "396_24478",
      397: "397_24464", 398: "398_24466", 399: "399_24468",
      400: "400_24470", 401: "401_24472", 402: "402_24494",
      403: "403_24496", 404: "404_24498", 405: "405_25006",
      406: "406_26564", 407: "407_25146", 408: "408_26050",
      409: "409_26210", 410: "410_25356", 411: "411_24696",
      412: "412_26610", 413: "413_25470", 414: "414_27097",
      415: "415_27089", 416: "416_25594", 417: "417_26428",
      418: "418_27388", 419: "419_27386", 420: "420_24500",
      421: "421_25738", 422: "422_27099", 423: "423_26843",
      424: "424_27372", 425: "425_27093", 426: "426_27124",
      427: "427_27107", 428: "428_27362", 429: "429_27109",
      430: "430_27111", 431: "431_27376", 432: "432_27113",
      433: "433_27115", 434: "434_27119", 435: "435_26620",
      436: "436_27126", 437: "437_27128", 438: "438_27130",
      439: "439_27132", 440: "440_27134", 441: "441_27136",
      442: "442_27138", 443: "443_27140", 444: "444_27142",
      445: "445_27144", 446: "446_27160", 447: "447_27146",
      448: "448_27148", 449: "449_27150", 450: "450_27152",
      451: "451_27156", 452: "452_27154", 453: "453_27158",
      454: "454_27198", 455: "455_27200", 456: "456_27202",
      457: "457_27208", 458: "458_27210", 459: "459_27212",
      460: "460_27214", 461: "461_27206", 462: "462_27216",
      463: "463_27218", 464: "464_27220", 465: "465_27222",
      466: "466_27228", 467: "467_27230", 468: "468_27232",
      469: "469_27234", 470: "470_27236", 471: "471_27238",
      472: "472_27240", 473: "473_27242", 474: "474_27244",
      475: "475_27246", 476: "476_27248", 477: "477_27254",
      478: "478_27252", 479: "479_27256", 480: "480_27250",
      481: "481_27384", 482: "482_27258", 483: "483_27380",
      484: "484_27260", 485: "485_27382", 486: "486_27264",
      487: "487_27103", 488: "488_27105", 489: "489_27266",
      490: "490_27268", 491: "491_26326", 492: "492_27270",
      493: "493_27272", 494: "494_27274", 495: "495_27360",
      496: "496_27276", 497: "497_27364", 498: "498_27278",
      499: "499_27282", 500: "500_27284", 501: "501_27286",
      502: "502_27288", 503: "503_27290", 504: "504_27294",
      505: "505_27292", 506: "506_27296", 507: "507_27298",
      508: "508_27300", 509: "509_27302", 510: "510_27308",
      511: "511_27304", 512: "512_27312", 513: "513_27314",
      514: "514_27316", 515: "515_27318", 516: "516_27320",
      517: "517_27322", 518: "518_27324", 519: "519_27326",
      520: "520_27328", 521: "521_27330", 522: "522_27336",
      523: "523_27338", 524: "524_27340", 525: "525_27342",
      526: "526_27344", 527: "527_27346", 528: "528_27348",
      529: "529_27350", 530: "530_27354", 531: "531_27356",
      532: "532_27358", 533: "533_26046", 534: "534_26048",
      535: "535_27366", 536: "536_27368", 540: "540_37812"
    },
    frontMatterPages: {
      cover: false,
      title: false,
      foreword: false,
      introduction: false
    },
    highlightSearchMatches: true,
    inlineIllustrations: [],
    mediaCollectionMappings: {},
    order: [
      [378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 
        393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 
        408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 
        423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 
        438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 
        453, 454, 455, 456, 540, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466,
        467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 1084, 480,
        481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495,
        496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 511,
        512, 510, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525,
        526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536],  
      [2559], 
      [1646, 1699, 1701, 1747, 1702, 1703, 1704, 1726, 1705, 1714, 1706, 1707,
        1715, 1721, 1716, 1717, 1718, 1708, 1722, 1749, 1742, 1719, 1748, 1731,
        1746, 1745, 1720, 1743, 1752, 1711, 1710, 1712, 1727, 1713, 1709, 1700,
        1751, 1739, 1738, 1741, 1723, 1724, 1725, 1737, 1740, 1750, 1729, 1732,
        1733, 1734, 1735, 1736]
    ]
  },
  ebooks: [
    {
      title: "Dagböcker",
      filename: "soderholm_dagbocker.epub",
      externalFileURL: "",
      coverURL: "assets/images/covers/Kerstin-Soderholms-dagbocker-cover-web.jpg",
      downloadOptions: [
        {
          url: "https://www.sls.fi/publications/kerstin-soderholms-dagbocker/",
          label: ""
        }
      ]
    }
  ],
  page: {
    about: {
      initialPageNode: "01"
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: false,
      filterGroupsOpenByDefault: ["Collection"],
      hitsPerPage: 15,
      indices: ["soderholm"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["ms"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 40
          }
        }
      }
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Till vänster ett svartvitt foto av en kvinna med kort, vågigt hår, en enkel  mörk klänning och ett halssmycke. Till höger om henne finns en grön bakgrund med handskriven text ur en dagbok."
        },
        intrinsicSize: {
          height: 713,
          width: 1917
        },
        orientationPortrait: false,
        alternateSources: [
          {
            media: "(max-width: 1100px)",
            srcset: "assets/images/kerstin_soderholm_1344x500.avif 1344w",
            type: "image/avif"
          },
          {
            media: "(max-width: 1100px)",
            srcset: "assets/images/kerstin_soderholm_1344x500x713.jpg 1344w",
            type: "image/jpeg"
          },
          {
            srcset: "assets/images/kerstin_soderholm_1917x713.avif 1917w",
            type: "image/avif"
          },
          {
            srcset: "assets/images/kerstin_soderholm_1917x713.jpg 1917w",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/kerstin_soderholm_1917x713.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: true,
        placeInfo: false,
        workInfo: true,
        paragraphNumbering: true,
        pageBreakEdition: true
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["facsimiles", "manuscripts"],
      defaultViewOptions: [],
      showTextDownloadButton: true,
      showURNButton: false,
      showViewOptionsButton: true,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: false,
        normalisations: false,
        workInfo: false,
        abbreviations: false,
        paragraphNumbering: false,
        pageBreakOriginal: false,
        pageBreakEdition: false
      },
      viewTypes: {
        showAll: false,
        readingtext: false,
        comments: false,
        facsimiles: true,
        manuscripts: true,
        variants: false,
        illustrations: false,
        legend: false,
        metadata: false
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeEbooks: true,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text",
        fi: "Alt-teksti"
      },
      showTitles: true
    },
    epub: {
      showTOCButton: true,
      showURNButton: false,
      showViewOptionsButton: true
    },
    facsimiles: {
      imageQuality: 2,
      showTitle: false
    },
    mainSideMenu: {
      items: {
        home: false,
        about: true,
        ebooks: true,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: true,
        indexPlaces: false,
        indexWorks: false
      }
    },
    manuscripts: {
      showTitle: false,
      showNormalizedToggle: false,
      showOpenLegendButton: false
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: true,
      showURNButton: false,
      showLanguageButton: false,
      showSiteLogo: true,
      siteLogoDefaultImageURL: "assets/images/logo/SLS_logo_full_white_346x112.png",
      siteLogoMobileImageURL: "assets/images/logo/SLS_logo_symbol_white_112x112.png",
      siteLogoLinkURL: "https://www.sls.fi/",
      siteLogoDimensions: {
        default: {
          height: 56,
          width: 173
        },
        mobile: {
          height: 56,
          width: 56
        }
      }
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 2
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: false,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: true
    }
  }
}
