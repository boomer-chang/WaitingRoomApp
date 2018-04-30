import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  appConfig = {
    'office': 'Dallas',
    'videoCollections': [
        {
          'id': 'company',
          'name': 'Company',
          'image': 'https://media.glassdoor.com/l/68/90/fa/62/our-minneapolis-office-was-named-a-best-place-to-work-for-the-second.jpg',
          'description': '4500 Employees and Counting',
          'description2': 'Work Where You Live',
          'url': 'https://www.youtube.com/embed/?listType=playlist&list=PLJGH5QfLPPCRoySUXDDszEXp8-DrkAzCA'
        },
        {
          'id': 'culture',
          'name': 'Culture',
          'image': 'https://media.glassdoor.com/l/69/b5/bb/51/slalom-silicon-valley-bring-your-kids-to-work-day.jpg',
          'description': 'Build Your Career Live Your Career',
          'description2': 'Our People Are the Difference',
          'url': 'https://www.youtube.com/embed/?listType=playlist&list=PLJGH5QfLPPCRQ6b9mSp5pvGqocgSuz6JG'
        },
        {
          'id': 'clients',
          'name': 'Clients',
          'image': 'https://media.glassdoor.com/l/d1/42/b2/ba/winners-of-our-most-recent-ai-hackathon-with-our-ceo-brad-jackson.jpg',
          'description': 'Recent Work',
          'description2': 'Customer Stories',
          'url': 'https://www.youtube.com/embed/?listType=playlist&list=PLJGH5QfLPPCSOpdXyDjYMnSyxx06iSg-M'
        }
      ]
  };

  constructor() { }

  getOffice() {
    return this.appConfig.office;
  }

  getVideoCollections() {
    return this.appConfig.videoCollections;
  }

  getVideoCollection(id: string) {
    return this.appConfig.videoCollections.filter(i => i.id === id)[0];
  }

}
