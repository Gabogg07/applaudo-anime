import React, {Component} from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import ShowCard from '../ShowCard/ShowCard';

const {width} = Dimensions.get('window');

class ShowCardList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={animes.data}
          renderItem={({item: show}) => {
            // return <Text>{show.attributes.slug}</Text>
            return <ShowCard styles={{width: width / 4}} data={show}/>;
          }}
        />
      </View>
    );
  }
}

export default ShowCardList;

const animes = {
  "data": [
    {
      id: '1',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/1',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:13.609Z',
        updatedAt: '2020-08-03T22:47:46.704Z',
        slug: 'cowboy-bebop',
        synopsis:
          'In the year 2071, humanity has colonized several of the planets and moons of the solar system leaving the now uninhabitable surface of planet Earth behind. The Inter Solar System Police attempts to keep peace in the galaxy, aided in part by outlaw bounty hunters, referred to as "Cowboys". The ragtag team aboard the spaceship Bebop are two such individuals.\r\nMellow and carefree Spike Spiegel is balanced by his boisterous, pragmatic partner Jet Black as the pair makes a living chasing bounties and collecting rewards. Thrown off course by the addition of new members that they meet in their travels—Ein, a genetically engineered, highly intelligent Welsh Corgi; femme fatale Faye Valentine, an enigmatic trickster with memory loss; and the strange computer whiz kid Edward Wong—the crew embarks on thrilling adventures that unravel each member\'s dark and mysterious past little by little. \r\nWell-balanced with high density action and light-hearted comedy, Cowboy Bebop is a space Western classic and an homage to the smooth and improvised music it is named after.\r\n\r\n(Source: MAL Rewrite)',
        "coverImageTopOffset": 400,
        "titles": {
          en: 'Cowboy Bebop',
          en_jp: 'Cowboy Bebop',
          ja_jp: 'カウボーイビバップ',
        },
        canonicalTitle: 'Cowboy Bebop',
        abbreviatedTitles: ['COWBOY BEBOP'],
        averageRating: '82.48',
        "ratingFrequencies": {
          '2': '3411',
          '3': '53',
          '4': '402',
          '5': '29',
          '6': '168',
          '7': '33',
          '8': '3214',
          '9': '37',
          '10': '646',
          '11': '55',
          '12': '2149',
          '13': '119',
          '14': '6813',
          '15': '303',
          '16': '7191',
          '17': '584',
          '18': '8722',
          '19': '550',
          '20': '30761',
        },
        "userCount": 113294,
        "favoritesCount": 4462,
        startDate: '1998-04-03',
        endDate: '1999-04-24',
        "nextRelease": null,
        "popularityRank": 27,
        "ratingRank": 102,
        ageRating: 'R',
        ageRatingGuide: '17+ (violence & profanity)',
        subtype: 'TV',
        status: 'finished',
        "tba": null,
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/1/tiny.jpg?1431697256',
          small:
            'https://media.kitsu.io/anime/poster_images/1/small.jpg?1431697256',
          medium:
            'https://media.kitsu.io/anime/poster_images/1/medium.jpg?1431697256',
          large:
            'https://media.kitsu.io/anime/poster_images/1/large.jpg?1431697256',
          original:
            'https://media.kitsu.io/anime/poster_images/1/original.jpg?1431697256',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny:
            'https://media.kitsu.io/anime/cover_images/1/tiny.jpg?1519178801',
          small:
            'https://media.kitsu.io/anime/cover_images/1/small.jpg?1519178801',
          large:
            'https://media.kitsu.io/anime/cover_images/1/large.jpg?1519178801',
          original:
            'https://media.kitsu.io/anime/cover_images/1/original.jpg?1519178801',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 26,
        "episodeLength": 25,
        "totalLength": 626,
        youtubeVideoId: 'qig4KOK2R2g',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/1/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/1/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/1/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/1/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/1/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/1/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/1/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/1/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/1/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/1/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/1/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/1/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/1/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/1/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/1/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/1/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/1/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/1/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/1/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/1/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/1/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/1/anime-staff',
          },
        },
      },
    },
    {
      id: '2',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/2',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:16.085Z',
        updatedAt: '2020-08-03T19:15:05.439Z',
        slug: 'cowboy-bebop-tengoku-no-tobira',
        synopsis:
          'Another day, another bounty—such is the life of the often unlucky crew of the Bebop. However, this routine is interrupted when Faye, who is chasing a fairly worthless target on Mars, witnesses an oil tanker suddenly explode, causing mass hysteria. As casualties mount due to a strange disease spreading through the smoke from the blast, a whopping three hundred million woolong price is placed on the head of the supposed perpetrator.\r\nWith lives at stake and a solution to their money problems in sight, the Bebop crew springs into action. Spike, Jet, Faye, and Edward, followed closely by Ein, split up to pursue different leads across Alba City. Through their individual investigations, they discover a cover-up scheme involving a pharmaceutical company, revealing a plot that reaches much further than the ragtag team of bounty hunters could have realized.\r\n[Written by MAL Rewrite]',
        "coverImageTopOffset": 220,
        "titles": {
          en: 'Cowboy Bebop: The Movie',
          en_jp: 'Cowboy Bebop: Tengoku no Tobira',
          "en_us": "Cowboy Bebop: Knockin' on Heaven's Door",
          ja_jp: 'カウボーイビバップ天国の扉',
        },
        "canonicalTitle": "Cowboy Bebop: Knockin' on Heaven's Door",
        "abbreviatedTitles": [],
        averageRating: '82.32',
        "ratingFrequencies": {
          '2': '595',
          '3': '5',
          '4': '42',
          '5': '4',
          '6': '22',
          '7': '3',
          '8': '485',
          '9': '2',
          '10': '160',
          '11': '12',
          '12': '642',
          '13': '33',
          '14': '2137',
          '15': '81',
          '16': '3623',
          '17': '171',
          '18': '3055',
          '19': '119',
          '20': '5695',
        },
        "userCount": 30252,
        "favoritesCount": 308,
        startDate: '2001-09-01',
        endDate: '2001-09-01',
        "nextRelease": null,
        "popularityRank": 284,
        "ratingRank": 204,
        ageRating: 'R',
        ageRatingGuide: '17+ (violence & profanity)',
        subtype: 'movie',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/2/tiny.jpg?1435249715',
          small:
            'https://media.kitsu.io/anime/poster_images/2/small.jpg?1435249715',
          medium:
            'https://media.kitsu.io/anime/poster_images/2/medium.jpg?1435249715',
          large:
            'https://media.kitsu.io/anime/poster_images/2/large.jpg?1435249715',
          original:
            'https://media.kitsu.io/anime/poster_images/2/original.jpg?1435249715',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/2/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/2/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/2/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/2/original.png',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 1,
        "episodeLength": 114,
        "totalLength": 114,
        youtubeVideoId: 'hc7IxJ93jtM',
        showType: 'movie',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/2/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/2/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/2/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/2/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/2/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/2/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/2/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/2/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/2/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/2/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/2/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/2/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/2/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/2/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/2/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/2/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/2/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/2/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/2/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/2/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/2/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/2/anime-staff',
          },
        },
      },
    },
    {
      id: '3',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/3',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:17.112Z',
        updatedAt: '2020-08-03T21:43:26.071Z',
        slug: 'trigun',
        synopsis:
          'Vash the Stampede is the man with a $$60,000,000 bounty on his head. The reason: he\'s a merciless villain who lays waste to all those that oppose him and flattens entire cities for fun, garnering him the title "The Humanoid Typhoon." He leaves a trail of death and destruction wherever he goes, and anyone can count themselves dead if they so much as make eye contact—or so the rumors say. In actuality, Vash is a huge softie who claims to have never taken a life and avoids violence at all costs.\r\nWith his crazy doughnut obsession and buffoonish attitude in tow, Vash traverses the wasteland of the planet Gunsmoke, all the while followed by two insurance agents, Meryl Stryfe and Milly Thompson, who attempt to minimize his impact on the public. But soon, their misadventures evolve into life-or-death situations as a group of legendary assassins are summoned to bring about suffering to the trio. Vash\'s agonizing past will be unraveled and his morality and principles pushed to the breaking point.\r\n[Written by MAL Rewrite]',
        "coverImageTopOffset": 100,
        "titles": {
          en: 'Trigun',
          en_jp: 'Trigun',
          ja_jp: 'トライガン',
        },
        canonicalTitle: 'Trigun',
        "abbreviatedTitles": [],
        averageRating: '82.29',
        "ratingFrequencies": {
          '2': '460',
          '3': '10',
          '4': '63',
          '5': '3',
          '6': '59',
          '7': '3',
          '8': '521',
          '9': '8',
          '10': '375',
          '11': '23',
          '12': '1114',
          '13': '63',
          '14': '3382',
          '15': '157',
          '16': '4696',
          '17': '235',
          '18': '3524',
          '19': '113',
          '20': '7303',
        },
        "userCount": 44206,
        "favoritesCount": 1220,
        startDate: '1998-04-01',
        endDate: '1998-09-30',
        "nextRelease": null,
        "popularityRank": 165,
        "ratingRank": 215,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/3/tiny.jpg?1529208785',
          small:
            'https://media.kitsu.io/anime/poster_images/3/small.jpg?1529208785',
          medium:
            'https://media.kitsu.io/anime/poster_images/3/medium.jpg?1529208785',
          large:
            'https://media.kitsu.io/anime/poster_images/3/large.jpg?1529208785',
          original:
            'https://media.kitsu.io/anime/poster_images/3/original.jpg?1529208785',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 110,
                height: 156,
              },
              "small": {
                "width": 284,
                height: 402,
              },
              "medium": {
                "width": 390,
                height: 554,
              },
              "large": {
                "width": 550,
                height: 780,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/3/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/3/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/3/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/3/original.jpg',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 26,
        "episodeLength": 24,
        "totalLength": 624,
        youtubeVideoId: 'bJVyIXeUznY',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/3/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/3/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/3/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/3/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/3/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/3/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/3/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/3/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/3/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/3/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/3/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/3/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/3/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/3/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/3/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/3/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/3/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/3/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/3/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/3/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/3/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/3/anime-staff',
          },
        },
      },
    },
    {
      id: '4',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/4',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:18.116Z',
        updatedAt: '2020-08-03T18:00:29.547Z',
        slug: 'witch-hunter-robin',
        synopsis:
          "Witches are individuals with special powers like ESP, telekinesis, mind control, etc. (not the typical hogwart and newt potions). Robin, a 15-year-old craft user, arrives from Italy to Japan to work for an organization named STN Japan Division (STN-J) as a replacement for one of STN-J's witch hunters who was recently killed. Unlike other divisions of STN, STN-J tries to capture the witches alive in order to learn why and how they became witches in the first place.\r\n(Source: ANN)",
        "coverImageTopOffset": 230,
        "titles": {
          en: 'Witch Hunter Robin',
          en_jp: 'Witch Hunter Robin',
          ja_jp: 'ウィッチハンター ロビン',
        },
        canonicalTitle: 'Witch Hunter Robin',
        abbreviatedTitles: ['WHR'],
        averageRating: '72.39',
        "ratingFrequencies": {
          '2': '9',
          '3': '0',
          '4': '24',
          '5': '1',
          '6': '24',
          '7': '3',
          '8': '114',
          '9': '2',
          '10': '177',
          '11': '2',
          '12': '453',
          '13': '4',
          '14': '651',
          '15': '11',
          '16': '634',
          '17': '4',
          '18': '217',
          '19': '1',
          '20': '287',
        },
        "userCount": 6947,
        "favoritesCount": 46,
        startDate: '2002-07-02',
        endDate: '2002-12-24',
        "nextRelease": null,
        "popularityRank": 1493,
        "ratingRank": 2729,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/4/tiny.jpg?1408440451',
          small:
            'https://media.kitsu.io/anime/poster_images/4/small.jpg?1408440451',
          medium:
            'https://media.kitsu.io/anime/poster_images/4/medium.jpg?1408440451',
          large:
            'https://media.kitsu.io/anime/poster_images/4/large.jpg?1408440451',
          original:
            'https://media.kitsu.io/anime/poster_images/4/original.jpg?1408440451',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/4/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/4/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/4/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/4/original.jpg',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 26,
        "episodeLength": 25,
        "totalLength": 650,
        youtubeVideoId: '7UkaILjPk8M',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/4/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/4/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/4/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/4/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/4/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/4/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/4/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/4/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/4/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/4/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/4/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/4/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/4/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/4/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/4/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/4/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/4/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/4/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/4/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/4/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/4/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/4/anime-staff',
          },
        },
      },
    },
    {
      id: '5',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/5',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:18.955Z',
        updatedAt: '2020-08-03T18:00:29.547Z',
        slug: 'beet-the-vandel-buster',
        synopsis:
          "It is the dark century and the people are suffering under the rule of the devil, Vandel, who is able to manipulate monsters. The Vandel Busters are a group of people who hunt these devils, and among them, the Zenon Squad is known to be the strongest busters on the continent. A young boy, Beet, dreams of joining the Zenon Squad. However, one day, as a result of Beet's fault, the Zenon squad was defeated by the devil, Beltose. The five dying busters sacrificed their life power into their five weapons, Saiga. After giving their weapons to Beet, they passed away. Years have passed since then and the young Vandel Buster, Beet, begins his adventure to carry out the Zenon Squad's will to put an end to the dark century. ",
        "coverImageTopOffset": 0,
        "titles": {
          en: 'Beet the Vandel Buster',
          en_jp: 'Beet the Vandel Buster',
          ja_jp: '冒険王ビィト',
        },
        canonicalTitle: 'Beet the Vandel Buster',
        abbreviatedTitles: ['Adventure King Beet', 'Bouken Ou Beet'],
        averageRating: '69.27',
        "ratingFrequencies": {
          '2': '3',
          '3': '0',
          '4': '8',
          '5': '1',
          '6': '2',
          '7': '0',
          '8': '25',
          '9': '0',
          '10': '36',
          '11': '1',
          '12': '61',
          '13': '2',
          '14': '99',
          '15': '1',
          '16': '64',
          '17': '0',
          '18': '26',
          '19': '0',
          '20': '27',
        },
        "userCount": 928,
        "favoritesCount": 4,
        startDate: '2004-09-30',
        endDate: '2005-09-29',
        "nextRelease": null,
        "popularityRank": 4730,
        "ratingRank": 4316,
        ageRating: 'PG',
        ageRatingGuide: 'Children',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/5/tiny.jpg?1408440453',
          small:
            'https://media.kitsu.io/anime/poster_images/5/small.jpg?1408440453',
          medium:
            'https://media.kitsu.io/anime/poster_images/5/medium.jpg?1408440453',
          large:
            'https://media.kitsu.io/anime/poster_images/5/large.jpg?1408440453',
          original:
            'https://media.kitsu.io/anime/poster_images/5/original.jpg?1408440453',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": null,
        "episodeCount": 52,
        "episodeLength": null,
        "totalLength": 23,
        youtubeVideoId: '',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/5/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/5/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/5/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/5/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/5/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/5/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/5/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/5/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/5/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/5/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/5/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/5/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/5/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/5/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/5/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/5/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/5/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/5/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/5/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/5/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/5/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/5/anime-staff',
          },
        },
      },
    },
    {
      id: '6',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/6',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:20.071Z',
        updatedAt: '2020-08-03T18:00:29.547Z',
        slug: 'eyeshield-21',
        synopsis:
          'Sena is like any other shy kid starting high school; he\'s just trying to survive. Constantly bullied, he\'s accustomed to running away.\r\nSurviving high school is about to become a lot more difficult after Hiruma, captain of the school\'s American football team, witnesses Sena\'s incredible agility and speed during an escape from some bullies. Hiruma schemes to make Sena the running back of his school team, The Devil Bats, hoping that it will turn around the squad\'s fortunes from being the laughingstock of Japan\'s high school leagues, to title contender.\r\nTo protect his precious star player from rivaling recruiters, he enlists Sena as "team secretary," giving him a visored helmet and the nickname "Eyeshield 21" to hide his identity.\r\nThe Devilbats will look to make their way to the Christmas Bowl, an annual tournament attended by the best football teams in Japan, with "Eyeshield 21" leading the way. Will they be able to win the Christmas Bowl? Will Sena be able to transform from a timid, undersized freshman to an all-star player? Put on your pads and helmet to find out!',
        "coverImageTopOffset": 214,
        "titles": {
          en_jp: 'Eyeshield 21',
          ja_jp: 'アイシールド21',
        },
        canonicalTitle: 'Eyeshield 21',
        abbreviatedTitles: ['Eyeshield21'],
        averageRating: '78.39',
        "ratingFrequencies": {
          '2': '41',
          '3': '0',
          '4': '18',
          '5': '1',
          '6': '23',
          '7': '0',
          '8': '81',
          '9': '2',
          '10': '165',
          '11': '8',
          '12': '366',
          '13': '14',
          '14': '876',
          '15': '25',
          '16': '968',
          '17': '23',
          '18': '567',
          '19': '5',
          '20': '870',
        },
        "userCount": 9488,
        "favoritesCount": 122,
        startDate: '2005-04-06',
        endDate: '2008-03-19',
        "nextRelease": null,
        "popularityRank": 1129,
        "ratingRank": 841,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/6/tiny.jpg?1420129354',
          small:
            'https://media.kitsu.io/anime/poster_images/6/small.jpg?1420129354',
          medium:
            'https://media.kitsu.io/anime/poster_images/6/medium.jpg?1420129354',
          large:
            'https://media.kitsu.io/anime/poster_images/6/large.jpg?1420129354',
          original:
            'https://media.kitsu.io/anime/poster_images/6/original.jpg?1420129354',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/6/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/6/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/6/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/6/original.jpg',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 145,
        "episodeLength": 23,
        "totalLength": 3335,
        youtubeVideoId: '',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/6/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/6/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/6/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/6/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/6/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/6/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/6/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/6/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/6/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/6/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/6/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/6/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/6/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/6/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/6/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/6/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/6/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/6/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/6/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/6/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/6/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/6/anime-staff',
          },
        },
      },
    },
    {
      id: '7',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/7',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:21.182Z',
        updatedAt: '2020-08-03T18:00:29.547Z',
        slug: 'honey-and-clover',
        synopsis:
          "Yuuta, Takumi, and Shinobu share a six-tatami room apartment with no bath. The rent is low and it's perfect for poor college students such as themselves. Shinobu is a mysterious, quirky person, who does things on a whim. Takumi is passionate both in work and love, and Yuuta is a simple person with simple dreams and desires. That is, until he meets Hagumi, a petite girl with enormous amount of talent. Hagumi is fondly called Hagu by Shuuji, who serves as Hagu's guardian. Hagu meets Ayumi, nicknamed Ayu, and they become close friends almost instantly. Meanwhile, Ayu falls for one of the boys...\r\nThe joys of falling in love, the pain of letting go, discovering one's self, and finding the courage to move on—these are some of the things that the characters in Hachimitsu to Clover experience as they take part in the play staged by fate.",
        "coverImageTopOffset": 50,
        "titles": {
          en: 'Honey and Clover',
          en_jp: 'Hachimitsu to Clover',
          ja_jp: 'ハチミツとクローバー',
        },
        canonicalTitle: 'Honey and Clover',
        abbreviatedTitles: ['HachiKuro', 'Honey & Clover'],
        averageRating: '79.47',
        "ratingFrequencies": {
          '2': '54',
          '3': '1',
          '4': '35',
          '5': '0',
          '6': '34',
          '7': '0',
          '8': '167',
          '9': '1',
          '10': '186',
          '11': '3',
          '12': '397',
          '13': '11',
          '14': '880',
          '15': '30',
          '16': '1411',
          '17': '28',
          '18': '933',
          '19': '10',
          '20': '1230',
        },
        "userCount": 17253,
        "favoritesCount": 258,
        startDate: '2005-04-15',
        endDate: '2005-09-27',
        "nextRelease": null,
        "popularityRank": 609,
        "ratingRank": 668,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/7/tiny.jpg?1417880955',
          small:
            'https://media.kitsu.io/anime/poster_images/7/small.jpg?1417880955',
          medium:
            'https://media.kitsu.io/anime/poster_images/7/medium.jpg?1417880955',
          large:
            'https://media.kitsu.io/anime/poster_images/7/large.jpg?1417880955',
          original:
            'https://media.kitsu.io/anime/poster_images/7/original.jpg?1417880955',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/7/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/7/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/7/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/7/original.jpg',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 24,
        "episodeLength": 23,
        "totalLength": 552,
        youtubeVideoId: '6TN4a0kZuXg',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/7/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/7/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/7/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/7/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/7/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/7/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/7/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/7/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/7/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/7/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/7/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/7/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/7/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/7/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/7/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/7/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/7/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/7/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/7/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/7/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/7/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/7/anime-staff',
          },
        },
      },
    },
    {
      id: '8',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/8',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:22.113Z',
        updatedAt: '2020-08-03T18:00:29.547Z',
        slug: 'hungry-heart-wild-striker',
        synopsis:
          'Kyosuke Kano has lived under the shadow of his successful brother Seisuke all his life who is a professional soccer player. Tired of being compared and downgraded at, he abandoned playing soccer until a boy from his new highschool discovered him and asked him to join their team. Kyosuke joins it and befriends two other first year players named Rodrigo and Sakai with the dream of becomming professional soccer players themselves.\r\n(Source: ANN)',
        "coverImageTopOffset": 0,
        "titles": {
          en_jp: 'Hungry Heart: Wild Striker',
          ja_jp: 'ハングリーハート Wild Striker',
        },
        canonicalTitle: 'Hungry Heart: Wild Striker',
        "abbreviatedTitles": [],
        averageRating: '74.0',
        "ratingFrequencies": {
          '2': '7',
          '3': '0',
          '4': '6',
          '5': '0',
          '6': '2',
          '7': '0',
          '8': '35',
          '9': '0',
          '10': '38',
          '11': '1',
          '12': '99',
          '13': '2',
          '14': '216',
          '15': '3',
          '16': '177',
          '17': '1',
          '18': '72',
          '19': '0',
          '20': '102',
        },
        "userCount": 1617,
        "favoritesCount": 16,
        startDate: '2002-09-11',
        endDate: '2003-09-10',
        "nextRelease": null,
        "popularityRank": 3705,
        "ratingRank": 2044,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/8/tiny.jpg?1416601584',
          small:
            'https://media.kitsu.io/anime/poster_images/8/small.jpg?1416601584',
          medium:
            'https://media.kitsu.io/anime/poster_images/8/medium.jpg?1416601584',
          large:
            'https://media.kitsu.io/anime/poster_images/8/large.jpg?1416601584',
          original:
            'https://media.kitsu.io/anime/poster_images/8/original.jpg?1416601584',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": null,
        "episodeCount": 52,
        "episodeLength": null,
        "totalLength": 23,
        youtubeVideoId: '',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/8/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/8/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/8/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/8/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/8/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/8/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/8/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/8/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/8/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/8/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/8/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/8/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/8/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/8/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/8/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/8/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/8/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/8/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/8/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/8/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/8/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/8/anime-staff',
          },
        },
      },
    },
    {
      id: '9',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/9',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:22.975Z',
        updatedAt: '2020-08-03T22:21:22.403Z',
        slug: 'initial-d-fourth-stage',
        synopsis:
          'Takumi Fujiwara and brothers Keisuke and Ryousuke Takahashi have formed "Project D," a racing team aimed at bringing their driving skills to their full potential outside their prefecture. Using the internet, Project D issues challenges to other racing teams and posts results of their races. Managed by Ryousuke, the team has Takumi engaging in downhill battles with his AE86, while Keisuke challenges opponents uphill. Among their rivals are the Seven-Star Leaf (SSR) and Todo-juku.',
        "coverImageTopOffset": 100,
        "titles": {
          en_jp: 'Initial D Fourth Stage',
          ja_jp: '頭文字〈イニシャル〉D FOURTH STAGE',
        },
        canonicalTitle: 'Initial D Fourth Stage',
        abbreviatedTitles: ['Initial D 4th Stage'],
        averageRating: '80.31',
        "ratingFrequencies": {
          '2': '92',
          '3': '0',
          '4': '11',
          '5': '0',
          '6': '4',
          '7': '1',
          '8': '92',
          '9': '0',
          '10': '82',
          '11': '3',
          '12': '254',
          '13': '19',
          '14': '781',
          '15': '27',
          '16': '1047',
          '17': '39',
          '18': '653',
          '19': '19',
          '20': '1072',
        },
        "userCount": 7603,
        "favoritesCount": 76,
        startDate: '2004-04-17',
        endDate: '2006-02-18',
        "nextRelease": null,
        "popularityRank": 1375,
        "ratingRank": 550,
        ageRating: 'PG',
        ageRatingGuide: 'Teens 13 or older',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/9/tiny.jpg?1438856488',
          small:
            'https://media.kitsu.io/anime/poster_images/9/small.jpg?1438856488',
          medium:
            'https://media.kitsu.io/anime/poster_images/9/medium.jpg?1438856488',
          large:
            'https://media.kitsu.io/anime/poster_images/9/large.jpg?1438856488',
          original:
            'https://media.kitsu.io/anime/poster_images/9/original.jpeg?1438856488',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny:
            'https://media.kitsu.io/anime/cover_images/9/tiny.jpg?1519178856',
          small:
            'https://media.kitsu.io/anime/cover_images/9/small.jpg?1519178856',
          large:
            'https://media.kitsu.io/anime/cover_images/9/large.jpg?1519178856',
          original:
            'https://media.kitsu.io/anime/cover_images/9/original.jpg?1519178856',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 24,
        "episodeLength": 27,
        "totalLength": 648,
        youtubeVideoId: 'T0HCsCYVM-Y',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/9/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/9/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/9/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/9/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/9/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/9/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/9/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/9/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/9/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/9/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/9/staff',
          },
        },
        "productions": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/9/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/9/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/9/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/9/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/9/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/9/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/9/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/9/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/9/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/9/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/9/anime-staff',
          },
        },
      },
    },
    {
      id: '10',
      type: 'anime',
      "links": {
        self: 'https://kitsu.io/api/edge/anime/10',
      },
      "attributes": {
        createdAt: '2013-02-20T16:00:23.893Z',
        updatedAt: '2020-08-03T19:51:42.332Z',
        slug: 'monster',
        synopsis:
          "Dr. Kenzou Tenma is a renowned brain surgeon of Japanese descent working in Europe. Highly lauded by his peers as one of the great young minds that will revolutionize the field, he is blessed with a beautiful fiancée and is on the cusp of a big promotion in the hospital he works at. But all of that is about to change with a grave dilemma that Kenzou faces one night—whether to save the life of a small boy or that of the town's mayor. Despite being pressured by his superiors to perform surgery on the mayor, his morals force him to perform the surgery on the other critical patient, saving his life and forfeiting the mayor's. A doctor is taught to believe that all life is equal; however, when a series of murders occur in the surgeon's vicinity, all of the evidence pointing to the boy he saved, Kenzou's beliefs are shaken. Along his journey to unravel the true identity of his little patient, Kenzou discovers that the fate of the world may be intertwined with the mysterious child.\r\n[Written by MAL Rewrite]",
        "coverImageTopOffset": 200,
        "titles": {
          en: 'Monster',
          en_jp: 'Monster',
          ja_jp: 'モンスター',
        },
        canonicalTitle: 'Monster',
        "abbreviatedTitles": [],
        averageRating: '82.32',
        "ratingFrequencies": {
          '2': '702',
          '3': '10',
          '4': '131',
          '5': '9',
          '6': '74',
          '7': '8',
          '8': '613',
          '9': '4',
          '10': '191',
          '11': '19',
          '12': '755',
          '13': '13',
          '14': '1392',
          '15': '82',
          '16': '2264',
          '17': '133',
          '18': '2954',
          '19': '144',
          '20': '6483',
        },
        "userCount": 42243,
        "favoritesCount": 1542,
        startDate: '2004-04-07',
        endDate: '2005-09-28',
        "nextRelease": null,
        "popularityRank": 174,
        "ratingRank": 206,
        ageRating: 'R',
        ageRatingGuide: 'Mild Nudity',
        subtype: 'TV',
        status: 'finished',
        tba: '',
        "posterImage": {
          tiny:
            'https://media.kitsu.io/anime/poster_images/10/tiny.jpg?1495114402',
          small:
            'https://media.kitsu.io/anime/poster_images/10/small.jpg?1495114402',
          medium:
            'https://media.kitsu.io/anime/poster_images/10/medium.jpg?1495114402',
          large:
            'https://media.kitsu.io/anime/poster_images/10/large.jpg?1495114402',
          original:
            'https://media.kitsu.io/anime/poster_images/10/original.jpg?1495114402',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": null,
                height: null,
              },
              "small": {
                "width": null,
                height: null,
              },
              "medium": {
                "width": null,
                height: null,
              },
              "large": {
                "width": null,
                height: null,
              },
            },
          },
        },
        "coverImage": {
          tiny: 'https://media.kitsu.io/anime/cover_images/10/small.jpg',
          small: 'https://media.kitsu.io/anime/cover_images/10/small.jpg',
          large: 'https://media.kitsu.io/anime/cover_images/10/small.jpg',
          original: 'https://media.kitsu.io/anime/cover_images/10/original.jpg',
          "meta": {
            "dimensions": {
              "tiny": {
                "width": 840,
                height: 200,
              },
              "small": {
                "width": 1680,
                height: 400,
              },
              "large": {
                "width": 3360,
                height: 800,
              },
            },
          },
        },
        "episodeCount": 74,
        "episodeLength": 24,
        "totalLength": 1776,
        youtubeVideoId: '9aS-EgdAq6U',
        showType: 'TV',
        nsfw: false,
      },
      "relationships": {
        "genres": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/genres',
            related: 'https://kitsu.io/api/edge/anime/10/genres',
          },
        },
        "categories": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/categories',
            related: 'https://kitsu.io/api/edge/anime/10/categories',
          },
        },
        "castings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/castings',
            related: 'https://kitsu.io/api/edge/anime/10/castings',
          },
        },
        "installments": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/installments',
            related: 'https://kitsu.io/api/edge/anime/10/installments',
          },
        },
        "mappings": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/mappings',
            related: 'https://kitsu.io/api/edge/anime/10/mappings',
          },
        },
        "reviews": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/reviews',
            related: 'https://kitsu.io/api/edge/anime/10/reviews',
          },
        },
        "mediaRelationships": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/media-relationships',
            related: 'https://kitsu.io/api/edge/anime/10/media-relationships',
          },
        },
        "characters": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/characters',
            related: 'https://kitsu.io/api/edge/anime/10/characters',
          },
        },
        "staff": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/staff',
            related: 'https://kitsu.io/api/edge/anime/10/staff',
          },
        },
        "productions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/productions',
            related: 'https://kitsu.io/api/edge/anime/10/productions',
          },
        },
        "quotes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/quotes',
            related: 'https://kitsu.io/api/edge/anime/10/quotes',
          },
        },
        "episodes": {
          "links": {
            self: 'https://kitsu.io/api/edge/anime/10/relationships/episodes',
            related: 'https://kitsu.io/api/edge/anime/10/episodes',
          },
        },
        "streamingLinks": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/streaming-links',
            related: 'https://kitsu.io/api/edge/anime/10/streaming-links',
          },
        },
        "animeProductions": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/anime-productions',
            related: 'https://kitsu.io/api/edge/anime/10/anime-productions',
          },
        },
        "animeCharacters": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/anime-characters',
            related: 'https://kitsu.io/api/edge/anime/10/anime-characters',
          },
        },
        "animeStaff": {
          "links": {
            self:
              'https://kitsu.io/api/edge/anime/10/relationships/anime-staff',
            related: 'https://kitsu.io/api/edge/anime/10/anime-staff',
          },
        },
      },
    },
  ],
  "meta": {
    count: 15438,
  },
  "links": {
    first:
      'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0',
    next:
      'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=10',
    last:
      'https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=15428',
  },
}