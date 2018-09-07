import path from 'path';
import { savedObjects } from './saved_objects';

export function datasetSpecProvider() {
    return {
        id: 'custom-data-set',
        name: 'My custom dataset',
        description: 'Sample data set provided by a plugin',
        previewImagePath: '/plugins/kibana-sample-data-plugin/preview.png',
        overviewDashboard: '7adfa750-4c81-11e8-b3d7-01146121b73d',
        defaultIndex: 'd3d7af60-4c81-11e8-b3d7-01146121b73d',
        dataPath: path.join(__dirname, './sample_data.json.gz'),
        fields: {
          timestamp: {
            type: 'date'
          },
          dayOfWeek: {
            type: 'integer'
          },
          Carrier: {
            type: 'keyword'
          },
          FlightNum: {
            type: 'keyword'
          },
          Origin: {
            type: 'keyword'
          },
          OriginAirportID: {
            type: 'keyword'
          },
          OriginCityName: {
            type: 'keyword'
          },
          OriginRegion: {
            type: 'keyword'
          },
          OriginCountry: {
            type: 'keyword'
          },
          OriginLocation: {
            type: 'geo_point'
          },
          Dest: {
            type: 'keyword'
          },
          DestAirportID: {
            type: 'keyword'
          },
          DestCityName: {
            type: 'keyword'
          },
          DestRegion: {
            type: 'keyword'
          },
          DestCountry: {
            type: 'keyword'
          },
          DestLocation: {
            type: 'geo_point'
          },
          AvgTicketPrice: {
            type: 'float'
          },
          OriginWeather: {
            type: 'keyword'
          },
          DestWeather: {
            type: 'keyword'
          },
          Cancelled: {
            type: 'boolean'
          },
          DistanceMiles: {
            type: 'float'
          },
          DistanceKilometers: {
            type: 'float'
          },
          FlightDelayMin: {
            type: 'integer'
          },
          FlightDelay: {
            type: 'boolean'
          },
          FlightDelayType: {
            type: 'keyword'
          },
          FlightTimeMin: {
            type: 'float'
          },
          FlightTimeHour: {
            type: 'keyword'
          }
        },
        timeFields: ['timestamp'],
        currentTimeMarker: '2018-01-09T00:00:00',
        preserveDayOfWeekTimeOfDay: true,
        savedObjects: savedObjects,
      };
}