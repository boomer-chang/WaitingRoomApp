import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  appConfig = {
    'office': 'Dallas',
    'videoPages': [
        {
          'id': 'company',
          'name': 'Company',
          'image': 'https://media.glassdoor.com/l/68/90/fa/62/our-minneapolis-office-was-named-a-best-place-to-work-for-the-second.jpg',
          'description': '4500 Employees and Counting',
          'description2': 'Work Where You Live',
          'videos': [
            {
              'title': 'Slalom Dallas Top 100 Places to Work 2016',
              'youtubeId': 'WqsC7f2nXxU'
            },
            {
              'title': 'Slalom is a Trailblazer',
              'youtubeId': 'OAE1YBp4o0k'
            },
            {
              'title': 'Slalom Consulting Difference',
              'youtubeId': 'xJpdK6U075k'
            }
          ]
        },
        {
          'id': 'culture',
          'name': 'Culture',
          'image': 'https://media.glassdoor.com/l/69/b5/bb/51/slalom-silicon-valley-bring-your-kids-to-work-day.jpg',
          'description': 'Build Your Career Live Your Career',
          'description2': 'Our People Are the Difference',
          'videos': [
            {
              'title': 'Core Values',
              'youtubeId': 'LQTKlAkX2u4'
            },
            {
              'title': 'Slalom Veterans',
              'youtubeId': 'HAW34EyxBKk'
            },
            {
              'title': 'Women at Slalom',
              'youtubeId': 'jZdXLw04nFA'
            }
          ]
        },
        {
          'id': 'clients',
          'name': 'Clients',
          'image': 'https://media.glassdoor.com/l/d1/42/b2/ba/winners-of-our-most-recent-ai-hackathon-with-our-ceo-brad-jackson.jpg',
          'description': 'Recent Work',
          'description2': 'Customer Stories',
          'videos': [
            {
              'title': 'Technology Enablement',
              'youtubeId': 'rQ3Ij6qDKPo'
            },
            {
              'title': 'Hyatt Hotels & Slalom Redefine Group Experience',
              'youtubeId': 'gHh_G4pNVik'
            },
            {
              'title': 'Salesforce',
              'youtubeId': 'OHRSVwa1Rxs'
            },
            {
              'title': 'AWS',
              'youtubeId': 'E9ufpzUwnQs'
            }
          ]
        }
      ]
  };

  constructor() { }

  getOffice() {
    return this.appConfig.office;
  }

  getVideoPages() {
    return this.appConfig.videoPages;
  }

  getVideoPage(id: string) {
    return this.appConfig.videoPages.filter(i => i.id === id)[0];
  }

}
